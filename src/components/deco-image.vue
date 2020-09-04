
<template>
  <div
    class="deco-image"
    v-bind:class="{'is-loaded' : isLoaded}"
    ref="container"
  >
    <img
      v-bind:src="this.finalURL"
      alt="decoration"
      class="deco-image__el"
      @load="imageLoaded"
      v-bind:class="{'is-hidden' : this.backgroundImage}"
    >
  </div>
</template>

<script>
  export default {
    name: 'deco-image',
    props: {
      url: String,
      hdRatio: {
        type: Number,
        default: 1
      },
      autoLoad: {
        type: Boolean,
        default: true
      },
      backgroundImage: {
        type: Boolean,
        default: false
      }
    },
    data: function () {
      return {
        finalURL: undefined,
        hdMinViewportWidth: 768,
        isLoaded: false,
        windowW: 0,
        windowH: 0
      }
    },
    mounted () {
      if (this.autoLoad == true) this.loadImage();
    },
    methods: {
      loadImage: function () {
        this.computeHD();

        if (this.backgroundImage == true) {
          this.$refs.container.style.backgroundImage=`url('${this.finalURL}')`;
        }
      },
      imageLoaded: function () {
        this.isLoaded = true;
        this.$emit('loaded');
      },
      computeHD: function () {
        this.getWindowSize();
        if (window.devicePixelRatio > 1 && this.windowW > this.hdMinViewportWidth && this.hdRatio > 1) {
          const splittedURL = this.url.split('.');
          this.finalURL = splittedURL[0]+'_hd.'+splittedURL[1];
        } else {
          this.finalURL = this.url;
        }
      },
      getWindowSize: function () {
        this.windowW = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        this.windowH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
      }
    }
  }
</script>
