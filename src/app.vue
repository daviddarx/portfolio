
<template>
  <div
    class="website-container"
  >
    <logo></logo>
    <custom-navigation></custom-navigation>
    <router-view></router-view>
  </div>
</template>

<script>

  import Vue from "vue";
  import Logo from './components/logo.vue';
  import CustomNavigation from './components/navigation.vue';

  export default Vue.extend({
    components: {
      'logo': Logo,
      'custom-navigation': CustomNavigation,
    },
    data() {
      return {
        isDark: false
      }
    },
    computed: {
    },
    mounted () {
      this.init();
    },
    methods: {
      init: function () {
      }
    }
  });
</script>
