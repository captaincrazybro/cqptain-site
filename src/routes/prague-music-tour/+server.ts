import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { POCKETBASE_URL } from "$env/static/private";
import { getItems } from "$lib/util/server/pragueMusicTour";

export const POST: RequestHandler = async () => {
    let items = await getItems()

    return json({
        items: items,
        hostURL: POCKETBASE_URL
    })
}