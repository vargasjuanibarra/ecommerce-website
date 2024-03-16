import { products } from "$lib/data/store";

export async function load({fetch}) {
  const fetchProducts = async () => {
    const productsRes = await fetch("https://fakestoreapi.com/products");
    const productdata = await productsRes.json();
    return productdata;
  }

  const fetchFilters = async () => {
    const filterRes = await fetch("https://fakestoreapi.com/products/categories");
    const filterData = await filterRes.json();
    return filterData;
  }


  return {
    products: await fetchProducts(),
    filters: await fetchFilters()
  }

}
