
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
        areThumbsInvertedX: false,
        initialDelay: undefined,
        delayRandomizer:undefined
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
      loadImage: function () {
        if (!this.thumb1URL) {
          this.thumb1URL = projects.mediasPath+this.datas.thumb1;
          this.thumb2URL = projects.mediasPath+this.datas.thumb2;
        }
      },
      setThumbsAnimationDelay: function () {
        if(!this.initialDelay) this.initialDelay = parseFloat(getComputedStyle(this.$refs.thumb1).getPropertyValue('--d-animation-in-delay').split('s')[0]);
        if(!this.delayRandomizer) this.delayRandomizer = parseFloat(getComputedStyle(this.$refs.thumb1).getPropertyValue('--d-animation-in-delay-randomizer'));

        const newDelay1 = this.initialDelay + this.getRandomRange(this.initialDelay * this.delayRandomizer * -1, this.initialDelay * this.delayRandomizer);
        const newDelay2 = this.initialDelay + this.getRandomRange(this.initialDelay * this.delayRandomizer * -1, this.initialDelay * this.delayRandomizer);

        this.$refs.thumb1.style.setProperty('--d-animation-in-delay', newDelay1+'s');
        this.$refs.thumb2.style.setProperty('--d-animation-in-delay', newDelay2+'s');

        console.log(newDelay1+" "+newDelay2);
      },
      setThumbVerticalMargin: function (thumb) {
        const thumbHeight = thumb.offsetHeight;
        const scale = parseFloat(getComputedStyle(thumb).getPropertyValue('--s-scaleHover'));
        const posY = (thumbHeight - (thumbHeight * scale)) * 0.5;

        thumb.style.setProperty('--s-posY', posY+'px');
      },
      getRandomRange(min, max) {
        return Math.random() * (max - min) + min;
      },
      mouseOverListener: function () {
        if (this.isHover == false) { //to avoid firing on each child, because of mouseover instead of mouseenter, which can cause performance problem
          this.isHover = true;
          this.currentColor = this.datas.color;
          this.setThumbsAnimationDelay();
        }
      },
      mouseLeaveListener: function () {
        this.isHover = false;

        this.currentColor = "";
      },
      thumbLoaded1: function () {
        this.isThumb1Loaded = true;
        this.setThumbVerticalMargin(this.$refs.thumb1);
      },
      thumbLoaded2: function () {
        this.isThumb2Loaded = true;
        this.setThumbVerticalMargin(this.$refs.thumb2);
      },
      resize: function () {
        if (this.isThumb1Loaded) this.setThumbVerticalMargin(this.$refs.thumb1);
        if (this.isThumb2Loaded) this.setThumbVerticalMargin(this.$refs.thumb2);
      },
      destroy: function () {
        setTimeout(() => { //wait for page transition to reset color
          this.currentColor = "";
        }, 500);
      }
    }
  }
</script>
