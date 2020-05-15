export default {
  data() {
    return {
      isMounted: false,
    }
  },
  methods: {
    mount () {
      this.isMounted = true;
      window.addEventListener('resize', this.resize);
    },
    resize () {
      const refsArray = Object.values(this.$refs);
      refsArray.forEach(ref => {
        if (ref.resize) {
          ref.resize();
        }
      });
    },
    destroy () {
      const refsArray = Object.values(this.$refs);
      refsArray.forEach(ref => {
        if (ref.destroy) {
          ref.destroy();
        }
      });

      window.removeEventListener('resize', this.resize);
    }
  }
}
