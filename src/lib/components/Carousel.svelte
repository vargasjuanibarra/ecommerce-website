<script lang="ts">
	import { onMount } from 'svelte';
	import { products } from '../data/store';
	import ProductCard from './ProductCard.svelte';
	import { get } from 'svelte/store';

	const productsArray: any = get(products);

	onMount(() => {
		console.log('productsArray', productsArray);
	});

	function nextSlide() {
		let container = document.getElementById('scrollContainer');
		if (container) container.scrollLeft += 450;
	}

	function prevSlide() {
		let container = document.getElementById('scrollContainer');
		if (container) container.scrollLeft -= 450;
	}
</script>

<!-- <div class="mt-[10vw] flex justify-center items-center">
	<button class="btn btn-circle mx-2 hidden lg:block" on:click={() => prevSlide()}>❮</button>
	<div class="carousel carousel-center w-full md:p-4 rounded-box gap-8" id="scrollContainer">
		{#if productsArray.length > 0}
			{#each productsArray as product, index}
				<div class="carousel-item w-md xsm:max-md:w-full">
					<ProductCard {product} {index} />
				</div>
			{/each}
		{/if}
	</div>
	<button class="btn btn-circle mx-2 hidden lg:block" on:click={() => nextSlide()}>❯</button>
</div> -->

<div class="mt-[10vw] flex justify-center items-center relative">
	<button class="absolute -left-12 btn btn-circle mx-2 hidden lg:block" on:click={() => prevSlide()}
		>❮</button
	>
	<div class="flex w-full md:p-4 rounded-box gap-8 overflow-hidden" id="scrollContainer">
		{#if productsArray.length > 0}
			{#each productsArray as product, index}
				<div class="carousel-item w-md xsm:max-md:w-full">
					<ProductCard {product} {index} />
				</div>
			{/each}
		{/if}
	</div>
	<button
		class="absolute -right-12 btn btn-circle mx-2 hidden lg:block"
		on:click={() => nextSlide()}>❯</button
	>
</div>

<style>
	#scrollContainer {
		overflow-y: hidden;
		scroll-snap-type: x-mandatory;
		scroll-padding: 0 24px;
		scroll-behavior: smooth;
	}

	#scrollContainer:hover {
		overflow-x: auto;
	}
</style>
