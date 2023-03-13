import { Lengths } from '$lib/utils';
import { z } from 'zod';

// TODO implement password complexity - https://github.com/dropbox/zxcvbn

export const loginFormSchema = z
  .object({
    email: z.string().email(),
    password: z
      .string()
      .min(Lengths.password.min, `must be at least ${Lengths.password.min} characters`)
      .max(Lengths.password.max, `must be at most ${Lengths.password.max} characters`)
  })
  .required();

export type LoginForm = z.infer<typeof loginFormSchema>;

export const registerFormSchema = loginFormSchema
  .extend({
    passwordConfirm: z
      .string()
      .min(Lengths.password.min, `must be at least ${Lengths.password.min} characters`)
      .max(Lengths.password.max, `must be at most ${Lengths.password.max} characters`)
  })
  .superRefine((form, ctx) => {
    if (form.password !== form.passwordConfirm) {
      ctx.addIssue({
        path: ['passwordConfirm', 'password'],
        code: z.ZodIssueCode.custom,
        message: 'passwords must match'
      });
    }
  });

export type RegisterForm = z.infer<typeof registerFormSchema>;

export const projectFormSchema = z.object({
  companyName: z.string().nonempty(),
  jobTitle: z.string().nonempty(),
  description: z.string().nonempty(),
  start: z.string().datetime().nonempty(),
  end: z.string().datetime().optional(),
  tools: z
    .string()
    .transform((csv) => csv.replace(/\[|\]/g, '').trim().split(','))
    .pipe(z.string().array())
});
