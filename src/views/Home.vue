<template>
 <!-- Developers -->
            <div class="container">
                <div class="column is-one-third" v-for="(content , index) in contents.results" :value="content.value" :key="index"> 
                    <div v-show="loaded" class="loader"></div>
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
                                    <p class="subtitle is-6"><i  class="fas fa-calendar-alt">{{" " + content.release_date}}</i></p>
                                </div>
                            </div>
                            <div class="content">
                                {{ content.overview }}
                                <div class="background-icon"><span class="icon-twitter"></span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

             
    <!--
    <div class="container">
        <div v-show="loaded" class="loader"></div>
        <ul>
            <li v-for="(content , index) in contents.results" :value="content.value" :key="index">
                <img :src="imageUrl + content.poster_path" alt="">
                <section>
                    <strong>{{ content.original_title }}</strong>
                    <p>{{ content.overview }}</p>
                </section>
            </li>
        </ul>
    </div>
    -->

</template>
 
<script>
    export default{
        data: () => ({
            contents: [],
            baseurl: 'https://api.themoviedb.org/3',
            apikey: '16667866c29ba1bc29e687b4892b8d5c',
            imageUrl: 'https://image.tmdb.org/t/p/w1280',
            loaded: true,
            
            swiperOption: {
                lazy: true,
                spaceBetween: 0,
                centeredSlides: true,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
            }
        }),

        created: function(){
            this.fetchData();
        },

        methods:{
            fetchData: function(){
                console.log('fetch data')
                this.$http.get(this.baseurl + '/discover/movie?api_key=' +
                this.apikey + '&sort_by=popularity.desc').then(response =>{
                    this.contents = response.body;
                    this.loaded = false;
                });
            }
        }
    }
</script>

<style>
</style>

