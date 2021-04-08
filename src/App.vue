<template>
    <div>
        <header>
            Mina favoritfilmer
        </header>
    </div>
    <main>
        <div class="movie-list">
            <div class="movie-item">
                <div>
                    Pulp fiction
                </div>
                <div>
                    Betyg: 5 <br/>
                    2021-02-21
                </div>
            </div>
        </div>
        <div class="movie-list">
            <div class="movie-item">
                <div>
                    Meet the feebles
                </div>
                <div>
                    Betyg: 4 <br/>
                    2020-10-11
                </div>
            </div>
        </div>
    </main>
</template>

<script>

export default {
    name: 'App',
    components: { }
}
</script>

<style>
header {
    background-color: #DB2818;
    color: #EBAD24;
    padding: 1.5em;
    margin: 0em;
}
.movie-item {
    max-width: 40em;
    border: 1px solid #DB2818;
    padding: 1em;
    margin: 0.3em;
    display: flex;
    /* vh, vw utgår från viewport - webbläsarens synliga område */
}
.movie-item > * {
    flex: 1 1 auto;
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
}
</style>
