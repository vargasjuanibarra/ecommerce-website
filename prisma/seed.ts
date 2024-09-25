import axios from 'axios';
import { PrismaClient } from '@prisma/client';
import { productsData } from '../src/lib/data/productsData';

const db = new PrismaClient();

// async function getProducts() {
// 	const maxRetries = 3;
// 	let attempts = 0;

// 	while (attempts < maxRetries) {
// 		try {
// 			const response = await axios.get('https://fakestoreapi.com/products', {
// 				timeout: 60000 // 30 seconds timeout
// 			});
// 			return response.data;
// 		} catch (error) {
// 			attempts++;
// 			console.error(`Attempt ${attempts} failed:`, error.message);
// 			if (attempts >= maxRetries) {
// 				throw new Error('Failed to fetch products after multiple attempts');
// 			}
// 			await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay between retries
// 		}
// 	}
// }

async function main() {
	try {
		const products = productsData;

		for (const product of products) {
			await db.product.create({
				data: {
					title: product.title,
					category: product.category,
					description: product.description,
					image: product.image,
					price: product.price,
					rating: product.rating
				}
			});
		}
	} catch (error) {
		console.log('Error during seeding:', error);
	}
}

main();
