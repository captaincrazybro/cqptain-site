import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { POCKETBASE_URL } from "$env/static/private";
import { getLocations } from "$lib/util/server/pragueJourney";

export const POST: RequestHandler = async () => {
    let locations = await getLocations()

    return json({
        locations: locations,
        hostURL: POCKETBASE_URL
    })
}