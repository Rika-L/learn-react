import ReactDom from 'react-dom/client'
import './index.css'

export default function Message() {
  return <div>Message</div>
}

interface Item {
  messageContainer: HTMLElement
  root: ReactDom.Root
}
const queue: Item[] = []
window.onshow = () => {
  const messageContainer = document.createElement('div')
  messageContainer.className = 'message'
  messageContainer.style.top = `${queue.length * 50}px`
  document.body.appendChild(messageContainer)
  const root = ReactDom.createRoot(messageContainer)
  root.render(<Message />) // 渲染组件
  queue.push({
    messageContainer,
    root,
  })
  setTimeout(() => {
    const item = queue.find(item => item.messageContainer === messageContainer)!
    item.root.unmount() // 卸载
    document.body.removeChild(item.messageContainer)
    queue.splice(queue.indexOf(item), 1)
  }, 2000)
}

// ts声明扩充
declare global {
  interface Window {
    // 展示消息
    onshow: () => void
  }
}
