<template>
    <div class="container">
        <br>
        <app-search @userSearchArray='resultInput = $event'></app-search>
        <br>
        <div class="column is-9">
			<div class="box content" v-for="content in resultInput" :key="content.id">
				<article class="post">
					<h4>{{content.title || content.name}}</h4>
					<div class="media">
						<div class="media-left">
							<p class="image is-32x32">
								<img v-bind:src="imageUrl + content.poster_path" alt="Image">
							</p>
						</div>
						<div class="media-content">
							<div class="content">
								<p>
									<a href="#">@{{content.media_type}}</a> {{content.release_date || content.first_air_date }} &nbsp;
                                    <router-link :to="{name:'Content' , params:{id: content.id}}"><span class="tag button">info</span></router-link>
								</p>
                                <p id="overviews">{{content.overview.substr(0 , 100)}} ...</p>
							</div>
						</div>
						<div class="media-right">
							<span class="has-text-grey-light"><i class="fa fa-comments"></i> 1</span>
						</div>
					</div>
				</article>
			</div>
        </div>
    </div>
</template>


<script>
    import Search from '../components/Search.vue'

    export default{
        data(){
            return{
                resultInput: [],
                imageUrl: 'https://image.tmdb.org/t/p/w1280',

            }
        },

        

        components:{
            'app-search': Search,
        }
    }
</script>

<style lang="scss" scoped>
    .media-left img {
         border-radius: 8px;
         width: 100%;
    }

    h4{
        color: #D4AF37;

    }

    .box.content{
        background-color: #081c24 !important;
        overflow: hidden;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    #overviews{
        color: white;
    }


</style>
