
<template>
  <div
    class="project-list"
    v-on:mouseover="mouseOverListener"
    v-on:mouseout="mouseOutListener"
  >
    <router-link
      v-bind:to="route"
    >
      <h2
        class="project-list__title"
        v-bind:style="{color: currentColor}"
      >
        {{datas.title}}
      </h2>
      <p>
        {{datas.year}}
        <span class="project-list__separation">–</span>
        {{datas.type}}
      <p>
    </router-link>
  </div>
</template>

<script>
  import * as projects from '../../content/projects.json';

  export default {
    name: 'project-list',
    props: {
      datas: Object
    },
    data: function () {
      return {
        currentColor: ''
      }
    },
    computed: {
      route: function () {
        return projects.routesPath + this.datas.uid;
      }
    },
    mounted () {
    },
    methods: {
      mouseOverListener: function(){
        this.currentColor = this.datas.color;
      },
      mouseOutListener: function(){
        this.currentColor = "";
      }
    }
  }
</script>
