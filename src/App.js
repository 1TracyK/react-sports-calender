import './App.css';
import React, { useState } from 'react';
import BasketballCalenderForm from './Components/BasketballCalenderForm/BasketballCalenderForm';
import BasketballCalenderList from './Components/BasketballCalenderList/BasketballCalenderList';

function App() {
	const [items, setItems] = useState([
		{
			id: 1689374598465,
			location: 'Los Angelos',
			team1: 'Lakers',
			team2: 'Pistons',
			date: '2023-08-11',
			winner: 'Lakers',
		},
		{
			id: 1689374598466,
			location: 'Detroit',
			team1: 'Pistons',
			team2: 'Lakers',
			date: '2023-10-12',
			winner: null,
		},
	]);

	function updateWinner(id, newWinnerValue) {
		let result = [];
		let newItems = structuredClone(items);
		for (let item of newItems) {
			if (item.id === id) {
				item.winner = newWinnerValue;
			}
			result.push(item);
		}
		setItems(result);

		function deleteItem(id) {}

		return (
			<div className="App">
				<header className="App-header">
					<h1>Basketball Calender</h1>
				</header>
				<BasketballCalenderForm />
				<BasketballCalenderList
					items={items}
					updateWinner={updateWinner}
					deleteItem={deleteItem}
				/>
			</div>
		);
	}
}

export default App;