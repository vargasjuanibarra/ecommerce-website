<script>
	import ProductCard from './ProductCard.svelte';

	function nextSlide() {
		let container = document.getElementById('scrollContainer');
		if (container) container.scrollLeft += 300;
	}

	function prevSlide() {
		let container = document.getElementById('scrollContainer');
		if (container) container.scrollLeft -= 300;
	}
</script>

<div class="mt-[10vw] flex justify-center items-center">
	<button class="btn btn-circle mx-2" on:click={() => prevSlide()}>❮</button>
	<div
		class="carousel carousel-center w-full p-4 rounded-box gap-5 flex justify-center"
		id="scrollContainer"
	>
		<div class="carousel-item max-w-md">
			<ProductCard />
		</div>
		<div class="carousel-item max-w-md">
			<ProductCard />
		</div>
		<div class="carousel-item max-w-md">
			<ProductCard />
		</div>
		<div class="carousel-item max-w-md">
			<ProductCard />
		</div>
		<div class="carousel-item max-w-md">
			<ProductCard />
		</div>
		<div class="carousel-item max-w-md">
			<ProductCard />
		</div>
		<div class="carousel-item max-w-md">
			<ProductCard />
		</div>
	</div>
	<button class="btn btn-circle mx-2" on:click={() => nextSlide()}>❯</button>
</div>

<style>
	#scrollContainer {
		overflow: auto;
		scroll-snap-type: x-mandatory;
		scroll-padding: 0 24px;
	}
</style>
