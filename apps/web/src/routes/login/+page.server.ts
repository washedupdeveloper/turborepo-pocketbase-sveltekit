import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
  default: async ({ locals, request }) => {
    const data = Object.fromEntries(await request.formData()) as {
      email: string;
      password: string;
    };

    try {
      await locals.pb.collection('users').authWithPassword(data.email, data.password);
    } catch (err) {
      console.error(err);
      throw err;
    }

    throw redirect(303, '/');
  }
};
