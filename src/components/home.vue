
<template>
  <div
    class="home"
    ref="home"
    v-bind:class="{ 'is-displayed': this.isDisplayed }"
  >

  <video width="400" controls ref="video">
    <source src="https://deploy-preview-12--daviddarx-portfolio.netlify.app/projects/ar/scenes_overview.mp4" type="video/mp4">
    Your browser does not support HTML video.
  </video>

    <div class="content-page">
      <h1 class="home__title animate-in">
        <span class="home__title-name font-compensated">David Darx</span>
        <span class="home__title-detail">Digital Design &amp; Art Direction</span>
      </h1>

      <router-link
        to="/projects"
        class="home__stage animate-in animate-in__s2"
      >
      </router-link>

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

      console.log("test 4");

      this.$refs.video.addEventListener("canplay", function() {
        console.log("oncanplay");
      });
    },
    methods: {
      displayHome: function() {
        this.isDisplayed = true;
      }
    }
  });
</script>

<style>
  .test {
    width: 600px;
    position: relative;
    margin-left: 50%;
  }
</style>

