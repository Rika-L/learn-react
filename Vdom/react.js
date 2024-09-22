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
let wipRoot = null // 当前正在工作的根fiber
let currentRoot = null // 当前的根fiber
let deletions = null // 待删除的fiber

function render(element, container) {
  wipRoot = {
    dom: container,
    props: {
      children: [element]
    },
    alternate: currentRoot // 保存旧的fiber
  }
  deletions = []
  nextUnitOfWork = wipRoot
}

function createDom(fiber) {
  const dom = fiber.type === 'TEXT_ELEMENT' ? document.createTextNode('') : document.createElement(fiber.type)
  updateDom(dom, {}, fiber.props) // 更新dom属性
  return dom
}

function updateDom(dom, preProps, nextProps) {
  // 旧的属性清除
  Object.keys(preProps).filter(name => name !== 'children').forEach(name => {
    dom[name] = ''
  })
  // 新的属性增加
  Object.keys(nextProps).filter(name => name !== 'children').forEach(name => {
    dom[name] = nextProps[name]
  })
}

function workLoop(deadline) {
  let shouldYield = false // 是否应该让出时间片
  while (nextUnitOfWork && !shouldYield) { // 循环执行工作单元
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork) // 执行工作单元
    shouldYield = deadline.timeRemaining() < 1 // 是否应该让出时间片
  }
  requestIdleCallback(workLoop) // 继续执行下一轮循环
}

requestIdleCallback(workLoop) // 开始执行循环

function performUnitOfWork(fiber) {
  if (!fiber.dom) {
    fiber.dom = createDom(fiber) // 创建真实dom
  }
  // 遍历子节点
  reconcileChildren(fiber, fiber.props.children)
  if (fiber.child) {
    return fiber.child
  }
  let nextFiber = fiber
  while (nextFiber) {
    if (nextFiber.sibling) {
      return nextFiber.sibling
    }
    nextFiber = nextFiber.parent
  }
  // 完成工作单元
  return null
}


function reconcileChildren(fiber, elements) {
  // diff算法
  // 形成fiber树
}