
<template>
  <div class="projects">
    <transition
      name="transition-projects"
    >
      <div
        class="projects__container"
        v-if="this.isDisplayed"
      >
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
    </transition>
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
        isDisplayed: false
      }
    },
    mounted () {
      this.$router.afterEach(this.afterEach);
      this.displayProjects();
    },
    methods: {
      afterEach: function (to, from) {
        if (to.meta.color) {
          this.isDisplayed = false;
        }else {
          this.isDisplayed = true;
        }
      },
      displayProjects: function () {
        this.isDisplayed = true;
      }
    }
  });
</script>

