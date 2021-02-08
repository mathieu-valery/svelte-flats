<script>
	import Flat from './Flat.svelte'
	import Map from './Map.svelte'
	
	export let flats
	export let ready

	const MY_API_KEY = process.env.GOOGLE_MAP_API_KEY

	let selectedFlat = {
		name: "Charm at the Steps of the Sacre Coeur/Montmartre",
    	imageUrl: "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg",
    	price: 164,
    	priceCurrency: "EUR",
    	lat: 48.884211,
    	lng: 2.34689}

	function handleSelect(event) {
        selectedFlat = event.detail.flat;
	
    }

</script>

<svelte:head>
	<script defer async
	src="https://maps.googleapis.com/maps/api/js?key={MY_API_KEY}&callback=initMap">
	</script>
</svelte:head>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	.app-container {
		display: flex;
	}

	.flats-container {
  padding-left: 10px;
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>

<div class="app-container">
	<div class="flats-container">
		{#each flats as flat (flat.name)}
			<Flat flat={flat} on:select={handleSelect}/>
		{/each}
	</div>
	{ #if ready }
		<Map selectedFlat={selectedFlat}></Map>
	{ /if }
</div>


