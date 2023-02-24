<script lang="ts">
	import type { EChartsCoreOption } from 'echarts';
	import { CHART } from './echarts';

	export let options: EChartsCoreOption;
</script>

<div class="chart" use:CHART={options} />

<style>
	.chart {
		height: 400px;
		width: 400px;
	}
</style>
