import { writable } from "svelte/store";

export const days = writable<number>(8);
export const hours = writable<number>(23);
export const minutes = writable<number>(55);
export const seconds = writable<number>(8);