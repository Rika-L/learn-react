import Context from './use-context/use-context'
import Effect from './use-effect'
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
      <br />
      <div>---------------------------------------------------------------</div>
      <br />
      <Effect />
    </div>
  )
}

export default Home
