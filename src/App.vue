<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld :msg="$t('welcomeMsg')" />
    <div class="locale-changer">
      <select v-model="$i18n.locale">
        <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{
          lang.toUpperCase()
        }}</option>
      </select>
      <div class="flag-parent">
        <flag
          v-for="(lang, i) in langs"
          :key="`Lang${i}`"
          :value="lang"
          :iso="lang"
          @click.native="changeLocale(lang)"
          class="flag"
        />
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld
  },
  data() {
    return {
      default: this.$t("defaultData"), // You can set locale variables in data
      langs: ["tr", "us"] // Define languages as array
    };
  },
  methods: {
    // You can change in methods or
    // use v-model="$i18n.locale" on selects
    changeLocale(lang) {
      this.$i18n.locale = lang;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.flag-parent {
  font-size: 50px;
  margin: 10px;
}
.flag {
  margin: 5px;
  cursor: pointer;
}
</style>
