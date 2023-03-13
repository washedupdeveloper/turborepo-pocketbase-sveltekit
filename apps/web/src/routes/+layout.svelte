<script lang="ts">
  import NavigationBar from '$lib/ui/NavigationBar.svelte';
  import '../app.css';
  import { onMount } from 'svelte';
  import { themeChange } from 'theme-change';
  import type { PageData } from './$types';
  export let data: PageData;
  import { Toaster } from 'svelte-french-toast';

  onMount(() => {
    themeChange(false);
  });
</script>

<div>
  <Toaster />
  <NavigationBar user={data.user} />
  <main class="mx-4">
    <slot />
  </main>
</div>
