
<template>
  <div
    class="website-container"
    v-bind:class="{
      'is-ios': this.isiOS,
      'is-android': this.isAndroid,
      'is-chromeios': this.isChromeiOS
    }"
  >
    <h1 class="visually-hidden">David Darx</h1>
    <logo ref="logo"></logo>
    <custom-navigation ref="nav"></custom-navigation>
    <keep-alive :include="['misc-keep', 'info-keep']">
      <router-view
        :key="$route.fullPath"
        ref="view"
      >
      </router-view>
    </keep-alive>
    <transition-backround></transition-backround>
    <browser-warning></browser-warning>
  </div>
</template>

<script>

  import Vue from "vue";
  import Logo from './components/logo.vue';
  import CustomNavigation from './components/navigation.vue';
  import TransitionBackground from './components/transition-background.vue';
  import BrowserWarning from './components/browser-warning.vue';
  import browserDetect from './browser-detect';


  export default Vue.extend({
    components: {
      'logo': Logo,
      'custom-navigation': CustomNavigation,
      'transition-backround': TransitionBackground,
      'browser-warning': BrowserWarning,
    },
    data() {
      return {
        isiOS: false,
        isAndroid: false,
        isChromeiOS: false,
        splashScreen: undefined,
        isLoaded: false,
        displayAfterLoadedDelay: 600
      }
    },
    computed: {
    },
    mounted () {
      this.splashScreen = document.querySelector('.splash');

      document.fonts.ready.then(() => {
        this.isLoaded = true;
        this.splashScreen.classList.add('hidden');
        setTimeout(() => {
          this.$refs.view.display();
        }, this.displayAfterLoadedDelay);
      });

      this.isiOS = browserDetect.isiOS;
      this.isAndroid = browserDetect.isAndroid;
      this.isChromeiOS = browserDetect.isChromeiOS;

      this.$router.beforeEach(this.beforeEach);
      this.checkIfUserTouch();
      this.checkIfDarkMode(this.$router.currentRoute.meta.isDark);
      setTimeout(this.resize, 200);
      window.addEventListener('resize', this.resize);
    },
    methods: {
      checkIfUserTouch: function () {
        window.isTouch = false;
        window.addEventListener('touchstart', this.touchListener);
      },
      touchListener: function (e) {
        window.isTouch = true;
        document.body.classList.add('is-touch');
        window.removeEventListener('touchstart', this.touchListener);
      },
      checkIfDarkMode: function (isDark) {
        if (isDark == true) {
          document.body.classList.add('is-dark');
        } else {
          document.body.classList.remove('is-dark');
        }
      },
      checkVerticalNav: function () {
        const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
        const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
        const gutter = parseFloat(getComputedStyle(this.$refs.logo.$el).getPropertyValue('--s-gutter').split('vw')[0])/100 * vh;

        this.$refs.nav.resetVertical();

        requestAnimationFrame(() => {
          if (this.$refs.logo.$el.offsetWidth + this.$refs.nav.$el.offsetWidth + 2 * gutter > vh - gutter){
            this.$refs.nav.setVertical();
          }

          this.$refs.nav.checkMobile(vw);
        });
      },
      resize: function () {
        this.checkVerticalNav();
      },
      beforeEach: function (to, from, next) {
        if (from.name == 'projects' || from.name == 'misc') {
          window.scrollPosition = window.pageYOffset;
        }
        this.checkIfDarkMode(to.meta.isDark);
        next();
      },
    }
  });
</script>
