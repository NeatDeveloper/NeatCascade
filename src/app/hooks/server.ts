import { dev } from '$app/environment';
import { redirect, type Handle } from '@sveltejs/kit';
import Pocketbase from 'pocketbase';

export const handle: Handle = async ({ event: __event__, resolve }) => {

    __event__.locals.pb = new Pocketbase('http://127.0.0.1:8090');
    __event__.locals.pb.authStore.loadFromCookie(__event__.request.headers.get('cookie') || '');

    if (__event__.locals.pb.authStore.isValid)
        __event__.locals.user = structuredClone(__event__.locals.pb.authStore.model) as App.Admin | App.Regular;
    else
        __event__.locals.user = null;

    if (__event__.locals.user) {

        if (!('username' in __event__.locals.user)) {
            // Если администратор
            __event__.locals.role = 'admin';

            if (__event__.url.pathname.length === 1) redirect(301, '/admin');

        } else {
            // Если обычный пользователь
            __event__.locals.role = 'regular';

            if (__event__.url.pathname.startsWith('/admin')) redirect(301, '/');
        }

        if (
            __event__.url.pathname.startsWith('/signin') ||
            __event__.url.pathname.startsWith('/signup')
        ) __event__.locals.role = 'regular' ? redirect(301, '/') : redirect(301, '/admin');
    }
    if (!__event__.locals.user &&
        !__event__.url.pathname.startsWith('/signin') &&
        !__event__.url.pathname.startsWith('/signup')
    ) redirect(301, '/signin')

    const response = await resolve(__event__);

    response.headers.set('set-cookie', __event__.locals.pb.authStore.exportToCookie({ secure: !dev }));

    return response;
}