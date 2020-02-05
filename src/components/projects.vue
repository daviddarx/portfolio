
<template>
  <div
    class="projects"
    ref="projects"
    v-bind:class="{ 'is-displayed': this.isDisplayed }"
  >
    <h1 class="projects__title animate-in">
        <span class="projects__title-name font-compensated">David Darx</span>
        <span class="projects__title-detail">Digital Design &amp; Art Direction</span>
    </h1>
    <div
      class="projects__container animate-in animate-in__s1"
    >
      <div class="projects__list-container">
        <project-list
          v-for="project in projects.main"
          v-bind:key="project.agency"
          v-bind:datas="project"
        >
        </project-list>
      </div>
      <credits></credits>
    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  import ProjectList from './project-list.vue';
  import Credits from './credits.vue';
  import * as projects from '../../content/projects.json';

  export default Vue.extend({
    components: {
      'project-list': ProjectList,
      'credits': Credits
    },
    data() {
      return {
        projects: projects,
        isDisplayed : false,
      }
    },
    mounted () {
      setTimeout(this.displayProject, 100);
    },
    methods: {
      displayProject: function() {
        this.isDisplayed = true;
      }
    }
  });
</script>

