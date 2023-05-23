import { loadLocations } from "$lib/util/server/pragueJourney"
import { loadProjects } from "$lib/util/server/projects"

export const load = async () => {
    await loadProjects()
    await loadLocations()
}