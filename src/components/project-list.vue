
<template>
  <div
    class="project-list"
    v-on:mouseover="mouseOverListener"
    v-on:mouseout="mouseOutListener"
  >
    <h2
      class="project-list__title"
      v-bind:style="{color: currentColor}"
      v-on:click="$emit('open-project', datas.uid)"
    >
      {{datas.title}}
    </h2>
    <p>
      {{datas.year}} – {{datas.type}}
    <p>
  </div>
</template>

<script>
  export default {
    name: 'project-list',
    props: {
      datas: Object
    },
    data: function () {
      return {
        currentColor: ""
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
