
<template>
  <div class="projects">
    <project-list
      class="projects-list"
      v-for="project in projects.main"
      v-bind:key="project.title"
      v-bind:datas="project"
    >
    </project-list>
    <div class="credits">
      Copyright © 2019 - Frontend: David Darx
    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  import ProjectList from './project-list.vue';
  import * as projects from '../../content/projects.json';

  export default Vue.extend({
    components: {
      'project-list': ProjectList
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

