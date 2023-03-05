import { writable } from 'svelte/store';
import { pb } from './utils';

/**
 * The current user, if one is logged in.
 */
export const user = writable(pb.authStore.model);
