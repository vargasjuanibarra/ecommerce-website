<script>
	import { ButtonVariant } from '../types/Button';
	import Button from './Button.svelte';
</script>

<div class="h-full p-8 pb-10 flex flex-col shadow-sm bg-white rounded-lg justify-between">
	<div>
		<div class="w-full aspect-ratio rounded-xl mb-7 overflow-hidden">
			<img
				src="src/lib/images/laptop.png"
				alt=""
				class="w-full h-full object-cover cursor-pointer"
			/>
		</div>
		<button class="w-min whitespace-no-wrap font-bold text-fw-blue text-xl mb-6 block">
			Product Name
		</button>
	</div>

	<div>
		<button class="w-min whitespace-no-wrap font-bold text-fw-blue text-xl mb-6 block">
			Product Category
		</button>
		<div class="flex item-center justify-between">
			<span>$ 20.00</span>
			<div class="flex gap-1 items-center">
				*
				<div class="font-bold text-fw-gold text-sm items-center">4.9</div>
			</div>
		</div>
		<span class="font-semibold text-2xl block mb-6 text-fw-red"> 15% OFF </span>
		<Button variant={ButtonVariant.PRIMARY} dClass="w-full">Add to Cart</Button>
	</div>
</div>
