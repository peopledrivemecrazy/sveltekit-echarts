import { json } from '@sveltejs/kit';

export const GET = async () => {
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
	return json(options);
};
