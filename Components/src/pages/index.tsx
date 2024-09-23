// react 没有全局组件局部组件的概念

import Test1 from '@/components/Test1'
import Test2 from '@/components/Test2'

function Home() {
  return (
    <>
      <Test1></Test1>
      <Test2></Test2>
    </>

  )
}

export default Home
