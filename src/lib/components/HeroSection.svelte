<script>
	import { ButtonVariant } from '../types/Button';
	import Button from './Button.svelte';
</script>

<div class="flex justify-center">
	<div>
		<div class="flex justify-center items-center">
			<h1
				class="pt-6 flex flex-col text-[15vw] md:text-[10vw] leading-none text-slate-800 uppercase font-serif text-center items-center sm:text-start sm:items-start text-red-700"
			>
				Supreme<br />
				<div class="relative flex text-[12vw] md: text-[10vw]">
					<span class="text-red-500">Sale</span>
					<!-- <img
            src="src/lib/images/shopping-bag.png"
            alt="Exclusive Laptops Gaming Laptops"
            class="absolute left-[14vw] -top-[12vw] w-[44vw]"
          /> -->
					<span class="bg-base-1 bg-cover bg-clip-text text-transparent"> Station</span>
				</div>
			</h1>
			<div class="gap-5 px-4">
				<div class="w-[28vw] lg:w-[25vw] flex flex-col gap-5 sm:gap-4 md:flex hidden">
					<span class="block text-sm font-sans normal-case">
						Discover our curated selection of cutting-edge tech products from global brands designed
						to empower your shopping experience.
					</span>
					<a href="/products">
						<Button
							variant={ButtonVariant.SECONDARY}
							dClass="w-full hover:scale-105 transition-transform duration-300 ease-in-out  sm:text-xsm"
							>Shop Products &rarr;</Button
						>
					</a>
				</div>
			</div>
		</div>
		<div class="w-full flex flex-col gap-8 flex md:hidden mt-[4vw] px-12 pb-8">
			<span class="block text-sm font-sans normal-case w-full sm:w-2/3 text-justify xsm:text-sm">
				Discover our curated selection of cutting-edge tech products from global brands designed to
				empower your shopping experience.
			</span>
			<a href="/products">
				<Button
					variant={ButtonVariant.SECONDARY}
					dClass="w-full hover:scale-105 transition-transform duration-300 ease-in-out sm:text-xsm"
					>Shop Products &rarr;</Button
				>
			</a>
		</div>
	</div>
</div>
