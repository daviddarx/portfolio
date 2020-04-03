
<template>
  <div
    class="media-image"
    v-bind:class="{'is-loaded' : isLoaded, 'is-zoomable': zoomable, 'is-zoomed': isZoomed}"
  >
    <preloader class="media-image__preloader"></preloader>
    <img
      v-bind:src="this.url"
      v-bind:alt="this.title"
      @load="imageLoaded"
      class="media-image__el"
      ref="image"
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
      title: String,
      zoomable: Boolean
    },
    data: function () {
      return {
        isLoaded: false,
        isZoomed: false
      }
    },
    mounted () {
      if(this.zoomable == true){
        this.$refs.image.addEventListener("click", this.imageClickListener);
      }
    },
    methods: {
      imageLoaded: function () {
        this.isLoaded = true;
      },
      imageClickListener: function () {
        if (this.isZoomed == false) {
          this.zoomImage();
        } else {
          this.dezoomImage();
        }
      },
      zoomImage: function () {
        this.isZoomed = true;
      },
      dezoomImage: function () {
        this.isZoomed = false;
      },
      destroy: function () {
        this.$refs.image.removeEventListener("click", this.imageClickListener);
      }
    }
  }
</script>
