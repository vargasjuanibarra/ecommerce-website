<script lang="ts">
	import ProductCard from '$lib/components/ProductCard.svelte';
	import Filters from '$lib/components/Filters.svelte';

	export let data: any;
	const { products, filters } = data;
</script>

<div class="px-6 pb-16 bg-white mx-auto">
	<div class="md:w-full lg:hidden py-8">
		<Filters {filters} />
	</div>
	<div class="flex justify-center items-start">
		<div class="gap-5 px-2 mx-2 md:min-w-60 xsm:max-lg:hidden">
			<Filters {filters} />
		</div>
		<div class="max-w-[1065px]">
			<h2 class="text-start md:text-3xl font-bold text-white bg-red-700 w-full py-2 px-4">
				Global Brand Deals
			</h2>
			<div class="flex pt-12 md:pt-12 flex-wrap justify-center gap-6 lg:max-w-fit">
				{#each products as product}
					<ProductCard {product} />
				{/each}
			</div>
		</div>
	</div>
</div>
