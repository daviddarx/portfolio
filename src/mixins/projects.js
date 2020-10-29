export default {
  data() {
    return {
      isMounted: false,
      refsArray: undefined,
      delayedLoadsArray: undefined,
      observer: undefined,
      observerItems: undefined,
      observerRootMargin: "-10%", //20vh to compensate,
      startTime: 0,
      endTime: 0
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
      this.startTime = new Date();
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
      this.endTime = new Date();
      var timeDiff = (this.endTime - this.startTime) / 1000;
      console.log("image loaded files.daviddarx.com – " + this.delayedLoadsArray.length + " – " + timeDiff);

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
