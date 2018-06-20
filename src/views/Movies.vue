<template>
    <div>
        <h1>{{title}}</h1>
    </div>
</template>

<script>
    export default{
        props: ['content'],
        data(){
            return{
                title: 'Movie Section'
            }
        }
    }
</script>
