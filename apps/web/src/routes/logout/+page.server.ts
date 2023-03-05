import { redirect } from '@sveltejs/kit';
import http from 'http-status';
import type { Actions } from './$types';

export const actions: Actions = {
  default: async ({ locals }) => {
    locals.pb.authStore.clear();
    locals.user = null;

    throw redirect(http.SEE_OTHER, '/');
  }
};
