<script lang="ts">
	import { get } from 'svelte/store';
	import ProductCard from '$lib/components/ProductCard.svelte';
	import { products } from '$lib/data/store';
	import { onMount } from 'svelte';
	import Filters from '$lib/components/Filters.svelte';

	const productsArray: any = get(products);

	export let data: any;
	const categories = data.props.filters;

	onMount(() => {
		console.log('data', data);
	});
</script>

<div class="px-6 pb-16 bg-fw-grey mx-auto">
	<div class="md:w-full lg:hidden py-8">
		<Filters {categories} />
	</div>
	<div class="flex justify-center items-start">
		<div class="gap-5 px-2 mx-2 md:w-60 xsm:max-lg:hidden">
			<Filters {categories} />
		</div>
		<div class="flex pt-12 md:pt-20 flex-wrap max-w-[1065px] justify-center gap-6 lg:w-2/3">
			{#each productsArray as product, index}
				<ProductCard {product} />
			{/each}
		</div>
	</div>
</div>
