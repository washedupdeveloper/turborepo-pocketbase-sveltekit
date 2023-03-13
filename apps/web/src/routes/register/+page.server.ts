import { registerFormSchema, type RegisterForm } from '$lib/models';
import { isRejected } from '$lib/utils';
import { error, fail, redirect } from '@sveltejs/kit';
import { default as http, default as httpStatus } from 'http-status';
import type { z, ZodRawShape } from 'zod';
import { formData } from 'zod-form-data';
import type { Actions, PageServerLoad } from './$types';

const validateForm = async <T extends ZodRawShape>(schema: z.ZodObject<T>, form: Promise<FormData>) => {
  return formData(schema).safeParse(await form);
};

// If there is a current auth session, redirect away from register
export const load: PageServerLoad = ({ locals }) => {
  if (locals.pb.authStore.isValid) {
    throw redirect(http.SEE_OTHER, '/');
  }
};

export const actions: Actions = {
  default: async ({ locals, request }) => {
    const form = formData(registerFormSchema).safeParse(await request.formData());

    if (!form.success) {
      return fail(http.BAD_REQUEST, {
        errors: form.error.flatten().fieldErrors as Record<keyof RegisterForm, string[]>
      });
    }

    const [create, email] = await Promise.allSettled([
      locals.pb
        .collection('users')
        .create(form.data)
        .catch((e) => {
          console.error(e);
          return 'Unable to create user';
        }),
      locals.pb
        .collection('users')
        .requestVerification(form.data.email)
        .catch((e) => {
          console.error(e);
          return 'Unable to send verification email';
        })
    ]);

    if (isRejected(create)) throw error(http.INTERNAL_SERVER_ERROR, create.reason);
    if (isRejected(email)) throw error(http.INTERNAL_SERVER_ERROR, email.reason);

    throw redirect(httpStatus.SEE_OTHER, '/login');
  }
};
