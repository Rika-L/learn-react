import Context from './use-context/use-context'
import Reducer from './use-reducer'
import Ref from './use-ref'
import State from './use-state'

function Home() {
  return (
    <div>
      <State />
      <Reducer />
      <Context />
      <Ref />
    </div>
  )
}

export default Home
