import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	if (event.url.pathname.startsWith('/banana')) {
		return new Response('banana');
	}

	return resolve(event);
};
