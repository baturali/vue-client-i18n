import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import FlagIcon from "vue-flag-icon";

import i18n from "./i18n"; // Import i18n file

Vue.config.productionTip = false;
Vue.use(FlagIcon);

new Vue({
  store,
  i18n, // Use i18n
  render: h => h(App)
}).$mount("#app");
