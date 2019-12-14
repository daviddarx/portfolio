
<template>
  <nav class="navigation">
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
  </nav>
</template>

<script>
  import Vue from "vue";

  export default Vue.extend({
    data() {
      return {
      }
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
