import { serializeNonPOJOs } from './helpers';
import eventsource from 'eventsource'
import type { Content } from '../client/helpers';
import { getPocketBaseInst } from './pocketBase';
global.EventSource = eventsource

let items: Content[]
let isSubscribed = false

// Function to load all the projects
export async function loadItems() {
    // Gets an instance of PocketBase
    let pb = await getPocketBaseInst()
    // Retrieves the projects
    items = await pb.collection('pragueMusicTour').getFullList()
}

// Function to get the projects stored in cache
export async function getItems(): Promise<Content[]> {
    if (!items) {
        await loadItems()
        
        // Subscribes to the projects collection if needed
        // if (!isSubscribed) {
        //     await subscribeToLocations()
        //     isSubscribed = true
        // }
    }

    return serializeNonPOJOs(items)
}

// Subscribes to the projects collection for update events
// Should only be run once at startup
export async function subscribeToItems() {
    // Creats instance of pocketbase
    let pb = await getPocketBaseInst()

    // Loads the projects whenever there is a change
    pb.collection('pragueLocations').subscribe('*', async (e) => {
        await loadItems()
    })
}