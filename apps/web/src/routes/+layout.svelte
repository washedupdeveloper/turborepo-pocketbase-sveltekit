<script lang="ts">
	import NavigationBar from '$lib/ui/NavigationBar.svelte';
	import '../app.css';
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';
	import type { PageData } from './$types';
	export let data: PageData;

	onMount(() => {
		themeChange(false);
	});
</script>

<div>
	<NavigationBar user={data.user} />
	<main class="mx-4">
		<slot />
	</main>
</div>
