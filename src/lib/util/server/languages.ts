import { serializeNonPOJOs } from '$lib/util/server/helpers';
import type { Language } from '../client/helpers';
import eventsource from 'eventsource'
import { getPocketBaseInst } from './pocketBase';
global.EventSource = eventsource

let languages: Language[]

export async function loadLanguages() {
    let pb = await getPocketBaseInst()
    languages = await pb.collection('languages').getFullList()
    // Sorts by end date and then start date in descending order
    languages = languages.sort((a, b) => {
        if (a.isProficient && !b.isProficient) {
            return -1
        } else if (!a.isProficient && b.isProficient) {
            return 1
        } else {
            if (a.name < b.name) {
                return -1
            } else if (a.name > b.name) {
                return 1
            } else {
                return 0
            }
        }
    })
}

export async function getLanguages(): Promise<Language[]> {
    if (!languages) {
        await loadLanguages()
    }

    return serializeNonPOJOs(languages)
}