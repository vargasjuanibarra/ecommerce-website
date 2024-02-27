<script>
	import { ButtonVariant } from '../types/Button';
	import Button from './Button.svelte';
</script>

<div class="pt-4 pb-8 md:flex md:flex-row md:justify-center gap-5">
	<div class="md:bg-slate-50 px-4 max-w-2xl relative">
		<h2 class="md:pt-4 text-sm md:text-base font-bold">Product Title</h2>
		<p class="pb-2 pt-4 text-xs md:text-base">product category</p>
		<div class="hidden md:block">
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

		<div class=" w-full py-12 hidden md:block"></div>
	</div>
	<div class="md:bg-slate-50 px-4 w-80">
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
