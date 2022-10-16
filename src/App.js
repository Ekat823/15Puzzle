import React, { useReducer, useEffect } from 'react';
import getInitialState from './state/GetInitialState';
import Stopwatch from './components/Stopwatch';
import ButtonStartRestart from './components/ButtonStartRestart';
import Table from './components/Table';
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
      <div className='container'>
        <ButtonStartRestart
          startRestart={state.startRestart}
          handleClickRestart={() => dispatch({ type: 'START_RESTART' })}
        />
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
        <Table
          cells={state.cells}
          handleClick={(num) => () => dispatch({ type: 'MOVE_TILES', num })}
        />
      </div>
      : <Won
        spentTime={state.spentTime}
        moves={state.moves}
        handleClickRestart={() => dispatch({ type: 'START_RESTART' })}
      />
  );
}

export default App