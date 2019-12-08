
<template>
  <div>
    <ProjectList
      class="projects-list"
      v-for="project in projects.main"
      v-bind:key="project.title"
      v-bind:title="project.title"
      v-bind:type="project.type"
      v-bind:year="project.year"
      v-bind:color="project.color"
    >
    </ProjectList>
  </div>
</template>

<script>
  import Vue from "vue";
  import ProjectList from './project-list.vue';
  import * as projects from '../../content/projects.json';

  export default Vue.extend({
    components: {
      ProjectList
    },
    data() {
      return {
        projects: projects
      }
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
