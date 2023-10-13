import { POCKETBASE_ADMIN_EMAIL, POCKETBASE_ADMIN_PSWD, POCKETBASE_URL } from '$env/static/private'
import PocketBase from 'pocketbase'

let pb: import('pocketbase').default

export async function getPocketBaseInst(): Promise<import('pocketbase').default> {
    // If the pb instance doesd not exist it creats it
    if (!pb) {
        pb = new PocketBase(POCKETBASE_URL)
        await pb.admins.authWithPassword(POCKETBASE_ADMIN_EMAIL, POCKETBASE_ADMIN_PSWD)
    }
        
    return pb
}

export function createPocketBaseInst(): import('pocketbase').default {
    let pb = new PocketBase(POCKETBASE_URL)
    return pb
}