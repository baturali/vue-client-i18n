<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      {{ $t('guide') }}<br />
      {{ $t('checkOut') }}
      <a href="https://cli.vuejs.org" target="_blank" 
          :title="$t('vueCli')" rel="noopener"
        >{{ $t('vueCli') }}</a
      >.
    </p>
    <h3>{{ $t('cliPlugins') }}</h3>
    <ul>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
          target="_blank"
          :title="$t('babel')"
          rel="noopener">{{ $t('babel') }}</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
          target="_blank"
          :title="$t('eslint')"
          rel="noopener">{{ $t('eslint') }}</a>
      </li>
    </ul>
    <h3>{{ $t('essential') }}</h3>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank" :title="$t('coreDocs')" rel="noopener">{{ $t('coreDocs') }}</a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank" :title="$t('forum')" rel="noopener">{{ $t('forum') }}</a>
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank" :title="$t('chat')" rel="noopener">{{ $t('chat') }}</a>
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank" :title="$t('twitter')" rel="noopener">{{ $t('twitter') }}</a>
      </li>
      <li>
        <a href="https://news.vuejs.org" target="_blank" :title="$t('news')" rel="noopener">{{ $t('news') }}</a>
      </li>
    </ul>
    <h3>{{ $t('ecosystem') }}</h3>
    <ul>
      <li>
        <a href="https://router.vuejs.org" target="_blank" :title="$t('vueRouter')" rel="noopener">{{ $t('vueRouter') }}</a>
      </li>
      <li>
        <a href="https://vuex.vuejs.org" target="_blank" :title="$t('vuex')" rel="noopener">{{ $t('vuex') }}</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-devtools#vue-devtools"
          target="_blank"
          :title="$t('devTools')"
          rel="noopener">{{ $t('devTools') }}</a>
      </li>
      <li>
        <a href="https://vue-loader.vuejs.org" target="_blank" :title="$t('loader')" rel="noopener">{{ $t('loader') }}</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
          :title="$t('awesome')"
          rel="noopener">{{ $t('awesome') }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data () {
    return {
      default: this.$t('defaultData') // You can use i18n in data too
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
