<script>
	import Carousel from '../lib/components/Carousel.svelte';
	import CategorySection from '../lib/components/CategorySection.svelte';
	import HeroSection from '../lib/components/HeroSection.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Juan E-commerce Store" />
</svelte:head>

<div class="padding-x pb-16 bg-fw-grey">
	<HeroSection />
	<CategorySection />
	<Carousel />
</div>
