<script>
	import { ButtonVariant } from '../types/Button';
	import Button from './Button.svelte';
	import img from '$lib/images/laptop.png';

	let quantity = 1;
</script>

<div class="pt-4 md:flex md:flex-row md:justify-center gap-6 h-full">
	<div class="flex flex-col gap-4">
		<div class="md:bg-slate-50 px-4 min-w-2xl md:flex md:w-2xl h-32">
			<div class="w-28">
				<img
					src={img}
					alt="Samsung 65 4K UHD HDR QD-OLED Tizen Smart TV (QN65S92CAFXZC) - 2023 - Titan Black - Only at Best Buy"
				/>
			</div>
			<div class="flex gap-6">
				<div>
					<h2 class="md:pt-4 px-2 text-sm md:text-sm font-semibold text-wrap w-64">
						Samsung 65 4K UHD HDR QD-OLED Tizen Smart TV (QN65S92CAFXZC) - 2023 - Titan Black - Only
						at Best Buy
					</h2>
					<p class="pb-2 pt-2 text-xs md:text-base">$999</p>
				</div>
				<div class="flex items-center">
					<div class="flex justify-center py-8 w-full">
						<button
							class="btn btn-square btn-outline btn-xs md:btn-sm rounded-none"
							on:click={() => (quantity === 1 ? quantity : quantity--)}
						>
							<i class="fa-solid fa-minus"></i>
						</button>
						<input
							class="text-sm font-bold bg-transparent rounded-none border-b border-t border-gray-400 w-12 text-center remove-arrow h-xs"
							type="number"
							value={quantity}
						/>
						<button
							class="btn btn-square btn-outline btn-xs md:btn-sm rounded-none"
							on:click={() => quantity++}
						>
							<i class="fa-solid fa-plus"></i>
						</button>
					</div>
					<div class="pl-8 pr-2">
						<i class="fa-solid fa-xmark text-gray-400"></i>
					</div>
				</div>
				<!-- <div class="flex">
        </div> -->
			</div>
		</div>
		<div class="md:bg-slate-50 px-4 min-w-2xl md:flex md:w-2xl h-32">
			<div class="w-28">
				<img
					src={img}
					alt="Samsung 65 4K UHD HDR QD-OLED Tizen Smart TV (QN65S92CAFXZC) - 2023 - Titan Black - Only at Best Buy"
				/>
			</div>
			<div class="flex gap-6">
				<div>
					<h2 class="md:pt-4 px-2 text-sm md:text-sm font-semibold text-wrap w-64">
						Samsung 65 4K UHD HDR QD-OLED Tizen Smart TV (QN65S92CAFXZC) - 2023 - Titan Black - Only
						at Best Buy
					</h2>
					<p class="pb-2 pt-2 text-xs md:text-base">$999</p>
				</div>
				<div class="flex items-center">
					<div class="flex justify-center py-8 w-full">
						<button
							class="btn btn-square btn-outline btn-xs md:btn-sm rounded-none"
							on:click={() => (quantity === 1 ? quantity : quantity--)}
						>
							<i class="fa-solid fa-minus"></i>
						</button>
						<input
							class="text-sm font-bold bg-transparent rounded-none border-b border-t border-gray-400 w-12 text-center remove-arrow h-xs"
							type="number"
							value={quantity}
						/>
						<button
							class="btn btn-square btn-outline btn-xs md:btn-sm rounded-none"
							on:click={() => quantity++}
						>
							<i class="fa-solid fa-plus"></i>
						</button>
					</div>
					<div class="pl-8 pr-2">
						<i class="fa-solid fa-xmark text-gray-400"></i>
					</div>
				</div>
				<!-- <div class="flex">
        </div> -->
			</div>
		</div>
	</div>

	<!-- <div class="hidden md:block">
    <div class="pt-2 pb-4">
      <p class="text-xs py-4 md:text-sm">
        Quantity: <span class="text-red-600 text-xs font-semibold md:text-base">
          product count</span
        >
      </p>
      <p class="text-xs md:text-sm">SAVE $300</p>
      <p class="text-2xl font-bold text-red-600">$999</p>
    </div>

    <div>
      <h3 class="text-sm py-4 md:text-base">Product Highlights</h3>
      <p class="text-sm md:text-base">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione ullam commodi ex laborum
        ipsam maiores!
      </p>
    </div>
  </div>
  <div class="flex items-center pt-12 hidden md:block">
    <button class="btn btn-square btn-outline">
      <i class="fa-solid fa-minus"></i>
    </button>
    <span class="text-xl px-4 font-bold">4</span>
    <button class="btn btn-square btn-outline">
      <i class="fa-solid fa-plus"></i>
    </button>
  </div>

  <div class=" w-full py-12 hidden md:block"></div> -->
	<div class="md:bg-slate-50 px-4 w-80 pb-28">
		<h2 class="md:pt-4 text-md md:text-lg font-bold text-center border-b pb-4">Order Summary</h2>
		<div class="pt-4 px-2 pb-4 border-b">
			<div class="flex justify-between">
				<p class="text-xs md:text-base">Item Total</p>
				<p class="text-xs md:text-base">$999</p>
			</div>
			<div class="flex justify-between">
				<p class="text-xs md:text-base">Shipping</p>
				<p class="text-xs md:text-base">$199</p>
			</div>
			<div class="flex justify-between">
				<p class="text-xs md:text-base">Estimated Sales Tax</p>
				<p class="text-xs md:text-base">$39</p>
			</div>
		</div>
		<div class="pt-4 px-2 pb-4">
			<div class="flex justify-between">
				<p class="text-xs md:text-lg font-bold">Total</p>
				<p class="text-xs md:text-base font-bold">$9000</p>
			</div>
		</div>
		<div class="border-b pb-8">
			<Button
				variant={ButtonVariant.PRIMARY}
				dClass="w-full rounded-none bg-amber-300 text-black font-bold text-lg">Checkout</Button
			>
		</div>
		<div class="pt-8 px-2 pb-4 text-sm">
			<p>One or more items in your cart require an account. Sign in or create an accout now</p>
		</div>
	</div>
</div>

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
