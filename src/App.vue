<template>
    <div>
        <header>
            Mina favoritfilmer
        </header>
    </div>
    <main>
        <MovieList></MovieList>
    </main>
</template>

<script>
import MovieList from './components/movieList/MovieList'
export default {
    name: 'App',
    components: {
        MovieList
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
