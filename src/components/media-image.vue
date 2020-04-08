
<template>
  <div
    class="media-image"
    v-bind:class="{'is-loaded' : isLoaded, 'is-zoomable': isZoomable, 'is-zoomed': isZoomed}"
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
        isZoomed: false,
        isZoomable: false,
        zoomRatio: 0,
        zoomedImagePosition: {
          x: 0,
          x: 0
        },
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

        this.checkIfZoomable();
      },
      imageClickListener: function () {
        if(this.isZoomable) {
          if (this.isZoomed == false) {
            this.zoomImage();
          } else {
            this.dezoomImage();
          }
        }
      },
      setZoomedImage: function () {
        const imageRect = this.$refs.image.getBoundingClientRect();
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        this.zoomedImagePosition.x = (imageRect.left + scrollLeft) - (this.$refs.image.naturalWidth - this.$refs.image.offsetWidth) * 0.5;
        this.zoomedImagePosition.y = (imageRect.top + scrollTop) - (this.$refs.image.naturalHeight - this.$refs.image.offsetHeight) * 0.5;

        this.$refs.zoomedImage.style.left = this.zoomedImagePosition.x + "px";
        this.$refs.zoomedImage.style.top = this.zoomedImagePosition.y + "px";

        this.$refs.zoomedImage.style.setProperty('--s-scale-dezoomed', this.zoomRatio);
      },
      checkIfZoomable: function () {
        if(this.zoomable == true && this.$refs.image.offsetWidth < this.$refs.image.naturalWidth) {
          this.isZoomable = true;
          this.zoomRatio = this.$refs.image.offsetWidth / this.$refs.image.naturalWidth;
        } else {
          this.isZoomable = false;
        }
      },
      createZoomedImage: function () {
        this.$refs.zoomedImage = this.$refs.image.cloneNode(true);
        this.$refs.zoomedImage.className = '';
        this.$refs.zoomedImage.classList.add("media-image-zoomed");
        this.$refs.zoomedImage.style.setProperty('--s-scale-dezoomed', this.zoomRatio);
        this.$refs.zoomedImage.addEventListener("click", this.dezoomImage);
        document.body.appendChild(this.$refs.zoomedImage);
      },
      zoomImage: function () {
        if (this.$refs.zoomedImage == undefined) {
          this.createZoomedImage();
        }

        this.setZoomedImage();

        requestAnimationFrame(() => {
          this.$refs.zoomedImage.classList.add("is-active");
        });

        this.isZoomed = true;
      },
      dezoomImage: function () {
        if (this.$refs.zoomedImage) {
          this.$refs.zoomedImage.classList.remove("is-active");
        }
        this.isZoomed = false;
      },
      destroy: function () {
        this.$refs.image.removeEventListener("click", this.imageClickListener);
        this.$refs.zoomedImage.addEventListener("click", this.dezoomImage);
      },
      resize: function () {
        this.checkIfZoomable();
        this.dezoomImage();
      }
    }
  }
</script>
