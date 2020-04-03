
<template>
  <div
    class="media-image"
  >
    <img
      v-bind:src="this.url"
      v-bind:alt="this.title"
      @load="imageLoaded"
      class="media-image__el"
    >
  </div>
</template>

<script>
  export default {
    name: 'media-image',
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
      imageLoaded: function () {
        console.log("loaded image " + this.title);
      },
      destroy: function () {
        console.log("destroy image " + this.title);
      }
    }
  }
</script>
