import './main.pcss';
import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Paul H Trott',
    API_URL: 'https://paulhtrott.dev/wp-json/wp/v2'
	}
});

export default app;
