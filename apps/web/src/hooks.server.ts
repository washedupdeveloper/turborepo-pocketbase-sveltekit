import { pb } from '$lib/utils';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  event.locals.pb = pb;

  pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

  try {
    event.locals.pb.authStore.isValid && (await event.locals.pb.collection('users').authRefresh());
  } catch (_) {
    event.locals.pb.authStore.clear();
  }

  event.locals.user = structuredClone(pb.authStore.model);

  const response = await resolve(event);
  response.headers.set('set-cookie', pb.authStore.exportToCookie({ httpOnly: false }));
  return response;
};
