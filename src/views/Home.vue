<template>

    <div class="container">    
        <br>
        <carousel 
            :perPage=1
            :navigationEnabled="false"
            :paginationEnabled="true"
            :autoplay="true"
            :loop="true"
        >
            <slide v-for="content in contents.results" :key="content.id">
                <div class="card-image">
                    <figure class="image">
                        <img :src="imageUrl + content.backdrop_path" alt="Image">
                    </figure>

                    <div class="media-content">
                            <p id="movie-title" class="title is-4 no-padding">{{content.title}}</p>
                    </div>
                </div>
            </slide>
        </carousel>
    

        <div v-show="loaded" class="loader"></div>
        <div class="column is-one-third" v-for="content in contents.results" :key="content.id"> 
            <router-link :to="{name: 'MoviesNowPlaying' , params:{id: content.id}}">
            <div class="card">
                <div class="card-image">
                    <figure class="image">
                        <img :src="imageUrl + content.backdrop_path" alt="Image">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-left">
                            <figure class="image is-25x25">
                                <img id="poster-image" :src="imageUrl + content.poster_path" alt="Image">
                            </figure>
                        </div>
                        <div class="media-content">
                            <p id="movie-title" class="title is-4 no-padding">{{content.title}}</p>
                            <p><span class="title is-6"><i class="fas fa-star">{{" " + content.vote_average}}</i></span></p>
                            <p class="subtitle is-6"><i  class="fas fa-calendar-alt">{{" " + content.release_date}}</i></p>
                        </div>
                    </div>
                    <div id="overviews" class="content">
                        <p>{{ content.overview}}</p>
                        <div class="background-icon"><span class="icon-twitter"></span></div>
                    </div>
                </div>
            </div>
            </router-link>
        </div>

        <paginate
            :page-count="40"
            :page-range="3"
            :margin-pages="2"
            :click-handler="fetchData"
            :prev-text="'Prev'"
            :next-text="'Next'"
            :container-class="'pagination'"
            :page-class="'page-item'">
        </paginate>

    </div>
</template>
 
<script>
    import { Carousel, Slide } from 'vue-carousel';
    import { apikey } from '../config/secrets.js';

    export default{
        data() {
            return{
                contents: [],
                baseurl: 'https://api.themoviedb.org/3',
                apikey: apikey,
                imageUrl: 'https://image.tmdb.org/t/p/w1280',
                loaded: true,

                components:{
                    Carousel,
                    Slide
                }
            }
        },
        
        created: function(){
            this.fetchData();
        },
        
        methods:{
            fetchData: function(page = 1){
                //console.log('fetch data');
                this.$http.get(this.baseurl + '/movie/now_playing?api_key=' +
                this.apikey + '&language=en-US&page=' + page).then(response =>{
                   // console.log(response.body);     
                    this.contents = response.body;
                    this.loaded = false;
                });
            }
        }
    }
</script>
