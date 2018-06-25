<template>
    <div class="container">
        <div class="card">
             <youtube  :video-id="contents.results[0].key" :player-vars="playerVars" @playing="playing"></youtube>
        </div>
    </div>
</template>


<script>
    import {apikey} from '../config/secrets.js'
    export default{
        data(){
            return{
                contents: [],
                baseurl: 'https://api.themoviedb.org/3',
                apikey: apikey,
                imageUrl: 'https://image.tmdb.org/t/p/w1280',
                id: this.$route.params.id,
                media_type: this.$route.params.media_type,
                playerVars:{
                    autoplay: 1
                }
            }
        },

        created: function(){      
            //console.log('instance created');
            this.fetchMovieById();
        },

        methods:{
            fetchMovieById: function(){
                  //console.log('fetch movie data by id');
                this.$http.get(this.baseurl + '/movie/' + this.id + '/videos?api_key=' +
                this.apikey + '&append_to_response=videos').then(response =>{
                    this.contents = response.data;
                    //console.log(this.contents);  
                })
                .catch(e =>{
                    this.error.push(e)
                });
            },

            playing(){
                //console.log('video in action!!'); 
            }
        }
    }
</script>