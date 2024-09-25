import { json, type RequestHandler } from '@sveltejs/kit';
import { prisma } from '$lib/server/prisma';

export const GET: RequestHandler = async (event) => {
	const products = await prisma.product.findMany();

	event.setHeaders({ 'Cache-Control': 'max-age=60' });
	return json(products);
};
