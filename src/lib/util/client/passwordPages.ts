import { writable, type Writable } from "svelte/store";

// Stores the state of whether a session is logged in
export const passwordStates: PasswordState = {}

// Type for storing the password states
export type PasswordState = {
    [key: string]: Writable<boolean> 
}

export function getPasswordState(slug: string) {
    // Creates the password state if it does not exist
    if (!passwordStates[slug]) {
        passwordStates[slug] = writable(false)
    }

    return passwordStates[slug]
}