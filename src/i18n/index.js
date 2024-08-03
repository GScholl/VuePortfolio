import { createI18n } from 'vue-i18n'
import en from './../locales/en.json'
import pt from './../locales/pt-BR.json'
import es from './../locales/es.json'

const messages = { en, pt, es }

export default createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: messages
})
