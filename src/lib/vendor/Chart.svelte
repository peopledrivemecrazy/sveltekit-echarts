<script lang="ts">
	import type { EChartsCoreOption, EChartsOption } from 'echarts';
	import { CHART } from './echarts';

	export let options: EChartsCoreOption;
	export let height = 400;
	export let width = 400;
</script>

<div class="chart" use:CHART={options} style:height style:width />

<style>
	.chart {
		height: 400px;
		width: 400px;
	}
</style>
