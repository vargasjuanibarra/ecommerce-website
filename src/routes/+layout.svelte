<script>
	import '../app.css';
	import Header from '../lib/components/Header.svelte';
	import Footer from '../lib/components/Footer.svelte';
	import { SvelteToast } from '@zerodevx/svelte-toast';
</script>

<div class="app text-fw-blue">
	<SvelteToast />
	<Header></Header>
	<main>
		<slot />
	</main>
	<Footer></Footer>
</div>
