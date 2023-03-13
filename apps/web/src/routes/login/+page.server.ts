import { loginFormSchema, type LoginForm } from '$lib/models';
import { error, fail, redirect } from '@sveltejs/kit';
import http from 'http-status';
import { formData } from 'zod-form-data';
import type { Actions, PageServerLoad } from './$types';

// If there is a current auth session, redirect away from login page
export const load: PageServerLoad = ({ locals }) => {
  if (locals.pb.authStore.isValid) {
    throw redirect(http.SEE_OTHER, '/');
  }
};
export const actions: Actions = {
  default: async ({ locals, request }) => {
    const form = formData(loginFormSchema).safeParse(await request.formData());

    if (!form.success) {
      return fail(http.BAD_REQUEST, {
        errors: form.error.flatten().fieldErrors as Record<keyof LoginForm, string[]>
      });
    }

    try {
      await locals.pb.collection('users').authWithPassword(form.data.email, form.data.password);
    } catch (err) {
      console.error(err);
      throw error(http.INTERNAL_SERVER_ERROR, { message: 'Unable to login user' });
    }

    throw redirect(http.SEE_OTHER, '/');
  }
};
