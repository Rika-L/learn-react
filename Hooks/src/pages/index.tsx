import Context from './use-context/use-context'
import Reducer from './use-reducer'
import State from './use-state'

function Home() {
  return (
    <div>
      <State />
      <Reducer />
      <Context />
    </div>
  )
}

export default Home
