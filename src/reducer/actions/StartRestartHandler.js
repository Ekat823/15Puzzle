import tiles from '../../state/Tiles';
import getInitialState from '../../state/GetInitialState';

const startRestartHandler = (state, action) => {
	
	let newTiles = [...tiles];
	
	for (let i = newTiles.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		let temp = newTiles[i];
		newTiles[i] = newTiles[j];
		newTiles[j] = temp;
	}
	
	return {...getInitialState(), cells: newTiles, 	startRestart: 'Restart'};
}

export default startRestartHandler