<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import image from '$lib/images/images.png';
	export let product: any;
	export let productsPage = false;

	onDestroy(() => {
		productsPage = false;
	});
</script>

<a href={`/products/${product.id}`}>
	<div
		class="w-full h-full p-6 pb-10 flex flex-col shadow-sm bg-white rounded-lg justify-between overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out"
	>
		<div>
			<div class="w-full aspect-square rounded-xl overflow-hidden flex justify-center h-48">
				<img
					class="w-md h-full py-4 object-cover scale-image cursor-pointer"
					src={product.image}
					alt="Product"
				/>
			</div>

			<div class="w-full text-wrap xsm:text-sm text-fw-blue lg:text-lg mb-2 block">
				{product.title.substring(0, 30)}
			</div>
		</div>

		<div>
			<div class="flex justify-between gap-2 items-center mb-3">
				<span class="font-light text-fw-darkgrey text-sm text-nowrap">
					{product.category}
				</span>
				<span class="font-bold text-fw-gold text-sm items-center text-nowrap">
					<i class="fa-solid fa-star start"></i>
					{product.rating.rate}
				</span>
			</div>
			<span class="font-semibold lg:text-xl block mb-6 text-fw-black">
				${product.price}
			</span>
			<div class="font-semibold">Shop Now &rarr;</div>
		</div>
	</div>
</a>

<style>
	.start {
		color: #ffd700;
	}
</style>
