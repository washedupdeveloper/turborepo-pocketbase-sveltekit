<script lang="ts">
  import { applyAction, enhance } from '$app/forms';
  import Icon from './Icon.svelte';
  import ThemeSwitch from './ThemeSwitch.svelte';
  export let user: import('pocketbase').default['authStore']['model'];
  import { page } from '$app/stores';
  $: console.log($page.url.pathname);
</script>

<div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <button class="btn btn-ghost lg:hidden">
        <Icon name="hamburger" />
      </button>
      <ul class="menu menu-compact dropdown-content mt-2 shadow bg-base-100 rounded-md">
        <li class:bordered={$page.url.pathname === '/'}>
          <a href="." class="capitalize"><Icon name="home" />home</a>
        </li>
        <li class:bordered={$page.url.pathname === '/dashboard'}>
          <a href="/dashboard" class="capitalize"><Icon name="view-dashboard-variant-outline" />dashboard</a>
        </li>
      </ul>
    </div>
    <a href="." class="text-xl capitalize">svecket</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal space-x-2">
      <li class:active={$page.url.pathname === '/'}><a href="." class="capitalize"><Icon name="home" />home</a></li>
      <li class:active={$page.url.pathname === '/dashboard'}>
        <a href="/dashboard" class="capitalize"><Icon name="view-dashboard-variant-outline" />dashboard</a>
      </li>
    </ul>
  </div>
  <div class="navbar-end space-x-2">
    <ul class="menu menu-horizontal space-x-2">
      {#if user}
        <li class="content-center">{user.email}</li>
        <li>
          <form
            class="p-0"
            method="POST"
            action="/logout"
            use:enhance={() => {
              return async ({ result }) => await applyAction(result);
            }}
          >
            <button class="btn btn-outline btn-error capitalize"><Icon name="logout" />log out</button>
          </form>
        </li>
      {:else}
        <li><a href="/login" class="capitalize"><Icon name="login" />log in</a></li>
        <li><a href="/register" class="capitalize"><Icon name="account-plus-outline" />register</a></li>
      {/if}
    </ul>
    <ThemeSwitch />
  </div>
</div>
