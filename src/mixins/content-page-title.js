export default {
  data() {
    return {
      isTitleHidden: false,
      rootMargin: '0px 0px -80% 0px'
    }
  },
  methods: {
    intersectionObserver (isVisible, entry) {
      this.isTitleHidden = isVisible;
    },
  }
}
