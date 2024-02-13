import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
    const users = [
        { "id": 1, "admin": true },
        { "id": 2, "admin": false }
    ];
    console.log('users', users)

    // console.log('e', e.url.searchParams['userID']);
    // const user = users.find(u => u.id === e.params['userId']);
    const user = {"admin": true}

    if (!user?.admin) {
        throw error(401, 'Unauthorized');
    }

    return json({name: 'dog'});
}