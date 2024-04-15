import { redirect, type Action } from '@sveltejs/kit';

export default (async ({ request, locals }) => {

    try {
        const signupData = Object.fromEntries(await request.formData());

        await locals.pb.collection('users').create({
            lastName: signupData.lastName,
            firstName: signupData.firstName,
            email: signupData.email,
            password: signupData.password,
            passwordConfirm: signupData.passwordConfirm,
        });

        await locals.pb.collection('users').requestVerification(signupData.email as string);

    } catch(__error__) {
        console.error(__error__);
    }
    throw redirect(301, '/signin');

}) satisfies Action;