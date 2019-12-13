
<template>
  <div
    class="website-container"
  >
    <logo></logo>
    <custom-navigation></custom-navigation>
    <projects></projects>
  </div>
</template>

<script>

  import Vue from "vue";
  import Logo from './components/logo.vue';
  import CustomNavigation from './components/navigation.vue';
  import Projects from './components/projects.vue';

  export default Vue.extend({
    components: {
      'logo': Logo,
      'custom-navigation': CustomNavigation,
      'projects': Projects
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
        console.log("init app");
      }
    }
  });
</script>
