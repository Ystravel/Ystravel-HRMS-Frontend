<template>
  <v-container
    max-width="2200"
  >
    <v-row>
      <v-col
        v-if="isLgmUp"
        md="3"
      >
        <v-row class="elevation-4 rounded-lg pt-8 pb-10 px-1 px-sm-10 mt-2 mt-sm-6 mx-10 bg-white">
          <v-card
            width="100%"
            elevation="0"
          >
            <v-row class="text-center">
              <v-col cols="12">
                <v-avatar
                  size="100"
                >
                  <v-skeleton-loader
                    v-if="!isProfileAvatarLoaded"
                    width="100"
                    height="100"
                  />
                  <v-img
                    v-show="isProfileAvatarLoaded"
                    :src="user.avatar"
                    @load="handleProfileAvatarLoad"
                  />
                </v-avatar>
              </v-col>
              <v-col>
                <div
                  class="name mb-3 opacity-90"
                >
                  {{ user.name }}
                </div>
                <div
                  class="text-subtitle-2 mb-4 opacity-70"
                >
                  <span
                    v-tooltip:end="'員工編號'"
                  >{{ user.userId }}</span>
                </div>
                <div
                  style="font-size: 15px; font-weight: 600;"
                  class="opacity-90 mb-12"
                >
                  {{ user.jobTitle }}
                </div>
                <FileUploadButton />
              </v-col>
            </v-row>
          </v-card>
        </v-row>
      </v-col>
      <v-col
        xl="9"
      >
        <v-row class="elevation-4 rounded-lg pt-8 pb-6 px-1 px-sm-10 mt-2 mt-sm-6 mx-0 mx-sm-4 ms-xl-0 me-xl-10 mb-4 bg-white">
          <v-col
            cols="12"
            class="d-flex justify-space-between"
          >
            <h3>
              個人資料管理&nbsp;&nbsp;&nbsp;<span
                v-if="mdAndUp"
                class="text-subtitle-2 opacity-80 font-weight-regular"
              ><span class="text-red-darken-2">* </span>若有需要修改 請聯絡人資 ( 密碼可自行修改 )</span>
            </h3>
            <div>
              <v-row>
                <v-col>
                  <v-btn
                    v-if="mdAndUp"
                    color="blue-grey-darken-2"
                    prepend-icon="mdi-pencil"
                    variant="outlined"
                    height="36"
                    @click="showPasswordDialog = true"
                  >
                    修改密碼
                  </v-btn>
                </v-col>
                <v-col
                  v-if="!mdAndUp"
                >
                  <v-btn
                    color="blue-grey-darken-2"
                    prepend-icon="mdi-pencil"
                    variant="outlined"
                    size="small"
                    height="32"
                    @click="showPasswordDialog = true"
                  >
                    修改密碼
                  </v-btn>
                </v-col>
                <v-col
                  v-if="!isLgmUp"
                  class="d-flex align-center"
                >
                  <FileUploadButton />
                  <v-btn
                    v-tooltip:top="'查看所有系統帳號密碼'"
                    icon=""
                    color="blue-grey-darken-2"
                    size="24"
                    elevation="0"
                    style="margin-top: 1px;"
                    class="ms-4"
                    @click="showCowellDialog = true"
                  >
                    <v-icon
                      icon="mdi-eye-outline"
                      size="14"
                    />
                  </v-btn>
                </v-col>
                <v-col
                  v-if="isLgmUp"
                  class="d-flex align-center"
                >
                  <v-btn
                    v-tooltip:top="'查看所有系統帳號密碼'"
                    icon=""
                    color="blue-grey-darken-2"
                    size="24"
                    elevation="0"
                    style="margin-top: 1px;"
                    @click="showCowellDialog = true"
                  >
                    <v-icon
                      icon="mdi-eye-outline"
                      size="14"
                    />
                  </v-btn>
                </v-col>
              </v-row>
            </div>
          </v-col>
          <v-col
            v-if="!mdAndUp"
            cols="12"
          >
            <span
              class="text-subtitle-2 opacity-80 font-weight-regular"
            ><span class="text-red-darken-2">* </span>若有需要修改 請聯絡人資 ( 密碼可自行修改 )</span>
          </v-col>
          <v-col>
            <v-divider />
          </v-col>
          <v-col
            cols="12"
            class="mt-3 mb-6 text-center text-blue-grey-darken-2"
          >
            <div class="info-title">
              《 基本資料 》
            </div>
          </v-col>
          <v-col cols="12">
            <v-row
              class="text-blue-grey-darken-3"
            >
              <v-col
                class="py-0 mb-6"
                cols="12"
                sm="6"
                md="4"
              >
                <v-row>
                  <v-col
                    cols="3"
                    sm="12"
                    class="align-self-center py-0"
                  >
                    姓名 :
                  </v-col>
                  <v-col
                    cols="9"
                    sm="12"
                  >
                    <v-text-field
                      variant="outlined"
                      density="compact"
                      hide-details
                      readonly
                    >
                      {{ user.name }}
                    </v-text-field>
                  </v-col>
                </v-row>
              </v-col>
              <v-col
                class="py-0 mb-6"
                cols="12"
                sm="6"
                md="4"
              >
                <v-row>
                  <v-col
                    cols="3"
                    sm="12"
                    class="align-self-center py-0"
                  >
                    英文名 :
                  </v-col>
                  <v-col
                    cols="9"
                    sm="12"
                  >
                    <v-text-field
                      variant="outlined"
                      density="compact"
                      hide-details
                      readonly
                    >
                      {{ user.englishName }}
                    </v-text-field>
                  </v-col>
                </v-row>
              </v-col>
              <v-col
                class="py-0 mb-6"
                cols="12"
                sm="6"
                md="4"
              >
                <v-row>
                  <v-col
                    cols="3"
                    sm="12"
                    class="align-self-center py-0"
                  >
                    生日 :
                  </v-col>
                  <v-col
                    cols="9"
                    sm="12"
                  >
                    <v-text-field
                      variant="outlined"
                      density="compact"
                      hide-details
                      readonly
                    >
                      {{ formatToDate(user.birthDate) }}
                    </v-text-field>
                  </v-col>
                </v-row>
              </v-col>

              <v-col
                class="py-0 mb-6"
                cols="12"
                sm="6"
                md="4"
              >
                <v-row>
                  <v-col
                    cols="3"
                    sm="12"
                    class="align-self-center py-0"
                  >
                    性別 :
                  </v-col>
                  <v-col
                    cols="9"
                    sm="12"
                  >
                    <v-text-field
                      variant="outlined"
                      density="compact"
                      hide-details
                      readonly
                    >
                      {{ user.gender }}
                    </v-text-field>
                  </v-col>
                </v-row>
              </v-col>
              <v-col
                class="py-0 mb-6"
                cols="12"
                sm="6"
                md="4"
              >
                <v-row>
                  <v-col
                    cols="3"
                    sm="12"
                    class="align-self-center py-0"
                  >
                    手機號碼 :
                  </v-col>
                  <v-col
                    cols="9"
                    sm="12"
                  >
                    <v-text-field
                      variant="outlined"
                      density="compact"
                      hide-details
                      readonly
                    >
                      {{ user.cellphone }}
                    </v-text-field>
                  </v-col>
                </v-row>
              </v-col>
              <v-col
                class="py-0 mb-6"
                cols="12"
                md="6"
                lg="4"
              >
                <v-row>
                  <v-col
                    cols="3"
                    sm="12"
                    class="align-self-center py-0"
                  >
                    戶籍地址 :
                  </v-col>
                  <v-col
                    cols="9"
                    sm="12"
                  >
                    <v-text-field
                      variant="outlined"
                      density="compact"
                      hide-details
                      readonly
                      class="address-style"
                    >
                      {{ user.permanentAddress }}
                    </v-text-field>
                  </v-col>
                </v-row>
              </v-col>
              <v-col
                class="py-0 mb-6"
                cols="12"
                md="6"
                lg="4"
              >
                <v-row>
                  <v-col
                    cols="3"
                    sm="12"
                    class="align-self-center py-0"
                  >
                    聯絡地址 :
                  </v-col>
                  <v-col
                    cols="9"
                    sm="12"
                  >
                    <v-text-field
                      variant="outlined"
                      density="compact"
                      hide-details
                      readonly
                      class="address-style"
                    >
                      {{ user.contactAddress }}
                    </v-text-field>
                  </v-col>
                </v-row>
              </v-col>
              <v-col
                class="py-0 mb-6"
                cols="12"
                sm="6"
                md="4"
              >
                <v-row>
                  <v-col
                    cols="3"
                    sm="12"
                    class="align-self-center py-0 pe-0"
                  >
                    緊急聯絡人 :
                  </v-col>
                  <v-col
                    cols="9"
                    sm="12"
                  >
                    <v-text-field
                      variant="outlined"
                      density="compact"
                      hide-details
                      readonly
                    >
                      {{ user.emergencyName }}
                    </v-text-field>
                  </v-col>
                </v-row>
              </v-col>
              <v-col
                class="py-0 mb-6"
                cols="12"
                sm="6"
                md="4"
              >
                <v-row>
                  <v-col
                    cols="3"
                    sm="12"
                    class="align-self-center py-0 "
                  >
                    緊急連絡人電話 :
                  </v-col>
                  <v-col
                    cols="9"
                    sm="12"
                  >
                    <v-text-field
                      variant="outlined"
                      density="compact"
                      hide-details
                      readonly
                    >
                      {{ user.emergencyCellphone }}
                    </v-text-field>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
            <v-col
              cols="12"
              class="mt-3 mb-6 text-center text-blue-grey-darken-2"
            >
              <div class="info-title">
                《 任職資料 》
              </div>
            </v-col>
            <v-col cols="12" />
            <v-row
              class="text-blue-grey-darken-3"
            >
              <v-col
                class="py-0 mb-6"
                cols="12"
                sm="6"
                md="4"
              >
                <v-row>
                  <v-col
                    cols="3"
                    sm="12"
                    class="align-self-center py-0"
                  >
                    公司 Email :
                  </v-col>
                  <v-col
                    cols="9"
                    sm="12"
                  >
                    <v-text-field
                      variant="outlined"
                      density="compact"
                      hide-details
                      readonly
                    >
                      {{ user.email }}
                    </v-text-field>
                  </v-col>
                </v-row>
              </v-col>
              <v-col
                class="py-0 mb-6"
                cols="12"
                sm="6"
                md="4"
              >
                <v-row>
                  <v-col
                    cols="3"
                    sm="12"
                    class="align-self-center py-0"
                  >
                    所屬公司 :
                  </v-col>
                  <v-col
                    cols="9"
                    sm="12"
                  >
                    <v-text-field
                      variant="outlined"
                      density="compact"
                      hide-details
                      readonly
                      :value="user.company?.name || ''"
                    />
                  </v-col>
                </v-row>
              </v-col>
              <v-col
                class="py-0 mb-6"
                cols="12"
                sm="6"
                md="4"
              >
                <v-row>
                  <v-col
                    cols="3"
                    sm="12"
                    class="align-self-center py-0"
                  >
                    部門 :
                  </v-col>
                  <v-col
                    cols="9"
                    sm="12"
                  >
                    <v-text-field
                      variant="outlined"
                      density="compact"
                      hide-details
                      readonly
                      :value="user.department?.name || ''"
                    />
                  </v-col>
                </v-row>
              </v-col>
              <v-col
                class="py-0 mb-6"
                cols="12"
                sm="6"
                md="4"
              >
                <v-row>
                  <v-col
                    cols="3"
                    sm="12"
                    class="align-self-center py-0"
                  >
                    入職日期 :
                  </v-col>
                  <v-col
                    cols="9"
                    sm="12"
                  >
                    <v-text-field
                      variant="outlined"
                      density="compact"
                      hide-details
                      readonly
                    >
                      {{ formatToDate(user.hireDate) }}
                    </v-text-field>
                  </v-col>
                </v-row>
              </v-col>

              <v-col
                class="py-0 mb-6"
                cols="12"
                sm="6"
                md="4"
              >
                <v-row>
                  <v-col
                    cols="3"
                    sm="12"
                    class="align-self-center py-0"
                  >
                    分機號碼 :
                  </v-col>
                  <v-col
                    cols="9"
                    sm="12"
                  >
                    <v-text-field
                      variant="outlined"
                      density="compact"
                      hide-details
                      readonly
                    >
                      {{ user.extNumber }}
                    </v-text-field>
                  </v-col>
                </v-row>
              </v-col>
              <v-col
                class="py-0 mb-6"
                cols="12"
                sm="6"
                md="4"
              >
                <v-row>
                  <v-col
                    cols="3"
                    sm="12"
                    class="align-self-center py-0"
                  >
                    列印編號 :
                  </v-col>
                  <v-col
                    cols="9"
                    sm="12"
                  >
                    <v-text-field
                      variant="outlined"
                      density="compact"
                      hide-details
                      readonly
                    >
                      {{ user.printNumber }}
                    </v-text-field>
                  </v-col>
                </v-row>
              </v-col>

              <v-col
                cols="12"
                class="mt-3 mb-8 mb-sm-10 text-center text-blue-grey-darken-2"
              >
                <div
                  v-if="user.cowellAccount || user.YSRCAccount || user.YS168Account"
                  class="info-title"
                >
                  《 系統資料 》
                </div>
              </v-col>

              <v-col
                v-if="user.cowellAccount"
                class="py-0 mb-6"
                cols="12"
                sm="6"
                md="4"
              >
                <v-row>
                  <v-col
                    cols="3"
                    sm="12"
                    class="align-self-center py-0"
                  >
                    科威帳號 :
                  </v-col>
                  <v-col
                    cols="9"
                    sm="12"
                  >
                    <v-text-field
                      variant="outlined"
                      density="compact"
                      hide-details
                      readonly
                      :value="isSystemRevealed ? user.cowellAccount : '******'"
                    />
                  </v-col>
                </v-row>
              </v-col>
              <v-col
                v-if="user.cowellAccount"
                class="py-0 mb-6"
                cols="12"
                sm="6"
                md="4"
              >
                <v-row>
                  <v-col
                    cols="3"
                    sm="12"
                    class="align-self-center py-0"
                  >
                    科威密碼 :
                  </v-col>
                  <v-col
                    cols="9"
                    sm="12"
                  >
                    <v-text-field
                      variant="outlined"
                      density="compact"
                      hide-details
                      readonly
                      :value="isSystemRevealed ? user.cowellPassword : '******'"
                    />
                  </v-col>
                </v-row>
              </v-col>
              <v-col
                v-if="user.YSRCAccount"
                class="py-0 mb-6"
                cols="12"
                sm="6"
                md="4"
              >
                <v-row>
                  <v-col
                    cols="3"
                    sm="12"
                    class="align-self-center py-0"
                  >
                    YSRC帳號 :
                  </v-col>
                  <v-col
                    cols="9"
                    sm="12"
                  >
                    <v-text-field
                      variant="outlined"
                      density="compact"
                      hide-details
                      readonly
                      :value="isSystemRevealed ? user.YSRCAccount : '******'"
                    />
                  </v-col>
                </v-row>
              </v-col>
              <v-col
                v-if="user.YSRCAccount"
                class="py-0 mb-6"
                cols="12"
                sm="6"
                md="4"
              >
                <v-row>
                  <v-col
                    cols="3"
                    sm="12"
                    class="align-self-center py-0"
                  >
                    YSRC密碼 :
                  </v-col>
                  <v-col
                    cols="9"
                    sm="12"
                  >
                    <v-text-field
                      variant="outlined"
                      density="compact"
                      hide-details
                      readonly
                      :value="isSystemRevealed ? user.YSRCPassword : '******'"
                    />
                  </v-col>
                </v-row>
              </v-col>
              <v-col
                v-if="user.YS168Account"
                class="py-0 mb-6"
                cols="12"
                sm="6"
                md="4"
              >
                <v-row>
                  <v-col
                    cols="3"
                    sm="12"
                    class="align-self-center py-0"
                  >
                    YS168帳號 :
                  </v-col>
                  <v-col
                    cols="9"
                    sm="12"
                  >
                    <v-text-field
                      variant="outlined"
                      density="compact"
                      hide-details
                      readonly
                      :value="isSystemRevealed ? user.YS168Account : '******'"
                    />
                  </v-col>
                </v-row>
              </v-col>
              <v-col
                v-if="user.YS168Account"
                class="py-0 mb-6"
                cols="12"
                sm="6"
                md="4"
              >
                <v-row>
                  <v-col
                    cols="3"
                    sm="12"
                    class="align-self-center py-0"
                  >
                    YS168密碼 :
                  </v-col>
                  <v-col
                    cols="9"
                    sm="12"
                  >
                    <v-text-field
                      variant="outlined"
                      density="compact"
                      hide-details
                      readonly
                      :value="isSystemRevealed ? user.YS168Password : '******'"
                    />
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
  <!-- 修改密碼對話框 -->
  <v-dialog
    v-model="showPasswordDialog"
    max-width="360"
  >
    <v-card>
      <div class="card-title ps-6 py-6">
        修改密碼
      </div>
      <v-card-text class="pb-0">
        <v-form @submit.prevent="handlePasswordChange">
          <v-text-field
            v-model="passwordForm.currentPassword"
            :error-messages="currentPasswordError"
            :type="showCurrentPassword ? 'text' : 'password'"
            :append-inner-icon="showCurrentPassword ? 'mdi-eye-off' : 'mdi-eye'"
            label="當前密碼"
            variant="outlined"
            density="compact"
            class="mb-4"
            @update:model-value="currentPasswordError = ''"
            @click:append-inner="showCurrentPassword = !showCurrentPassword"
          />
          <v-text-field
            v-model="passwordForm.newPassword"
            :error-messages="newPasswordError"
            :type="showNewPassword ? 'text' : 'password'"
            :append-inner-icon="showNewPassword ? 'mdi-eye-off' : 'mdi-eye'"
            label="新密碼"
            variant="outlined"
            density="compact"
            class="mb-4"
            @update:model-value="newPasswordError = ''"
            @click:append-inner="showNewPassword = !showNewPassword"
          />
          <v-text-field
            v-model="passwordForm.confirmPassword"
            :error-messages="confirmPasswordError"
            :type="showConfirmPassword ? 'text' : 'password'"
            :append-inner-icon="showConfirmPassword ? 'mdi-eye-off' : 'mdi-eye'"
            label="確認新密碼"
            variant="outlined"
            density="compact"
            class="mb-4"
            @update:model-value="confirmPasswordError = ''"
            @click:append-inner="showConfirmPassword = !showConfirmPassword"
          />
        </v-form>
      </v-card-text>
      <v-card-actions class="me-4 mb-3">
        <v-spacer />
        <v-btn
          color="grey-darken-1"
          variant="outlined"
          :size="buttonSize"
          @click="closePasswordDialog"
        >
          取消
        </v-btn>
        <v-btn
          color="red-darken-1"
          variant="outlined"
          :size="buttonSize"
          :loading="isChangingPassword"
          @click="handlePasswordChange"
        >
          確認修改
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <!-- 查看所有系統帳號與密碼對話框 -->
  <v-dialog
    v-model="showCowellDialog"
    max-width="360"
  >
    <v-card>
      <div class="card-title ps-6 pt-6 pb-4">
        輸入密碼
      </div>
      <div
        class="ps-6 pb-2"
        style="font-size: 15px;"
      >
        查看所有系統帳號與密碼
      </div>
      <v-card-text class="pb-0">
        <v-form @submit.prevent="verifyCowellPassword">
          <v-text-field
            v-model="cowellPassword"
            :type="showCowellPassword ? 'text' : 'password'"
            :append-inner-icon="showCowellPassword ? 'mdi-eye-off' : 'mdi-eye'"
            :error-messages="passwordError"
            label="輸入密碼"
            variant="outlined"
            density="compact"
            class="mb-4"
            @click:append-inner="showCowellPassword = !showCowellPassword"
            @update:model-value="passwordError = ''"
            @keyup.enter="verifyCowellPassword"
          />
        </v-form>
      </v-card-text>
      <v-card-actions class="me-4 mb-3">
        <v-spacer />
        <v-btn
          color="grey-darken-1"
          variant="outlined"
          size="small"
          @click="closeCowellDialog"
        >
          取消
        </v-btn>
        <v-btn
          color="teal-darken-1"
          variant="outlined"
          size="small"
          :loading="isVerifyingCowell"
          @click="verifyCowellPassword"
        >
          確認
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { definePage } from 'vue-router/auto'
import { computed, ref, watch } from 'vue'
import { useUserStore } from '@/stores/user'
import { useSnackbar } from 'vuetify-use-dialog'
import { useDisplay } from 'vuetify'
import FileUploadButton from '@/components/FileUploadButton.vue'

const { mdAndUp, width, smAndUp } = useDisplay()
const isLgmUp = computed(() => width.value >= 1500)

const buttonSize = computed(() => {
  return smAndUp.value ? 'default' : 'small'
})

definePage({
  meta: {
    title: '個人資料管理 | ysphere',
    login: true
  }
})

const showCowellDialog = ref(false)
const cowellPassword = ref('')
const cowellPasswordError = ref('')
const isSystemRevealed = ref(false)
const isVerifyingCowell = ref(false)

const showCurrentPassword = ref(false)
const showNewPassword = ref(false)
const showConfirmPassword = ref(false)
const showCowellPassword = ref(false)

const showPasswordDialog = ref(false)
const isChangingPassword = ref(false)

const passwordForm = ref({
  currentPassword: '',
  newPassword: '',
  confirmPassword: ''
})

const currentPasswordError = ref('')
const newPasswordError = ref('')
const confirmPasswordError = ref('')

const passwordError = ref('')

const user = useUserStore()
const createSnackbar = useSnackbar()

const formatToDate = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('zh-TW', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  })
}

const validatePasswordForm = () => {
  let isValid = true

  if (!passwordForm.value.currentPassword) {
    currentPasswordError.value = '請輸入當前密碼'
    isValid = false
  }

  if (!passwordForm.value.newPassword) {
    newPasswordError.value = '請輸入新密碼'
    isValid = false
  } else if (passwordForm.value.newPassword.length < 8) {
    newPasswordError.value = '新密碼長度至少需要8個字元'
    isValid = false
  }

  if (!passwordForm.value.confirmPassword) {
    confirmPasswordError.value = '請確認新密碼'
    isValid = false
  } else if (passwordForm.value.newPassword !== passwordForm.value.confirmPassword) {
    confirmPasswordError.value = '兩次輸入的密碼不相符'
    isValid = false
  }

  return isValid
}

const handlePasswordChange = async () => {
  if (!validatePasswordForm()) return

  try {
    isChangingPassword.value = true
    const result = await user.changePassword(
      passwordForm.value.currentPassword,
      passwordForm.value.newPassword
    )

    // 使用回傳的訊息
    createSnackbar({
      text: result.message,
      snackbarProps: { color: 'teal-lighten-1' }
    })

    closePasswordDialog()
  } catch (error) {
    // 錯誤訊息已經在 store 中處理過，直接使用
    createSnackbar({
      text: error.message,
      snackbarProps: { color: 'red-lighten-1' }
    })
  } finally {
    isChangingPassword.value = false
  }
}
const closePasswordDialog = () => {
  showPasswordDialog.value = false
  passwordForm.value = {
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  }
  currentPasswordError.value = ''
  newPasswordError.value = ''
  confirmPasswordError.value = ''
  // 重置顯示密碼的狀態
  showCurrentPassword.value = false
  showNewPassword.value = false
  showConfirmPassword.value = false
}

const verifyCowellPassword = async () => {
  if (!cowellPassword.value) {
    passwordError.value = '請輸入密碼'
    return
  }

  try {
    isVerifyingCowell.value = true

    // 調用新 API
    const response = await fetch(`${import.meta.env.VITE_API}/user/reveal-system`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}` // 加入 JWT token
      },
      body: JSON.stringify({ password: cowellPassword.value })
    })

    const data = await response.json()

    if (!response.ok) {
      createSnackbar({
        text: data.message || '驗證失敗，請稍後重試',
        snackbarProps: { color: 'red-lighten-1' }
      })
      return
    }

    // 成功後更新顯示的科威帳號和密碼
    isSystemRevealed.value = true
    user.cowellAccount = data.result.cowellAccount
    user.cowellPassword = data.result.cowellPassword

    createSnackbar({
      text: '密碼驗證成功，所有系統帳號與密碼已解鎖',
      snackbarProps: { color: 'teal-lighten-1' }
    })

    closeCowellDialog()
  } catch (error) {
    console.error('驗證密碼錯誤:', error)
    createSnackbar({
      text: '驗證失敗，請稍後重試',
      snackbarProps: { color: 'red-lighten-1' }
    })
  } finally {
    isVerifyingCowell.value = false
  }
}

const closeCowellDialog = () => {
  showCowellDialog.value = false
  cowellPassword.value = ''
  cowellPasswordError.value = ''
  // 重置顯示密碼的狀態
  showCowellPassword.value = false
}

const isProfileAvatarLoaded = ref(false)

const handleProfileAvatarLoad = () => {
  setTimeout(() => {
    isProfileAvatarLoaded.value = true
  }, 100)
}

watch(() => user.avatar, (newAvatar) => {
  if (newAvatar) {
    isProfileAvatarLoaded.value = false
    const img = new Image()
    img.onload = () => {
      handleProfileAvatarLoad()
    }
    img.src = newAvatar
  }
}, { immediate: true })
</script>

<style lang="scss" scoped>
@import '../styles/settings.scss';

.address-style :deep(.v-field .v-field__input) {
  font-size: 10.5px;
}

.v-col-sm-12 {
  font-size: 13px;
}

.name {
  font-size: 15px;
  font-weight: 600;
}

@include sm {
  .address-style :deep(.v-field .v-field__input) {
    font-size: 14px;
  }
  .name {
    font-size: 18px;
  }
  .v-col-sm-12 {
    font-size: 15px;
  }
}

// .profile-subtitle {
//   font-size: 14px;
//   font-weight: 600;
//   @include sm {
//     font-size: 15px;
//   }
// }
</style>
