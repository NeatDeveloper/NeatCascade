import type { Actions } from '@sveltejs/kit';

import { signup } from '$lib/authorization';

export const actions: Actions = {
    default: signup
}