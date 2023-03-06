<script lang="ts">
	import { user } from '$lib/stores';
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

{#if $user}
	<h2>{$user.email}</h2>
{:else}
	<h2>Not logged in</h2>
{/if}
