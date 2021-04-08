<template>
    <div>
        <header>
            Mina favoritfilmer
        </header>
    </div>
    <main>
        <MovieList v-bind:list="movieList"></MovieList>
    </main>
</template>

<script>
import MovieList from './components/movieList/MovieList'
export default {
    name: 'App',
    components: {
        MovieList
    },
    data: () => ({
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
    })
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
