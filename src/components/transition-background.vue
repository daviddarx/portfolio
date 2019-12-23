
<template>
  <div
    class="transition-background"
  >
    <transition
      name="transition-wave-in"
      v-on:after-enter="waveInAfterEnter"
    >
      <div
        class="transition-background__el-in"
        v-if="this.isWaveInDisplayed"
        v-bind:style="{backgroundColor: this.color}"
        v-bind:class="{ 'is-normal-page': this.isNormalPage}"
      >
      </div>
    </transition>
     <transition
      name="transition-wave-out"
      v-on:after-enter="waveOutAfterEnter"
    >
      <div
        class="transition-background__el-out"
        v-if="this.isWaveOutDisplayed"
        v-bind:class="{ 'is-normal-page': this.isNormalPage}"
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
        isWaveInDisplayed: false,
        isWaveOutDisplayed: false,
        isNormalPage: false,
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
          this.isNormalPage = false;
        } else {
          this.color = undefined;
          this.isNormalPage = true;
        }
        this.isWaveInDisplayed = true;
        this.nextFunction = next;
      },
      waveInAfterEnter: function() {
        this.isWaveInDisplayed = false;
        this.nextFunction();
        if (this.isNormalPage == true) {
          this.isWaveOutDisplayed = true;
        }
      },
      waveOutAfterEnter: function() {
        this.isWaveOutDisplayed = false;
      }
    }
  });
</script>
