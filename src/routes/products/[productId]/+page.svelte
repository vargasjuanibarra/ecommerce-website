<script>
	import ProductDetail from '$lib/components/ProductDetail.svelte';
	import { page } from '$app/stores';
	export let data;
	$: ({ product } = data);
</script>

<svelte:head>
	<title>{$page.data.product?.title}</title>
</svelte:head>

<div class="breadcrumbs text-sm px-4 my-4">
	<ul>
		<li><a href="/">Home</a></li>
		<li><a href="/products">Products</a></li>
	</ul>
</div>
<div class="px-4 bg-white my-4 min-h-[67.5vh]">
	<div class=" mb-4">
		<a href="/products">
			<button class="btn btn-outline">
				<i class="fa-solid fa-arrow-left"></i>
				to Product list
			</button>
		</a>
	</div>
	<ProductDetail {product} />
</div>
