
<template>
  <div
    class="projects-list"
  >
    <h2>
      {{title}}
    </h2>
    <p>
      {{year}} – {{type}}
    <p>
  </div>
</template>

<script>
  export default {
    name: 'projectlist',
    props: {
      title: String,
      type: String,
      year: String
    },
    data: function () {
      return {
      }
    },
    mounted () {
      this.init();
    },
    methods: {
      init: function () {
      }
    }
  }
</script>
