
<template>
  <div class="project">
    pom+Consulting
  </div>
</template>

<script>
  import Vue from "vue";
  import ProjectPagination from '../components/project-pagination.vue';

  export default Vue.extend({
    data() {
      return {
      }
    },
    components: {
      'project-pagination': ProjectPagination
    },
    mounted () {
      this.init();
    },
    methods: {
      init: function () {
      }
    }
  });
</script>

