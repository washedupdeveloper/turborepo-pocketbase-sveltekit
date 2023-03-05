import { user } from '$lib/stores';
import { pb } from '$lib/utils';

pb.authStore.loadFromCookie(document.cookie);
pb.authStore.onChange(() => {
  user.set(pb.authStore.model);
  document.cookie = pb.authStore.exportToCookie({ httpOnly: false });
});
