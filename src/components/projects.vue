
<template>
  <div
    class="projects"
    ref="projects"
    v-bind:class="{ 'is-displayed': this.isDisplayed }"
  >
    <div class="content-page">
      <h2
        class="content-page__page-title font-compensated animate-in hidable-title projects__title"
        v-bind:class="{ 'is-hidden': this.isTitleHidden, 'is-below': this.isTitleBelow, 'is-jumping': this.isTitleJumping }"
      >
        <span
          class="content-page__page-title__el"
          v-html="this.getTitlePrefix+this.pageTitle+this.getTitleSuffix"
        >
        </span>
      </h2>
      <div class="content-page__content animate-in animate-in__s2">
        <div
          v-for="(year, i) in getYears"
          v-bind:key="year"
          class="projects__year-container"
        >
          <h2
            class="content-page__subtitle content-page__3-4 hiding-title projects__subtitle"
            v-if="i!=0"
            v-bind:titleReplace="year"
            v-html="getTitlePrefix+year+getTitleSuffix"
          >
          </h2>
          <div class="project-list-container">
            <project-list
              v-for="project in getProjectsForYear(year)"
              v-bind:id="project.id"
              v-bind:key="project.title"
              v-bind:datas="project"
              v-bind:class="{ 'is-first': i==0}"
              ref="projectList"
            >
            </project-list>
          </div>
        </div>
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
  import contentPageTitle from '../mixins/content-page-title';

  delete projects.default;

  projects.main.forEach((item, i) => {
    item.id = i;
  });

  export default Vue.extend({
    name: "info-keep",
    components: {
      'project-list': ProjectList,
      'credits': Credits
    },
    mixins: [contentPageTitle],
    data() {
      return {
        projects: projects,
        isDisplayed : false,
        isMounted: false,
        pageTitleOnLoad: "2020",
        pageTitle: "2020",
        projectsItemsToObserve: undefined,
        projectsObserver: undefined,
        projectsObserverRootMargin: '0px 0px 0px 0px',
        firstResized: false,
      }
    },
    computed: {
      getYears: function () {
        let years = this.projects.main.map(project => project.year);
            years = years.filter((item, index) => years.indexOf(item) === index);
        return years;
      },
      getTitlePrefix: function () {
        return "Projekte <span class='dash dash--spaced'>–</span> <span class='projects__year'>";
      },
      getTitleSuffix: function () {
        return "</span>";
      }
    },
    mounted () {
      this.setupMounting();
    },
    activated () {
      if (this.isMounted == false) {
        this.setupMounting();
      }
    },
    beforeRouteLeave (to, from, next) {
      window.removeEventListener('resize', this.resize);
      this.isMounted = false;
      this.isDisplayed = false;
      this.destroyTitlesObserver();
      this.destroyProjectsObserver();
      this.$refs.projectList.forEach(item => {
        item.destroy();
      });
      next();
    },
    methods: {
      setupMounting: function() {
        this.isMounted = true;
        setTimeout(this.display, 100);

        window.addEventListener('resize', this.resize);
        this.resize();

        this.initTitlesObserver(this.pageTitleOnLoad);
        this.initProjectsObserver();
      },
      getProjectsForYear: function (year) {
        return this.projects.main.filter(project => project.year == year);
      },
      display: function() {
        if (this.$parent.isLoaded == true) {
          this.isDisplayed = true;
        }
      },
      calculateProjectsRootMargin () {
        const margin = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        this.projectsObserverRootMargin = `0px 0px ${margin}px 0px`;
      },
      initProjectsObserver: function () {
        if (!!window.IntersectionObserver) {
          this.projectsItemsToObserve = [];

          this.$refs.projectList.forEach((item) => {
            if (item.$el.getAttribute('observed') != 'false') {
              this.projectsItemsToObserve.push(item);
            }
          });

          if (this.projectsItemsToObserve.length > 0) {
            this.calculateProjectsRootMargin();

            this.projectsObserver = new IntersectionObserver(this.projectsIntersectionListener, {
              rootMargin: this.projectsObserverRootMargin
            });

            this.projectsItemsToObserve.forEach((item) => {
              this.projectsObserver.observe(item.$el);
            });
          }
        }
      },
      destroyProjectsObserver: function () {
        if (!!window.IntersectionObserver && this.projectsObserver) {
          this.projectsItemsToObserve.forEach((item) => {
            this.projectsObserver.unobserve(item.$el);
          });
          this.projectsObserver.disconnect();
          this.projectsObserver = undefined;
        }
      },
      projectsIntersectionListener (entries, observer) {
        entries.forEach(entry => {
          if(entry.isIntersecting){
            const projectListItem = this.$refs.projectList[parseInt(entry.target.getAttribute('id'))];

            projectListItem.loadImage();

            entry.target.setAttribute('observed', 'false');
            this.projectsObserver.unobserve(entry.target);
          }
        });
      },
      resize: function () {
        if (this.firstResized == true && this.projectsObserver) {
          this.destroyProjectsObserver();
          this.initProjectsObserver();
        }

        this.$refs.projectList.forEach(item => {
          item.resize();
        });

        this.firstResized = true;
      }
    }
  });
</script>

