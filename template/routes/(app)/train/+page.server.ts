import type { Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ parent }) => {
    const layoutData = await parent();

    return {
        user: layoutData.user as App.Regular
    };
};
