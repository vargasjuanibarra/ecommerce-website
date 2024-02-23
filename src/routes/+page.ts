import { products } from "../lib/data/store";
/** @type {import('./$types').PageLoad} */

export async function load({fetch}: {fetch: typeof window.fetch}) {
 const res = await fetch("https://fakestoreapi.com/products?limit=10");
  const data = await res.json();
  products.set(data);
}
