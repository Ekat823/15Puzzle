const moveTiles = (state, action) => {
	const num = action.num;
	let result = {};
		
		if(state.startRestart === 'Start') {
			return {...state, ...result};
		}
		
		let squares = [...state.cells];
		let move = state.moves;
		
		if((num + 1) % 4 !== 0 && squares[num + 1].id === 0) {
			[squares[num], squares[num + 1]] = [squares[num + 1], squares[num]];
			move = move + 1;
		} 
		else if(num < 12 && squares[num + 4].id === 0) {
			[squares[num], squares[num + 4]] = [squares[num + 4], squares[num]];
			move = move + 1;
		}
		else if(num % 4 !== 0 && squares[num - 1].id === 0) {
			[squares[num], squares[num - 1]] = [squares[num - 1], squares[num]];
			move = move + 1;
		}
		else if(num >= 4 && squares[num - 4].id === 0) {
			[squares[num], squares[num - 4]] = [squares[num - 4], squares[num]];
			move = move + 1;
		} else {
			return {...state, ...result};
		}
		result = {...result, cells: squares, moves: move, running: true};
		
		let testArr = squares.filter((el) => el.id !== 0);
		let test = testArr.find((el) => el.id !== squares.indexOf(el) + 1);

		if(test === undefined) {
			result = {...result, isWon: true, startRestart: 'Play Again', running: false};
		}
		return {...state, ...result};
};
		
export default moveTiles