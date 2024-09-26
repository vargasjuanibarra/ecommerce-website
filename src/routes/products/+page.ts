import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const response = await fetch('/api/products?order=asc&limit=15');
	const products = await response.json();
	return { products };
};
