import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const messages = {
  // Set language variables or import here as external json file
  us: require("./locales/us.json"),
  tr: {
    welcomeMsg: "Vue.js Uygulamanıza Hoş Geldiniz",
    guide:
      "Bu projenin nasıl yapılandırılacağı ve özelleştirileceği hakkında kılavuz ve örnekler için,",
    checkOut: "aşağıdaki linki ziyaret edin.",
    vueCli: "vue-cli dokümantasyon",
    cliPlugins: "Yüklü CLI Eklentileri",
    babel: "Babel",
    eslint: "Eslint",
    essential: "Temel Bağlantılar",
    coreDocs: "Temel Dökümanlar",
    forum: "Forum",
    chat: "Topluluk Sohbeti",
    twitter: "Twitter",
    news: "Haberler",
    ecosystem: "Ekosistem",
    vueRouter: "vue-router",
    vuex: "vuex",
    devTools: "vue-devtools",
    loader: "vue-loader",
    awesome: "awesome-vue",
    defaultData: "i18n for data"
  }
};
// Set as constant
const i18n = new VueI18n({
  locale: "us", // set locale
  fallbackLocale: "us",
  messages // set locale messages
});

// Export default that constant
export default i18n;
