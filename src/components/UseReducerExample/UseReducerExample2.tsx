import React, { useReducer } from 'react'

interface reducerAction {
  type: string
  value: number
}

interface countState {
  firstCounter: number
  secondCounter: number
}

const initialState = {
  firstCounter: 0,
  secondCounter: 100,
}
const reducerFunc = (countState: countState, action: reducerAction) => {
  switch (action.type) {
    case 'increment1':
      return {
        ...countState,
        firstCounter: countState.firstCounter + action.value,
      }
    case 'decrement1':
      return {
        ...countState,
        firstCounter: countState.firstCounter - action.value,
      }
    case 'reset1':
      return { ...countState, firstCounter: initialState.firstCounter }
    case 'increment2':
      return {
        ...countState,
        secondCounter: countState.secondCounter + action.value,
      }
    case 'decrement2':
      return {
        ...countState,
        secondCounter: countState.secondCounter - action.value,
      }
    case 'reset2':
      return { ...countState, secondCounter: initialState.secondCounter }
    default:
      return countState
  }
}

const Counter = () => {
  const [count, dispatch] = useReducer(reducerFunc, initialState)

  return (
    <>
      <p>カウント1：{count.firstCounter}</p>
      <button onClick={() => dispatch({ type: 'increment1', value: 1 })}>
        + 1
      </button>
      <button onClick={() => dispatch({ type: 'decrement1', value: 1 })}>
        - 1
      </button>
      <button onClick={() => dispatch({ type: 'reset1', value: 0 })}>
        最初の数値に戻す
      </button>

      <br />

      <p>カウント2：{count.secondCounter}</p>
      <button onClick={() => dispatch({ type: 'increment2', value: 10 })}>
        + 1
      </button>
      <button onClick={() => dispatch({ type: 'decrement2', value: 10 })}>
        - 1
      </button>
      <button onClick={() => dispatch({ type: 'reset2', value: 0 })}>
        最初の数値に戻す
      </button>
    </>
  )
}

export default Counter
