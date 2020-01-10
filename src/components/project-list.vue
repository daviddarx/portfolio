
<template>
  <div
    class="project-list"
    v-on:mouseover="mouseOverListener"
    v-on:mouseout="mouseOutListener"
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
        class="project-list__detail"
        v-html="datas.year+getDashSpaced()+datas.type"
      >
      </p>
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
