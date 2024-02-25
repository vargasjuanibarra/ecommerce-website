<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { ButtonVariant } from '../types/Button';
	import Button from './Button.svelte';

	export let product: any;
	// export let index;
	export let productsPage = false;

	onMount(() => {
		console.log(productsPage);
	});

	onDestroy(() => {
		productsPage = false;
	});
</script>

<div
	class="w-full h-full p-8 pb-10 flex flex-col shadow-sm bg-white rounded-lg justify-between overflow-hidden md:w-[35vw] lg:w-[25vw] hover:scale-105 transition-transform duration-300 ease-in-out"
>
	<div>
		<div class="w-full aspect-square rounded-xl mb-7 overflow-hidden flex justify-center">
			<img
				class="w-md h-full object-cover scale-image cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
				src={product.image}
				alt="Product"
			/>
		</div>

		<button
			class="w-min whitespace-nowrap font-bold xsm:text-sm text-fw-blue lg:text-xl mb-6 block"
		>
			{product.title.split(' ').slice(0, 3).join(' ')}
		</button>
	</div>

	<div>
		<div class="flex justify-between gap-2 items-center mb-3 px-2">
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
		<Button variant={ButtonVariant.PRIMARY} dClass="w-full">Add to cart</Button>
	</div>
</div>

<style>
	.start {
		color: #ffd700;
	}
</style>
