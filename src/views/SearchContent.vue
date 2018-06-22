<template>
    <div class="container">
        <h1>Content id: {{$route.params.id}}</h1>
        <p>{{contents}}</p>
    </div>
</template>


<script>
    export default{
        data(){
            return{
                contents: [],
                baseurl: 'https://api.themoviedb.org/3',
                apikey: '16667866c29ba1bc29e687b4892b8d5c',
                imageUrl: 'https://image.tmdb.org/t/p/w1280',

            }
        },

        created: function(){      
            console.log('instance created');
            this.fetchMovieById();
        },

        methods:{
            fetchMovieById: function(){
                console.log('fetch movie data by id');
                this.$http.get(this.baseurl + '/movie/' + this.$route.params.id + '?api_key=' +
                this.apikey + '&language=en-US').then(response =>{
                    this.contents = response.body;
                    console.log(this.contents);  
                })
                .catch(e =>{
                    this.error.push(e)
                });
            }
        }
    }
</script>