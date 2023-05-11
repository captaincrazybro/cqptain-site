import PocketBase from 'pocketbase';
import { POCKETBASE_URL, POCKETBASE_ADMIN_EMAIL, POCKETBASE_ADMIN_PSWD } from '$env/static/private';
import { serializeNonPOJOs } from './helpers';
import eventsource from 'eventsource'
import type { Content } from '../client/helpers';
global.EventSource = eventsource

let locations: Content[]

// Function to load all the projects
export async function loadLocations() {
    // Creates a new instance of pocketbase
    let pb = new PocketBase(POCKETBASE_URL);

    // Logs in with the admin credentials
    await pb.admins.authWithPassword(POCKETBASE_ADMIN_EMAIL, POCKETBASE_ADMIN_PSWD)
        
    // Retrieves the projects
    locations = await pb.collection('pragueLocations').getFullList()
    pb.authStore.clear()
}

// Function to get the projects stored in cache
export async function getLocations(): Promise<Content[]> {
    if (!locations) {
        return []
    }

    return serializeNonPOJOs(locations)
}

// Subscribes to the projects collection for update events
// Should only be run once at startup
export async function subscribeToLocations() {
    // Creats instance of pocketbase
    let pb = new PocketBase(POCKETBASE_URL)
    await pb.admins.authWithPassword(POCKETBASE_ADMIN_EMAIL, POCKETBASE_ADMIN_PSWD)

    // Loads the projects whenever there is a change
    pb.collection('pragueLocations').subscribe('*', (e) => {
        loadLocations()
    })
}