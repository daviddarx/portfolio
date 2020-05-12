
<template>
  <div
    class="media-video"
    v-bind:class="{'is-loading' : isLoading}"
  >
    <preloader class="media-video__preloader"></preloader>
    <video
      muted
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
import { TextureUvs } from 'pixi.js';

  export default {
    name: 'media-video',
    components: {
      'preloader': Preloader
    },
    props: {
      url: String,
      title: String,
      autoplay: Boolean
    },
    data: function () {
      return {
        isLoading: false,
        isPlaying: false,
        bufferedPercent: 0
      }
    },
    mounted () {
      this.$refs.video.addEventListener('waiting', this.onWaiting);
      this.$refs.video.addEventListener('playing', this.onPlaying);
      this.$refs.video.addEventListener('progress', this.progressListener);
      this.$refs.video.addEventListener('canplay', this.canplayListener);
      this.$refs.video.addEventListener('canplaythrough', this.canplaythroughListener);
      this.$refs.video.addEventListener('suspend', this.suspendListener);
    },
    methods: {
      enter: function () {
        if (this.autoplay == true) {
          this.isPlaying = true;
          this.isLoading = true,
          console.log("enter");
        }
      },
      leave: function () {
        this.isPlaying = false;
        this.pause();
      },
      play: function () {
        this.$refs.video.play();
      },
      pause: function () {
        this.$refs.video.pause();
      },
      buffered: function () {
        this.bufferedPercent =
          this.$refs.video.duration > 0 && this.$refs.video.buffered.length > 0 ?
          this.$refs.video.buffered.end(0) / this.$refs.video.duration * 100 :
          0;
        return 'buffered ' + this.bufferedPercent.toFixed(0) + '%';
      },
      progressListener: function () {
        console.log('progress: ' + this.buffered());
      },
      canplayListener: function () {
        console.log('canplay: ' + this.buffered());
      },
      canplaythroughListener: function () {
        if (this.isPlaying == true) {
          this.play();
          console.log("launch play");
        }
        console.log('canplaythrough: ' + this.buffered());
      },
      suspendListener: function () {
        console.log('suspend: ' + this.buffered());
      },
      onWaiting: function () {
        this.isLoading = true;
      },

      onPlaying: function () {
        this.isLoading = false;
      },
      destroy: function () {
        this.pause();
        this.$refs.video.removeEventListener('waiting', this.onWaiting);
        this.$refs.video.removeEventListener('playing', this.onPlaying);
        this.$refs.video.removeEventListener('loadedmetadata', this.metadataListener);
        this.$refs.video.removeEventListener('canplay', this.canplayListener);
        this.$refs.video.removeEventListener('canplaythrough', this.canplaythroughListener);
        this.$refs.video.removeEventListener('suspend', this.suspendListener);
      }
    }
  }
</script>
