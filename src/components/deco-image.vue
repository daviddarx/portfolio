
<template>
  <img
    v-bind:src="this.finalURL"
    alt="decoration"
    @load="imageLoaded"
    class="deco-image"
    v-bind:class="{'is-loaded' : isLoaded}"
  >
</template>

<script>
  export default {
    name: 'deco-image',
    props: {
      url: String,
      hdRatio: Number,
    },
    data: function () {
      return {
        finalURL: undefined,
        hdMinViewportWidth: 768,
        isLoaded: false,
        windowW:0,
        windowH: 0
      }
    },
    mounted () {
      this.computeHD();
    },
    methods: {
      imageLoaded: function () {
        this.isLoaded = true;
      },
      computeHD: function () {
        this.getWindowSize();
        if (window.devicePixelRatio > 1 && this.windowW > this.hdMinViewportWidth && this.hdRatio) {
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
