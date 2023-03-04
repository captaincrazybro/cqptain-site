import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
    // Retrieves the projects collection
    let projects = locals.pb.collection("projects").getFullList();

    return {
        projects: projects
    }
};