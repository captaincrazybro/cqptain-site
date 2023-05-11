import { loadProjects } from '$lib/util/server/projects';

export const load = async () => {
    // Reloads the projects
    await loadProjects()
};