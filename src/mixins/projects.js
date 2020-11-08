export default {
  data() {
    return {
      isDisplayed: false, // here instead of projects because of inheritance for the routes/app for displaying after splash screen
      isMounted: false,
      refsArray: undefined,
      delayedLoadsArray: undefined,
      observer: undefined,
      observerItems: undefined,
      observerRootMargin: "-10%" //20vh to compensate
    }
  },
  methods: {
    mount () {
      this.isMounted = true;
      requestAnimationFrame(() => {
        this.refsArray = Object.values(this.$refs);
        this.setDelayedLoads();
        this.setIntersectionObserver();
      });
      window.addEventListener('resize', this.resize);

      setTimeout(this.display, 350);
    },
    display () {
      if (this.$parent.isLoaded == true) {
        this.isDisplayed = true;
      }
    },
    setDelayedLoads () {
      this.delayedLoadsArray = [];

      this.refsArray.forEach(ref => {
        if (ref.loadImage && ref.autoLoad == false) {
          this.delayedLoadsArray.push(ref);
        }
      });

      this.loadNextImage();
    },
    loadNextImage () {
      if (this.delayedLoadsArray.length > 0) {
        this.delayedLoadsArray[0].loadImage();
        this.delayedLoadsArray.shift();
      }
    },
    setIntersectionObserver () {
      this.observerItems = document.body.querySelectorAll('.observed');

      if(this.observerItems.length >= 1) {
        if (!!window.IntersectionObserver) {
          this.observer = new IntersectionObserver(this.intersectionListener, {
            rootMargin: this.observerRootMargin
          });

          this.observerItems.forEach(item => {
            this.observer.observe(item);
          });
        }
      }
    },
    intersectionListener: function (entries, observer) {
      entries.forEach(entry => {
        const isVideo = entry.target.hasAttribute('isvideo');
        let videoComponent;

        if (isVideo == true) {
          const videoID = entry.target.getAttribute('id');
          this.refsArray.forEach((item) => {
            if(item.$el) {
              if (item.$el.getAttribute('id') == videoID) {
                videoComponent = item;
              }
            }
          });

          if(entry.isIntersecting){
            videoComponent.enter();
          } else {
            videoComponent.leave();
          }
        }
      });
    },

    resize () {
      if (this.customResize) {
        this.customResize();
      }

      this.refsArray.forEach(ref => {
        if (ref.resize) {
          ref.resize();
        }
      });
    },
    destroy () {
      if (this.refsArray) {
        this.refsArray.forEach(ref => {
          if (ref.destroy) {
            ref.destroy();
          }
        });
        this.refsArray = [];
      }

      this.delayedLoadsArray = [];

      if (this.observer) {
        this.observerItems.forEach(item => {
          this.observer.unobserve(item);
        });
        this.observer.disconnect();
      }

      window.removeEventListener('resize', this.resize);
    }
  }
}
