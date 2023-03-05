<script>
	import NavigationBar from '$lib/ui/NavigationBar.svelte';
	import '../app.css';
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';

	onMount(() => {
		themeChange(false);
	});
</script>

<div>
	<NavigationBar />
	<main class="mx-4">
		<slot />
	</main>
</div>
