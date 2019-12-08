
<template>
  <div
    class="website-container"
  >
    <Logo></Logo>
    <CustomNavigation></CustomNavigation>
    <Projects></Projects>
  </div>
</template>

<script>

  import Vue from "vue";
  import Logo from './components/logo.vue';
  import CustomNavigation from './components/navigation.vue';
  import Projects from './components/projects.vue';

  export default Vue.extend({
    components: {
      Logo,
      CustomNavigation,
      Projects
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
