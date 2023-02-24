import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const options = {
		title: {
			text: 'ECharts Getting Started Example'
		},
		tooltip: {},
		xAxis: {
			data: ['shirt', 'cardigan', 'chiffon', 'pants', 'heels', 'socks']
		},
		yAxis: {},
		series: [
			{
				name: 'sales',
				type: 'line',
				data: [5, 20, 36, 10, 10, 20]
			}
		]
	};
	return {
		options
	};
};
