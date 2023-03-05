<script lang="ts">
	import { uniqueId } from '$lib/utils';
	import Icon, { addCollection } from '@iconify/svelte';
	export let size = 24;
	export let type: IconType;

	const id = uniqueId(4);
	const prefix = 'mdi';
	type IconType = 'home' | 'account';

	addCollection({
		prefix,
		icons: {
			account: {
				body: '<path d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4z" fill="currentColor"/>'
			},
			home: {
				body: '<path d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8h5z" fill="currentColor"/>'
			}
		},
		height: size,
		width: size
	});
</script>

<!-- <Icon icon="mdi:home" aria-hidden={ariaHidden} aria-label={ariaLabel} {color} {size} {id} /> -->
<Icon icon={prefix + ':' + type} {id} />
