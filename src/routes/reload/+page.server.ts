import { loadLocations } from "$lib/util/server/pragueJourney"
import { loadItems } from "$lib/util/server/pragueMusicTour"
import { loadProjects } from "$lib/util/server/projects"

export const load = async () => {
    await loadProjects()
    await loadLocations()
    await loadItems()
}