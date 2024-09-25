import type { PageServerLoad } from './$types';
import { prisma } from '$lib/server/prisma';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ fetch }) => {
	const products = await prisma.product.findMany({
		where: { category: 'electronics' }
	});

	if (!products) {
		throw error(404, 'Products not found');
	}
	return {
		products
	};
};
