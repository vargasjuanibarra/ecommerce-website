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

<div class="mt-[10vw] flex justify-center items-center">
	<button class="btn btn-circle mx-2" on:click={() => prevSlide()}>❮</button>
	<div class="carousel carousel-center w-full p-4 rounded-box gap-8" id="scrollContainer">
		{#if productsArray.length > 0}
			{#each productsArray as product, index}
				<div class="carousel-item max-w-md">
					<ProductCard {product} {index} />
				</div>
			{/each}
		{/if}
	</div>
	<button class="btn btn-circle mx-2" on:click={() => nextSlide()}>❯</button>
</div>

<style>
	#scrollContainer {
		overflow: auto;
		scroll-snap-type: x-mandatory;
		scroll-padding: 0 24px;
	}
</style>
