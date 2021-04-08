<template>
	<section class="component">
		<input type="text" value="" />
		<input type="text" value="" />
		<input type="text" value="" />

		<button> Lägg till film </button>
	</section>
</template>

<script>
export default {
	props: {},
	data: () => ({

	})
}
</script>

<style scoped>
.component {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1em;
}
input {
	font-size: 1.2em;
	max-width: 20em;
	margin: 0.2em;
}
button {
	font-size: 1.1em;
	width: 10em;
	padding: 0.4em 0.8em;
	margin: 0.5em;
}
</style>
