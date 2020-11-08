
<template>
  <div
    class="contact"
    v-bind:class="{ 'is-displayed': this.isDisplayed }"
  >
    <div class="content-page">
      <h2
        class="content-page__page-title font-compensated animate-in hidable-title"
        v-bind:class="{ 'is-hidden': this.isTitleHidden, 'is-below': this.isTitleBelow, 'is-jumping': this.isTitleJumping }"
      >
        <span class="content-page__page-title__el">
          {{this.pageTitle}}
        </span>
      </h2>

      <div class="content-page__lead animate-in animate-in__s1">
          David Darx<br>
          078 805 89 63<br>
          <a href="mailto:hoi@daviddarx.com" target="_blank" class="text-link">hoi@daviddarx.com</a><br>
          <a href="https://www.linkedin.com/in/daviddarx" target="_blank" class="text-link">LinkedIn</a>
      </div>
      <div class="content-page__content animate-in animate-in__s2">
        <div
          class="contact__video-container content-page__3-4 hiding-title"
        >
          <media-video
            v-bind:url="this.videosPath+'k4_1920_5.mp4'"
            v-bind:poster="this.videosPath+'k4.jpg'"
            v-bind:autoplay="true"
            v-bind:toggleclick="true"
            ref="video"
            class="contact__video"
          >
          </media-video>
        </div>
        <p class="contact__address">
          Pflanzschulstrasse 35<br>
          Im schönen K4, Zürich<br>
          CH <span class="dash">–</span> Schweiz
        </p>
      </div>
      <credits></credits>
    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  import MediaVideo from '../components/media-video.vue';
  import Credits from './credits.vue';
  import contentPageTitle from '../mixins/content-page-title';

  export default Vue.extend({
    components: {
      'media-video': MediaVideo,
      'credits': Credits
    },
    mixins: [contentPageTitle],
    data() {
      return {
        isDisplayed : false,
        pageTitle: "Kontakt",
        videosPath: 'https://files.daviddarx.com/works/videos/k4/'
      }
    },
    mounted () {
      setTimeout(this.display, 100);
      this.initTitlesObserver(this.pageTitle);
      this.$refs.video.enter();
    },
    beforeDestroy () {
      this.destroyTitlesObserver();
    },
    methods: {
      display: function() {
        if (this.$parent.isLoaded == true) {
          this.isDisplayed = true;
        }
      }
    }
  });
</script>

