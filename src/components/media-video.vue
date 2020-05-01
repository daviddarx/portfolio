
<template>
  <div
    class="media-video"
    v-bind:class="{'is-loaded' : isLoaded}"
  >
    <preloader class="media-video__preloader"></preloader>
    <video
      muted
      autoplay
      loop
      preload="auto"
      class="media-video__el"
      ref="video"
    >
      <source
        v-bind:src="this.url"
        type="video/mp4"
      >
  </div>
</template>

<script>
  import Preloader from './preloader.vue';

  export default {
    name: 'media-video',
    components: {
      'preloader': Preloader
    },
    props: {
      url: String,
      title: String
    },
    data: function () {
      return {
        isLoaded: false
      }
    },
    mounted () {
      this.$refs.video.addEventListener('waiting', this.onWaiting);
      this.$refs.video.addEventListener('playing', this.onPlaying);
    },
    methods: {
      onWaiting: function () {
        this.isLoaded = false;
      },

      onPlaying: function () {
        this.isLoaded = true;
      },
      destroy: function () {
        this.$refs.video.removeEventListener('waiting', this.onWaiting);
        this.$refs.video.removeEventListener('playing', this.onPlaying);
      }
    }
  }
</script>
