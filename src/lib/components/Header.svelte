<script lang="ts">
	import type { HeaderLink } from '../types/Header';
	import Logo from '$lib/icons/Logo.svelte';

	const headerLinks: HeaderLink[] = [
		{
			label: 'Home',
			link: '/',
			class: 'fa-solid fa-house'
		},
		{
			label: 'Store',
			link: '/store',
			class: 'fa-solid fa-store'
		}
	];
</script>

<header>
	<div
		class="padding-x py-6 bg-slate-50 border-b border-gray-300 flex items-center justify-between"
	>
		<div class="flex gap-16 items-center">
			<Logo />
			{#each headerLinks as link}
				<a href={link.link} class="ml-4 cursor-pointer hidden md:block">
					{link.label}
				</a>
			{/each}
		</div>
		<button class="hidden md:block">
			<i class="fa-solid fa-cart-shopping"></i>
		</button>
		<button class="block md:hidden">
			<i class="fa-solid fa-bars"></i>
		</button>
	</div>
</header>
