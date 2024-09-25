<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	let categories: string[] = ['electronics', 'jewelery', "men's clothing", "women's clothing"];
	let priceRange: string[] = ['Lowest to Highest', 'Highest to Lowest'];
	let selectedCategory: string | null = null;
	let selectedRange: string | null = null;
	const dispatch = createEventDispatcher();

	// Simulate an API call function

	const handleCategoryChange = (category: string) => {
		if (selectedCategory === category) {
			// If already selected, uncheck it
			selectedCategory = null;
		} else {
			// Set the new selected category
			selectedCategory = category;
			dispatch('categorySelected', { selectedCategory });
		}
	};

	const handlePriceRangeChange = (range: string) => {
		if (selectedRange === range) {
			// If already selected, uncheck it
			selectedRange = null;
		} else {
			// Set the new selected category
			selectedRange = range;
			dispatch('priceRangeSelected', { selectedRange });
		}
	};
</script>

<div class=" gap-2 lg:hidden">
	<div class="flex flex-col sm:flex-row rounded-b-lg gap-4">
		<button class="btn btn-wide btn-outline md:text-md xs:text-sm font-medium">
			<span>
				<i class="fa-sharp fa-solid fa-filter"></i>
			</span>
			Sort & Filters
		</button>
	</div>
</div>

<div class="xsm:max-lg:hidden rounded-none">
	<div class="bg-slate-200 pt-28 pb-4 px-4">
		<div class=" text-md font-medium">Filter by</div>
	</div>
	<details class="collapse collapse-arrow bg-white my-1 rounded-none border-b">
		<summary class="collapse-title text-md font-medium">Category</summary>
		<div class="collapse-content">
			<div class="grid divide-y">
				{#if categories.length === 0}
					<p class="text-lg py-2">No categories available</p>
				{:else}
					{#each categories as category}
						<div class="flex justify-between items-center">
							<p class="sm:text-sm text-lg py-2">{category}</p>
							<input
								type="checkbox"
								class="checkbox"
								checked={selectedCategory === category}
								on:change={() => handleCategoryChange(category)}
							/>
						</div>
					{/each}
				{/if}
			</div>
		</div>
	</details>
	<details class="collapse collapse-arrow bg-white my-1 rounded-none border-b">
		<summary class="collapse-title text-md font-medium">Price</summary>
		{#each priceRange as range}
			<div class="flex justify-between items-center">
				<p class="sm:text-sm text-lg py-2">{range}</p>
				<input
					type="checkbox"
					class="checkbox"
					checked={selectedRange === range}
					on:change={() => handlePriceRangeChange(range)}
				/>
			</div>
		{/each}
	</details>
</div>
