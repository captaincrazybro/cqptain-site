import { serializeNonPOJOs } from '$lib/util/server/helpers';
import type { WorkExperience } from '../client/helpers';
import eventsource from 'eventsource'
import { getPocketBaseInst } from './pocketBase';
global.EventSource = eventsource

let workExperiences: WorkExperience[]

export async function loadWorkExperiences() {
    let pb = await getPocketBaseInst()
    workExperiences = await pb.collection('workExperiences').getFullList()
    // Sorts by end date and then start date in descending order
    workExperiences = workExperiences.sort((a, b) => {
        let aEndDate = a.isCurrentlyWorking ? Date.now : a.endDate
        let bEndDate = b.isCurrentlyWorking ? Date.now : a.endDate

        if (aEndDate > bEndDate) {
            return -1
        } else if (bEndDate > aEndDate) {
            return 1
        } else {
            if (a.startDate > b.startDate) {
                return -1
            } else if (a.startDate < b.startDate) {
                return 1
            } else {
                return 0
            }
        }
    })
}

export async function getWorkExperiences(): Promise<WorkExperience[]> {
    if (!workExperiences) {
        await loadWorkExperiences()
        
        // Subscribes to the projects collection if needed
        // if (!isSubscribed) {
        //     await subscribeToProjects()
        //     isSubscribed = true
        // }
    }

    return serializeNonPOJOs(workExperiences)
}