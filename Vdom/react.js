const React = {
  createElement(type, props, ...children) {
    return {
      type,
      props: {
        ...props,
        children: children.map(child =>
          typeof child === 'string' ? React.createTextElement(child) : child
        )
      }
    }
  },
  createTextElement(text) {
    return {
      type: 'TEXT_ELEMENT',
      props: {
        nodeValue: text,
        children: []
      }
    }
  }
}

const vdom = React.createElement('div', { id: 'root' }, React.createElement('h1', null, 'Hello World'),)

// 完成虚拟dom转fiber结构和时间切片

// requestIdleCallback

let nextUnitOfWork = null // 下一个工作单元

function workLoop(deadline) {
  let shouldYield = false // 是否应该让出时间片
  while (nextUnitOfWork && !shouldYield) { // 循环执行工作单元
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork) // 执行工作单元
    shouldYield = deadline.timeRemaining() < 1 // 是否应该让出时间片
  }
  requestIdleCallback(workLoop) // 继续执行下一轮循环
}

requestIdleCallback(workLoop) // 开始执行循环

function performUnitOfWork() { }