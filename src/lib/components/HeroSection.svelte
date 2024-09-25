<script>
	import { ButtonVariant } from '../types/Button';
	import Button from './Button.svelte';
</script>

<div class="flex justify-center">
	<div>
		<div class="flex justify-center items-center">
			<h1
				class="pt-6 flex flex-col text-[15vw] md:text-[10vw] leading-none uppercase font-serif text-center items-center sm:text-start sm:items-start text-red-700"
			>
				BEST<br />
				<div class="relative flex text-[12vw] md: text-[10vw]">
					<span class="bg-base-1 bg-cover bg-clip-text text-transparent">BARGAIN</span>

					<span class="text-red-700"> STORE</span>
				</div>
			</h1>
			<div class="gap-5 px-4">
				<div class="w-[24vw] flex flex-col gap-5 sm:gap-4 md:flex hidden">
					<span class="block text-sm lg:text-lg font-sans normal-case">
						Discover our curated selection of cutting-edge tech products from global brands designed
						to empower your shopping experience.
					</span>
					<a href="/products">
						<Button
							variant={ButtonVariant.SECONDARY}
							dClass="w-full hover:scale-105 transition-transform duration-300 ease-in-out text-sm lg:text-lg"
							>Shop Products &rarr;</Button
						>
					</a>
				</div>
			</div>
		</div>
		<div class="w-full flex flex-col gap-8 flex md:hidden mt-[4vw] px-12 pb-8">
			<span class="block text-sm font-sans normal-case w-full sm:w-2/3 text-justify xsm:text-xsm">
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
