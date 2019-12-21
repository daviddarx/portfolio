
<template>
  <div
    class="website-container"
  >
    <logo></logo>
    <custom-navigation></custom-navigation>
    <router-view></router-view>
    <transition-backround></transition-backround>
  </div>
</template>

<script>

  import Vue from "vue";
  import Logo from './components/logo.vue';
  import CustomNavigation from './components/navigation.vue';
  import TransitionBackground from './components/transition-background.vue';

  export default Vue.extend({
    components: {
      'logo': Logo,
      'custom-navigation': CustomNavigation,
      'transition-backround': TransitionBackground,
    },
    data() {
      return {
        isDark: false
      }
    },
    computed: {
    },
    mounted () {
    },
    methods: {
    }
  });
</script>
