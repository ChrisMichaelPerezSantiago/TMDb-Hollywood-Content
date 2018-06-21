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
    import axios from 'axios';
   
    export default{
        data(){
            return{
                searchResult: []
            }
        },

        methods:{
            keyPressed(event){
                console.log('user searching!!'); 
                var key = event.target.value;
                const urlSearch = 'https://api.themoviedb.org/3/search/multi?api_key=16667866c29ba1bc29e687b4892b8d5c&language=en-US&page=1&include_adult=false&query=' + key
                axios.get(urlSearch).then(response =>{
                    console.log('data fetched');
                    console.log(response.data.results);
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


