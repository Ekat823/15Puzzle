import React from 'react';

const Table = ({cells, handleClick}) => {
	
	const tableWidth = 4;
	const tableHeight = 4;
	
	const renderTable = (numRows, numColumns) => {
		let result = [];
		for(let i = 0; i < numRows; i++) {
			let row = [];
			for(let j = 0; j < numColumns; j++) {
				const num = i * numColumns + j
				const tile = cells[num];
				row.push(
					<td  
						className='style1' 
						key={num} 
						onClick={handleClick(num)}
					>
						<img src={tile.src} 
							id={tile.id} 
							alt={tile.alt} 
							key={tile.id}/>
					</td>
				);
			}
			result.push(
				<tr key={i}>
					{row}
				</tr>
			);
		}
		return result;
	};
	
	return (
		<table  className='style1'>
			<tbody>
				{renderTable(tableWidth, tableHeight)}
			</tbody>
		</table>
	)
}

export default Table