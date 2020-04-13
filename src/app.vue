
<template>
  <div
    class="website-container"
  >
    <h1 class="visually-hidden">David Darx</h1>
    <logo></logo>
    <custom-navigation></custom-navigation>
    <keep-alive include="misc-keep">
      <router-view :key="$route.fullPath"></router-view>
    </keep-alive>
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
      this.checkIfUserTouch();
    },
    methods: {
      checkIfUserTouch: function () {
        window.isTouch = false;
        window.addEventListener('touchstart', this.touchListener);
      },
      touchListener: function(e) {
        window.isTouch = true;
        document.body.classList.add('is-touch');
        window.removeEventListener('touchstart', this.touchListener);
      },
      beforeEach: function (to, from, next) {
        if (from.name == 'projects' || from.name == 'misc') {
          window.scrollPosition = window.pageYOffset;
        }
        next();
      },
    }
  });
</script>
