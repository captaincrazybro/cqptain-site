import { serializeNonPOJOs } from '$lib/util/server/helpers';
import PocketBase from 'pocketbase';
import { POCKETBASE_URL, POCKETBASE_ADMIN_EMAIL, POCKETBASE_ADMIN_PSWD } from '$env/static/private';
import type { Content } from '../client/helpers';
import eventsource from 'eventsource'
global.EventSource = eventsource

let projects: Content[]

// Function to load all the projects
export async function loadProjects() {
    // Creates a new instance of pocketbase
    let pb = new PocketBase(POCKETBASE_URL);

    // Logs in with the admin credentials
    await pb.admins.authWithPassword(POCKETBASE_ADMIN_EMAIL, POCKETBASE_ADMIN_PSWD)
        
    // Retrieves the projects
    projects = await pb.collection('projects').getFullList()
    pb.authStore.clear()
}

// Function to get the projects stored in cache
export function getProjects(): Content[] {
    if (!projects) {
        return []
    }

    return serializeNonPOJOs(projects)
}

// Subscribes to the projects collection for update events
// Should only be run once at startup
export async function subscribeToProjects() {
    // Creats instance of pocketbase
    let pb = new PocketBase(POCKETBASE_URL)
    await pb.admins.authWithPassword(POCKETBASE_ADMIN_EMAIL, POCKETBASE_ADMIN_PSWD)

    // Loads the projects whenever there is a change
    pb.collection('projects').subscribe('*', (e) => {
        loadProjects()
    })
}