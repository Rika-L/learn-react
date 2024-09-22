import babel from '@babel/core';
import presetEnv from '@babel/preset-env'; // preset-env 是 babel 的一个插件，它可以让我们使用最新的 JavaScript 特性，而不用担心浏览器兼容性问题。
import fs from 'node:fs';
import react from '@babel/preset-react';
const code = fs.readFileSync('./app.jsx', 'utf8');
const result = babel.transform(code, {
  presets: [
    // entry 手动引入
    // usage 按需引入
    [presetEnv, { useBuiltIns: "usage", corejs: 3 }],
    react
  ],
})
console.log(result.code);