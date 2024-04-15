import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ locals, url }) => {
    const
        take = +(url.searchParams.get('take') as string),
        page = +(url.searchParams.get('page') as string),
        sort = url.searchParams.get('sort') || '';

    const trains = await locals.pb.collection('trainsResults').getList<App.TrainResults>(page, take, {
        sort,
        expand: 'user'
    });

    return new Response(JSON.stringify(trains));
};