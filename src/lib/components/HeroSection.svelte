<script>
	import { ButtonVariant } from '../types/Button';
	import Button from './Button.svelte';
</script>

<h1
	class="pt-6 flex flex-col text-[15vw] leading-none text-slate-800 uppercase font-serif text-start items-start"
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
		<!-- <iframe
			src="https://giphy.com/embed/pHXNzcgU98fgRE2aOn"
			frameBorder="0"
			class="absolute left-[20vw] -top-[7vw] w-[32vw] bg-transparent"
			allowFullScreen
		></iframe> -->
		<div class="flex flex-col gap-5">
			<span class="text-slate-800">Brands</span>
			<div class="w-[25vw] flex flex-col gap-10">
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
