
<template>
  <div
    class="media-video"
  >
    <video
      muted
      autoplay
      loop
      class="media-video__el"
    >
      <source
        v-bind:src="this.url"
        type="video/mp4"
      >
  </div>
</template>

<script>
  export default {
    name: 'media-video',
    props: {
      url: String,
      title: String
    },
    data: function () {
      return {
      }
    },
    mounted () {
    },
    methods: {
      videoLoaded: function () {
        console.log("loaded video " + this.title);
      },
      destroy: function () {
        console.log("destroy video " + this.title);
      }
    }
  }
</script>
