<script lang="ts">
	import type { HeaderLink } from '$lib/types/Header';
	import { createEventDispatcher } from 'svelte';

	export let isOpen: boolean;
	export let links: HeaderLink[];
	const dispatch = createEventDispatcher();

	function close() {
		dispatch('close');
	}
</script>

<div class={`fixed top-0 bottom-0 left-0 right-0 z-50 invisible ${isOpen && '!visible'}`}>
	<button
		class={`w-full h-full bg-black/50 flex justify-end transition opacity-0 ${isOpen && '!opacity-100'}`}
		on:click={close}
	/>

	<div
		class="flex flex-col text-fw-blue text-lg font-medium absolute xsm:flex-row xsm:justify-between xsm:max-sm:w-full sm:w-2/3 w-1/3 h-full top-0 right-0 bg-white whitespace-nowrap pt-5"
	>
		<div>
			{#each links as link}
				<div class="md:px-5 w-full py-3">
					<button
						class="w-min gap-2 flex items-center hover:scale-110 transition-transform duration-300 ease-in-out"
					>
						<a href={link.link} class="ml-4 cursor-pointer" on:click={close}>
							<i class={link.class}></i>
							<span>
								{link.label}
							</span>
						</a>
					</button>
				</div>
			{/each}
			<div class="md:px-5 w-full py-3 relative">
				<div class="bg-red-400 rounded-full w-2 h-2 absolute top-3 right-12"></div>
				<button class="w-min gap-2 flex items-center">
					<a href="/cart" class="ml-4 cursor-pointer" on:click={close}>
						<i class="fa-solid fa-cart-shopping"></i>
						<span> Cart </span>
					</a>
				</button>
			</div>
		</div>
		<span class="px-4 pt-3" on:click={close}>
			<i class="fa-solid fa-xmark"></i>
		</span>
	</div>
</div>
