<script>
	import '../app.css';
	import Header from '../lib/components/Header.svelte';
	import Footer from '../lib/components/Footer.svelte';
	import { SvelteToast } from '@zerodevx/svelte-toast';

	export let data;
</script>

<div class="app text-fw-blue bg-white">
	<SvelteToast />
	<Header></Header>
	<slot />
	<Footer></Footer>
</div>
