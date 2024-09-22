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

const vdom = React.createElement(
  'div',
  { id: 'root' },
  React.createElement('h1', null, 'Hello World'),
)

console.log(vdom)