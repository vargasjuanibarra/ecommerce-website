<script lang="ts">
	import { onMount } from 'svelte';
	import Button from './Button.svelte';
	import { ButtonVariant } from '../types/Button';
	import { cartItems, addToCart, removeToCart } from '$lib/cart';
	import { get } from 'svelte/store';
	import { toast } from '@zerodevx/svelte-toast';
	import image from '../images/images.png';

	export let product;
	let quantity = 1;
	let cart = get(cartItems);

	let cartItemIndex = cart.findIndex((item) => item.product.id === product.id);
	let cartProduct = cart[cartItemIndex];

	cartItems.subscribe((value) => {
		cart = value;
		cartItemIndex = cart.findIndex((item) => item.product.id === product.id);
		cartProduct = cart[cartItemIndex];
	});

	function clickToAddToCart(product: Product, quantity: number) {
		addToCart(product, quantity);
		toast.push('Added to cart!', {
			theme: {
				'--toastColor': 'mintcream',
				'--toastBackground': 'rgba(72,187,120,0.9)',
				'--toastBarBackground': '#2F855A',
				'--toastBarHeight': 0
			}
		});
	}
</script>

<div class="sm:grid sm:grid-cols-6 sm:gap-4 my-8">
	<div class="col-span-3 mb-8">
		<div class="relative bg-slate-50 p-4">
			<div class="mx-auto xs:max-w-96 md:w-[60%] flex justify-center px-8">
				<img src={product.image} alt={product.title} loading="lazy" />
			</div>
		</div>
	</div>

	<div class="col-span-3">
		<div class="bg-slate-100 p-4 relative">
			<h2 class="md:pt-4 text-sm md:text-base font-bold">
				{product.title}
			</h2>
			<p class="pb-2 pt-4 text-xs md:text-base">{product.category}</p>
			<div class="">
				<div class="pt-2 pb-4">
					<p class="text-xs py-4 md:text-sm">
						Quantity: <span class="text-red-600 text-xs font-semibold md:text-base">
							{product.rating.count}</span
						>
					</p>
					<p class="text-xs md:text-sm line-through">SAVE $300</p>
					<p class="text-2xl font-bold text-red-600">${product.price}</p>
				</div>

				<div>
					<h3 class="text-sm py-4 md:text-base">Product Highlights</h3>
					<p class="text-xs md:text-sm">
						{product.description}
					</p>
				</div>
			</div>
			<div class="flex items-center pt-12">
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

			<div class=" w-full py-12">
				<Button
					variant={ButtonVariant.PRIMARY}
					dClass="w-full bg-amber-400 rounded-none text-sm md:text-base"
					onClick={() => clickToAddToCart(product, quantity)}>Add to Cart</Button
				>
			</div>
		</div>
	</div>
</div>
