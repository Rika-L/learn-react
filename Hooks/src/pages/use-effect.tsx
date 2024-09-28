import { useEffect, useRef, useState } from 'react'

function Effect() {
  const [count, setCount] = useState(0)
  const mount = useRef(false)
  useEffect(() => {
    if (mount.current)
      console.log(`点击了${count}次`)
    else
      mount.current = true
  }, [count])
  return (
    <>
      <p>
        点击了
        {count}
        次
      </p>
      <button onClick={() => setCount(count + 1)} type="button">点击</button>
    </>
  )
}

export default Effect
