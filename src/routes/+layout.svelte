<script>
	import '../app.css';
	import Header from '../lib/components/Header.svelte';
	import Footer from '../lib/components/Footer.svelte';
</script>

<div class="app text-fw-blue">
	<Header></Header>
	<main>
		<slot />
	</main>
	<Footer></Footer>
</div>
