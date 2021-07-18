import moment from "moment";
import { writable } from "svelte/store";

const actualTime = moment().unix();
const waitTime = moment().add(8, 'days').add(23, 'hours').add(55, 'minutes').add(10, 'second').unix();

const diffTime = waitTime - actualTime;
const diffDuration = moment.duration(diffTime*1000, 'millisecond');

export const days = writable<number>( 8 );
export const hours = writable<number>(23);
export const minutes = writable<number>(0);
export const seconds = writable<number>(5);

export const duration = writable( diffDuration );