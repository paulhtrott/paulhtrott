import { writable, readable } from 'svelte/store'

export const apiURL =  readable('https://paulhtrott.dev/wp-json/wp/v2');
export const screenToLoad = writable('dashboard');
