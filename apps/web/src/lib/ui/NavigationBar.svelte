<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import Icon from './Icon.svelte';
	import ThemeSwitch from './ThemeSwitch.svelte';
	export let user: import('pocketbase').default['authStore']['model'];
</script>

<div class="navbar bg-base-100">
	<div class="navbar-start">
		<div class="dropdown">
			<button class="btn btn-ghost lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/></svg
				>
			</button>
			<ul class="menu menu-compact dropdown-content mt-3 shadow bg-base-100 rounded-box w-52">
				<li>
					<span><Icon type="home" size={24} />Home</span>
				</li>
				<li><span>Element 2</span></li>
			</ul>
		</div>
		<a href="." class="text-xl">Application Name</a>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal px-1">
			<li><span><Icon type="home" size={24} />Home</span></li>
			<li><span>Element 2</span></li>
		</ul>
	</div>
	<div class="navbar-end space-x-4">
		<ul class="menu menu-horizontal">
			{#if user}
				<li>{user.email}</li>
				<li>
					<form
						method="POST"
						action="/logout"
						use:enhance={() => {
							return async ({ result }) => await applyAction(result);
						}}
					>
						<button>Log out</button>
					</form>
				</li>
			{:else}
				<li><a href="/login">Log in</a></li>
				<li><a href="/register">Register</a></li>
			{/if}
		</ul>
		<ThemeSwitch />
	</div>
</div>
