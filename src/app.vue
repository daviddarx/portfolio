
<template>
  <div
    class="website-container"
  >
    <logo></logo>
    <custom-navigation></custom-navigation>
    <router-view :key="$route.fullPath"></router-view>
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
      }
    },
    computed: {
    },
    mounted () {
      this.$router.beforeEach(this.beforeEach);
    },
    methods: {
      beforeEach: function (to, from, next) {
        if (from.name == 'projects' || from.name == 'misc') {
          window.scrollPosition = window.pageYOffset;
        }
        next();
      },
    }
  });
</script>
