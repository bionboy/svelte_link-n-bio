import type { Actions, PageServerLoad } from './$types';

export const load = (async ({ cookies }) => {
	const boatName = cookies.get('boatName');
	return { boatName };
}) satisfies PageServerLoad;

export const actions: Actions = {
	default: async ({ request, cookies }) => {
		const boatName = await request.formData().then((data) => data.get('boatName') as string);
		cookies.set('boatName', boatName, {
			path: '/'
			// maxAge: 60 * 60 * 24 * 7 // 1 week
		});
	}
};
