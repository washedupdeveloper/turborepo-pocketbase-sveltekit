<script lang="ts">
  import { uniqueId, type IconName } from '$lib/utils';
  import Icon from '@iconify/svelte';
  export let name: IconName;

  const id = uniqueId(4);
</script>

<Icon icon={'mdi:' + name} {id} height="auto" class={$$props.class} />
