// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Error {}
	interface Locals {
		passwordCorrect: boolean;
		passwordMessage: string;
		loginCorrect: boolean;
	}
	interface PageData {}
	// interface Platform {}
}
