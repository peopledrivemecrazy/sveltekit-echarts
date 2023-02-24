<script lang="ts">
	import Chart from '$lib/vendor/Chart.svelte';
	import { onMount } from 'svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;

	const { options } = data;

	onMount(() => {
		setInterval(() => {
			options.series = [
				{
					name: 'sales',
					type: 'line',
					data: [...Array(6)].map((e) => ~~(Math.random() * 100))
				}
			];
		}, 5000);
	});
</script>

<div>
	<p>Chart updates in 5 seconds</p>
	<Chart {options} />
</div>
