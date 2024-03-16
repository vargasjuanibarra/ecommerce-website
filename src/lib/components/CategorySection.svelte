<script>
	import { ButtonVariant } from '../types/Button';
	import Button from './Button.svelte';
	import gadjets from '$lib/images/gadjets.jpg';
	import jewelry from '$lib/images/jewelry.webp';
	import mensClothes from '$lib/images/mens-clothes.webp';
	import womensClothes from '$lib/images/womens-clothes.jpeg';
</script>

<div class="mt-16 flex flex-col gap-5 h-auto lg:h-[70vh] lg:flex-row">
	<div class="w-full lg:w-2/3 rounded-lg h-48 lg:h-full overflow-hidden cursor-pointer relative">
		<a href="/products">
			<img
				class="scale-image object-cover h-full w-full hover:scale-105 transition-transform duration-300 ease-in-out"
				src={gadjets}
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
		</a>
	</div>
	<div class="flex flex-col gap-5 w-full lg:w-1/3 lg:h-full">
		<div class="w-full rounded-lg h-48 lg:h-full overflow-hidden relative cursor-pointer">
			<a href="/products">
				<img
					class="scale-image object-cover h-full w-full hover:scale-105 transition-transform duration-300 ease-in-out"
					src={jewelry}
					alt="Jewelry Collection"
				/>
				<span class="text-white absolute px-5 left-0 bottom-5"> Smart Watch Collections </span>
			</a>
		</div>
		<div class="w-full rounded-lg h-48 lg:h-full overflow-hidden relative cursor-pointer">
			<a href="/products">
				<img
					class="scale-image object-cover h-full w-full hover:scale-105 transition-transform duration-300 ease-in-out"
					src={mensClothes}
					alt="mens Clothes Collection"
				/>
				<span class="text-white absolute px-5 right-0 bottom-5"> Men's Clothing </span>
			</a>
		</div>
		<div class="w-full rounded-lg h-48 lg:h-full overflow-hidden relative cursor-pointer">
			<a href="/products">
				<img
					class="scale-image object-cover h-full w-full hover:scale-105 transition-transform duration-300 ease-in-out"
					src={womensClothes}
					alt="Large Selection of Keyboards"
				/>
				<span class="text-white absolute px-5 left-0 bottom-5">Women's Clothing</span>
			</a>
		</div>
	</div>
</div>
