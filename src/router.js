import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition;
  } else {
    const position = {};

    position.x = 0;
    position.y = 0;

    // if has a hash
    if (to.hash) {
      position.selector = to.hash;

      //async scroll to avoid bug in safari
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(position)
        }, 100);
      });
    } else {
      return position;
    }
  }
}

const router = new VueRouter({
  scrollBehavior,
  routes,
  mode: 'history',
  base: '/',
  linkActiveClass: 'is-current',
});

export default router;
