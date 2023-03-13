import { redirect } from '@sveltejs/kit';
import http from 'http-status';
import type { Actions, PageServerLoad } from './$types';

// If there is not a current auth session, redirect away from logout page
export const load: PageServerLoad = ({ locals }) => {
  if (!locals.pb.authStore.isValid) {
    throw redirect(http.SEE_OTHER, '/');
  }
};

export const actions: Actions = {
  default: async ({ locals }) => {
    locals.pb.authStore.clear();
    locals.user = null;

    throw redirect(http.SEE_OTHER, '/');
  }
};
