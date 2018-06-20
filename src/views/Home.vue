<template>
    <div class="container">    
        <!--
        <carousel 
            :perPage=1
            :navigationEnabled="false"
            :paginationEnabled="true"
            :autoplay="true"
            :loop="false"
        >
            <slide v-for="content in contents.results" :key="content.id">
                <div class="card-image">
                    <figure class="image">
                        <img :src="imageUrl + content.backdrop_path" alt="Image">
                    </figure>
                    
                </div>
            </slide>
        </carousel>
    -->

        <div v-show="loaded" class="loader"></div>
        <div class="column is-one-third" v-for="content in contents.results" :key="content.id"> 
            <div class="card" >
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
                            <p id="movie-title" class="title is-4 no-padding">{{content.original_title}}</p>
                            <p><span class="title is-6"><i class="fas fa-star">{{" " + content.vote_average}}</i></span></p>
                            <p class="subtitle is-6"><i  class="fas fa-calendar-alt">{{" " + content.first_air_date}}</i></p>
                        </div>
                    </div>
                    <div id="overviews" class="content">
                        <p>{{ content.overview}}</p>
                        <div class="background-icon"><span class="icon-twitter"></span></div>
                    </div>
        
                      
                </div>
            </div>
        </div>
    </div>
</template>
 
<script>
    import { Carousel, Slide } from 'vue-carousel';
    export default{
        data() {
            return{
                contents: [],
                baseurl: 'https://api.themoviedb.org/3',
                apikey: '16667866c29ba1bc29e687b4892b8d5c',
                imageUrl: 'https://image.tmdb.org/t/p/w1280',
                loaded: true,

                components:{
                    Carousel,
                    Slide,
                }
            }
        },
        
        created: function(){
            this.fetchData();
        },
        
        methods:{
            fetchData: function(){
                console.log('fetch data');
                this.$http.get(this.baseurl + '/tv/on_the_air?api_key=' +
                this.apikey + '&language=en-US&page=1').then(response =>{
                    this.contents = response.body;
                    this.loaded = false;
                });
            }
        }
    }
</script>

