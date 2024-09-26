import { prisma } from '$lib/server/prisma.js';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
/** @type {import('./$types').PageLoad} */

export const load: PageServerLoad = async ({ fetch, params, parent }) => {
	// Able to get data from +Layout.server.ts to nested child components
	// using parent() from event.parent parameter
	const parentData = await parent();
	console.log('paratData', parentData);

	const product = await prisma.product.findUnique({
		where: {
			id: parseInt(params.productId)
		}
	});

	if (!product) {
		throw error(404, 'Product not found');
	}

	return { product };
};
