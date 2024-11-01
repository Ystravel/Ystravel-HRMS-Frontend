/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
// import 'vuetify/styles'
import '@/styles/main.scss'

// Composables
import { createVuetify } from 'vuetify'
import { zhHant } from 'vuetify/locale'
import { VCalendar } from 'vuetify/labs/VCalendar'
import { VDateInput } from 'vuetify/labs/VDateInput'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'light'
  },
  locale: {
    locale: 'zhHant',
    fallback: 'en',
    messages: { zhHant }
  },
  components: {
    VCalendar,
    VDateInput
  }
})
