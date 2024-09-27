import React from 'react'
import Child from './child'

export const MyContext = React.createContext(false)

function Context() {
  const [value, setValue] = React.useState(false)
  return (
    <MyContext.Provider value={value}>
      <button onClick={() => setValue(!value)} type="button">
        测试动态context值
      </button>
      <Child />
    </MyContext.Provider>
  )
}

export default Context
