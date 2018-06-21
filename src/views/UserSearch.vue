<template>
    <div class="container">
        <br>
        <app-search @userSearchArray='resultInput = $event'></app-search>
        <br>
        <li>{{resultInput}}</li>
    </div>
</template>


<script>
    import Search from '../components/Search.vue'
    export default{
        data(){
            return{
                resultInput: [],
            }
        },

        components:{
            'app-search': Search,
        }
    }
</script>
