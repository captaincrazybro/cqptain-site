import { serializeNonPOJOs } from '$lib/util/server/helpers';
import type { Content } from '../client/helpers';
import eventsource from 'eventsource'
import { getPocketBaseInst } from './pocketBase';
global.EventSource = eventsource

let projects: Content[]
let isSubscribed = false

// Function to load the projects from the database
export async function loadProjects() {
    // if (!pb) await registerPocketBase()
    let pb = await getPocketBaseInst()
    projects = await pb.collection('projects').getFullList()
}

// Function to get the projects stored in cache
export async function getProjects(): Promise<Content[]> {
    if (!projects) {
        await loadProjects()
        
        // Subscribes to the projects collection if needed
        // if (!isSubscribed) {
        //     await subscribeToProjects()
        //     isSubscribed = true
        // }
    }

    return serializeNonPOJOs(projects)
}

// Subscribes to the projects collection for update events
export async function subscribeToProjects() {
    // Loads the projects whenever there is a change
    let pb = await getPocketBaseInst()
    pb.collection('projects').subscribe('*', async (e) => {
        await loadProjects()
    })
}