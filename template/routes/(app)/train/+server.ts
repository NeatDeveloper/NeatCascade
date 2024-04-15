import type { RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ locals, request }) => {
    try {
        const { trainData } = Object.fromEntries(await request.formData());

        const data = JSON.parse(trainData as string) as App.TrainData

        const last = (await locals.pb.collection('trainsResults').getList<App.TrainResults>(1, 1, {
            sort: '-sequence',
        })).items?.[0];

        const current = await locals.pb.collection('trainsResults').create<App.TrainResults>({
            user: (locals.user as App.Regular).id,
            results: data.games,
            totalTime: data.games.reduce((acc, game) => acc + game.time, 0),
            totalScores: data.games.reduce((acc, game) => acc + game.scores, 0),
            sequence: last?.sequence ? last?.sequence + 1 : 1,
            childGrade: data.childGrade,
            childAge: data.childAge,
        });

        return new Response(`${current.sequence}`);
    } catch (__error__) {
        console.error(__error__.response)
        return new Response(`Ошибка`);
    }
};