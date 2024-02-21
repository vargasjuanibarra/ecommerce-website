<script>
	import '../app.css';
	import Header from '../lib/components/Header.svelte';
</script>

<div class="app font-body text-fw-blue">
	<Header></Header>
	<main>
		<slot />
	</main>
	<footer>Footer</footer>
</div>
