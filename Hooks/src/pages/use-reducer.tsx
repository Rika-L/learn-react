import { useReducer, useState } from 'react'

function Reducer() {
  // const [count, setCount] = useState(0)
  /**
   *
   * @param state 代表操作之前原来的值
   * @param action = {type: 具体的操作名称, payload: 操作附带的数据}
   */
  function reducer(state: number, action: { type: string, payload: number }) {
    switch (action.type) {
      case 'increment':
        return state + action.payload
      case 'decrement':
        return state - action.payload
      default:
        return state
    }
  }

  const [count, dispatch] = useReducer(reducer, 100)
  return (
    <>
      <div>{count}</div>
      <button onClick={() => dispatch({ type: 'increment', payload: 10 })} type="button">+10</button>
    </>
  )
}

export default Reducer
