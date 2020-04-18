
<template>
  <div
    class="home"
    ref="home"
    v-bind:class="{ 'is-displayed': this.isDisplayed }"
  >
    <div class="content-page">

      <h1 class="home__title animate-in">
        <span class="home__title-name font-compensated">David Darx</span>
        <span class="home__title-detail">Digital Design &amp; Art Direction</span>
      </h1>

      <div class="home__stage animate-in animate-in__s2">

      </div>
    </div>
  </div>
</template>

<script>
  import Vue from "vue";

  export default Vue.extend({
    data() {
      return {
        isDisplayed : false,
      }
    },
    mounted () {
      setTimeout(this.displayHome, 100);
    },

    methods: {
      displayHome: function() {
        this.isDisplayed = true;
      }
    }
  });
</script>

