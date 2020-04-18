
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
        loadedImageID: 0,
        loadedImages: [],
        currentlyLoadedImage: undefined
      }
    },
    mounted () {
    },
    methods: {
      imageLoaded: function () {
        this.isLoaded = true;
        this.loadedImageID++;
        this.loadAdditionalImage();
      },
      loadAdditionalImage: function () {
        console.log("load " + this.images[this.loadedImageID]);
        this.currentlyLoadedImage = document.createElement('img');
        this.currentlyLoadedImage.setAttribute('src',  this.path+this.images[this.loadedImageID]);
        this.currentlyLoadedImage.classList.add('media-gif__additional-el');
        this.currentlyLoadedImage.addEventListener('load', this.additionalImageLoadComplete);
      },
      additionalImageLoadComplete: function () {
        this.currentlyLoadedImage.removeEventListener('load', this.additionalImageLoadComplete);
        this.loadedImages.push(this.currentlyLoadedImage);
        this.$refs.container.appendChild(this.currentlyLoadedImage);

        console.log("loaded "+this.loadedImageID);
        if (this.loadedImageID < this.images.length-1) {
          this.loadedImageID++;
          this.loadAdditionalImage();
        } else {
          this.currentlyLoadedImage = undefined;
        }
      },
      destroy: function () {
        console.log("destroy");
        if (this.currentlyLoadedImage) {
          this.currentlyLoadedImage.removeEventListener('load', this.additionalImageLoadComplete);
        }
      }
    }
  }
</script>
