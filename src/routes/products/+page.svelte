<script lang="ts">
	import ProductCard from '$lib/components/ProductCard.svelte';
	import Filters from '$lib/components/Filters.svelte';
	import type { PageData } from '../$types';
	import { page } from '$app/stores';

	export let data: PageData;
	$: ({ products } = data);
	let filteredProducts: any;
	$: filteredProducts = products; // Start with all products visible
	let selectedCategory: string | null = null;
	let selectedRange: string | null = null;

	// Function to update the filtered products list
	const updateFilteredProducts = () => {
		// Start by applying category filter
		let tempProducts = selectedCategory
			? products.filter((product) => product.category === selectedCategory)
			: products;

		// Apply price sorting
		if (selectedRange === 'Lowest to Highest') {
			tempProducts = tempProducts.sort((prev, current) => prev.price - current.price);
		} else if (selectedRange === 'Highest to Lowest') {
			tempProducts = tempProducts.sort((prev, current) => current.price - prev.price);
		}

		filteredProducts = tempProducts;
	};

	// Handle category selection
	const handleCategorySelected = (event: any) => {
		selectedCategory = event.detail.selectedCategory;
		updateFilteredProducts(); // Re-filter products
	};

	// Handle price range selection
	const handlePriceRangeSelected = (event: any) => {
		selectedRange = event.detail.selectedRange;
		updateFilteredProducts(); // Re-filter products
	};
</script>

<svelte:head>
	<title>Products</title>
</svelte:head>

<div class="px-6 pb-16 bg-white mx-auto">
	<div class="md:w-full lg:hidden py-8">
		<Filters
			on:categorySelected={handleCategorySelected}
			on:priceRangeSelected={handlePriceRangeSelected}
		/>
	</div>
	<div class="flex justify-center items-start">
		<div class="gap-5 px-2 mx-2 md:min-w-60 xsm:max-lg:hidden">
			<Filters
				on:categorySelected={handleCategorySelected}
				on:priceRangeSelected={handlePriceRangeSelected}
			/>
		</div>
		<div class="max-w-[1065px]">
			<h2 class="text-start md:text-3xl font-bold text-white bg-red-700 w-full py-2 px-4">
				Global Brand Deals
			</h2>
			<div class="flex pt-12 md:pt-12 flex-wrap justify-center gap-6 lg:max-w-fit">
				{#if filteredProducts.length === 0}
					<p>No products available for this category.</p>
				{:else}
					{#each filteredProducts as product}
						<!-- <a href="/posts/{product.id}"> -->
						<ProductCard {product} />
						<!-- </a> -->
					{/each}
				{/if}
			</div>
		</div>
	</div>
</div>
