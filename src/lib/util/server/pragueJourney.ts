import { serializeNonPOJOs } from './helpers';
import eventsource from 'eventsource'
import type { Content } from '../client/helpers';
import { getPocketBaseInst } from './pocketBase';
global.EventSource = eventsource

let locations: Content[]
let isSubscribed = false

// Function to load all the projects
export async function loadLocations() {
    // Gets an instance of PocketBase
    let pb = await getPocketBaseInst()
    // Retrieves the projects
    locations = await pb.collection('projects').getFullList()
}

// Function to get the projects stored in cache
export async function getLocations(): Promise<Content[]> {
    if (!locations) {
        await loadLocations()
        
        // Subscribes to the projects collection if needed
        if (!isSubscribed) {
            await subscribeToLocations()
            isSubscribed = true
        }
    }

    return serializeNonPOJOs(locations)
}

// Subscribes to the projects collection for update events
// Should only be run once at startup
export async function subscribeToLocations() {
    // Creats instance of pocketbase
    let pb = await getPocketBaseInst()

    // Loads the projects whenever there is a change
    pb.collection('projects').subscribe('*', async (e) => {
        await loadLocations()
    })
}