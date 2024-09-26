import { prisma } from '$lib/server/prisma';
import type { LayoutServerData } from './$types';

export const load = async () => {
	const products = await prisma.product.findMany();
	return { products };
};
