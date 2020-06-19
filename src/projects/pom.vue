
<template>
  <project>
    <!-- Contenu Pom -->
  </project>
</template>

<script>
  import Vue from "vue";
  import Project from '../components/project-detail.vue';
  import projectsMixins from '../mixins/projects';

  export default Vue.extend({
    components: {
      'project': Project
    },
    mixins: [projectsMixins],
    data: function () {
      return {
        mediasPath: "/projects/st/"
      }
    },
    mounted () {
      this.mount();
    },
    beforeDestroy () {
      this.destroy();
    }
  });
</script>

