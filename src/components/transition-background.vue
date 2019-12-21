
<template>
  <div
    class="transition-background"
  >
    <transition
      name="transition-wave"
      v-on:after-enter="afterEnter"
    >
      <div
        class="transition-background__el"
        v-if="this.isDisplayed"
        v-bind:style="{backgroundColor: this.color}"
        v-bind:class="{ 'animate-out': this.isAnimatingOut}"
      >
      </div>
    </transition>
  </div>
</template>

<script>
  import Vue from "vue";

  export default Vue.extend({
    data() {
      return {
        color: '#ff0000',
        isDisplayed: false,
        isAnimatingIn: false,
        nextFunction: undefined,
      }
    },
    mounted () {
      this.$router.beforeEach(this.beforeEach);
    },
    methods: {
      beforeEach: function (to, from, next) {
        if(to.meta.color){
          this.color = to.meta.color;
          this.isAnimatingOut = false;
        } else {
          this.color = undefined;
          this.isAnimatingOut = true;
        }
        this.isDisplayed = true;
        this.nextFunction = next;
      },
      afterEnter: function() {
        this.isDisplayed = false;
        this.nextFunction();
      }
    }
  });
</script>
