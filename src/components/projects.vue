
<template>
  <div
    class="projects"
    ref="projects"
    v-bind:style="{height: this.height}"
  >
    <div
      class="projects__container"
      ref="projectsContainer"
      v-bind:class="{ 'is-translated': this.isTranslated, 'is-masked': this.isMasked }"
    >
      <project-list
        class="projects-list"
        v-for="project in projects.main"
        v-bind:key="project.title"
        v-bind:datas="project"
      >
      </project-list>
      <div class="credits">
        Copyright © 2019 - Frontend von David Darx
      </div>
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
        projects: projects,
        height: 'auto',
        isTranslated: false,
        isMasked: true
      }
    },
    mounted () {
      //hack to be able to translateY the projects for animation in
      //without having trouble with first scroll position of app
      this.height = getComputedStyle(this.$refs.projects).height;

      setTimeout(this.animateProjectsIn, 100);
    },
    methods: {
      animateProjectsIn: function () {
        this.isTranslated = true;
        this.isMasked = false;

        setTimeout(() => {
          this.isTranslated = false;
          this.height = 'auto';
        }, 50);
      }
    }
  });
</script>

