import { products } from "$lib/data/store";
/** @type {import('./$types').PageLoad} */

export async function load({ fetch, params }) {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${params.productId}`)
    const product = await response.json();
    
    return {
        product
    }
  }
  catch (error) {
    throw new Error(`Error: ${error}`)
  }
}
