<script>
    // import mapStyles from './map-styles'; // optional
    import { onMount, afterUpdate, beforeUpdate } from 'svelte';
    
    export let selectedFlat;
    let container;
    let map;
    let zoom = 15;
    let center = {lat: 48.884211, lng: 2.34689};
    let marker;
    
 

   onMount(async () => {
       map = new google.maps.Map(container, {
           zoom,
           center,
        //    styles: mapStyles // optional
       });
   })

   afterUpdate(() => {
    if (marker) {
        marker.setMap(null);
    }
    marker = new google.maps.Marker({
        position: {lat: selectedFlat.lat, lng: selectedFlat.lng},
        map,
        title: selectedFlat.name,
        label: selectedFlat.name})
   })

   
     
   
</script>

<style>
.full-screen {
   width: 100vw;
   height: 100vh;
}
</style>

<div class="full-screen" bind:this={container}></div>
