import { useState } from 'react'

function State() {
  const [state, setState] = useState(() => false)
  const hdlClick = () => {
    setState(true)
    console.log(state) // false
  }
  return (
    <>
      <div>{state.toString()}</div>
      <button type="button" onClick={hdlClick}>setState</button>
    </>
  )
}

export default State
