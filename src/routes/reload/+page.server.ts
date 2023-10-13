import { loadLanguages } from "$lib/util/server/languages"
import { loadLocations } from "$lib/util/server/pragueJourney"
import { loadItems } from "$lib/util/server/pragueMusicTour"
import { loadProjects } from "$lib/util/server/projects"
import { loadSkills } from "$lib/util/server/skills"
import { loadWorkExperiences } from "$lib/util/server/workExperiences"

export const load = async () => {
    await loadProjects()
    await loadLocations()
    await loadItems()
    await loadWorkExperiences()
    await loadLanguages()
    await loadSkills()
}