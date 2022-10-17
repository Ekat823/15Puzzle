import React, { useReducer, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import getInitialState from './state/GetInitialState';
import Stopwatch from './components/Stopwatch';
import ButtonStartRestart from './components/ButtonStartRestart';
import Board from './components/Board';
import Won from './components/Won';
import reducer from './reducer/Reducer';

function App() {

  const [state, dispatch] = useReducer(reducer, getInitialState());

  useEffect(() => {
    let interval;
    if (state.running) {
      let time = 0;
      interval = setInterval(() => {
        time += 1000;
        dispatch({ type: 'SET_SPENT_TIME', spentTime: time })
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [state.running]);

  return (
    !state.isWon ?
      <Container>
        <Card style={{ width: '18rem' }}>
          <Card.Title>
            <ButtonStartRestart
              startRestart={state.startRestart}
              handleClickRestart={() => dispatch({ type: 'START_RESTART' })}
            /></Card.Title>
          <Card.Body>
            <table className='style2'>
              <tbody>
                <tr>
                  <td>
                    Move: {state.moves}
                  </td>
                  <td>
                    <Stopwatch
                      time={state.spentTime}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <Board
              cells={state.cells}
              handleClick={(num) => () => dispatch({ type: 'MOVE_TILES', num })}
            />
          </Card.Body>
        </Card>
      </Container>
      : <Won
        spentTime={state.spentTime}
        moves={state.moves}
        handleClickRestart={() => dispatch({ type: 'START_RESTART' })}
      />
  );
}

export default App