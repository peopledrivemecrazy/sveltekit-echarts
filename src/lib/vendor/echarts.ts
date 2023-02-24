import * as echarts from 'echarts';
import { onMount } from 'svelte';

export const CHART = (node: HTMLElement, options: echarts.EChartsCoreOption) => {
	let myChart = echarts.init(node);
	myChart.setOption(options);

	return {
		update(options: any) {
			myChart.setOption(options);
		},
		destroy() {
			myChart.dispose();
		}
	};
};
