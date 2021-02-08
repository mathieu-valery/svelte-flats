import App from './App.svelte';
import flats from '../data/flats'
 
const app = new App({
	target: document.body,
	props: { flats: flats,
  ready: false }
});

window.initMap = function ready() {
	app.$set({ ready: true });
}

export default app;