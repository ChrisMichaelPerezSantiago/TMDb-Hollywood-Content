import Vue from 'vue'
import axios from 'axios'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource'
import Vuetify from 'vuetify'
import VueCarousel from 'vue-carousel';


import App from './App.vue'
import Home from './views/Home.vue'
import Movies from './views/Movies.vue'
import Videos from './views/Videos.vue'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import UserSearch from './views/UserSearch.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'


Vue.component('nav-bar' , NavBar);
Vue.component('app-footer' , Footer);

Vue.prototype.$http = axios;


Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Vuetify);
Vue.use(VueCarousel);


const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/Movies',
    component: Movies
  },
  {
    path: '/Videos',
    component: Videos
  },{
    path: '/Search',
    component: UserSearch
  }
];

const router = new VueRouter({
  routes: routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
});

