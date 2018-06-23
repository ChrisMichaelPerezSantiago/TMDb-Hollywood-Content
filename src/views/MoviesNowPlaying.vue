<template>
     <div class="container">
        <h1>Content id: {{this.id}}</h1>
        <p>{{contents}}</p>
    </div>
</template>


<script>
    import {apikey} from '../config/secrets.js';
    export default{
        data(){
            return{
                contents: [],
                baseurl: 'https://api.themoviedb.org/3',
                imageUrl: 'https://image.tmdb.org/t/p/w1280',
                apikey: apikey,
                id: this.$route.params.id
            }
        },

        created: function(){
            console.log('instance create from movies data id');
            this.fetchDataById();
        },

        methods:{
            fetchDataById(){
                console.log('fetch movie data by id');
                this.$http.get(this.baseurl + '/movie/' + this.id + '?api_key=' +
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


