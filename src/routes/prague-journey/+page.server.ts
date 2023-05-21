import { PRAGUE_JOURNEY_PASSWORD } from "$env/static/private";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals }) => {
    return {
        passwordCorrect: locals.passwordCorrect,
        message: locals.passwordMessage,
    }
}

export const actions: Actions = {
    default: async ({ locals, request }) => {
        const data = await request.formData()

        locals.passwordCorrect = data.get("password") == PRAGUE_JOURNEY_PASSWORD
        if (!locals.passwordCorrect) {
            locals.passwordMessage = "Invalid password! The password you entered is not correct!"
        }
    }
}