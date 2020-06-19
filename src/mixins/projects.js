export default {
  data() {
    return {
      isMounted: false,
      refsArray: undefined,
    }
  },
  methods: {
    mount () {
      this.isMounted = true;
      requestAnimationFrame(() => {
        this.refsArray = Object.values(this.$refs);
      });
      window.addEventListener('resize', this.resize);
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

      window.removeEventListener('resize', this.resize);
    }
  }
}
