import type React from 'react'
import emitter from '@/EventBus'

const Test1: React.FC = () => {
  const clickHandler = () => {
    emitter.emit('on-card', 'rika')
  }
  return (
    <div>
      <button type="button" onClick={clickHandler}>派发事件</button>
    </div>
  )
}

declare global {
  interface Event {
    params: any
  } // 这种应该抽离到全局声明文件中的吧 应该也许大概
}

export default Test1
