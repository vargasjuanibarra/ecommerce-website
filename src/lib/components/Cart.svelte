<script lang="ts">
	import { ButtonVariant } from '../types/Button';
	import Button from './Button.svelte';
	import { addToCart, cartItems, removeToCart } from '../cart';
	import image from '$lib/images/images.png';

	export let cartProducts: CartItem[] = [];
	let onItemTotalChange = 0;
	let total = 0;
	let estimatedTax = 100;

	$: {
		onItemTotalChange = 0;
		cartProducts.forEach((cart) => {
			let cartItem = cart.product.price * cart.quantity;
			onItemTotalChange += cartItem;
		});
	}

	cartItems.subscribe((value) => {
		cartProducts = value;
	});

	let quantity = 1;
</script>

{#if cartProducts.length === 0}
	<div class="flex justify-center items-center h-[50vh] py-12">
		<p class="text-2xl font-bold">Your cart is empty</p>
	</div>
{:else}
	<div class="pt-8 pb-12">
		<h1 class="text-2xl font-bold px-4">Your Cart</h1>
	</div>

	<div class="sm:grid sm:grid-cols-5 sm:gap-4">
		<div class="col-span-3">
			<div class="flex-col gap-4 flex mb-4">
				{#each cartProducts as cart}
					<div class="flex bg-gray-100 p-4">
						<img src={cart.product.image} alt={cart.product.title} loading="lazy" class="w-32" />
						<div class="flex w-full">
							<div class="w-full">
								<div class="flex justify-between items-center mb-4">
									<h2 class=" px-2 text-xs md:text-sm text-wrap lg:text-lg">
										{cart.product.title.substring(0, 50)}
									</h2>
								</div>
								<div class="flex justify-between gap-6 items-center w-full px-2">
									<div class="flex justify-center">
										<button
											class="btn btn-square btn-outline btn-xs md:btn-sm rounded-none"
											on:click={() => removeToCart(cart.product, quantity)}
										>
											<i class="fa-solid fa-minus"></i>
										</button>
										<input
											class="text-sm font-bold bg-transparent rounded-none border-b border-t border-gray-400 w-12 text-center remove-arrow h-xs lg:text-lg"
											type="number"
											value={cart.quantity}
										/>
										<button
											class="btn btn-square btn-outline btn-xs md:btn-sm rounded-none"
											on:click={() => addToCart(cart.product, quantity)}
										>
											<i class="fa-solid fa-plus"></i>
										</button>
									</div>
									<div>
										<p class="pb-2 pt-2 text-sm md:text-base lg:text-lg font-semibold">
											${cart.product.price}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>

		<div class="col-span-2 mb-4">
			<div class="pt-4 bg-gray-100 px-4 xs:w-80 md:pb-36">
				<h2 class="md:pt-4 text-md md:text-lg xl:text-xl font-bold text-center border-b pb-4">
					Order Summary
				</h2>
				<div class=" px-2 py-12">
					<div class="flex justify-between">
						<p class="text-xs md:text-lg lg:text-lg">Products Subtotal</p>
						<p class="text-xs md:text-base lg:text-lg">
							${onItemTotalChange.toFixed(2)}
						</p>
					</div>
					<div class="flex justify-between">
						<p class="text-xs md:text-lg lg:text-lg">Estimated Shipping</p>
						<p class="text-xs md:text-base lg:text-lg">Free</p>
					</div>
					<div class="flex justify-between">
						<p class="text-xs md:text-lg lg:text-lg">Estimated Taxes</p>
						<p class="text-xs md:text-base lg:text-lg">${estimatedTax.toFixed(2)}</p>
					</div>
				</div>
				<div class="border-t pt-4 pb-8">
					<div class="flex justify-between">
						<p class="text-xs md:text-lg lg:text-lg">Estimated Total</p>
						<p class="text-xs md:text-base lg:text-lg">
							${(
								parseInt(onItemTotalChange.toFixed(2)) + parseInt(estimatedTax.toFixed(2))
							).toFixed(2)}
						</p>
					</div>
				</div>
				<div class="border-b pb-8">
					<a href="/checkout">
						<Button
							variant={ButtonVariant.PRIMARY}
							dClass="w-full rounded-none bg-yellow-400 text-black font-bold text-lg xl:text-xl"
							>Checkout</Button
						>
					</a>
				</div>
				<div class="pt-8 px-2 pb-4 text-xs sm:text-sm lg:text-lg">
					<p>One or more items in your cart require an account. Sign in or create an accout now</p>
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	.remove-arrow::-webkit-inner-spin-button,
	.remove-arrow::-webkit-outer-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	.remove-arrow {
		-moz-appearance: textfield;
	}
</style>
