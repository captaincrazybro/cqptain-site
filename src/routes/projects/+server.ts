import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { POCKETBASE_URL } from "$env/static/private";
import { getProjects } from "$lib/util/server/projects";

export const POST: RequestHandler = async () => {
    let projects = await getProjects()

    return json({
        projects: projects,
        hostURL: POCKETBASE_URL
    })
}