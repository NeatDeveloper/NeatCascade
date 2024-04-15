import type { Actions } from '@sveltejs/kit';

import { signin } from '$lib/authorization';

export const actions: Actions = {
    default: signin
}