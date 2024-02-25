<script lang="ts">
	import type { HeaderLink } from '../types/Header';
	import Logo from '$lib/icons/Logo.svelte';
	import { headerLinks } from '../data/header-links';
	import HeaderDrawer from './HeaderDrawer.svelte';

	const links: HeaderLink[] = headerLinks;
	let isOpen = false;

	function toggleDrawer() {
		isOpen = !isOpen;
		console.log(isOpen);
	}

	function close() {
		isOpen = false;
	}
</script>

<header>
	<div
		class="padding-x py-6 bg-slate-50 border-b border-gray-300 flex items-center justify-between"
	>
		<div class="flex gap-16 items-center">
			<a href="/">
				<Logo />
			</a>
			{#each links as link}
				<a href={link.link} class="ml-4 cursor-pointer hidden md:block">
					{link.label}
				</a>
			{/each}
		</div>
		<button class="hidden md:block">
			<i class="fa-solid fa-cart-shopping"></i>
		</button>
		<button class="block md:hidden z-10 px-4" on:click={toggleDrawer}>
			<i class="fa-solid fa-bars"></i>
		</button>
	</div>
	<div class="md:hidden">
		<HeaderDrawer {links} {isOpen} on:close={close} />
	</div>
</header>
