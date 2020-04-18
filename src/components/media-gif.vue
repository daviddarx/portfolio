
<template>
  <div
    class="media-gif"
    v-bind:class="{'is-loaded' : isLoaded}"
    ref="container"
  >
    <preloader class="media-gif__preloader preloader--inverted"></preloader>
    <img
      v-bind:src="this.path+this.images[0]"
      v-bind:alt="this.title"
      @load="imageLoaded"
      class="media-gif__el"
      ref="image"
    >
  </div>
</template>

<script>
  import Preloader from './preloader.vue';

  export default {
    name: 'media-gif',
    components: {
      'preloader': Preloader
    },
    props: {
      path: String,
      title: String,
      images: Array
    },
    data: function () {
      return {
        isLoaded: false,
      }
    },
    mounted () {
      console.log(this.images);
    },
    methods: {
      imageLoaded: function () {
        this.isLoaded = true;
        console.log("loaded");
      },
      destroy: function () {
        //todo
        //keep alive pour continuer le loading?
      }
    }
  }
</script>
