import { useEffect, useRef } from 'react'

function Ref() {
  const inputRef = useRef<HTMLInputElement>(null)
  const count = useRef(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      count.current += 1
      console.log(`Elapsed time: ${count.current} seconds`)
    }, 1000)
  })

  function hdlInp() {
    console.log(inputRef.current!.value)
  }
  return (
    <div>
      <input type="text" defaultValue="Hello World" ref={inputRef} onChange={hdlInp} />
    </div>
  )
}

export default Ref
