
<template>
  <div
    class="media-image"
    v-bind:class="{'is-loaded' : isLoaded}"
  >
    <preloader class="media-image__preloader"></preloader>
    <img
      v-bind:src="this.url"
      v-bind:alt="this.title"
      @load="imageLoaded"
      class="media-image__el"
    >
  </div>
</template>

<script>
  import Preloader from './preloader.vue';

  export default {
    name: 'media-image',
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
    },
    methods: {
      imageLoaded: function () {
        this.isLoaded = true;
      },
      destroy: function () {
      }
    }
  }
</script>
