import { loadProjects } from '$lib/util/projects';

export const load = async () => {
    // Reloads the projects
    await loadProjects()
};