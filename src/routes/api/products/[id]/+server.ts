import type { RequestHandler } from '@sveltejs/kit';
import { prisma } from '$lib/server/prisma';

export const GET = async (event: any) => {
	const productData = await prisma.product.findUnique({
		where: {
			id: parseInt(event.params.id)
		}
	});

	const options: ResponseInit = {
		status: 200,
		headers: {
			'Content-Type': 'application/json'
		}
	};

	if (!productData) {
		return new Response(JSON.stringify({ error: 'Product not found' }), {
			status: 404,
			headers: { 'Content-Type': 'application/json' }
		});
	}

	return new Response(JSON.stringify(productData), options);
};
