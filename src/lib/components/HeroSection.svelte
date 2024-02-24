<script>
	import { ButtonVariant } from '../types/Button';
	import Button from './Button.svelte';
</script>

<h1
	class="pt-6 flex flex-col text-[15vw] leading-none text-slate-800 uppercase font-serif text-center items-center sm:text-start sm:items-start"
>
	Your Gateway to<br />
	<div class="relative flex text-[12vw]">
		<span class="bg-gradient-1 bg-cover bg-clip-text text-transparent">Global</span>
		<div class="w-[22vw]"></div>
		<img
			src="src/lib/images/shopping-bag.png"
			alt="Exclusive Laptops Gaming Laptops"
			class="absolute left-[14vw] -top-[12vw] w-[44vw]"
		/>
		<div class="flex flex-col gap-5">
			<span class="text-slate-800">Brands</span>
			<div class="w-[32vw] lg:w-[25vw] flex flex-col gap-5 sm:gap-10 sm:flex hidden sm:visible">
				<span class="block text-sm font-sans normal-case">
					Discover our curated selection of cutting-edge tech products from global brands designed
					to empower your shopping experience.
				</span>
				<Button
					variant={ButtonVariant.SECONDARY}
					dClass="w-full hover:scale-105 transition-transform duration-300 ease-in-out"
					>Shop Products &rarr;</Button
				>
			</div>
		</div>
	</div>
</h1>
<div class="w-full flex flex-col gap-8 flex sm:hidden mt-[20vw]">
	<span class="block text-sm font-sans normal-case w-full sm:w-2/3 text-justify">
		Discover our curated selection of cutting-edge tech products from global brands designed to
		empower your shopping experience.
	</span>
	<Button
		variant={ButtonVariant.SECONDARY}
		dClass="w-full hover:scale-105 transition-transform duration-300 ease-in-out"
		>Shop Products &rarr;</Button
	>
</div>
