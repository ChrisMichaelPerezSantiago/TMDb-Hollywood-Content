<template>
  <div id="app">
    <nav-bar></nav-bar>
    
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

<style lang="scss">
  #app{
    margin: auto;
    padding: 0px;
    font-family: sans-serif;
    background-color: #081c24;
  }

  #poster-image{
    width: 70px;
    border-radius: 8px;
  }
  
  .card{
    background-color: #081c24 !important;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  #movie-title{
    font-family: cursive; 
    color: #D4AF37;
  }

  #icon-fab{
    font-size: 30px;
    margin-right: 30px;
    color: #081c24;
  }

  .fa-star ,
  .fa-calendar-alt{
    color: khaki
  }
  
  #footer-card-icons{
    font-size: 30px;
    margin-left: 160px;
    color: #081c24;
  }

  div.column{
    display: inline-block;
  }

  .VueCarousel{
    border-radius: 8px !important;
    overflow: hidden;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }  
  
  .content{
    height: 140px;
    font-family: cursive; 
  }

  #overviews{
    font-family: cursive; 
    color: white;

  }

  .navbar{
    font-family: cursive; 
  }
 
  .footer{
    background-color: #081c24;
  }

  .control{
    input{
      padding: 4px 12px;
      color: rgba(0,0,0,.70);
      border: 1px solid rgba(0,0,0,.12);
      transition: .15s all ease-in-out;
      background: white;
      &:focus {
        outline: none;
        transform: scale(1.05);
        border: #081c24;
       
      }
      &::-webkit-input-placeholder {
          font-size: 12px;
          color: rgba(0,0,0,.50);
          font-weight: 100;
      }
    }
  }

  .control{
    width: 100%;
  }

  .fas.fa-info-circle{
    margin-top: 80px;
  }
  
  .card{
    margin-top: 20px;
  }
</style>
