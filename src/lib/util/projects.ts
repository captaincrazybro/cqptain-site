import { serializeNonPOJOs } from '$lib/util/helpers';
import PocketBase, { Record } from 'pocketbase';
import { POCKETBASE_URL, POCKETBASE_ADMIN_EMAIL, POCKETBASE_ADMIN_PSWD } from '$env/static/private';

let projects: Object[]

export async function loadProjects() {
    // Creates a new instance of pocketbase
    let pb = new PocketBase(POCKETBASE_URL);

    // Logs in with the admin credentials
    await pb.admins.authWithPassword(POCKETBASE_ADMIN_EMAIL, POCKETBASE_ADMIN_PSWD)
        
    // Retrieves the projects
    projects = await pb.collection('projects').getFullList()
}

export async function getProjects(): Promise<Object[]> {
    if (!projects) {
        // Loads the projects if needed
        await loadProjects() 
    }

    return serializeNonPOJOs(projects)
}
