
<template>
  <div
    class="media-video"
    v-bind:class="{'is-loading' : isLoading}"
  >
    <div
      v-if="this.autoplay==false"
      v-on:click="this.togglePlay"
      v-bind:class="{'is-displayed' : !isPlaying}"
      class="media-video__play-button play-button"
    >
      <button
        class="play-button__el"
      >
        <span class="play-button__icon">Play</span>
      </button>
    </div>
    <preloader class="media-video__preloader"></preloader>
    <video
      muted
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
        isCanplaythrough: false,
        bufferedPercent: 0,
        isLoadingTimeout: undefined,
        isLoadingTimeoutDuration: 750
      }
    },
    mounted () {
      this.$refs.video.addEventListener('waiting', this.onWaiting);
      this.$refs.video.addEventListener('playing', this.onPlaying);
      // this.$refs.video.addEventListener('progress', this.progressListener); // to remove
      this.$refs.video.addEventListener('canplaythrough', this.canplaythroughListener);
      this.$refs.video.addEventListener('ended', this.endListener);
    },
    methods: {
      enter: function () {
        if (this.autoplay == true) {
          this.isPlaying = true;
          this.isLoading = true;

          if (this.isCanplaythrough == true) {
            this.isLoading = false;
            this.play();
          }
        }
      },
      leave: function () {
        this.isPlaying = false;
        this.pause();
      },
      togglePlay: function () {
        if (this.isPlaying == false) {
          this.isPlaying = true;
          this.isLoading = true;

          if (this.isCanplaythrough == true) {
            this.isLoading = false;
            this.play();
          }
        } else {
          this.isPlaying = false;
          this.isLoading = false;
          this.pause();
        }
      },
      play: function () {
        this.$refs.video.play();
      },
      pause: function () {
        this.$refs.video.pause();
      },
      getBuffered: function () {
        this.bufferedPercent =
          this.$refs.video.duration > 0 && this.$refs.video.buffered.length > 0 ?
          this.$refs.video.buffered.end(0) / this.$refs.video.duration * 100 :
          0;
        return this.bufferedPercent;
      },
      progressListener: function () {
        // console.log('progress: ' + this.getBuffered());
      },
      canplaythroughListener: function () {
        if (this.isPlaying == true) {
          this.play();
        }
        this.isCanplaythrough = true;
      },
      endListener: function () {
        this.$refs.video.currentTime = 0;

        if (this.autoplay == true) {
          this.play();
        } else {
          this.togglePlay();
        }
      },
      setIsLoadingTimeout: function () {
        this.clearIsLoadingTimeout();
        this.isLoadingTimeout = setTimeout(() => {
          this.isLoading = true;
        }, this.isLoadingTimeoutDuration);
      },
      clearIsLoadingTimeout: function () {
        if (this.isLoadingTimeout) clearTimeout(this.isLoadingTimeout);
      },
      onWaiting: function () {
        this.setIsLoadingTimeout();
      },
      onPlaying: function () {
        this.clearIsLoadingTimeout();
        this.isLoading = false;
      },
      destroy: function () {
        this.pause();
        this.clearIsLoadingTimeout();
        this.$refs.video.removeEventListener('waiting', this.onWaiting);
        this.$refs.video.removeEventListener('playing', this.onPlaying);
        // this.$refs.video.removeEventListener('progress', this.progressListener); // to remove
        this.$refs.video.removeEventListener('canplaythrough', this.canplaythroughListener);
        this.$refs.video.removeEventListener('ended', this.endListener);
      }
    }
  }
</script>
