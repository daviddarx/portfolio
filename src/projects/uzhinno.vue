
<template>
  <project
    v-if="this.isMounted"
    class="uzh"
    v-bind:class="{ 'is-displayed': this.isDisplayed }"
  >
    <!-- Contenu uzhinno -->
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

