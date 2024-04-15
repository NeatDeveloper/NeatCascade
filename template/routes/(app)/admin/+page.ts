import type { ListResult } from 'pocketbase';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ url, fetch }) => {
    const
        take = +(url.searchParams.get('take') as string) || 10,
        page = +(url.searchParams.get('page') as string) || 1,
        sort = url.searchParams.get('sort') || 'created';

    const response = await fetch(`/admin?page=${page}&take=${take}&sort=${sort}`);
    

    return {
        trains: await response.json() as ListResult<App.TrainResults>
    }
};