
<template>
  <nav
    class="navigation"
    v-bind:class="{ 'is-mobile': this.isMobile, 'is-mobile-opened': this.isMobileOpened }"
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
        isMobile: false,
        isMobileOpened: false,
        mobileMaxWidth: 768
      }
    },
    mounted () {
      this.$router.afterEach(this.afterEach);
      this.$router.beforeEach(this.beforeEach);
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
      checkMobile: function (windowW) {
        if (windowW < this.mobileMaxWidth) {
          this.setMobile();
        } else {
          this.unsetMobile();
        }

        this.displayNav();
      },
      setMobile: function () {
        this.isMobile = true;
      },
      unsetMobile: function () {
        this.isMobile = false;
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
