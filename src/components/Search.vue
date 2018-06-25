<template>
    <div class="navbar-end">
        <div class="control has-icons-left has-icons-right">
            <input class="input" @input="keyPressed" placeholder="search ..."/>
            <span class="icon is-small is-right">
                <i class="fas fa-search"></i>
            </span>
        </div>
    </div> 
    
</template>


<script>
    import {apikey} from '../config/secrets.js'
    export default{
        data(){
            return{
                searchResult: [],
                apikey: apikey
            }
        },

        methods:{
            keyPressed(event){
                //console.log('user searching!!'); 
                var key = event.target.value;
                const urlSearch = 'https://api.themoviedb.org/3/search/multi?api_key='+apikey+'&language=en-US&page=1&include_adult=false&query=' + key
                this.$http.get(urlSearch).then(response =>{
                    //console.log('data fetched');
                   // console.log(response.data.results);
                    this.searchResult = response.data.results;
                })
                .catch(e =>{
                    this.error.push(e)
                })

                this.$emit('userSearchArray' , this.searchResult)
            }
        }
    }
</script>


