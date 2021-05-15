import React, { useReducer } from 'react'

const initialState = 0
const reducerFunc = (countState: number, action: string) => {
  switch (action) {
    case 'increment':
      return countState + 1
    case 'decrement':
      return countState - 1
    case 'reset':
      return initialState
    default:
      return countState
  }
}

const Counter = () => {
  const [count, dispatch] = useReducer(reducerFunc, initialState)

  return (
    <>
      <p>カウント：{count}</p>
      <button onClick={() => dispatch('increment')}>+ 1</button>
      <button onClick={() => dispatch('decrement')}>- 1</button>
      <button onClick={() => dispatch('reset')}>最初の数値に戻す</button>
    </>
  )
}

export default Counter
