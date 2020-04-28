
<template>
  <div
    class="media-gif"
    v-bind:class="{'is-loaded' : isLoaded}"
    ref="container"
    @click="imageClick"
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
        giffingCurrentImage:undefined,
        giffingStartTimeout: undefined,
        giffingStartTimeoutDuration: 1000,
        hasGiffingStarted: false,
        observer: undefined,
        observerRootMargin: '0px 0px 0px 0px',
      }
    },
    mounted () {
      this.giffingStartTimeout = setTimeout(this.giffingStartTimeoutListener, this.giffingStartTimeoutDuration);
      this.initObserver();
    },
    methods: {
      imageLoaded: function () {
        this.isLoaded = true;
        this.loadedImages.push(this.$refs.image);
        this.loadedImageID++;
        if (!this.giffingStartTimeout) {
          this.startGiffing();
          this.hasGiffingStarted = true;
        }
        this.loadAdditionalImage();
      },
      imageClick: function () {
        if (this.giffingInterval) {
          this.stopGiffing();
        } else {
          this.startGiffing();
        }
      },
      giffingStartTimeoutListener: function () {
        if (this.isLoaded == true) {
          if (!this.giffingInterval) {
            this.startGiffing();
            this.hasGiffingStarted = true;
          }
        }
        clearTimeout(this.giffingStartTimeout);
        this.giffingStartTimeout = undefined;
      },
      startGiffing: function () {
        if (!this.giffingInterval) {
          this.giffingInterval = setInterval(this.gif, this.giffingIntervalDuration);
        }
      },
      stopGiffing: function () {
        if (this.giffingInterval) {
          clearInterval(this.giffingInterval);
          this.giffingInterval = undefined;
        }
      },
      gif: function () {
        if (this.loadedImages.length > 2) {
          if (this.giffingDirection == 0) {
            if (this.giffingCurrentID < this.loadedImages.length-1) {
              this.giffingCurrentID++;
            } else {
              this.giffingDirection = 1;
              this.giffingCurrentID--;
            }
          } else {
            if (this.giffingCurrentID > 1) {
              this.giffingCurrentID--;
            } else {
              this.giffingDirection = 0;
              this.giffingCurrentID = 0;
            }
          }
        } else if (this.loadedImages.length == 2) {
          if (this.giffingCurrentID == 0) {
            this.giffingCurrentID = 1;
          } else {
            this.giffingCurrentID = 0;
          }
        }

        if (this.giffingCurrentImage) this.giffingCurrentImage.classList.remove("is-active");
        this.giffingCurrentImage = this.loadedImages[this.giffingCurrentID];
        this.giffingCurrentImage.classList.add("is-active");
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
      initObserver: function () {
        if (!!window.IntersectionObserver) {
          this.observer = new IntersectionObserver(this.intersectionListener, {
            rootMargin: this.observerRootMargin
          });
          this.observer.observe(this.$refs.container);
        }
      },
      destroyObserver () {
        if (!!window.IntersectionObserver) {
          this.observer.unobserve(this.$refs.container);
          this.observer.disconnect();
          this.observer = undefined;
        }
      },
      intersectionListener (entries, observer) {
        entries.forEach(entry => {
          if(entry.isIntersecting){
            if (this.hasGiffingStarted == true && this.giffingInterval == undefined) {
              this.startGiffing();
            }
          } else {
            if (this.giffingInterval) {
              this.stopGiffing();
            }
          }
        });
      },
      destroy: function () {
        this.stopGiffing();
        this.destroyObserver();
        if (this.giffingStartTimeout) {
          clearTimeout(this.giffingStartTimeout);
          this.giffingStartTimeout = undefined;
        }
        if (this.loadingImage) {
          this.loadingImage.removeEventListener('load', this.additionalImageLoadComplete);
          this.loadingImage = undefined;
        }
      }
    }
  }
</script>
