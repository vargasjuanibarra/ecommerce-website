<script lang="ts">
	import { ButtonVariant } from '../types/Button';
	import Button from './Button.svelte';
	import { addToCart, cartItems, removeToCart } from '../cart';

	export let cartProducts: CartItem[] = [];
	let onItemTotalChange = 0;
	let total = 0;

	$: {
		onItemTotalChange = 0;
		cartProducts.forEach((cart) => {
			let cartItem = cart.product.price * cart.quantity;
			onItemTotalChange += cartItem;
		});
	}

	cartItems.subscribe((value) => {
		console.log(value);
		cartProducts = value;
	});

	let quantity = 1;
</script>

{#if cartProducts.length === 0}
	<div class="flex justify-center items-center h-96">
		<p class="text-2xl font-bold">Your cart is empty</p>
	</div>
{:else}
	{#each cartProducts as cart}
		<div class="bg-slate-50 px-4 py-2 min-w-2xl border-b md:w-2xl h-full block sm:hidden">
			<div class="flex items-center w-full">
				<div class="flex w-28 h-full md:w-28 p-4">
					<img src={cart.product.image} alt={cart.product.title} />
				</div>
				<div class="w-2/3 px-4">
					<div class="py-2">
						<h2 class="md:pt-4 text-xs md:text-sm sm:font-semibold text-wrap w-full lg:w-64">
							{cart.product.title}
						</h2>
					</div>
					<div class="flex justify-between gap-6 items-center">
						<div class="flex justify-center">
							<button
								class="btn btn-square btn-outline btn-xs md:btn-sm rounded-none"
								on:click={() => (quantity === 1 ? quantity : quantity--)}
							>
								<i class="fa-solid fa-minus"></i>
							</button>
							<input
								class="text-xs font-bold bg-transparent rounded-none border-b border-t border-gray-400 w-8 text-center remove-arrow h-xs"
								type="number"
								value={cart.quantity}
							/>
							<button
								class="btn btn-square btn-outline btn-xs md:btn-sm rounded-none"
								on:click={() => quantity++}
							>
								<i class="fa-solid fa-plus"></i>
							</button>
						</div>
						<div>
							<p class="pb-2 pt-2 text-xs md:text-base">${cart.product.price}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	{/each}

	{#each cartProducts as cart}
		<div class="bg-slate-50 px-4 py-2 min-w-2xl border-b md:w-2xl h-full block sm:hidden">
			<div class="flex items-center w-full">
				<div class="flex w-28 h-full md:w-28 p-4">
					<img src={cart.product.image} alt={cart.product.title} />
				</div>
				<div class="w-2/3 px-4">
					<div class="py-2">
						<h2 class="md:pt-4 text-xs md:text-sm sm:font-semibold text-wrap w-full lg:w-64">
							{cart.product.title}
						</h2>
					</div>
					<div class="flex justify-between gap-6 items-center">
						<div class="flex justify-center">
							<button
								class="btn btn-square btn-outline btn-xs md:btn-sm rounded-none"
								on:click={() => (quantity === 1 ? quantity : quantity--)}
							>
								<i class="fa-solid fa-minus"></i>
							</button>
							<input
								class="text-xs font-bold bg-transparent rounded-none border-b border-t border-gray-400 w-8 text-center remove-arrow h-xs"
								type="number"
								value={cart.quantity}
							/>
							<button
								class="btn btn-square btn-outline btn-xs md:btn-sm rounded-none"
								on:click={() => quantity++}
							>
								<i class="fa-solid fa-plus"></i>
							</button>
						</div>
						<div>
							<p class="pb-2 pt-2 text-xs md:text-base">${cart.product.price}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	{/each}

	<div class="pt-4 flex flex-row justify-center gap-2 md:gap-6 h-full w-full">
		<div class="flex-col gap-4 hidden sm:flex">
			{#each cartProducts as cart}
				<div class="flex bg-slate-50 px-4 min-w-2xl">
					<div class="flex w-20 h-full md:w-28 p-4">
						<img
							src={cart.product.image}
							alt="Samsung 65 4K UHD HDR QD-OLED Tizen Smart TV (QN65S92CAFXZC) - 2023 - Titan Black - Only at Best Buy"
						/>
					</div>
					<div class="flex min-w-48 max-w-80">
						<div>
							<div>
								<h2 class="py-2 md:pt-4 px-2 text-xs md:text-sm text-wrap">
									{cart.product.title}
								</h2>
							</div>
							<div class="flex justify-between gap-6 items-center w-60 px-2">
								<div class="flex justify-center py-2">
									<button
										class="btn btn-square btn-outline btn-xs md:btn-sm rounded-none"
										on:click={() => removeToCart(cart.product, quantity)}
									>
										<i class="fa-solid fa-minus"></i>
									</button>
									<input
										class="text-sm font-bold bg-transparent rounded-none border-b border-t border-gray-400 w-12 text-center remove-arrow h-xs"
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
									<p class="pb-2 pt-2 text-sm md:text-base">${cart.product.price}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>

		<div class="pt-4 md:pt-12 bg-slate-50 px-4 xs:w-80 sm:w-60 md:w-80 md:pb-28 md:pt-4">
			<h2 class="md:pt-4 text-md md:text-lg font-bold text-center border-b pb-4">Order Summary</h2>
			<!-- <div class="pt-4 px-2 pb-4 border-b">
        <div class="flex justify-between">
          <p class="text-xs md:text-base">Subtotal</p>
          <p class="text-xs md:text-base" on:change={onChange}>${onItemTotalChange.toFixed(2)}</p>
        </div>
      </div> -->
			<div class="pt-4 px-2 pb-4">
				<div class="flex justify-between">
					<p class="text-xs md:text-lg font-bold">Subtotal</p>
					<p class="text-xs md:text-base font-bold">${onItemTotalChange.toFixed(2)}</p>
				</div>
			</div>
			<div class="border-b pb-8">
				<a href="/checkout">
					<Button
						variant={ButtonVariant.PRIMARY}
						dClass="w-full rounded-none bg-amber-400 text-black font-bold text-lg">Checkout</Button
					>
				</a>
			</div>
			<div class="pt-8 px-2 pb-4 text-xs sm:text-sm">
				<p>One or more items in your cart require an account. Sign in or create an accout now</p>
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
