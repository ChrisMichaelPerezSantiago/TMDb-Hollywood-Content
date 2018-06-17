<template>
  <div id="app">
    <nav-bar></nav-bar>
    <hr>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import NavBar from './components/NavBar.vue'
  import Footer from './components/Footer.vue'
  export default {
    data() {
      return {
        components:{
          'nav-bar': NavBar,
          'app-footer': Footer
        }
      }
    }
  }
</script>

<style>
  #app{
    margin: 25px;
    padding: 50px;
    font-family: sans-serif;
  }

  #poster-image{
    width: 70px;
    border-radius: 8px;

  }
  .card{
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  #movie-title{
    color: #D4AF37;
  }

  #icon-fab{
    font-size: 30px;
    margin-right: 30px;
    color: #081c24;
  }

  .fa-star ,
  .fa-calendar-alt{
    color: peru;
  }
</style>
