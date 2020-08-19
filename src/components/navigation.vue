
<template>
  <nav
    class="navigation"
    v-bind:class="{
      'is-ready': this.isReady,
      'is-vertical': this.isVertical,
      'is-hidden': this.isHidden,
      'is-mobile': this.isMobile,
      'is-mobile-opened': this.isMobileOpened
    }"
  >
    <h2 class="visually-hidden">Navigation</h2>
    <div
      class="navigation__container"
      v-if="this.isDisplayed"
    >
      <router-link
        class="navigation__link"
        to="/info"
      >
        Info
      </router-link>
      <router-link
        class="navigation__link"
        to="/projects"
      >
        Projekte
      </router-link>
      <router-link
        class="navigation__link"
        to="/misc"
      >
        Kunterbunt
      </router-link>
      <router-link
        class="navigation__link"
        to="/contact"
      >
        Kontakt
      </router-link>
    </div>
    <div
      class="navigation__burger"
      v-if="this.isDisplayed"
      v-on:click="this.toogleMobile"
    >
      <div class="navigation__burger-el"></div>
    </div>
    <div
      class="navigation__mobile-overlay"
      v-if="this.isMobileOpened"
      v-on:click="this.closeMobile"
    ></div>
  </nav>
</template>

<script>
  import Vue from "vue";

  export default Vue.extend({
    data() {
      return {
        isDisplayed: false,
        isReady: false,
        isVertical: false,
        isHidden: false,
        isMobile: false,
        isMobileOpened: false,
        mobileMaxWidth: 768
      }
    },
    mounted () {
      this.$router.afterEach(this.afterEach);
      this.$router.beforeEach(this.beforeEach);
      requestAnimationFrame(this.displayNav);
    },
    methods: {
      afterEach: function (to, from) {
        if (to.meta.isNavHidden == true) {
          this.isDisplayed = false;
        } else {
          this.isDisplayed = true;
        }
        this.displayNav();
      },
      beforeEach: function (to, from, next) {
        this.closeMobile();
        next();
      },
      displayNav: function () {
        if(this.$route.meta.isNavHidden != true){
          this.isDisplayed = true;
        }
      },
      setVertical: function () {
        this.isVertical = true;
      },
      resetVertical: function () {
        this.isVertical = false;
      },
      checkMobile: function (windowW) {
        if (windowW <= this.mobileMaxWidth) {
          this.setMobile();
        } else {
          this.resetMobile();
        }

        this.isReady = true;
      },
      setMobile: function () {
        this.isHidden = true;
        this.isMobile = true;
        requestAnimationFrame(() => {
          this.isHidden = false;
        });
      },
      resetMobile: function () {
        this.isMobile = false;
        this.isHidden = false;
      },
      closeMobile: function () {
        this.isMobileOpened = false;
      },
      toogleMobile: function () {
        this.isMobileOpened = !this.isMobileOpened;
      }
    }
  });
</script>
