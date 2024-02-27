<script lang="ts">
	export let categories: any = [];
</script>

<div class="flex justify-center gap-2 xsm:flex-col xsm:items-center lg:hidden">
	<div class=" justify-center rounded-b-lg px-4 block">
		<button class="btn btn-wide btn-outline md:text-md xsm:text-sm font-medium">
			<span>
				<i class="fa-sharp fa-solid fa-filter"></i>
			</span>
			Filters
		</button>
	</div>
	<div class="rounded-b-lg">
		<button class="btn btn-outline btn-wide md:text-md xsm:text-sm font-medium">
			<span>
				<i class="fa-solid fa-arrow-up-short-wide"></i>
			</span>
			Sort</button
		>
	</div>
</div>

<div class="xsm:max-lg:hidden rounded-none">
	<div class="bg-slate-200 pt-28 pb-4 px-4">
		<div class=" text-md font-medium">Filters</div>
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
							<input type="checkbox" checked="checked" class="checkbox" />
						</div>
					{/each}
				{/if}
			</div>
		</div>
	</details>
	<details class="collapse collapse-arrow bg-white my-1 rounded-none border-b">
		<summary class="collapse-title text-md font-medium">Price</summary>
		<div class="collapse-content">
			<p>Lowest to Highest</p>
			<p>Highest to Lowest</p>
		</div>
	</details>
	<details class="collapse collapse-arrow bg-white my-1 rounded-none border-b">
		<summary class="collapse-title text-md font-medium">Rating</summary>
		<div class="collapse-content">
			<div class="flex justify-between items-center">
				<p class="text-lg py-2">5 Stars</p>
				<input type="checkbox" checked="checked" class="checkbox" />
			</div>
			<div class="flex justify-between items-center">
				<p class="text-lg py-2">4 Stars</p>
				<input type="checkbox" checked="checked" class="checkbox" />
			</div>
			<div class="flex justify-between items-center">
				<p class="text-lg py-2">3 Stars</p>
				<input type="checkbox" checked="checked" class="checkbox" />
			</div>
			<div class="flex justify-between items-center">
				<p class="text-lg py-2">2 Stars</p>
				<input type="checkbox" checked="checked" class="checkbox" />
			</div>
			<div class="flex justify-between items-center">
				<p class="text-lg py-2">1 Stars</p>
				<input type="checkbox" checked="checked" class="checkbox" />
			</div>
		</div>
	</details>
</div>
