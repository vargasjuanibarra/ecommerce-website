<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { ButtonVariant } from '../types/Button';
	import Button from './Button.svelte';

	export let product: any;
	export let productsPage = false;

	onMount(() => {
		console.log(productsPage);
	});

	onDestroy(() => {
		productsPage = false;
	});
</script>

<a href={`/products/${product.id}`}>
	<div class="xsm:w-40 md:w-48 xl:w-68 overflow-hidden">
		<div>
			<div class="w-full aspect-square rounded-xl mb-7 overflow-hidden flex justify-center">
				<img
					class="w-md h-full py-4 object-cover scale-image cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
					src={product.image}
					alt="Product"
				/>
			</div>

			<div class=" xl:text-md font-bold">
				{product.title.split(' ').slice(0, 2).join(' ')}
			</div>
		</div>

		<div class="flex justify-between gap-2 items-center px-2">
			<span class="font-light text-fw-darkgrey text-sm text-nowrap">
				{product.category}
			</span>
			<span class="font-bold text-fw-gold text-sm items-center text-nowrap">
				<i class="fa-solid fa-star start"></i>
				{product.rating.rate}
			</span>
		</div>
		<span class="font-semibold text-lg block mb-6 text-fw-black px-2">
			${product.price}
		</span>
		<Button variant={ButtonVariant.PRIMARY} dClass="w-full">Add to cart</Button>
	</div>
</a>
