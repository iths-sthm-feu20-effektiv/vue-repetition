<template>
	<section class="component">
		<input type="text"
			v-model="title"
			placeholder="Filmens namn" />
		<input type="text"
			v-model="rating"
			placeholder="Betyg, 1 till 5" />
		<input type="text"
			v-model="dateViewed"
			placeholder="Datum du såg filmen" />

		<button @click="addMovie"> Lägg till film </button>
	</section>
</template>

<script>
export default {
	props: {
		newId: Number
	},
	data: () => ({
		title: '',
		rating: '',
		dateViewed: ''
	}),
	methods: {
		addMovie() {
			let movie = {
				id: this.newId,
				title: this.title,
				rating: this.rating,
				dateViewed: this.dateViewed
			}
			this.$emit('addMovie', movie)
		}
	}
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
	background-color: #EBAD24;
	color: #DB2818;
	border: none;
	transition: 1s background-color;
}
button:hover {
	cursor: pointer;
	background-color: #F26B0F;
}
</style>
