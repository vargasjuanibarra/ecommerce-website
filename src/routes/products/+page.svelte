<script lang="ts">
	import { get } from 'svelte/store';
	import ProductCard from '$lib/components/ProductCard.svelte';
	import { products } from '$lib/data/store';
	import { onMount } from 'svelte';
	import Filters from '$lib/components/Filters.svelte';

	const productsArray: any = get(products);

	export let data: any;
	const categories = data.props.filters;
</script>

<div class="px-6 pb-16 bg-white mx-auto">
	<div class="md:w-full lg:hidden py-8">
		<Filters {categories} />
	</div>
	<div class="flex justify-center items-start">
		<div class="gap-5 px-2 mx-2 md:min-w-60 xsm:max-lg:hidden">
			<Filters {categories} />
		</div>
		<div class="max-w-[1065px]">
			<h2 class="text-center md:text-3xl font-bold text-white bg-red-700 w-max py-2 px-4 lg:pr-80">
				Global Brand Deals
			</h2>
			<div class="flex pt-12 md:pt-12 flex-wrap justify-center gap-6 lg:max-w-fit">
				{#each productsArray as product}
					<ProductCard {product} />
				{/each}
			</div>
		</div>
	</div>
</div>
