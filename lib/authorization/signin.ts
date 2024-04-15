import { redirect, type Action } from '@sveltejs/kit';

export default (async ({ locals, request }) => {

    try {
        const signinData = Object.fromEntries(await request.formData());

        if(signinData.admin)
            await locals.pb.admins.authWithPassword(signinData.email as string, signinData.password as string)
        else
            await locals.pb.collection('users').authWithPassword(signinData.email as string, signinData.password as string);


    } catch(__error__) {
        console.error(__error__);
    }
    throw redirect(301, '/');

}) satisfies Action;