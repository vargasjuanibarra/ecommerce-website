<script lang="ts">
	import { onMount } from 'svelte';
	import { products } from '../data/store';
	import CarouselProductCard from './CarouselProductCard.svelte';
	import { get } from 'svelte/store';

	const productsArray: any = get(products);
	const productsPage: boolean = false;

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

<div class="mt-[2vw] flex justify-center items-center relative max-w-[1800px] mx-auto my-4 py-4">
	<div
		class="flex items-center w-full md:p-4 rounded-box gap-8 overflow-hidden"
		id="scrollContainer"
	>
		<button
			class="absolute left-0 btn bg-transparent border-none mx-2 hidden lg:block z-50"
			on:click={() => prevSlide()}>❮</button
		>
		{#if productsArray.length > 0}
			{#each productsArray as product, index}
				<div class="carousel-item xsm:max-xsm:w-full">
					<CarouselProductCard {product} {productsPage} />
				</div>
			{/each}
		{/if}
		<button
			class="absolute right-0 btn bg-transparent border-none mx-2 hidden lg:block z-50"
			on:click={() => nextSlide()}>❯</button
		>
	</div>
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
