<template>
  <v-container
    max-width="1400"
    height="100%"
  >
    <div
      class="bg-white rounded-lg mx-10"
      style="min-height: 85vh"
    >
      <template v-if="isAuthenticated">
        <v-row
          class="py-4 py-sm-8 px-1 px-sm-4 mt-2 mt-sm-6 mx-0 mx-sm-4 mx-md-10 mb-4 overflow-visible"
        >
          <!-- 頁面標題區 -->
          <v-col
            cols="12"
            class="ps-3 d-flex justify-space-between align-center"
          >
            <div class="d-flex align-center">
              <h3>所有公告</h3>
              <v-btn
                size="x-small"
                color="grey-darken-1"
                class="ms-4"
                elevation="1"
                @click="showGuide = true"
              >
                使用說明
              </v-btn>
            </div>
            <v-btn
              v-if="canCreateAnnouncement"
              prepend-icon="mdi-plus"
              color="blue-grey-darken-2"
              variant="outlined"
              @click="openDialog(null)"
            >
              新增公告
            </v-btn>
          </v-col>

          <!-- 分類標籤和搜尋區 -->
          <v-col cols="12">
            <v-row
              align="center"
              class="py-4"
            >
              <v-col
                cols="12"
                md="8"
              >
                <v-tabs
                  v-model="currentTab"
                  color="blue-grey-darken-2"
                  align-tabs="start"
                >
                  <v-tab value="all">
                    全部
                  </v-tab>
                  <v-tab
                    v-for="type in announcementTypes"
                    :key="type"
                    :value="type"
                  >
                    {{ type }}
                  </v-tab>
                </v-tabs>
              </v-col>
              <v-col
                cols="12"
                md="4"
              >
                <v-text-field
                  v-model="searchText"
                  label="搜尋公告"
                  append-inner-icon="mdi-magnify"
                  density="comfortable"
                  variant="outlined"
                  hide-details
                />
              </v-col>
            </v-row>
          </v-col>

          <!-- 公告列表區域 -->
          <v-col
            cols="12"
          >
            <v-window
              v-model="currentTab"
              class="overflow-visible"
            >
              <!-- 全部公告 -->
              <v-window-item value="all">
                <!-- 載入中顯示 -->
                <v-row
                  v-if="loading"
                  justify="center"
                  align="center"
                  style="height: 200px;"
                >
                  <v-col
                    cols="12"
                    class="text-center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="primary"
                      size="64"
                    />
                  </v-col>
                </v-row>

                <!-- 公告卡片列表 -->
                <template v-else>
                  <v-row v-if="filteredAnnouncements.length > 0">
                    <v-col
                      v-for="announcement in filteredAnnouncements"
                      :key="announcement._id"
                      cols="12"
                      sm="6"
                      class="mb-4"
                    >
                      <AnnouncementCard v-bind="announcement" />
                    </v-col>
                  </v-row>

                  <!-- 無資料顯示 -->
                  <v-row v-else>
                    <v-col
                      cols="12"
                      class="text-center"
                    >
                      <p>沒有找到相關公告</p>
                    </v-col>
                  </v-row>

                  <!-- 分頁控制 -->
                  <v-row v-if="totalPages > 1">
                    <v-col cols="12">
                      <v-pagination
                        v-model="currentPage"
                        :length="totalPages"
                        rounded="circle"
                        density="comfortable"
                        :total-visible="7"
                        color="blue-grey"
                        @update:model-value="onPageChange"
                      />
                    </v-col>
                  </v-row>
                </template>
              </v-window-item>

              <!-- 分類公告 -->
              <v-window-item
                v-for="type in announcementTypes"
                :key="type"
                :value="type"
              >
              <!-- 使用相同的卡片顯示邏輯 -->
              </v-window-item>
            </v-window>
          </v-col>
        </v-row>

        <!-- 新增/編輯公告對話框 -->
        <v-dialog
          v-model="dialog.show"
          persistent
          max-width="900px"
          height="100%"
        >
          <v-card class="pa-4 h-100">
            <v-card-title class="text-h5 pb-4">
              {{ dialog.id ? '編輯公告' : '新增公告' }}
            </v-card-title>
            <v-card-text>
              <v-form
                ref="form"
                v-model="formValid"
                @submit.prevent="submitAnnouncement"
              >
                <v-row>
                  <v-col
                    cols="12"
                    sm="8"
                  >
                    <v-text-field
                      v-model="formData.title"
                      label="公告標題"
                      :rules="titleRules"
                      required
                    />
                  </v-col>
                  <v-col
                    cols="12"
                    sm="4"
                  >
                    <v-select
                      v-model="formData.type"
                      :items="announcementTypes"
                      label="公告類型"
                      required
                    />
                  </v-col>
                  <v-col cols="12">
                    <div
                      class="text-subtitle-1 mb-2"
                    >
                      公告內容
                    </div>
                    <QuillEditor
                      v-model:content="formData.content"
                      style="min-height: 640px;"
                      content-type="html"
                      toolbar="full"
                      theme="snow"
                      :options="{
                        modules: {
                          toolbar: [
                            ['bold', 'italic', 'underline', 'strike'],
                            ['blockquote', 'code-block'],
                            [{ 'header': 1 }, { 'header': 2 }],
                            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                            [{ 'script': 'sub'}, { 'script': 'super' }],
                            [{ 'indent': '-1'}, { 'indent': '+1' }],
                            [{ 'direction': 'rtl' }],
                            [{ 'size': ['small', false, 'large', 'huge'] }],
                            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                            [{ 'color': [] }, { 'background': [] }],
                            [{ 'font': [] }],
                            [{ 'align': [] }],
                            ['clean'],
                            ['link', 'image']
                          ]
                        }
                      }"
                    />
                  </v-col>
                  <v-col
                    cols="12"
                    class="px-9"
                  >
                    <v-file-input
                      v-model="formData.attachments"
                      label="附件上傳"
                      multiple
                      show-size
                      counter
                      variant="underlined"
                      :rules="attachmentRules"
                      accept=".jpg,.jpeg,.png,.gif,.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.zip,.rar"
                    />
                  </v-col>
                  <v-col cols="12">
                    <v-checkbox
                      v-model="showExpiryDatePicker"
                      label="設定下架時間"
                    />
                    <v-date-input
                      v-if="showExpiryDatePicker"
                      v-model="formData.expiryDate"
                      label="自動下架時間"
                      :min="tomorrow"
                      variant="outlined"
                      density="comfortable"
                      clearable
                      :ok-text="'確認'"
                      :cancel-text="'取消'"
                      @click:clear="formData.expiryDate = null"
                    />
                  </v-col>
                </v-row>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn
                color="grey"
                variant="text"
                @click="closeDialog"
              >
                取消
              </v-btn>
              <v-btn
                color="primary"
                :loading="submitting"
                :disabled="!formValid || submitting"
                @click="submitAnnouncement"
              >
                {{ dialog.id ? '更新' : '發布' }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <!-- 使用說明對話框 -->
        <v-dialog
          v-model="showGuide"
          max-width="600px"
        >
          <v-card class="pa-4">
            <v-card-title class="text-h5">
              公告系統使用說明
            </v-card-title>
            <v-card-text class="pt-4">
              <v-list>
                <v-list-item
                  v-for="(item, i) in guideItems"
                  :key="i"
                  :prepend-icon="item.icon"
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                  <v-list-item-subtitle class="mt-1">
                    {{ item.content }}
                  </v-list-item-subtitle>
                </v-list-item>
              </v-list>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn
                color="primary"
                variant="text"
                @click="showGuide = false"
              >
                關閉
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <!-- 確認刪除對話框 -->
        <v-dialog
          v-model="confirmDialog.show"
          max-width="400px"
        >
          <v-card>
            <v-card-title class="text-h5">
              確認刪除
            </v-card-title>
            <v-card-text>
              確定要刪除此公告嗎？此操作無法復原。
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn
                color="grey"
                variant="text"
                @click="confirmDialog.show = false"
              >
                取消
              </v-btn>
              <v-btn
                color="error"
                variant="text"
                @click="deleteAnnouncement"
              >
                確認刪除
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </template>
      <div
        v-else
        class="d-flex justify-center align-center py-12"
      >
        <v-progress-circular
          indeterminate
          color="primary"
        />
      </div>
    </div>
  </v-container>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useUserStore } from '@/stores/user'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import { useApi } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { storeToRefs } from 'pinia'
import UserRole from '@/enums/UserRole'
import { definePage } from 'vue-router/auto'
import AnnouncementCard from '@/components/AnnouncementCard.vue'

definePage({
  meta: {
    title: '所有公告 | ysphere',
    login: true
  }
})

const userStore = useUserStore()
const { token, role } = storeToRefs(userStore)
const { apiAuth } = useApi()
const createSnackbar = useSnackbar()

// 證使是登入
const isAuthenticated = computed(() => token.value?.length > 0)

// 資料狀態
const loading = ref(false)
const announcements = ref([])
const currentTab = ref('all')
const searchText = ref('')
const currentPage = ref(1)
const itemsPerPage = ref(12)
const totalItems = ref(0)
const showGuide = ref(false)

// 對話框狀態
const dialog = ref({
  show: false,
  id: null
})
const confirmDialog = ref({
  show: false,
  announcement: null
})
const showExpiryDatePicker = ref(false)

// 表單相關
const form = ref(null)
const formValid = ref(false)
const submitting = ref(false)
const formData = ref({
  title: '',
  content: '',
  type: '一般',
  attachments: [],
  expiryDate: null
})

// 驗證規則
const titleRules = [
  v => !!v || '請輸入標題',
  v => (v && v.length <= 100) || '標題不能超過100個字'
]

const attachmentRules = [
  files => !files || !files.length || files.length <= 10 || '最多只能上傳10個檔案',
  files => !files || !files.some(file => file.size > 10 * 1024 * 1024) || '檔案大小不能超過10MB'
]

// 公告類型
const announcementTypes = ['置頂', '重要', '活動', '系統', '一般']

// 明天的日期（用於日期選擇器的最值）
const tomorrow = computed(() => {
  const date = new Date()
  date.setDate(date.getDate() + 1)
  return date.toISOString().split('T')[0]
})

// 權限檢查
const canCreateAnnouncement = computed(() => {
  const allowedRoles = [UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.HR, UserRole.MANAGER] // 2, 1, 3, 4
  return role.value && allowedRoles.includes(Number(role.value))
})

// // 類型顏色映射
// const typeColors = {
//   置頂: 'red',
//   重要: 'orange',
//   活動: 'green',
//   系統: 'blue',
//   一般: 'grey'
// }

// 格式化日期
// const formatDate = (date) => {
//   return new Date(date).toLocaleString('zh-TW', {
//     year: 'numeric',
//     month: '2-digit',
//     day: '2-digit',
//     hour: '2-digit',
//     minute: '2-digit'
//   })
// }

// 計算屬性
const totalPages = computed(() => Math.ceil(totalItems.value / itemsPerPage.value))

const filteredAnnouncements = computed(() => {
  let filtered = announcements.value || []
  if (searchText.value) {
    const search = searchText.value.toLowerCase()
    filtered = filtered.filter(a =>
      a.title.toLowerCase().includes(search) ||
      a.content.toLowerCase().includes(search)
    )
  }
  return filtered
})

// 方法

const fetchAnnouncements = async () => {
  if (!isAuthenticated.value) return

  loading.value = true
  try {
    const { data } = await apiAuth.get('/announcement/all', {
      params: {
        page: currentPage.value,
        limit: itemsPerPage.value,
        search: searchText.value,
        type: currentTab.value === 'all' ? undefined : currentTab.value
      }
    })

    if (data.success) {
      if (data.result && typeof data.result === 'object') {
        announcements.value = data.result.data || []
        totalItems.value = data.result.total || 0
      }
    }
  } catch (error) {
    console.error('獲取公告失敗:', error)
    createSnackbar({
      text: error?.response?.data?.message || '獲取公告失敗',
      snackbarProps: { color: 'error' }
    })
  } finally {
    loading.value = false
  }
}

const openDialog = (announcement = null) => {
  dialog.value.id = announcement?._id || null
  formData.value = announcement
    ? {
        title: announcement.title,
        content: announcement.content,
        type: announcement.type,
        attachments: [],
        expiryDate: announcement.expiryDate
      }
    : {
        title: '',
        content: '',
        type: '一般',
        attachments: [],
        expiryDate: null
      }
  showExpiryDatePicker.value = !!announcement?.expiryDate
  dialog.value.show = true
}

const closeDialog = () => {
  dialog.value.show = false
  dialog.value.id = null
  formData.value = {
    title: '',
    content: '',
    type: '一般',
    attachments: [],
    expiryDate: null
  }
  showExpiryDatePicker.value = false
  if (form.value) {
    form.value.reset()
  }
}

const resetForm = () => {
  formData.value = {
    title: '',
    content: '',
    type: '一般',
    attachments: [],
    expiryDate: null
  }
  showExpiryDatePicker.value = false
  if (form.value) {
    form.value.reset()
  }
}

const submitAnnouncement = async () => {
  if (!formValid.value) return
  submitting.value = true

  try {
    const { data } = dialog.value.id
      ? await apiAuth.patch(`/announcement/${dialog.value.id}`, formData.value)
      : await apiAuth.post('/announcement', formData.value)

    if (data.success) {
      createSnackbar({
        text: `公告${dialog.value.id ? '編輯' : '新增'}成功`,
        snackbarProps: { color: 'success' }
      })
      dialog.value.show = false
      resetForm()
      currentPage.value = 1
      await fetchAnnouncements()
    }
  } catch (error) {
    console.error('提交公告失敗:', error)
    createSnackbar({
      text: error?.response?.data?.message || '提交失敗',
      snackbarProps: { color: 'error' }
    })
  } finally {
    submitting.value = false
  }
}

const deleteAnnouncement = async () => {
  try {
    const { data } = await apiAuth.delete(`/announcement/${confirmDialog.value.announcement._id}`)
    if (data.success) {
      createSnackbar({
        text: '公告刪除成功',
        snackbarProps: { color: 'success' }
      })
      fetchAnnouncements()
    }
  } catch (error) {
    console.error('刪除公告失敗:', error)
    createSnackbar({
      text: error?.response?.data?.message || '刪除失敗',
      snackbarProps: { color: 'error' }
    })
  } finally {
    confirmDialog.value.show = false
  }
}

// 使用說內容
const guideItems = [
  {
    icon: 'mdi-format-list-text',
    title: '公告分類',
    content: '公告分為置頂、重要、活動、系統、一般五種類型。置頂公告會顯示在最上方。'
  },
  {
    icon: 'mdi-text-search',
    title: '搜尋功能',
    content: '可以透過關鍵字搜尋公告標題和內容。'
  },
  {
    icon: 'mdi-file-upload',
    title: '附件上傳',
    content: '支援圖片、文件等多種格式，單個檔案大小不超過10MB。'
  },
  {
    icon: 'mdi-clock-outline',
    title: '自動下架',
    content: '可以設定自動下架時間，到期後公告會自動下架。'
  }
]

// 監聽變化
watch([currentTab, currentPage, searchText], () => {
  if (isAuthenticated.value) {
    currentPage.value = 1
    fetchAnnouncements()
  }
}, { immediate: true })

onMounted(() => {
  if (isAuthenticated.value) {
    fetchAnnouncements()
  }
})

// 新增頁面變化處理函數
const onPageChange = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  fetchAnnouncements()
}
</script>

<style lang="scss" scoped>
.ql-editor {
  min-height: 200px;
}

.announcement-content img {
  max-width: 100%;
  height: auto;
  margin: 16px 0;
}

.v-data-table :deep(th) {
  background-color: #455a64;
  color: white;
}

.v-data-table :deep(tbody tr) {
  height: 56px;
}

.v-data-table :deep(tbody tr:hover) {
  cursor: pointer;

}
</style>
