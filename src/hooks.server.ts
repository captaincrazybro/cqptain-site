import { loadLocations, subscribeToLocations } from '$lib/util/server/pragueJourney';
import { loadProjects, subscribeToProjects } from '$lib/util/server/projects';

// Loads the projects and subscribes to project update events
loadProjects()
subscribeToProjects()

// Loads the prague locations and subscribes to update vents
loadLocations()
subscribeToLocations()