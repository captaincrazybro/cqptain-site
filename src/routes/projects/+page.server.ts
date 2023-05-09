import type { PageServerLoad } from './$types';
import { POCKETBASE_URL } from '$env/static/private';
import { getProjects } from '$lib/util/projects';

export const load: PageServerLoad = async () => {
    // Retrieves the writable for the projects
    const projects = await getProjects()

    return {
        projects: projects,
        hostURL: POCKETBASE_URL
    }
};