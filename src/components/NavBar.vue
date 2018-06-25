<template>
   <nav class="navbar" role="navigation" aria-label="dropdown navigation">  
        <router-link class="navbar-item" to="/">
            <img src="https://www.themoviedb.org/static_cache/v4/logos/208x226-stacked-green-9484383bd9853615c113f020def5cbe27f6d08a84ff834f41371f223ebad4a3c.png" alt="Logo"/>
        </router-link>
        
        <router-link class="navbar-item is-tab" to='/'>
            <span class="icon has-text-success"><i class="fas fa-home"></i></span>
            <span>Home</span>
        </router-link> 
        <router-link class="navbar-item" to='/Search'>
            <span class="icon has-text-success"><i class="fas fa-search"></i></span>
            <span>Search</span>
         </router-link>
        <!--
         <div class="navbar-end">
            <div class="control has-icons-left has-icons-right">
                <input class="input"  placeholder="search ..."/>
                    <span class="icon is-small is-right">
                        <i class="fas fa-search"></i>
                    </span>
                </div>
            </div>    
        <app-search @userSearchArray='resultInput = $event'></app-search>
        <app-home :datas='resultInput'></app-home>
        -->

    </nav> 
</template>


<script>
    import Search from './Search.vue'

    export default{
        data(){
            return{
                resultInput: []
            }
        },

        components:{
            'app-search': Search
        }
    }
</script>
