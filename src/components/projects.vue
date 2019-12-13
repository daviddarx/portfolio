
<template>
  <div class="projects">
    <project-list
      class="projects-list"
      v-for="project in projects.main"
      v-bind:key="project.title"
      v-bind:datas="project"
      v-on:open-project="openProject($event)"
    >
    </project-list>
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
      },
      openProject: function (event) {
        console.log("open " + event );
      }
    }
  });
</script>

