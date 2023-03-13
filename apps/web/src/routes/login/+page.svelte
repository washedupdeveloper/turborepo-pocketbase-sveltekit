<script lang="ts">
  import { enhance } from '$app/forms';
  import type { ActionData } from './$types';
  export let form: ActionData;
  import InputField from '$lib/ui/InputField.svelte';
</script>

<div class="flex flex-col items-center h-full w-full pt-12">
  <h2 class=" text-center text-3xl font-bold tracking-tight text-base-content">Sign into your account</h2>
  <p class="text-center mt-1">
    Or <a href="/login" class="text-primary font-medium hover:cursor-pointer">register</a> if you don't have an account
  </p>
  <form method="POST" class="flex flex-col items-center space-y-2 w-full mt-4" use:enhance>
    <InputField type="text" name="email" errors={form?.errors.email} />

    <InputField type="password" name="password" errors={form?.errors.password} />

    <div class="w-full max-w-md pt-3">
      <button type="submit" class="btn btn-primary w-full max-w-md capitalize-first">login</button>
    </div>
  </form>
</div>
