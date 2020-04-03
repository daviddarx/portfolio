<template>
  <div
    class="preloader"
  >
      <svg class="preloader__svg" viewBox="25 25 50 50">
        <circle
          class="preloader__path"
          cx="50"
          cy="50"
          r="20"
          fill="none"
          stroke-miterlimit="10"
        />
      </svg>
  </div>
</template>

<script>
  export default {
    name: 'preloader',
    data: function () {
      return {
      }
    },
    mounted () {
    },
    methods: {
    }
  }
</script>
