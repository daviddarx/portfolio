
<template>
  <div
    class="media-image"
    v-bind:class="{'is-loaded' : isLoaded, 'is-zoomable': isZoomable, 'is-zoomed': isZoomed, 'is-inline': isInline}"
    ref="container"
  >
    <preloader class="media-image__preloader"></preloader>
    <img
      v-bind:src="this.finalURL"
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
      hdRatio: Number,
      zoomable: Boolean,
      zoomableGutter: Boolean,
      isInline: {
        type: Boolean,
        default: false
      }
    },
    data: function () {
      return {
        finalURL: undefined,
        hdRatioReversed: undefined,
        hdMinViewportWidth: 768,
        imageRect: undefined,
        imageNaturalWidthComputed: undefined,
        imageNaturalHeightComputed: undefined,
        scrollTop: 0,
        scrollTopLast: 0,
        scrollDebounced: undefined,
        moveDebounced: undefined,
        moveDebouncedZoomIcon: undefined,
        windowW: 0,
        windowH: 0,
        windowGutter: 0,
        isLoaded: false,
        isZoomed: false,
        isZoomable: false,
        isZoomIconListeningMouseMove: false,
        isMouseMoveHorizontal: false,
        isMouseMoveVertical: false,
        mouseMoveVerticalGutter: undefined,
        scaleDezoomed: 0,
        scaleZoomed: 1,
        zoomMaxWidthRatioToWindowW: 1.2,
        zoomedIconAnimationFrame: undefined,
        zoomedIconAnimationEase: 0.1,
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
        zoomedImagePositionLeftSide: 0,
        zoomedImagePositionRightSide: 0,
        zoomedImagePositionTopSide: 0,
        zoomedImagePositionBottomSide: 0,
        zoomedImageAnimationFrame: undefined,
        zoomedImageAnimationEase: 0.05,
        zoomedImageAnimationOutDuration: 0,
        zoomedImageAnimationOutInterval: undefined,
        zoomedImageAnimationOutStart: 0,
        zoomedImageAnimationOutTime: 0,
        zoomedImageScrollRatioToDezoom: 0.2,
        displayZoomedImageTimeout: undefined,
        displayZoomedImageTimeoutDuration: 100,
        minimalRatioToZoomImageOnRetina: 1
      }
    },
    mounted () {
      this.getWindowSize();

      this.computeHD();

      if(this.zoomable == true){
        this.setImageWindowGutter();
        this.createZoomIcon();
        this.$refs.container.addEventListener('click', this.imageClickListener);

        if (window.isTouch == false) {
          this.$refs.image.addEventListener('mouseenter', this.imageEnterListener);
          this.$refs.image.addEventListener('mouseleave', this.imageLeaveListener);
        }
      }
    },
    methods: {
      imageLoaded: function () {
        this.isLoaded = true;

        this.computeImageNaturalDimensions();
        this.checkIfZoomable();
      },
      computeHD: function () {
        if (window.devicePixelRatio > 1 && this.windowW > this.hdMinViewportWidth && this.hdRatio) {
          const splittedURL = this.url.split('.');
          this.finalURL = splittedURL[0]+'_hd.'+splittedURL[1];
          this.hdRatioReversed = 1 / this.hdRatio;
        } else {
          this.finalURL = this.url;
          this.hdRatioReversed = 1;
        }
      },
      computeImageNaturalDimensions: function () {
        this.imageNaturalWidthComputed = Math.round(this.$refs.image.naturalWidth * this.hdRatioReversed);
        this.imageNaturalHeightComputed = Math.round(this.$refs.image.naturalHeight * this.hdRatioReversed);
      },
      checkIfZoomable: function () {
        if(this.zoomable == true && this.$refs.image.offsetWidth < this.imageNaturalWidthComputed) {
          if (window.devicePixelRatio > 1 && this.imageNaturalWidthComputed / this.$refs.image.offsetWidth < this.minimalRatioToZoomImageOnRetina) {
            this.isZoomable = false;
          } else {
            this.isZoomable = true;
            this.scaleDezoomed = this.$refs.image.offsetWidth / this.imageNaturalWidthComputed * this.hdRatioReversed;
          }
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
        if (this.isZoomable == true) {
          window.zoomIcon.classList.add('is-active');
        }
      },
      imageLeaveListener: function (e) {
        if(this.isZoomable == true && this.isZoomed == false) {
          window.zoomIcon.classList.remove('is-active');
        }
      },
      createZoomIcon: function () {
        let zoomIconEl = document.createElement('div'); //touch
            zoomIconEl.classList.add('zoom-icon__el');

        this.$refs.zoomIcon = document.createElement('div');
        this.$refs.zoomIcon.classList.add('zoom-icon');
        this.$refs.zoomIcon.classList.add('media-image__zoom-icon');
        this.$refs.zoomIcon.appendChild(zoomIconEl);
        this.$refs.container.appendChild(this.$refs.zoomIcon);

        if (!window.zoomIcon) { //only one media-image manage the global zoom icon on window
          window.zoomIcon = document.createElement('div');
          window.zoomIcon.classList.add('zoom-icon');
          window.zoomIcon.classList.add('is-global');
          window.zoomIcon.classList.add('is-inverted');
          window.zoomIcon.appendChild(zoomIconEl.cloneNode(true));
          document.body.appendChild(window.zoomIcon);
          if (window.isTouch == false) {
            this.startZoomIconMouseMoveAnimation();
          }
        }
      },
      deactiveZoomIcon: function () {
        window.zoomIcon.classList.remove('is-active');
      },
      startZoomIconMouseMoveAnimation: function () {
        window.zoomIconPosition = {
          x: this.windowW * 0.5,
          y: this.windowH * 0.5,
        };
        window.zoomIconPositionTarget = {
           x: this.windowW * 0.5,
          y: this.windowH * 0.5,
        };
        this.isZoomIconListeningMouseMove = true;
        this.moveDebouncedZoomIcon = debounce(this.zoomIconMouseMoveListener, 1);
        window.addEventListener('mousemove', this.moveDebouncedZoomIcon);
        this.zoomedIconAnimationFrame = requestAnimationFrame(this.animateZoomIcon);
      },
      stopZoomIconMouseMoveAnimation: function () {
        if (this.isZoomIconListeningMouseMove == true) {
          this.isZoomIconListeningMouseMove = false;
          window.removeEventListener('mousemove', this.moveDebouncedZoomIcon);
          window.cancelAnimationFrame(this.zoomedIconAnimationFrame);
          document.body.removeChild(window.zoomIcon);
          window.zoomIcon = undefined;
        }
      },
      positionZoomIcon: function () {
        window.zoomIcon.style.left = window.zoomIconPosition.x + 'px';
        window.zoomIcon.style.top = window.zoomIconPosition.y + 'px';
      },
      animateZoomIcon: function () {
        if (window.zoomIconPosition.x != undefined) { 
          window.zoomIconPosition.x = window.zoomIconPosition.x + (window.zoomIconPositionTarget.x - window.zoomIconPosition.x) * this.zoomedIconAnimationEase;
          window.zoomIconPosition.y = window.zoomIconPosition.y + (window.zoomIconPositionTarget.y - window.zoomIconPosition.y) * this.zoomedIconAnimationEase;
          this.positionZoomIcon();
        }

        this.zoomedIconAnimationFrame = requestAnimationFrame(this.animateZoomIcon);
      },
      zoomIconMouseMoveListener: function (e) {
        window.zoomIconPositionTarget.x = e.clientX;
        window.zoomIconPositionTarget.y = e.clientY;
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
        this.$refs.zoomedImage.style.setProperty('--s-scale-dezoomed', this.scaleDezoomed);
        this.$refs.zoomedImage.addEventListener('click', this.dezoomImage);
        document.body.appendChild(this.$refs.zoomedImage);

        this.zoomedImageAnimationOutDuration = parseFloat(getComputedStyle(this.$refs.zoomedImage).getPropertyValue('--d-zooming').split('s')[0]) * 1000;
      },
      setZoomedImage: function () {
        if (this.imageNaturalWidthComputed / this.windowW > this.zoomMaxWidthRatioToWindowW) {
          const maxWidth = this.windowW * this.zoomMaxWidthRatioToWindowW;
          this.scaleZoomed = maxWidth / this.imageNaturalWidthComputed * this.hdRatioReversed;
        } else {
          this.scaleZoomed = 1 * this.hdRatioReversed;
        }

        this.$refs.zoomedImage.style.setProperty('--s-scale-dezoomed', this.scaleDezoomed);
        this.$refs.zoomedImage.style.setProperty('--s-scale-zoomed', this.scaleZoomed);

        this.imageRect = this.$refs.image.getBoundingClientRect();
        this.scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        this.scrollTopLast = this.scrollTop <= 0 ? 0 : this.scrollTop;

        this.zoomedImagePositionInit.x = this.imageRect.left - (this.$refs.image.naturalWidth - this.$refs.image.offsetWidth) * 0.5;
        this.zoomedImagePositionInit.y = (this.imageRect.top + this.scrollTop) - (this.$refs.image.naturalHeight - this.$refs.image.offsetHeight) * 0.5;
        this.zoomedImagePosition.x = this.zoomedImagePositionInit.x;
        this.zoomedImagePosition.y = this.zoomedImagePositionInit.y;

        if (this.hdRatioReversed == 1){
          this.isMouseMoveVertical = (this.zoomedImagePosition.y < 0 ) ? true : false;
        } else {
          this.isMouseMoveVertical = (this.zoomedImagePosition.y < -this.$refs.image.naturalHeight * this.scaleZoomed * 0.5 ) ? true : false;
        }
        if (this.isMouseMoveVertical == true) {
          this.mouseMoveVerticalGutter = this.getWindowGutter();
        }

        this.calculateZoomedImagePositionSides();

        this.positionZoomedImage();
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
      calculateZoomedImagePositionSides: function () {
        this.zoomedImagePositionLeftSide = this.windowGutter + (this.$refs.image.naturalWidth - this.$refs.image.naturalWidth * this.scaleZoomed) * -0.5;
        this.zoomedImagePositionRightSide = this.zoomedImagePositionLeftSide - (this.$refs.image.naturalWidth * this.scaleZoomed - this.windowW) - this.windowGutter * 2;

        if (this.isMouseMoveVertical == true) {
          if (this.hdRatioReversed == 1){
            this.zoomedImagePositionTopSide = this.mouseMoveVerticalGutter;
          } else {
            this.zoomedImagePositionTopSide = - this.$refs.image.naturalHeight * this.scaleZoomed * 0.5 + this.mouseMoveVerticalGutter;
          }
          this.zoomedImagePositionBottomSide = this.zoomedImagePositionInit.y;
        }
      },
      setZoomedImagePositionOnMouseMove: function (mouseX, mouseY) {
        if (this.isMouseMoveHorizontal == true) {
          this.zoomedImagePositionTarget.x = this.mapZoomedImagePositionToMouse( mouseX/this.windowW, 0, 1, this.zoomedImagePositionLeftSide, this.zoomedImagePositionRightSide);
        }
        if (this.isMouseMoveVertical == true) {
          this.zoomedImagePositionTarget.y = this.mapZoomedImagePositionToMouse( mouseY/this.windowH, 0, 1, this.zoomedImagePositionTopSide, this.zoomedImagePositionBottomSide);
        }
      },
      animateZoomedImage: function () {
        if (this.isMouseMoveHorizontal == true) {
          this.zoomedImagePosition.x = this.zoomedImagePosition.x + (this.zoomedImagePositionTarget.x - this.zoomedImagePosition.x) * this.zoomedImageAnimationEase;
        }
        if (this.isMouseMoveVertical == true) {
          this.zoomedImagePosition.y = this.zoomedImagePosition.y + (this.zoomedImagePositionTarget.y - this.zoomedImagePosition.y) * this.zoomedImageAnimationEase;
        }

        this.positionZoomedImage();

        this.zoomedImageAnimationFrame = requestAnimationFrame(this.animateZoomedImage);
      },
      animateZoomedImageOut: function () {
        this.positionZoomedImage();
        this.zoomedImageAnimationFrame = requestAnimationFrame(this.animateZoomedImageOut);
      },
      animateZoomedImageOutInterval: function () {
        this.zoomedImageAnimationOutTime = new Date().getTime() - this.zoomedImageAnimationOutStart;

        if (this.isMouseMoveHorizontal == true) {
          this.zoomedImagePosition.x = this.easeZoomedImage(this.zoomedImageAnimationOutTime, this.zoomedImagePositionFrom.x, this.zoomedImagePositionInit.x - this.zoomedImagePositionFrom.x, this.zoomedImageAnimationOutDuration);
        }
        if (this.isMouseMoveVertical == true) {
          this.zoomedImagePosition.y = this.easeZoomedImage(this.zoomedImageAnimationOutTime, this.zoomedImagePositionFrom.y, this.zoomedImagePositionInit.y - this.zoomedImagePositionFrom.y, this.zoomedImageAnimationOutDuration);
        }

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
        this.zoomedImagePositionFrom.y = this.zoomedImagePosition.y;

        this.zoomedImageAnimationOutStart = new Date().getTime();
        this.zoomedImageAnimationOutInterval = setInterval(this.animateZoomedImageOutInterval, 1000 / 60);
        this.zoomedImageAnimationFrame = requestAnimationFrame(this.animateZoomedImageOut);
      },
      launchZoomedImageAnimation: function () {
        if (window.isTouch == false) {
          this.moveDebounced = debounce(this.zoomedImageMouseMoveListener, 1);
          window.addEventListener('mousemove', this.moveDebounced);
        } else {
          this.moveDebounced = debounce(this.zoomedImageTouchMoveListener, 1);
          window.addEventListener('touchmove', this.moveDebounced);
        }
        this.zoomedImageAnimationFrame = requestAnimationFrame(this.animateZoomedImage);
      },
      zoomImage: function () {
        if (this.$refs.zoomedImage == undefined) {
          this.createZoomedBackground();
          this.createZoomedImage();
          this.scrollDebounced = debounce(this.scrollListener, 200);
        }

        this.setZoomedImage();
        if (this.displayZoomedImageTimeout) clearTimeout(this.displayZoomedImageTimeout);
        this.displayZoomedImageTimeout = setTimeout(this.displayZoomedImage, this.displayZoomedImageTimeoutDuration);

        window.addEventListener('scroll', this.scrollDebounced);
        window.zoomIcon.classList.add('is-zoomed');

        this.isZoomed = true;
      },
      displayZoomedImage: function () {
        if (this.displayZoomedImageTimeout) clearTimeout(this.displayZoomedImageTimeout);

        this.$refs.zoomedImage.classList.add('is-active');
        window.zoomedImageBackground.classList.add('is-active');
        window.zoomedImageBackground.addEventListener('click', this.backgroundImageClickListener);

        this.isMouseMoveHorizontal = false;

        if (this.windowW < this.imageNaturalWidthComputed + this.windowGutter * 2) {
          this.isMouseMoveHorizontal = true;
          this.launchZoomedImageAnimation();
        } else if (this.isMouseMoveVertical == true) {
          this.launchZoomedImageAnimation();
        }
      },
      dezoomImage: function () {
        if (this.$refs.zoomedImage) {
          this.$refs.zoomedImage.classList.remove('is-active');

          window.zoomedImageBackground.classList.remove('is-active');
          window.zoomedImageBackground.removeEventListener('click', this.backgroundImageClickListener);

          if (this.scrollDebounced) this.scrollDebounced.cancel();
          if (this.moveDebounced) this.moveDebounced.cancel();
          if (this.moveDebouncedZoomIcon) this.moveDebouncedZoomIcon.cancel();

          window.removeEventListener('scroll', this.scrollDebounced);

          if (window.isTouch == false) {
            window.removeEventListener('mousemove', this.moveDebounced);
          } else {
            window.removeEventListener('touchmove', this.moveDebounced);
          }

          this.launchZoomedImageAnimationOut();

          window.zoomIcon.classList.remove('is-zoomed');
        }

        this.isZoomed = false;
      },
      hideZoomedImageOnResize: function () {
        if (window.isTouch == false) { //fix resize bug on iphone
          this.$refs.zoomedImage.classList.add('is-hidden');
          setTimeout(() => {
            this.$refs.zoomedImage.classList.remove('is-hidden');
          }, this.zoomedImageAnimationOutDuration);
          this.dezoomImage();
        }
      },
      zoomedImageMouseMoveListener: function (e) {
        this.setZoomedImagePositionOnMouseMove(e.clientX, e.clientY);
      },
      zoomedImageTouchMoveListener: function (e) {
        this.setZoomedImagePositionOnMouseMove(e.touches[0].pageX, e.touches[0].pageY);
      },
      scrollListener: function (e) {
        this.scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        const scrollDirection = (this.scrollTop > this.scrollTopLast) ? 0 : 1;
        this.imageRect = this.$refs.zoomedImage.getBoundingClientRect();

        if (scrollDirection == 1 && this.imageRect.top > this.windowH * this.zoomedImageScrollRatioToDezoom) {
          this.dezoomImage();
          this.deactiveZoomIcon();
        } else if (scrollDirection == 0 && (this.imageRect.bottom - this.windowH) * -1 > this.windowH * this.zoomedImageScrollRatioToDezoom) {
          this.dezoomImage();
          this.deactiveZoomIcon();
        }

        this.scrollTopLast = this.scrollTop <= 0 ? 0 : this.scrollTop;
      },
      destroy: function () {
        if(this.zoomable == true){
          this.$refs.container.removeEventListener('click', this.imageClickListener);
          this.$refs.image.removeEventListener('mouseenter', this.imageEnterListener);
          this.$refs.image.removeEventListener('mouseleave', this.imageLeaveListener);
          this.stopZoomIconMouseMoveAnimation();
        }
        if(this.$refs.zoomedImage) {
          if (this.displayZoomedImageTimeout) clearTimeout(this.displayZoomedImageTimeout);
          this.$refs.zoomedImage.removeEventListener('click', this.dezoomImage);
          document.body.removeChild(this.$refs.zoomedImage);
          this.$refs.zoomedImage = undefined;
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
      setImageWindowGutter: function () {
        if (this.zoomableGutter) {
          this.windowGutter = this.getWindowGutter();
        }
      },
      getWindowGutter: function () {
        const windowGutterCSS = getComputedStyle(document.body).getPropertyValue('--s-gutter');
        let gutter;

        if (windowGutterCSS.split('vw').length > 1) {
          gutter = parseFloat(windowGutterCSS.split('vw')[0])/100 * this.windowW;
        } else {
          gutter = parseFloat(windowGutterCSS.split('vh')[0])/100 * this.windowH;
        }

        return gutter;
      },
      resize: function () {
        this.getWindowSize();
        if (this.zoomable) {
          this.setImageWindowGutter();
          this.checkIfZoomable();
          this.deactiveZoomIcon();
          if (this.isZoomed) this.hideZoomedImageOnResize();
        }
      }
    }
  }
</script>
