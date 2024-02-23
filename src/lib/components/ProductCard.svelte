<script lang="ts">
	import { ButtonVariant } from '../types/Button';
	import Button from './Button.svelte';

	export let product: any;
	export let index;
</script>

<div
	class="max-w-[20vw] h-full p-8 pb-10 flex flex-col shadow-sm bg-white rounded-lg justify-between overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out"
>
	<div>
		<div class="w-full aspect-square rounded-xl mb-7 overflow-hidden flex justify-center">
			<img
				class="w-md h-full object-cover scale-image cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
				src={product.image}
				alt="Product"
			/>
		</div>

		<button class="w-min whitespace-nowrap font-bold xl:text-sm text-fw-blue text-xl mb-6 block">
			{product.title}
		</button>
	</div>

	<div>
		<button class="w-min whitespace-nowrap font-light text-fw-darkgrey mb-3 block">
			{product.category}
		</button>
		<div class="flex items-center justify-between">
			<span class="font-light text-fw-darkgrey text-sm">
				qnty. {product.rating.count}
			</span>
			<div class="flex gap-1 items-center">
				*
				<span class="font-bold text-fw-gold text-sm items-center">
					{product.rating.rate}
				</span>
			</div>
		</div>
		<span class="font-semibold text-2xl block mb-6 text-fw-black">
			${product.price}
		</span>
		<Button variant={ButtonVariant.PRIMARY} dClass="w-full">Add to cart</Button>
	</div>
</div>
