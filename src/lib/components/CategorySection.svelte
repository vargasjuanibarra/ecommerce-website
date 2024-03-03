<script>
	import { ButtonVariant } from '../types/Button';
	import Button from './Button.svelte';
</script>

<div class="mt-16 flex flex-col gap-5 h-auto lg:h-[70vh] lg:flex-row">
	<div class="w-full lg:w-2/3 rounded-lg h-48 lg:h-full overflow-hidden cursor-pointer relative">
		<img
			class="scale-image object-cover h-full w-full hover:scale-105 transition-transform duration-300 ease-in-out"
			src="https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
			alt="Laptop Discounts"
		/>
		<span
			class="text-white absolute px-5 right-0 text-center lg:left-1/2 bottom-5 lg:top-12 lg:bottom-auto lg:-translate-x-1/2"
		>
			Kickoff New Year with 15% Discount on Laptops
		</span>
		<Button
			dClass="hidden lg:block absolute bottom-5 left-1/2 -translate-x-1/2 border-white text-white w-1/3 hover:scale-105 transition-transform duration-300 ease-in-out"
			variant={ButtonVariant.SECONDARY}
		>
			View Offer
		</Button>
	</div>
	<div class="flex flex-col gap-5 w-full lg:w-1/3 lg:h-full">
		<div class="w-full rounded-lg h-48 lg:h-full overflow-hidden relative cursor-pointer">
			<img
				class="scale-image object-cover h-full w-full hover:scale-105 transition-transform duration-300 ease-in-out"
				src="https://images.pexels.com/photos/908184/pexels-photo-908184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
				alt="Smart Watch Collections"
			/>
			<span class="text-white absolute px-5 left-0 bottom-5"> Smart Watch Collections </span>
		</div>
		<div class="w-full rounded-lg h-48 lg:h-full overflow-hidden relative cursor-pointer">
			<img
				class="scale-image object-cover h-full w-full hover:scale-105 transition-transform duration-300 ease-in-out"
				src="https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
				alt="Headphones"
			/>
			<span class="text-white absolute px-5 right-0 bottom-5"> Men's Clothing </span>
		</div>
		<div class="w-full rounded-lg h-48 lg:h-full overflow-hidden relative cursor-pointer">
			<img
				class="scale-image object-cover h-full w-full hover:scale-105 transition-transform duration-300 ease-in-out"
				src="https://images.pexels.com/photos/7679863/pexels-photo-7679863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
				alt="Large Selection of Keyboards"
			/>
			<span class="text-white absolute px-5 left-0 bottom-5">Women's Clothing</span>
		</div>
	</div>
</div>
