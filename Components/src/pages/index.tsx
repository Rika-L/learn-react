// react 没有全局组件局部组件的概念

import Card from '@/components/Card'

function Home() {
  return (
    <>
      <Card />
      <Card />
      <button type="button" onClick={() => window.onshow()}>调用message</button>
    </>
  )
}

export default Home
