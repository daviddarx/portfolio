
<template>
  <div
    class="media-image"
  >
    <img
      v-bind:src="this.imgURL"
      v-bind:alt="this.imgTitle"
      @load="imageLoaded"
      class="media-image__img"
    >
  </div>
</template>

<script>
  export default {
    name: 'misc-list',
    props: {
      imgURL: String,
      imgTitle: String
    },
    data: function () {
      return {
      }
    },
    mounted () {
    },
    methods: {
      imageLoaded: function () {
        console.log("isLoaded");
      }
    }
  }
</script>
