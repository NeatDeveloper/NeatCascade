import type { LayoutServerLoad } from '../(authorized)/$types';

export const load: LayoutServerLoad = async ({ locals }) => {
    return {
        user: locals.user
    }
};