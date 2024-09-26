import { json, type RequestHandler } from '@sveltejs/kit';
import { prisma } from '$lib/server/prisma';

export const GET: RequestHandler = async (event) => {
	const limit = Number(event.url.searchParams.get('limit') ?? 20);
	const order = event.url.searchParams.get('order') ?? 'asc';
	const products = await prisma.product.findMany({
		orderBy: { id: order },
		take: limit
	});

	return json(products);
};
