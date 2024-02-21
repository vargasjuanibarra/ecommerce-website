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
	<div class="padding-x py-6 border-b border-gray-300 flex items-center justify-between">
		<div class="flex gap-16 items-center">
			<Logo />
			{#each headerLinks as link}
				<a href={link.link} class="ml-4">
					{link.label}
				</a>
			{/each}
		</div>
		<button>
			<i class="fa-solid fa-cart-shopping"></i>
		</button>
	</div>
</header>
