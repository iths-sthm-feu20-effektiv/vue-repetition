<template>
    <header>
        Mina favoritfilmer
    </header>
    <main>
		<nav>
			<a @click.prevent="showAddForm" href=""> Lägg till ny film </a>
			<a @click.prevent="showMovieList" href=""> Visa listan </a>
		</nav>
        <MovieList
            v-show="selectedView === MOVIE_LIST"
            v-bind:list="movieList"></MovieList>
        <AddMovie
            v-show="selectedView === ADD_FORM"
            v-bind:newId="calculateNewId()"
            @addMovie="movieAdded"></AddMovie>
    </main>
</template>

<script>
import { mapActions } from 'vuex'
import MovieList from './components/movieList/MovieList'
import AddMovie from './components/addForm/AddMovie'

export default {
    name: 'App',
    components: {
        MovieList, AddMovie
    },
    data: () => ({
        MOVIE_LIST: 'movie list',
        ADD_FORM: 'add form',
        movieList: [
			{
				id: 1,
				title: 'Pulp fiction',
				rating: 5,
				dateViewed: '2021-02-21'
			},
			{
				id: 2,
				title: 'Meet the feebles',
				rating: 4,
				dateViewed: '2020-10-11'
			}
		]  // list
    }),  // data
    computed: {
        selectedView() {
            return this.$store.state.selectedView
        }
    },
    methods: {
        ...mapActions([
            'showMovieList',
            'showAddForm'
        ]),
        calculateNewId() {
            // 1. hitta största värdet i movieList
            // 2. returnera värdet + 1
            let maximum = this.movieList[0].id;
            for(let i=0; i<this.movieList.length; i++) {
                let newId = this.movieList[i].id;
                if( newId > maximum )
                    maximum = newId;
            }
            return maximum + 1;

            // med reduce:
            // let maximum = this.movieList[0].id;
            // maximum = this.movieList.reduce((acc, cur) => Math.max(acc, cur), maximum);
            // return maximum + 1;
        },
        movieAdded(movie) {
            this.movieList.push(movie)
            // this.selectedView = this.MOVIE_LIST
        }
    }
}
</script>

<style>
header {
    background-color: #DB2818;
    color: #EBAD24;
    padding: 0.8em;
    margin: 0em;
    font-size: 1.8em;
    font-weight: bold;
}

nav > a {
    display: inline-block;
    margin-left: 1em;
    margin-right: 1em;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin: 0px;
}
body {
    margin: 0em;
    background-color: #F1B2AC;
    color: #DB2818;
    font-size: 1.1em;
}
</style>
