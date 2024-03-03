<script lang="ts">
	import { ButtonVariant } from '../types/Button';
	import Button from './Button.svelte';
	import img from '$lib/images/laptop.png';
	import { addToCart, cartItems, removeToCart } from '../cart';

	export let cartProducts: CartItem[] = [];
	let onItemTotalChange = 0;
	const tax = 39;
	const shipping = 200;
	let total = 0;
	let cartItem = 0;

	$: {
		onItemTotalChange = 0;
		cartProducts.forEach((cart) => {
			let cartItem = cart.product.price * cart.quantity;
			onItemTotalChange += cartItem;
		});
	}

	$: {
		total = 0;
		total += onItemTotalChange + tax + shipping;
	}

	cartItems.subscribe((value) => {
		console.log(value);
		cartProducts = value;
	});

	const onChange = () => {};
</script>

{#if cartProducts.length === 0}
	<div class="flex justify-center items-center h-96">
		<p class="text-2xl font-bold">Your cart is empty</p>
	</div>
{:else}
	<div class="pt-4 flex flex-col sm:flex-row justify-center gap-2 md:gap-6 h-full w-full">
		<div class="w-full md:w-2/4">
			<div class="pt-8 pb-4">
				<h2 class="text-start text-sm md:text-2xl font-bold text-white bg-red-700 w-full py-2 pl-4">
					Delivery Details
				</h2>
			</div>
			<div class="flex flex-col lg:flex-row gap-4 pb-4">
				<label
					class="input input-bordered flex bg-transparent rounded-none items-center gap-2 w-full"
				>
					<input type="text" class="input-md" placeholder="First Name" />
				</label>
				<label
					class="input input-bordered flex bg-transparent rounded-none items-center gap-2 w-full"
				>
					<input type="text" class="grow" placeholder="Last Name" />
				</label>
			</div>
			<div class="pb-4">
				<label class="input input-bordered flex bg-transparent rounded-none items-center gap-2">
					<input type="text" class="input-md" placeholder="Email" />
				</label>
			</div>
			<div class="pb-4">
				<label class="input input-bordered flex bg-transparent rounded-none items-center gap-2">
					<input type="text" class="input-md" placeholder="Address" />
				</label>
			</div>
			<div class="flex flex-col lg:flex-row gap-4 pb-4">
				<label
					class="input input-bordered flex bg-transparent rounded-none items-center gap-2 w-full"
				>
					<input type="text" class="input-md" placeholder="City" />
				</label>
				<label class="input input-bordered flex bg-transparent items-center gap-2 w-full">
					<input type="text" class="grow" placeholder="Mobile Number" />
				</label>
			</div>
			<div class="px-4 pt-4 pb-2">
				<p class="font-semibold text-xs md:text-sm">
					**Shipping fees and taxes will vary on your location
				</p>
			</div>
		</div>

		<div class="pt-4 md:pt-12 bg-slate-50 px-4 xs:w-80 md:2/4 md:pb-28 md:pt-4">
			<div>
				{#each cartProducts as cart}
					<div class="bg-slate-50 px-4 py-2 min-w-2xl border-b md:w-2xl h-full block">
						<div class="flex items-center w-full">
							<div class="flex w-20 h-full p-4">
								<img src={cart.product.image} alt={cart.product.title} />
							</div>
							<div class="w-full px-2">
								<div>
									<h2 class="text-xs md:text-sm sm:font-semibold text-wrap w-full lg:w-64">
										{cart.product.title}
									</h2>
								</div>
								<div class="flex justify-between gap-6 items-center">
									<div class="text-xs">
										qnty. {cart.quantity}
									</div>
									<div>
										<p class="text-xs md:text-sm">${cart.product.price}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
			<h2 class="md:pt-4 text-md md:text-lg font-bold text-center border-b pb-4">Order Summary</h2>
			<div class="pt-4 px-2 pb-4 border-b">
				<div class="flex justify-between">
					<p class="text-xs md:text-base">Item Total</p>
					<p class="text-xs md:text-base" on:change={onChange}>${onItemTotalChange.toFixed(2)}</p>
				</div>
				<div class="flex justify-between">
					<p class="text-xs md:text-base">Shipping</p>
					<p class="text-xs md:text-base">{shipping}</p>
				</div>
				<div class="flex justify-between">
					<p class="text-xs md:text-base">Estimated Sales Tax</p>
					<p class="text-xs md:text-base">{tax}</p>
				</div>
			</div>
			<div class="pt-4 px-2 pb-4">
				<div class="flex justify-between">
					<p class="text-xs md:text-lg font-bold">Total</p>
					<p class="text-xs md:text-base font-bold">${total.toFixed(2)}</p>
				</div>
			</div>
			<div class="border-b pb-8">
				<a href="/checkout">
					<Button
						variant={ButtonVariant.PRIMARY}
						dClass="w-full rounded-none bg-yellow-400 text-black-200 font-bold text-lg"
						>Place Order</Button
					>
				</a>
			</div>
			<div class="pt-8 px-2 pb-4 text-xs md:text-sm">
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
