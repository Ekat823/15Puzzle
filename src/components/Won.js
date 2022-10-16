import React from 'react';
import ButtonStartRestart from './ButtonStartRestart';

const Won = ({moves, handleClickRestart, spentTime}) => {
	
	const hours = (("0" + Math.floor((spentTime / 3600000) % 60)).slice(-2));
	const min = (("0" + Math.floor((spentTime / 60000) % 60)).slice(-2));
	const sec = (("0" + Math.floor((spentTime / 1000) % 60)).slice(-2));
 
	return (
		<div className='container-won'>
			<h3 className='won'>You Won!</h3>
			<table className='style2'>
				<tbody>
					<tr>
						<td>
							Moves: {moves}
						</td>
						<td>
							<div>Time: {hours}:{min}:{sec}</div>
						</td>
					</tr>
				</tbody>
			</table>			
			<p>
				<ButtonStartRestart
					handleClickRestart={handleClickRestart}
				/>
		</p>
	</div>
	)
}

export default Won