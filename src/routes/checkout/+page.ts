// import { products } from "$lib/data/store";
// import { get } from "svelte/store";
// /** @type {import('./$types').PageLoad} */
// import { cartItems } from "../../lib/cart";

// let cart = get(cartItems)

// export async function load({fetch}: {fetch: typeof window.fetch}) {
//   try {

//     console.log(cart);
//     const cartItemsResponse = await Promise.all(
//       cart.map(item => fetch(`https://fakestoreapi.com/products/${item.product.id}`))
//     );
//     // const data = cartItemsResponse.map(async (item) =>  item.product.json())
//     const data = await Promise.all(
//       cartItemsResponse.map(response => response.json())
//     );

//     cartItems.subscribe((value) => {
//       cart = data;
//     });
//     return {data};

//   } catch (error) {
//     throw new Error(`Error fetching cartItems: ${error}`)
//   }
// }
