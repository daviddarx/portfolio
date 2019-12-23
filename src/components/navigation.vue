
<template>
  <nav class="navigation">
    <transition
      name="transition-nav"
    >
      <div
        class="navigation__container"
        v-if="this.isDisplayed"
      >
        <h2 class="visually-hidden">Navigation</h2>
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
          to="/info"
        >
          Info
        </router-link>
        <router-link
          class="navigation__link"
          to="/contact"
        >
          Kontakt
        </router-link>
      </div>
    </transition>
  </nav>
</template>

<script>
  import Vue from "vue";

  export default Vue.extend({
    data() {
      return {
        isDisplayed: false
      }
    },
    mounted () {
      this.$router.afterEach(this.afterEach);
      requestAnimationFrame(this.displayNav);
    },
    methods: {
      afterEach: function (to, from) {
        if (to.meta.color) {
          this.isDisplayed = false;
        } else {
          this.isDisplayed = true;
        }
      },
      displayNav: function () {
        if(this.$route.meta.isNavHidden != true){
          this.isDisplayed = true;
        }
      }
    }
  });
</script>
