import type React from 'react'
import emitter from '@/EventBus'

const Test2: React.FC = () => {
  emitter.on('on-card', e => console.log(e))
  return (
    <div>Test2</div>
  )
}

export default Test2
