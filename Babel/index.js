import babel from '@babel/core';
import fs from 'node:fs';
const code = fs.readFileSync('./test.js', 'utf8');

// types 包含了各种ast的方法
const transformFunction = ({ types: t }) => {
  return {
    name: 'transform-function',
    visitor: {
      // 匹配
      ArrowFunctionExpression(path) {
        // 箭头函数转化为普通的function
        const node = path.node;
        // 转化为普通的function
        // async params body
        const arrowFunction = t.FunctionExpression(
          null,
          node.params,
          t.blockStatement([t.returnStatement(node.body)]),
          node.async
        )
        path.replaceWith(arrowFunction)
      }
    }
  }
}

const result = babel.transform(code, {
  plugins: [
    transformFunction
  ]
})

// 写一个 ()=>{} ===> function 插件
console.log(result.code);