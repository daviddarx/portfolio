
<template>
  <div
    class="project-list"
    v-on:mouseover="mouseOverListener"
    v-on:mouseleave="mouseLeaveListener"
  >
    <router-link
      v-bind:to="route"
      class="project-list__link"
    >
      <h2
        class="project-list__title"
        v-bind:style="{color: currentColor}"
      >
        {{datas.title}}
      </h2>
      <p
        class="project-list__detail no-margin"
      >
        {{datas.type}}
      </p>
      <div class="project-list__thumb project-list__thumb--01">
        <img
          class="project-list__thumb-el project-list__thumb-el--01"
          @load="thumbLoaded1"
          v-bind:class="{ 'is-loaded' : this.isThumb1Loaded }"
          v-bind:src="this.thumb1URL"
          ref="thumb1"
        >
      </div>
      <div class="project-list__thumb project-list__thumb--02">
        <img
          class="project-list__thumb-el project-list__thumb-el--02"
          @load="thumbLoaded2"
          v-bind:class="{ 'is-loaded' : this.isThumb1Loaded }"
          v-bind:src="this.thumb2URL"
          ref="thumb2"
        >
      </div>
    </router-link>
  </div>
</template>

<script>
  import * as projects from '../../content/projects.json';
  import dash from '../mixins/dash';

  export default {
    name: 'project-list',
    mixins: [dash],
    props: {
      datas: {
        type: Object,
        default: {}
      }
    },
    data: function () {
      return {
        currentColor: '',
        isHover: false,
        thumb1URL: undefined,
        thumb2URL: undefined,
        isThumb1Loaded: false,
        isThumb2Loaded: false,
        areThumbsInvertedX: false
      }
    },
    computed: {
      route: function () {
        return projects.routesPath + this.datas.uid;
      }
    },
    mounted () {
      this.setThumbsAnimationDelay();
    },
    methods: {
      setThumbsAnimationDelay: function () {
        let initialDelay = parseFloat(getComputedStyle(this.$refs.thumb1).getPropertyValue('--d-animation-in-delay').split('s')[0]);
        let delayRandomizer = parseFloat(getComputedStyle(this.$refs.thumb1).getPropertyValue('--d-animation-in-delay-randomizer'));

        let newDelay1 = initialDelay + this.getRandomRange(initialDelay * delayRandomizer * -1, initialDelay * delayRandomizer);
        let newDelay2 = initialDelay + this.getRandomRange(initialDelay * delayRandomizer * -1, initialDelay * delayRandomizer);

        this.$refs.thumb1.style.setProperty('--d-animation-in-delay', newDelay1+'s');
        this.$refs.thumb2.style.setProperty('--d-animation-in-delay', newDelay2+'s');

        console.log(newDelay1);
        console.log(newDelay2);
        console.log("--");
      },
      getRandomRange(min, max) {
        return Math.random() * (max - min) + min;
      },
      mouseOverListener: function () {
        if (this.isHover == false) {
          this.isHover = true;

          this.currentColor = this.datas.color;

          if (!this.thumb1URL) {
            this.thumb1URL = projects.mediasPath+this.datas.thumb1;
            this.thumb2URL = projects.mediasPath+this.datas.thumb2;
          }
        }
      },
      mouseLeaveListener: function () {
        this.isHover = false;

        this.currentColor = "";

        console.log("leave");
      },
      thumbLoaded1: function () {
        this.isThumb1Loaded = true;
      },
      thumbLoaded2: function () {
        this.isThumb2Loaded = true;
      },
      destroy: function () {
        setTimeout(() => {
          this.currentColor = "";
        }, 500);
      }
    }
  }
</script>
