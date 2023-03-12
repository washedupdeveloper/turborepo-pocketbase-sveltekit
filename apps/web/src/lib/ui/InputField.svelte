<script lang="ts">
  import type { HTMLInputTypeAttribute } from 'svelte/elements';
  export let type: HTMLInputTypeAttribute;
  export let name: string;
  export let label = '';
  export let errors: string | string[] | undefined;
</script>

<div class="form-control w-full max-w-md">
  <label for={name} class="label font-medium pb-1">
    <span class="label-text capitalize">{label || name}</span>
  </label>
  <input {type} {name} required class="input input-bordered w-full max-w-md mb-2" class:input-error={errors} />
  {#if errors}
    <span class="text-error italic capitalize-first">{typeof errors === 'string' ? errors : errors[0]}</span>
  {:else}
    <span class="text-error invisible">hidden</span>
  {/if}
</div>
