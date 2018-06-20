<template>
   <nav class="navbar" role="navigation" aria-label="dropdown navigation">  
        <a class="navbar-item">
            <img src="https://www.themoviedb.org/static_cache/v4/logos/208x226-stacked-blue-e6df1ff1a41c48555a15336ae8a6b3c6f77dfae41d2a50b78e4794c1ce048792.png" alt="Logo"/>
        </a>
        
        <router-link class="navbar-item" to='/'>
            <span class="icon has-text-success"><i class="fas fa-home"></i></span>
            <span>Home</span>
        </router-link>
        <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
                <span class="icon has-text-success"><i class="fas fa-newspaper"></i></span>
                <span>Content</span>
            </a>
            <div class="navbar-dropdown">
                <router-link class="navbar-item bd-navbar-item-film" to='/Movies'>
                    <span class="icon has-text-success"><i class="fas fa-film"></i></span>
                    <span>Movies</span>
                </router-link>
                <router-link class="navbar-item bd-navbar-item-play " to='/Videos'>
                    <span class="icon has-text-success"><i class="fas fa-play-circle"></i></span>
                    <span>Videos</span>
                </router-link>
            </div>
        </div> 

         <div class="navbar-end">
            <div class="control has-icons-left has-icons-right">
                <input class="input"  placeholder="search ..."/>
                    <span class="icon is-small is-right">
                        <i class="fas fa-search"></i>
                    </span>
                </div>
            </div>       
    </nav> 
</template>
