// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

  declare class Product {
    id: string;
    category: string;
    description: string;
    image: string;
    price: number;
    rating: {rate: number, count: number}
    title: string;
  }

  declare class CartItem {
    product: Product;
    quantity: number;
  }
}

export {};
