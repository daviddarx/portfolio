
<template>
  <div
    class="project-list"
    v-on:mouseover="mouseOverListener"
    v-on:mouseout="mouseOutListener"
  >
    <h2
      class="project-list__title"
      v-bind:style="{color: currentColor}"
    >
      {{title}}
    </h2>
    <p>
      {{year}} – {{type}}
    <p>
  </div>
</template>

<script>
  export default {
    name: 'projectlist',
    props: {
      title: String,
      type: String,
      year: String,
      color: String
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
        this.currentColor = this.color;
      },
      mouseOutListener: function(){
        this.currentColor = "";
      }
    }
  }
</script>
