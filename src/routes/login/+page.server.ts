import { createPocketBaseInst, getPocketBaseInst } from "$lib/util/server/pocketBase"
import type { Actions, PageServerLoad } from "./$types"

export const load: PageServerLoad = ({ locals }) => {
    return {
        loginCorrect: locals.loginCorrect
    }
}

export const actions: Actions = {
    default: async ({ locals, request }) => {
        const data = await request.formData()

        // Creates the pocketbase instance
        let pb = createPocketBaseInst()
        await pb.collection('users').authWithPassword(data.get("username") as string, data.get("password") as string)
        if (pb.authStore.isValid) {
            // Write authStore to cookie        
            request.headers.set('set-cookie', pb.authStore.exportToCookie())
            
            pb.authStore.clear()

            locals.passwordCorrect = true
        } else {
            locals.passwordCorrect = false  
        }
    }
}