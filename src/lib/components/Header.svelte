<script lang="ts">
	import type { HeaderLink } from '../types/Header';
	import Logo from '$lib/icons/Logo.svelte';
	import { headerLinks } from '../data/header-links';
	import HeaderDrawer from './HeaderDrawer.svelte';
	import { cartItems } from '../cart';
	import { get } from 'svelte/store';

	const links: HeaderLink[] = headerLinks;
	let isOpen = false;

	function toggleDrawer() {
		isOpen = !isOpen;
		console.log(isOpen);
	}

	$: cartIsEmpty = get(cartItems).length === 0 ? true : false;

	function close() {
		isOpen = false;
	}
</script>

<header>
	<div class="bg-slate-50 border-b border-gray-300 flex items-center justify-between px-4">
		<div class="flex items-center">
			<div class="flex gap-16 items-center">
				<a href="/">
					<Logo />
				</a>
			</div>
			<div class="flex gap-4 justify-start">
				<a href="/" class="ml-4 cursor-pointer hidden md:block hover:font-semibold"> Home </a>
				<a href="/products" class="ml-4 cursor-pointer hidden md:block hover:font-semibold">
					Shop
				</a>
			</div>
		</div>
		<button class="hidden md:block relative">
			<div
				class={'bg-red-400 rounded-full w-2 h-2 absolute top-0 -right-2' + !cartIsEmpty
					? 'flex'
					: 'hidden'}
			></div>
			<a href="/cart">
				<i class="fa-solid fa-cart-shopping"></i>
			</a>
		</button>
		<button class="block md:hidden z-10 px-4" on:click={toggleDrawer}>
			<i class="fa-solid fa-bars"></i>
		</button>
	</div>
	<div class="md:hidden">
		<HeaderDrawer {links} {isOpen} on:close={close} />
	</div>
</header>
