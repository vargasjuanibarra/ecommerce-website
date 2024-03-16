
export async function load({fetch}) {
 const res = await fetch("https://fakestoreapi.com/products/category/electronics");
  const products = await res.json();
  return {
    products
  }
}
