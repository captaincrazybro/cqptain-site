import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { POCKETBASE_URL } from "$env/static/private";
import { getWorkExperiences } from "$lib/util/server/workExperiences";
import { getSkills } from "$lib/util/server/skills";
import { getLanguages } from "$lib/util/server/languages";

export const POST: RequestHandler = async () => {
    let workExperiences = await getWorkExperiences()
    let skills = await getSkills()
    let languages = await getLanguages()

    return json({
        workExperiences: workExperiences,
        skills: skills,
        languages: languages,
        hostURL: POCKETBASE_URL
    })
}