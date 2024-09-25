// See https://kit.svelte.dev/docs/types#app

import type { PrismaClient } from '@prisma/client';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
	var prisma: PrismaClient;

	declare class Product {
		id: string;
		category: string;
		description: string;
		image: string;
		price: number;
		rating: { rate: number; count: number };
		title: string;
	}

	declare class CartItem {
		product: Product;
		quantity: number;
	}
}

export {};
