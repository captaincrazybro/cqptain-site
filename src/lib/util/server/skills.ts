import { serializeNonPOJOs } from '$lib/util/server/helpers';
import type { Skill } from '../client/helpers';
import eventsource from 'eventsource'
import { getPocketBaseInst } from './pocketBase';
global.EventSource = eventsource

let skills: Skill[]

export async function loadSkills() {
    let pb = await getPocketBaseInst()
    skills = await pb.collection('skills').getFullList()
    // Sorts by end date and then start date in descending order
    skills = skills.sort((a, b) => {
        if (a.name < b.name) {
            return -1
        } else if (a.name > b.name) {
            return 1
        } else {
            return 0
        }
    })
}

export async function getSkills(): Promise<Skill[]> {
    if (!skills) {
        await loadSkills()
    }

    return serializeNonPOJOs(skills)
}