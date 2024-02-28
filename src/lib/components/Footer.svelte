<script>
	import { footerSections } from '../data/footer-section';
	import LogoGray from '../icons/LogoGray.svelte';

	const logo = './icons/juan-logo.png';
</script>

<div
	class="bg-gray-600 text-white flex flex-col md:padding-x pb-12 md:pt-12 md:flex-row gap-8 lg:gap-16 xl:gap-28 relative justify-center"
>
	<div class="flex flex-col justify-between hidden md:block">
		<LogoGray />
		<span class="text-fw-dark-gray hidden md:block">
			&copy; Copyright 2024 Juan E-commerce Store.
		</span>
	</div>
	{#each footerSections as section}
		<div class="flex flex-col gap-5 xsm:max-md:hidden">
			<span class="text-xl font-bold">{section.title}</span>
			<div class="flex flex-col gap-3"></div>
			{#each section.links as link}
				<a href={link.link}>{link.name}</a>
			{/each}
		</div>
	{/each}

	<div class="block md:hidden">
		{#each footerSections as section, index}
			<div class="collapse collapse-arrow bg-transparent rounded-none">
				<input type="radio" name="accordion-1" />
				<div class="collapse-title text-sm md:text-base font-medium border-b">
					{section.title}
				</div>
				<div class="collapse-content">
					{#each section.links as link}
						<a href="/"><p>{link.name}</p></a>
					{/each}
				</div>
			</div>
		{/each}
	</div>
	<div class="flex flex-col justify-center md:hidden block padding-x">
		<div class="flex justify-center">
			<LogoGray />
		</div>
		<div class="flex text-xs justify-center text-fw-dark-gray md:hidden block">
			&copy; Copyright 2024 Juan E-commerce Store.
		</div>
	</div>
</div>
<!-- 
<div class="collapse collapse-arrow bg-base-200">
	<input type="radio" name="my-accordion-2" checked="checked" />
	<div class="collapse-title text-xl font-medium">Click to open this one and close others</div>
	<div class="collapse-content">
		<p>hello</p>
	</div>
</div>
<div class="collapse collapse-arrow bg-base-200">
	<input type="radio" name="my-accordion-2" />
	<div class="collapse-title text-xl font-medium">Click to open this one and close others</div>
	<div class="collapse-content">
		<p>hello</p>
	</div>
</div>
<div class="collapse collapse-arrow bg-base-200">
	<input type="radio" name="my-accordion-2" />
	<div class="collapse-title text-xl font-medium">Click to open this one and close others</div>
	<div class="collapse-content">
		<p>hello</p>
	</div>
</div> -->
