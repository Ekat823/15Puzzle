import tiles from './Tiles';

const getInitialState = () => ({
	cells: tiles,
	moves: 0,
	startRestart: 'Start',
	isWon: false,	
	spentTime: 0,
	running: false,
});
		
export default getInitialState