import type { Actions } from '@sveltejs/kit';

import { signout } from '$lib/authorization';

export const actions: Actions = {
    default: signout
}