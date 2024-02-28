<script lang="ts">
	import { onMount } from 'svelte';
	import Button from './Button.svelte';
	import { ButtonVariant } from '../types/Button';
	import { cartItems, addToCart, removeToCart } from '$lib/cart';
	import { get } from 'svelte/store';

	export let data;
	let { product } = data;
	let quantity = 1;
	let cart = get(cartItems);

	let cartItemIndex = cart.findIndex((item) => item.product.id === product.id);
	let cartProduct = cart[cartItemIndex];

	cartItems.subscribe((value) => {
		cart = value;
		cartItemIndex = cart.findIndex((item) => item.product.id === product.id);
		cartProduct = cart[cartItemIndex];
	});
</script>

<div class="pt-4 pb-8 sm:flex sm:flex-row-reverse sm:justify-center">
	<div class="md:bg-slate-50 px-4 max-w-sm relative">
		<div class="flex gap-4 md:hidden">
			<div class="">
				<a href="/products">
					<button class="btn btn-sm btn-outline">
						<i class="fa-solid fa-arrow-left"></i>
					</button>
				</a>
			</div>
			<h2 class="md:pt-4 text-sm md:text-base font-bold">
				{product.title}
			</h2>
		</div>
		<h2 class="md:pt-4 text-sm md:text-base font-bold hidden md:block">
			{product.title}
		</h2>
		<p class="pb-2 pt-4 text-xs md:text-base">{product.category}</p>
		<div class="hidden sm:block">
			<div class="pt-2 pb-4">
				<p class="text-xs py-4 md:text-sm">
					Quantity: <span class="text-red-600 text-xs font-semibold md:text-base">
						{product.rating.count}</span
					>
				</p>
				<p class="text-xs md:text-sm">SAVE $300</p>
				<p class="text-2xl font-bold text-red-600">${product.price}</p>
			</div>

			<div>
				<h3 class="text-sm py-4 md:text-base">Product Highlights</h3>
				<p class="text-sm md:text-base">
					{product.description}
				</p>
			</div>
		</div>
		<div class="flex items-center pt-12 hidden md:block">
			<button
				class="btn btn-square btn-outline"
				on:click={() => (quantity === 1 ? quantity : quantity--)}
			>
				<i class="fa-solid fa-minus"></i>
			</button>
			<span class="text-xl px-4 font-bold">{quantity}</span>
			<button class="btn btn-square btn-outline" on:click={() => quantity++}>
				<i class="fa-solid fa-plus"></i>
			</button>
		</div>

		<div class=" w-full py-12 hidden md:block">
			<Button
				variant={ButtonVariant.PRIMARY}
				dClass="w-full"
				onClick={() => addToCart(product, quantity)}>Add to Cart</Button
			>
		</div>
	</div>
	<div class="px-4 relative">
		<div class="p-4 absolute hidden md:flex">
			<a href="/products">
				<button class="btn btn-outline">
					<i class="fa-solid fa-arrow-left"></i>
				</button>
			</a>
		</div>
		<div class="md:mt-8 py-4 md:px-4 min-w-60 md:w-80">
			<img src={product.image} alt={product.title} />
		</div>
		<div class="sm:hidden">
			<div class="pt-2 pb-4">
				<p class="text-xs pb-2">
					Quantity: <span class="text-red-600 text-xs font-semibold">{product.rating.count}</span>
				</p>
				<p class="text-xs">SAVE $300</p>
				<p class="text-lg lg:text-2xl font-bold text-red-600">${product.price}</p>
			</div>
			<div>
				<h3 class="text-sm py-4 md:text-base">Product Highlights</h3>
				<p class="text-sm md:text-base">
					{product.description}
				</p>
			</div>
			<div class="flex justify-center items-center py-8">
				<button
					class="btn btn-square btn-outline"
					on:click={() => (quantity === 1 ? quantity : quantity--)}
				>
					<i class="fa-solid fa-minus"></i>
				</button>
				<span class="text-xl px-4 font-bold">{quantity}</span>
				<button class="btn btn-square btn-outline" on:click={() => quantity++}>
					<i class="fa-solid fa-plus"></i>
				</button>
			</div>
			<div class="w-full block md:hidden">
				<Button
					variant={ButtonVariant.PRIMARY}
					dClass="w-full"
					onClick={() => addToCart(product.id, quantity)}>Add to Cart</Button
				>
			</div>
		</div>
	</div>
</div>
