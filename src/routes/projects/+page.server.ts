import type { PageServerLoad } from './$types';
import { POCKETBASE_URL } from '$env/static/private';
import { getProjects } from '$lib/util/server/projects';

export const load: PageServerLoad = async () => {
    return {
        projects: getProjects(),
        hostURL: POCKETBASE_URL
    }
};