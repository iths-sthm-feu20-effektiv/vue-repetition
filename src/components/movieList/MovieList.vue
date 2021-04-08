<template>
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
</template>

<script>
export default {
	name: '',
	props: {},
	data: () => ({

	})
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
