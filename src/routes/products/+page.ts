import type { PageLoad } from './$types';

// export async function load({ fetch }) {
// 	const fetchProducts = async () => {
// 		const productsRes = await fetch('https://fakestoreapi.com/products');
// 		const productdata = await productsRes.json();
// 		console.log(productdata);
// 		return productdata;
// 	};

// 	const fetchFilters = async () => {
// 		const filterRes = await fetch('https://fakestoreapi.com/products/categories');
// 		const filterData = await filterRes.json();
// 		return filterData;
// 	};

// 	return {
// 		products: await fetchProducts(),
// 		filters: await fetchFilters()
// 	};
// }

export const load: PageLoad = async ({ fetch }) => {
	// return {
	// 	products: await prisma.product.findMany(),
	// 	filters: ['electronics', 'jewelery', "men's clothing", "women's clothing"]
	// };

	const response = await fetch('/api/products');
	const products = await response.json();
	return { products };
};
