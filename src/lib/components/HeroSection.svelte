<script>
	import { ButtonVariant } from '../types/Button';
	import Button from './Button.svelte';
</script>

<h1
	class="pt-6 flex flex-col text-[18vw] leading-none text-fw-blue uppercase font-serif text-start items-start"
>
	Elevate your <br />
	<div class="relative flex text-[12vw]">
		<span>Tech</span>
		<div class="w-[30vw]"></div>
		<img
			src="src/lib/icons/gadgets-image.png"
			alt="Exclusive Laptops Gaming Laptops"
			class="absolute left-[18vw] -top-[10vw] w-[32vw]"
		/>
		<div class="flex flex-col gap-5">
			<span>Game</span>
			<div class="w-[25vw] flex flex-col gap-10">
				<span class="block text-sm font-sans normal-case">
					Discover out curated selection of cutting-edge laptops designed to empawoer your gaming
					experience.
				</span>
				<Button variant={ButtonVariant.SECONDARY} dClass="w-full">Explore Laptops &rarr;</Button>
			</div>
		</div>
	</div>
</h1>
