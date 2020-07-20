import React from 'react';
import ReactionTimeline from '../lib';
import './app.scss';
const items = [
	{
		title: 'Item 1',
		body:
			'Lorem ipsum, dolor sit amvoluptate sunt eveniet ducimus totam doloribus neque vitae nam quasi atque quisquam similique unde, nemo ipsum molestiae?',
		year: 2010,

		styleConfig: {
			background: '#ffc1bd',
			color: '#545454',
			dotColor: '#2244e9',
		},
	},
	{
		title: 'Item 2',
		body:
			'Lorem ipsum, dolor sit amvoluptate sunt eveniet ducimus totam doloribus neque vitae nam quasi atque quisquam similique unde, nemo ipsum molestiae?',
		year: 2014,

		styleConfig: {
			background: '#e7d8ff',
			color: '#545454',
			dotColor: '#2244e9',
		},
	},
	{
		title: 'Item 3',
		body:
			'Lorem ipsum, dolor sit amvoluptate sunt eveniet ducimus totam doloribus neque vitae nam quasi atque quisquam similique unde, nemo ipsum molestiae?',
		year: 2016,

		styleConfig: {
			background: '#673AB7',
			color: '#eee',
			dotColor: '#2244e9',
		},
	},
	{
		title: 'Item 4',
		body:
			'Lorem ipsum, dolor sit amvoluptate sunt eveniet ducimus totam doloribus neque vitae nam quasi atque quisquam similique unde, nemo ipsum molestiae?',
		year: 2019,

		styleConfig: {
			background: '#CDDC39',
			color: '#545454',
			dotColor: '#2244e9',
		},
	},
];

const App = () => {
	return (
		<div className="app-demo">
			<ReactionTimeline
				items={items}
				renderOpposite={item => (
					<h1 style={{ ...item.styleConfig, padding: '0 4px 0 4px', 'border-radius': '4px' }}>{item.year}</h1>
				)}
			/>
		</div>
	);
};
export default App;
