import type { Action } from '@sveltejs/kit';

export default (async ({ locals }) => {
    try {
        locals.pb.authStore.clear();
    } catch(__error__) {
        console.error(__error__);
    }
}) satisfies Action;