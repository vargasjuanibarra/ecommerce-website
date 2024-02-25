import { products } from "$lib/data/store";
/** @type {import('./$types').PageLoad} */

export async function load({fetch}: {fetch: typeof window.fetch}) {
 const [productsResponse, filtersResponse] = await Promise.all([
  fetch("https://fakestoreapi.com/products"),
  fetch("https://fakestoreapi.com/products/categories")
])
  const productsData = await productsResponse.json();
  const categoriesFilter = await filtersResponse.json();
  console.log(productsData)
  console.log(categoriesFilter)
  products.set(productsData);

  return {
    props: {
      filters: categoriesFilter
    }
  }

}
