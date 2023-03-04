import type { Handle } from '@sveltejs/kit';
import PocketBase from 'pocketbase';
import { POCKETBASE_URL, POCKETBASE_ADMIN_EMAIL, POCKETBASE_ADMIN_PSWD } from '$env/static/private';

export const handle: Handle = async ({ event, resolve }) => {
	// Creates a new pocketbase instance
	event.locals.pb = new PocketBase(POCKETBASE_URL);
	
	// Logs in with the admin credentials
	event.locals.pb.admins.authWithPassword(POCKETBASE_ADMIN_EMAIL, POCKETBASE_ADMIN_PSWD);

	// Sends the event back
	const response = await resolve(event);
	return response;
};