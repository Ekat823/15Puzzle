import moveTiles from './actions/MoveTiles';
import startRestartHandler from './actions/StartRestartHandler';

const reducer = (state, action) => {
	switch (action.type) {
		case 'START_RESTART':
			return startRestartHandler(state, action);
		case 'MOVE_TILES':
			return moveTiles(state, action);
		case 'SET_SPENT_TIME':
			return {...state, spentTime: action.spentTime};
		default:
			return state
	}
};

export default reducer