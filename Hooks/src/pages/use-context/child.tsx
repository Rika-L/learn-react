import { useContext } from 'react'
import { MyContext } from './use-context'

function Child() {
  const contextValue = useContext(MyContext)
  return (
    <>
      {contextValue.toString()}
    </>
  )
}

export default Child
