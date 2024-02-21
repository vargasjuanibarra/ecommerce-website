<script>
	import { footerSections } from '../data/footer-section';
	import LogoGray from '../icons/LogoGray.svelte';

	const logo = './icons/juan-logo.png';
</script>

<div class="bg-fw-darkblue text-white flex padding-x pb-16 pt-12 gap-28">
	<div class="flex flex-col justify-between">
		<LogoGray />
		<span class="text-fw-dark-gray block"> &copy; Copyright 2024 Juan E-commerce Store. </span>
	</div>
	{#each footerSections as section}
		<div class="flex flex-col gap-5">
			<span class="text-xl font-bold">{section.title}</span>
			<div class="flex flex-col gap-3"></div>
			{#each section.links as link}
				<a href={link.link}>{link.name}</a>
			{/each}
		</div>
	{/each}
</div>
