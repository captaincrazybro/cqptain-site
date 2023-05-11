import type { Content } from "$lib/util/client/helpers";
import { writable, type Writable } from "svelte/store";

export const locations: Writable<Content[]> = writable([])
export const hostURL: Writable<string> = writable('')