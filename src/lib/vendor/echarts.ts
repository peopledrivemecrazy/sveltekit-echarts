import * as echarts from 'echarts';

export const CHART = (node: HTMLElement, options: echarts.EChartsCoreOption) => {
	let myChart = echarts.init(node);
	myChart.setOption(options);
	console.log('mounted');
	return {
		update(options: any) {
			myChart.setOption(options);
			console.log('updated');
		},
		destroy() {
			myChart.dispose();
			console.log('killed!');
		}
	};
};
