import { get } from "svelte/store";
import { products } from "../lib/data/store";

export async function load() {
 const res = await fetch("https://fakestoreapi.com/products?limit=10");
  const data = await res.json();
  products.set(data);
}
