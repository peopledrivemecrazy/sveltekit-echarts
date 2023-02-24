<script lang="ts">
	import Chart from '$lib/vendor/Chart.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;

	const { options } = data;
</script>

<div>
	<Chart {options} />
</div>
