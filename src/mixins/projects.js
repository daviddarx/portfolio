export default {
  data() {
    return {
      isMounted: false,
      refsArray: undefined,
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
        this.setIntersectionObserver();
      });
      window.addEventListener('resize', this.resize);
    },
    setIntersectionObserver () {
      this.observerItems = document.body.querySelectorAll('.observed');

      if (!!window.IntersectionObserver) {
        this.observer = new IntersectionObserver(this.intersectionListener, {
          rootMargin: this.observerRootMargin
        });

        this.observerItems.forEach(item => {
          this.observer.observe(item);
        });
      }
    },
    intersectionListener: function (entries, observer) {
      entries.forEach(entry => {
        const isVideo = entry.target.hasAttribute('isvideo');
        let videoComponent;

        if (isVideo == true) {
          const videoID = entry.target.getAttribute('id');
          this.refsArray.forEach((item) => {
            if (item.$el.getAttribute('id') == videoID) {
              videoComponent = item;
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
      this.refsArray.forEach(ref => {
        if (ref.resize) {
          ref.resize();
        }
      });
    },
    destroy () {
      this.refsArray.forEach(ref => {
        if (ref.destroy) {
          ref.destroy();
        }
      });
      this.refsArray = [];

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
