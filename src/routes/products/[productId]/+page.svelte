<script>
	import ProductDetail from '$lib/components/ProductDetail.svelte';

	export let data;
</script>

<div class="px-4 bg-white">
	<ProductDetail {data} />
</div>
