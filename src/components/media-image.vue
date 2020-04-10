
<template>
  <div
    class="media-image"
    v-bind:class="{'is-loaded' : isLoaded, 'is-zoomable': isZoomable, 'is-zoomed': isZoomed}"
    ref="container"
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
  import debounce from 'lodash/debounce';
  import Preloader from './preloader.vue';

  export default {
    name: 'media-image',
    components: {
      'preloader': Preloader
    },
    props: {
      url: String,
      title: String,
      zoomable: Boolean,
      zoomableGutter: Boolean
    },
    data: function () {
      return {
        scrollTop: 0,
        scrollTopLast: 0,
        scrollDebounced: undefined,
        windowW: 0,
        windowH: 0,
        windowGutter: 0,
        isLoaded: false,
        isZoomed: false,
        isZoomable: false,
        isZoomIconListeningMouseMove: false,
        zoomRatio: 0,
        zoomIconPosition: {
          x: undefined,
          y: undefined,
        },
        zoomedImagePosition: {
          x: 0,
          x: 0
        },
        zoomedImagePositionInit: {
          x: 0,
          x: 0
        },
        zoomedImagePositionTarget: {
          x: 0,
          x: 0
        },
        zoomedImagePositionFrom: {
          x: 0,
          x: 0
        },
        zoomedImageAnimationFrame: undefined,
        zoomedImageAnimationEase: 0.05,
        zoomedImageAnimationOutDuration: 0,
        zoomedImageAnimationOutInterval: undefined,
        zoomedImageAnimationOutStart: 0,
        zoomedImageAnimationOutTime: 0,
        zoomedImageScrollRatioToDezoom: 0.2
      }
    },
    mounted () {
      if(this.zoomable == true){
        this.getWindowSize();
        this.getWindowGutter();
        this.createZoomIcon();
        this.$refs.image.addEventListener('click', this.imageClickListener);
        this.$refs.image.addEventListener('mouseenter', this.imageEnterListener);
        this.$refs.image.addEventListener('mouseleave', this.imageLeaveListener);
      }
    },
    methods: {
      imageLoaded: function () {
        this.isLoaded = true;

        this.checkIfZoomable();
      },
      checkIfZoomable: function () {
        if(this.zoomable == true && this.$refs.image.offsetWidth < this.$refs.image.naturalWidth) {
          this.isZoomable = true;
          this.zoomRatio = this.$refs.image.offsetWidth / this.$refs.image.naturalWidth;
        } else {
          this.isZoomable = false;
        }
      },
      imageClickListener: function (e) {
        if(this.isZoomable) {
          if (this.isZoomed == false) {
            this.zoomImage();
            this.setZoomedImagePositionOnMouseMove(e.clientX, e.clientY);
          } else {
            this.dezoomImage();
          }
        }
      },
      imageEnterListener: function (e) {
        window.zoomIcon.classList.add('is-active');
        this.startZoomIconMouseMoveListening();
      },
      imageLeaveListener: function (e) {
        if(this.isZoomed == false) {
          window.zoomIcon.classList.remove('is-active');
          this.stopZoomIconMouseMoveListening();
        }
      },
      createZoomIcon: function () {
        let zoomIconEl = document.createElement('div');
            zoomIconEl.classList.add('zoom-icon__el');

        this.$refs.zoomIcon = document.createElement('div');
        this.$refs.zoomIcon.classList.add('zoom-icon');
        this.$refs.zoomIcon.classList.add('media-image__zoom-icon');
        this.$refs.zoomIcon.appendChild(zoomIconEl);
        this.$refs.container.appendChild(this.$refs.zoomIcon);

        if (!window.zoomIcon) {
          window.zoomIcon = document.createElement('div');
          window.zoomIcon.classList.add('zoom-icon');
          window.zoomIcon.classList.add('is-global');
          window.zoomIcon.classList.add('is-inverted');
          window.zoomIcon.appendChild(zoomIconEl.cloneNode(true));
          document.body.appendChild(window.zoomIcon);
        }
      },
      startZoomIconMouseMoveListening: function () {
        if (this.isZoomIconListeningMouseMove == false) {
          this.isZoomIconListeningMouseMove = true;
          window.addEventListener('mousemove', this.zoomIconMouseMoveListener); //debounce?
        }
      },
      stopZoomIconMouseMoveListening: function () {
        this.isZoomIconListeningMouseMove = false;
        window.removeEventListener('mousemove', this.zoomIconMouseMoveListener); //debounce?
      },
      deactiveZoomIcon: function () {
        window.zoomIcon.classList.remove('is-active');
        this.stopZoomIconMouseMoveListening();
      },
      positionZoomIcon: function () {
        window.zoomIcon.style.left = this.zoomIconPosition.x + 'px';
        window.zoomIcon.style.top = this.zoomIconPosition.y + 'px';
      },
      createZoomedBackground: function () {
        if (!window.zoomedImageBackground) {
          window.zoomedImageBackground = document.createElement('div');
          window.zoomedImageBackground.classList.add('media-image-zoomed-background');
          document.body.appendChild(window.zoomedImageBackground);
        }
      },
      backgroundImageClickListener: function () {
        this.dezoomImage();
        this.deactiveZoomIcon();
      },
      createZoomedImage: function () {
        this.$refs.zoomedImage = this.$refs.image.cloneNode(true);
        this.$refs.zoomedImage.className = '';
        this.$refs.zoomedImage.classList.add('media-image-zoomed');
        this.$refs.zoomedImage.style.setProperty('--s-scale-dezoomed', this.zoomRatio);
        this.$refs.zoomedImage.addEventListener('click', this.dezoomImage);
        document.body.appendChild(this.$refs.zoomedImage);

        this.zoomedImageAnimationOutDuration = parseFloat(getComputedStyle(this.$refs.zoomedImage).getPropertyValue('--d-zooming').split('s')[0]) * 1000;
      },
      setZoomedImage: function () {
        const imageRect = this.$refs.image.getBoundingClientRect();
        this.scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        this.scrollTopLast = this.scrollTop <= 0 ? 0 : this.scrollTop;

        this.zoomedImagePositionInit.x = imageRect.left - (this.$refs.image.naturalWidth - this.$refs.image.offsetWidth) * 0.5; // imageRect.height prendre en compte scale final si limitée (pour mobile)
        this.zoomedImagePositionInit.y = (imageRect.top + this.scrollTop) - (this.$refs.image.naturalHeight - this.$refs.image.offsetHeight) * 0.5;
        this.zoomedImagePosition.x = this.zoomedImagePositionInit.x;
        this.zoomedImagePosition.y = this.zoomedImagePositionInit.y;

        this.positionZoomedImage();

        this.$refs.zoomedImage.style.setProperty('--s-scale-dezoomed', this.zoomRatio);
      },
      positionZoomedImage: function() {
        this.$refs.zoomedImage.style.left = this.zoomedImagePosition.x + 'px';
        this.$refs.zoomedImage.style.top = this.zoomedImagePosition.y + 'px';
      },
      easeZoomedImage: function (t, b, c, d) {
        return -c * ((t=t/d-1)*t*t*t - 1) + b; // outQuart https://kodhus.com/easings/
      },
      mapZoomedImagePositionToMouse: function(num, in_min, in_max, out_min, out_max) {
        return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
      },
      setZoomedImagePositionOnMouseMove: function (mouseX, mouseY) {
        this.zoomedImagePositionTarget.x = this.mapZoomedImagePositionToMouse( mouseX/this.windowW, 0, 1, this.windowGutter, (this.$refs.image.naturalWidth - this.windowW + this.windowGutter) * -1); // imageRect.height prendre en compte scale final si limitée (pour mobile)
      },
      animateZoomedImage: function () {
        this.zoomedImagePosition.x = this.zoomedImagePosition.x + (this.zoomedImagePositionTarget.x - this.zoomedImagePosition.x) * this.zoomedImageAnimationEase;

        this.positionZoomedImage();

        this.zoomedImageAnimationFrame = requestAnimationFrame(this.animateZoomedImage);
      },
      animateZoomedImageOut: function () {
        this.positionZoomedImage();
        this.zoomedImageAnimationFrame = requestAnimationFrame(this.animateZoomedImageOut);
      },
      animateZoomedImageOutInterval: function () {
        this.zoomedImageAnimationOutTime = new Date().getTime() - this.zoomedImageAnimationOutStart;

        this.zoomedImagePosition.x = this.easeZoomedImage(this.zoomedImageAnimationOutTime, this.zoomedImagePositionFrom.x, this.zoomedImagePositionInit.x - this.zoomedImagePositionFrom.x, this.zoomedImageAnimationOutDuration);

        if (this.zoomedImageAnimationOutTime >= this.zoomedImageAnimationOutDuration) {
          this.animateZoomedImageOutComplete();
        }
      },
      animateZoomedImageOutComplete: function () {
        clearInterval(this.zoomedImageAnimationOutInterval);
        window.cancelAnimationFrame(this.zoomedImageAnimationFrame);
      },
      launchZoomedImageAnimationOut: function () {
        window.cancelAnimationFrame(this.zoomedImageAnimationFrame);

        this.zoomedImagePositionFrom.x = this.zoomedImagePosition.x;

        this.zoomedImageAnimationOutStart = new Date().getTime();
        this.zoomedImageAnimationOutInterval = setInterval(this.animateZoomedImageOutInterval, 1000 / 60);
        this.zoomedImageAnimationFrame = requestAnimationFrame(this.animateZoomedImageOut);
      },
      zoomImage: function () {
        if (this.$refs.zoomedImage == undefined) {
          this.createZoomedBackground();
          this.createZoomedImage();
          this.scrollDebounced = debounce(this.scrollListener, 200);
        }

        this.setZoomedImage();

        requestAnimationFrame(() => {
          this.$refs.zoomedImage.classList.add('is-active');
          window.zoomedImageBackground.classList.add('is-active');
          window.zoomedImageBackground.addEventListener('click', this.backgroundImageClickListener);
        });

        if (this.windowW < this.$refs.image.naturalWidth + this.windowGutter * 2) {
          this.zoomedImageAnimationFrame = requestAnimationFrame(this.animateZoomedImage);
          window.addEventListener('mousemove', this.zoomedImageMouseMoveListener);
        }

        window.addEventListener('scroll', this.scrollDebounced);
        window.zoomIcon.classList.add('is-zoomed');

        this.isZoomed = true;
      },
      dezoomImage: function () {
        if (this.$refs.zoomedImage) {
          this.$refs.zoomedImage.classList.remove('is-active');

          window.zoomedImageBackground.classList.remove('is-active');
          window.zoomedImageBackground.removeEventListener('click', this.backgroundImageClickListener);

          if (this.scrollDebounced) this.scrollDebounced.cancel();

          window.removeEventListener('scroll', this.scrollDebounced);
          window.removeEventListener('mousemove', this.zoomedImageMouseMoveListener);

          this.launchZoomedImageAnimationOut();

          window.zoomIcon.classList.remove('is-zoomed');
        }

        this.isZoomed = false;
      },
      zoomedImageMouseMoveListener: function (e) {
        this.setZoomedImagePositionOnMouseMove(e.clientX, e.clientY);
      },
      zoomIconMouseMoveListener: function (e) {
        this.zoomIconPosition.x = e.clientX;
        this.zoomIconPosition.y = e.clientY;

        this.positionZoomIcon();
      },
      scrollListener: function (e) {
        this.scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        const scrollDirection = (this.scrollTop > this.scrollTopLast) ? 0 : 1;
        const imageRect = this.$refs.zoomedImage.getBoundingClientRect();

        if (scrollDirection == 1 && imageRect.top > this.windowH * this.zoomedImageScrollRatioToDezoom) { // imageRect.height prendre en compte scale final si limitée (pour mobile)
          this.dezoomImage();
          this.deactiveZoomIcon();
        } else if (scrollDirection == 0 && (imageRect.bottom - this.windowH) * -1 > this.windowH * this.zoomedImageScrollRatioToDezoom) {
          this.dezoomImage();
          this.deactiveZoomIcon();
        }

        this.scrollTopLast = this.scrollTop <= 0 ? 0 : this.scrollTop;
      },
      destroy: function () {
        if(this.zoomable == true){
          this.$refs.image.removeEventListener('click', this.imageClickListener);
          this.$refs.image.removeEventListener('mouseenter', this.imageEnterListener);
          this.$refs.image.removeEventListener('mouseleave', this.imageLeaveListener);
          this.stopZoomIconMouseMoveListening();
        }
        if(this.$refs.zoomedImage) {
          this.$refs.zoomedImage.removeEventListener('click', this.dezoomImage);
          document.body.removeChild(this.$refs.zoomedImage);
          this.$refs.zoomedImage = undefined
          if (window.zoomIcon) {
            document.body.removeChild(window.zoomIcon);
            window.zoomIcon = undefined;
          }
          if (window.zoomedImageBackground) {
            window.zoomedImageBackground.removeEventListener('click', this.backgroundImageClickListener);
            document.body.removeChild(window.zoomedImageBackground);
            window.zoomedImageBackground = undefined;
          }
          if (this.zoomedImageAnimationOutInterval) clearInterval(this.zoomedImageAnimationOutInterval);
          if (this.zoomedImageAnimationFrame) window.cancelAnimationFrame(this.zoomedImageAnimationFrame);
        }
      },
      getWindowSize: function () {
        this.windowW = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        this.windowH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
      },
      getWindowGutter: function () {
        if (this.zoomableGutter) {
          const windowGutterCSS = getComputedStyle(document.body).getPropertyValue('--s-gutter');

          if (windowGutterCSS.split('vw').length > 1) {
            this.windowGutter = parseFloat(windowGutterCSS.split('vw')[0])/100 * this.windowW;
          } else {
            this.windowGutter = parseFloat(windowGutterCSS.split('vh')[0])/100 * this.windowH;
          }
        }
      },
      resize: function () {
        this.getWindowSize();
        if (this.zoomable) {
          this.getWindowGutter();
          this.checkIfZoomable();
          if (this.isZoomed) {
            this.dezoomImage();
          }
        }
      }
    }
  }
</script>
