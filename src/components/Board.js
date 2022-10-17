import React from 'react';
import Image from 'react-bootstrap/Image';
import Table from 'react-bootstrap/Table';

const Board = ({ cells, handleClick }) => {

  const tableWidth = 4;
  const tableHeight = 4;

  const renderTable = (numRows, numColumns) => {
    let result = [];
    for (let i = 0; i < numRows; i++) {
      let row = [];
      for (let j = 0; j < numColumns; j++) {
        const num = i * numColumns + j
        const tile = cells[num];
        row.push(
          <td
            style={{
              border: '0px solid black',
              alignItems: 'center',
              lineHeight: '1px'
            }}
            key={num}
            onClick={handleClick(num)}
          >
            <Image
              src={tile.src}
              id={tile.id}
              alt={tile.alt}
              key={tile.id}
              style={{ width: '100%' }}
              fluid
            />
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
    <Table striped bordered hover size="sm"
      style={{
        background: '#f4eadf',
        border: '7px solid #321c10'
      }}>
      <tbody>
        {renderTable(tableWidth, tableHeight)}
      </tbody>
    </Table>
  )
}

export default Board