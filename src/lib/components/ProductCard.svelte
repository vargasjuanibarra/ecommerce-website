<script lang="ts">
	import { onDestroy } from 'svelte';
	import { ButtonVariant } from '../types/Button';
	import Button from './Button.svelte';
	import image from '../images/images.png';

	export let product: any;
	export let productsPage = false;

	onDestroy(() => {
		productsPage = false;
	});
</script>

<a href={`/products/${product.id}`}>
	<div class="xsm:w-40 md:w-48 xl:w-68 overflow-hidden rounded-md p-2 shadow-md">
		<div>
			<div class="w-full aspect-square rounded-xl mb-7 overflow-hidden flex justify-center">
				<img
					class="w-md py-4 object-cover scale-image cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
					src={image}
					alt="Product"
					loading="lazy"
				/>
			</div>
		</div>
	</div>
	<div class="py-2">
		<div class="flex justify-between">
			<div class=" xl:text-sm font-bold">
				{product.title.split(' ').slice(0, 2).join(' ')}
			</div>
			<div class="font-bold text-sm block text-gray-500">
				${product.price}
			</div>
		</div>
		<div class="flex justify-between gap-2 items-center">
			<span class="font-light text-gray-500 text-xs text-nowrap">
				{product.category}
			</span>
		</div>
	</div>
</a>
