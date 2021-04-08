<template>
	<section class="movie-list">
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

	</section>
</template>

<script>
export default {
	props: {
		list: {
			type: Array,
			default: () => []
			// required: true
		}
	},
	data: () => ({

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
