import React from 'react';

const ButtonStartRestart = ({handleClickRestart, startRestart}) => {
	return <button 
					className='btn' 
					onClick={handleClickRestart}
				>
				{startRestart === 'Start' ? 'Start' 
					: startRestart === 'Restart' ? 'Restart' 
					: 'Play Again' }
				</button>
}

export default ButtonStartRestart