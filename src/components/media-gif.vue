
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
        loadingImage: undefined,
        giffingCurrentID: 0,
        giffingDirection: 0,
        giffingInterval: undefined,
        giffingIntervalDuration: 100,
      }
    },
    mounted () {
    },
    methods: {
      imageLoaded: function () {
        this.isLoaded = true;
        this.startGiffing();
        this.loadedImageID++;
        this.loadAdditionalImage();
      },
      startGiffing: function () {
        this.giffingInterval = setInterval(this.gif, this.giffingIntervalDuration);
      },
      stopGiffing: function () {
        if (this.giffingInterval) {
          clearInterval(this.giffingInterval);
        }
      },
      gif: function () {
        console.log(this.giffingCurrentID + " / "+ this.loadedImages.length);
      },
      loadAdditionalImage: function () {
        this.loadingImage = document.createElement('img');
        this.loadingImage.setAttribute('src',  this.path+this.images[this.loadedImageID]);
        this.loadingImage.classList.add('media-gif__additional-el');
        this.loadingImage.addEventListener('load', this.additionalImageLoadComplete);
      },
      additionalImageLoadComplete: function () {
        this.loadingImage.removeEventListener('load', this.additionalImageLoadComplete);
        this.loadedImages.push(this.loadingImage);
        this.$refs.container.appendChild(this.loadingImage);

        if (this.loadedImageID < this.images.length-1) {
          this.loadedImageID++;
          this.loadAdditionalImage();
        } else {
          this.loadingImage = undefined;
        }
      },
      destroy: function () {
        console.log("destroy");
        this.stopGiffing();
        if (this.loadingImage) {
          this.loadingImage.removeEventListener('load', this.additionalImageLoadComplete);
        }
      }
    }
  }
</script>
