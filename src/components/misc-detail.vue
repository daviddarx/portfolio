
<template>
  <div
    class="misc is-selection-inverted is-inverted"
    v-bind:class="{ 'is-displayed': this.isDisplayed }"
  >
    <div class="misc__close-button close-button close-button--black animate-in animate-in__s3">
      <router-link
        class="close-button__link"
        to="/misc"
      >
        <span class="close-button__icon"></span>
      </router-link>
    </div>

    <div class="misc__container">
      <div class="misc__header">
        <h1
          class="misc__title small-title font-compensated animate-in"
          v-html="this.infos.title+getDash(true, true)+this.infos.date"
        >
        </h1>
        <p
          class="misc__lead animate-in animate-in__s1 no-margin"
          v-if="infos.lead"
          v-html="replaceDashes(infos.lead, true)"
        >
        </p>
        <p
          class="misc__links animate-in animate-in__s2 margin-top"
          v-if="infos.links"
        >
          <a
            class="misc__link text-link"
            v-for="link in infos.links"
            v-bind:key="link.url"
            v-bind:href="link.url"
            target="_blank"
          >
            {{link.title}}
          </a>
        </p>
      </div>
      <div
        class="misc__medias animate-in animate-in__s6"
        v-if="infos.medias"
      >
        <div
          class="misc__media"
          v-for="(media, i) in infos.medias"
          v-bind:key="media.url"
          v-bind:class="{'misc__media--margin-top' : media.additionalMargin==true, 'scroll-animate-in' : i!=0}"
          v-bind:id="i"
          v-bind:isvideo="media.type=='video'"
          ref="media"
        >
          <media-image
            v-if="media.type=='image'"
            v-bind:url="misc.mediasPath+media.url"
            v-bind:title="infos.title"
            v-bind:hdRatio="media.hdRatio"
            v-bind:zoomable="media.zoomable"
            v-bind:zoomableGutter="media.zoomableGutter"
            ref="image"
          >
          </media-image>
          <media-video
            v-else-if="media.type=='video'"
            v-bind:url="misc.mediasPath+media.url"
            v-bind:title="infos.title"
            v-bind:autoplay="media.autoplay"
            v-bind:id="i"
            ref="video"
          >
          </media-video>
        </div>
      </div>
    </div>
    <pagination
      class="misc__pagination"
      :route-prev="this.routePrev"
      :route-next="this.routeNext"
      :title-prev="this.titlePrev"
      :title-next="this.titleNext"
      :subtitle-prev="this.subtitlePrev"
      :subtitle-next="this.subtitleNext"
      :is-black="true"
    >
    </pagination>
  </div>
</template>

<script>
  import Vue from 'vue';
  import * as misc from '../../content/misc.json';
  import Pagination from './pagination.vue';
  import MediaImage from './media-image.vue';
  import MediaVideo from './media-video.vue';
  import dash from '../mixins/dash';

  export default {
    name: 'misc',
    components: {
      'media-image': MediaImage,
      'media-video': MediaVideo,
      'pagination': Pagination
    },
    mixins: [dash],
    data: function () {
      return {
        misc: misc,
        currentUid: '',
        indexCurrent: 0,
        indexPrev: 0,
        indexNext: 0,
        routePrev: '/',
        routeNext: '/',
        titlePrev: '',
        titleNext: '',
        isDisplayed : false,
        infos: '',
        subtitlePrev: 'Voriges',
        subtitleNext: 'Nächstes',
        observer: undefined,
        observerRootMargin: "-10%" //20vh to compensate
      }
    },
    mounted () {
      this.currentUid = this.$route.params.id;

      this.indexCurrent = misc.collection.findIndex(item => item.uid === this.currentUid);
      this.indexPrev = (this.indexCurrent - 1 >= 0) ? this.indexCurrent - 1 : misc.collection.length - 1;
      this.indexNext = (this.indexCurrent + 1 < misc.collection.length) ? this.indexCurrent + 1 : 0;

      this.routePrev = misc.routesPath + misc.collection[this.indexPrev].uid;
      this.routeNext = misc.routesPath + misc.collection[this.indexNext].uid;

      this.titlePrev = misc.collection[this.indexPrev].title;
      this.titleNext = misc.collection[this.indexNext].title;

      this.infos = misc.collection[this.indexCurrent];

      setTimeout(this.displayMisc, 100);

      window.addEventListener('resize', this.resize);
    },
    beforeDestroy () {
      if (this.observer) {
        this.$refs.media.forEach(media => {
          this.observer.unobserve(media);
        });
        this.observer.disconnect();
      }

      if (this.$refs.video) {
        this.$refs.video.forEach(video => {
          video.destroy();
        });
      }

      if (this.$refs.image) {
        this.$refs.image.forEach(image => {
          image.destroy();
        });
      }

      window.removeEventListener('resize', this.resize);
    },
    methods: {
      displayMisc: function() {
        this.isDisplayed = true;
        this.setIntersectionObserver();
      },
      setIntersectionObserver: function() {
        if (!!window.IntersectionObserver) {
          this.observer = new IntersectionObserver(this.intersectionListener, {
            rootMargin: this.observerRootMargin
          });

          this.$refs.media.forEach(media => {
            this.observer.observe(media);
          });
        } else {
          this.$refs.media.forEach(media => {
            media.classList.add('is-displayed');
          });
        }
      },
      intersectionListener: function (entries, observer) {
        entries.forEach(entry => {
          const isVideo = entry.target.hasAttribute('isvideo');
          let videoComponent;

          if (isVideo == true) {
            const videoID = entry.target.getAttribute('id');
            this.$refs.video.forEach((video) => {
              if (video.$el.getAttribute('id') == videoID) {
                videoComponent = video;
              }
            });
          }

          if(entry.isIntersecting){
            entry.target.classList.add('is-displayed');

            if (isVideo == false) {
              observer.unobserve(entry.target);
            } else {
              videoComponent.enter();
            }
          } else {
            if (isVideo == true) {
              videoComponent.leave();
            }
          }
        });
      },
      resize: function () {
        if (this.$refs.image) {
          this.$refs.image.forEach(image => {
            image.resize();
          });
        }
      }
    }
  }
</script>
