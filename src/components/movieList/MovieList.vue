<template>
	<div class="movie-list">
		<div class="movie-item"
		v-for="movie in list" v-bind:key="movie.id">
			<div>
				{{ movie.title }}
			</div>
			<div>
				Betyg: {{ movie.rating }} <br/>
				{{ movie.dateViewed }}
			</div>
		</div>

	</div>
</template>

<script>
export default {
	props: {},
	data: () => ({
		list: [
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
	})  // data
}
</script>

<style scoped>
.movie-item {
    max-width: 40em;
    border: 1px solid #DB2818;
    padding: 1em;
    margin: 0.3em 4em;
    display: flex;
    /* vh, vw utgår från viewport - webbläsarens synliga område */
}
.movie-item > * {
    flex: 1 1 auto;
}
</style>
