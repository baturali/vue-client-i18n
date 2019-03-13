import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)
const messages = { 
  // Set language variables or import here as external json file
  'en': require('./locales/en.json'),
  'tr': {
    welcomeMsg: 'Vue.js Uygulamanıza Hoş Geldiniz',
    guide: 'Bu projenin nasıl yapılandırılacağı ve özelleştirileceği hakkında kılavuz ve örnekler için,',
    checkOut: 'aşağıdaki linki ziyaret edin.',
    vueCli: 'vue-cli dokümantasyon',
    cliPlugins: 'Yüklü CLI Eklentileri',
    babel: 'Babel',
    eslint: 'Eslint',
    essential: 'Temel Bağlantılar',
    coreDocs: 'Temel Dökümanlar',
    forum: 'Forum',
    chat: 'Topluluk Sohbeti',
    twitter: 'Twitter',
    news: 'Haberler',
    ecosystem: 'Ekosistem',
    vueRouter: 'vue-router',
    vuex: 'vuex',
    devTools: 'vue-devtools',
    loader: 'vue-loader',
    awesome: 'awesome-vue',
    defaultData: 'i18n for data'
  }
}
const i18n = new VueI18n({
  locale: 'en', // set locale
  fallbackLocale: 'en',
  messages // set locale messages
})

export default i18n