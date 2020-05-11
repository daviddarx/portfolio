
<template>
  <div
    class="media-video"
    v-bind:class="{'is-loading' : isLoading}"
  >
    <preloader class="media-video__preloader"></preloader>
    <video
      muted
      loop
      preload="metadata"
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
      title: String,
      autoplay: Boolean
    },
    data: function () {
      return {
        isLoading: false,
      }
    },
    mounted () {
      this.$refs.video.addEventListener('waiting', this.onWaiting);
      this.$refs.video.addEventListener('playing', this.onPlaying);
      this.$refs.video.addEventListener('loadedmetadata', this.metadataListener);
    },
    methods: {
      enter: function () {
        if (this.autoplay == true) {
          this.play();
        }
      },
      leave: function () {
        this.pause();
      },
      play: function () {
        this.$refs.video.play();
      },
      pause: function () {
        this.$refs.video.pause();
      },
      metadataListener: function () {
        if (this.$refs.video.buffered.length === 0) return;

        var bufferedSeconds = this.$refs.video.buffered.end(0) - this.$refs.video.buffered.start(0);
        console.log(bufferedSeconds + ' seconds of video are ready to play!');
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
      }
    }
  }
</script>
