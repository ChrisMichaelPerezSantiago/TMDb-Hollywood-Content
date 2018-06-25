import Vue from 'vue'
import axios from 'axios'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource'
import Vuetify from 'vuetify'
import VueCarousel from 'vue-carousel';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Paginate from 'vuejs-paginate'
import VueYoutube from 'vue-youtube'



import App from './App.vue'
import Home from './views/Home.vue'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import UserSearch from './views/UserSearch.vue'
import SearchContent from './views/SearchContent.vue'
import MoviesNowPlaying from './views/MoviesNowPlaying.vue'
import 'swiper/dist/css/swiper.css'


Vue.component('nav-bar' , NavBar);
Vue.component('app-footer' , Footer);
Vue.component('paginate', Paginate);


Vue.prototype.$http = axios;


Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Vuetify);
Vue.use(VueCarousel);
Vue.use(VueYoutube);


const routes = [
  {
    path: '/',
    component: Home
  },{
    path: '/Search',
    component: UserSearch
  },{
    path: '/Content/:media_type/:id',
    name: 'Content',
    component: SearchContent,
  },{
    path: '/MoviesNowPlaying/:id',
    name: 'MoviesNowPlaying',
    component: MoviesNowPlaying
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

