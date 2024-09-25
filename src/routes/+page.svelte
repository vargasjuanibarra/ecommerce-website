<script lang="ts">
	import Carousel from '../lib/components/Carousel.svelte';
	import CategorySection from '../lib/components/CategorySection.svelte';
	import HeroSection from '../lib/components/HeroSection.svelte';

	export let data: any;
	$: ({ products } = data);
	console.log('products', products);
</script>

<svelte:head>
	<title>BestBargain</title>
	<meta name="description" content="Juan E-commerce Store" />
</svelte:head>

<div class="px-4 md:padding-x pb-16 bg-white">
	<HeroSection />
	<CategorySection />

	<div
		class="bg-gradient-1 bg-cover py-4 md:py-12 flex justify-center items-center my-8 rounded-br-lg rounded-tl-lg"
	>
		<h2 class="text-center md:text-3xl font-bold text-white bg-red-700 w-max py-2 px-4">
			Top Tech Deals
		</h2>
	</div>
	<Carousel {products} />
</div>
