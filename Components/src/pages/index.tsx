import { useState } from 'react'

function Home() {
  const [value, setValue] = useState('')
  const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value.toLocaleUpperCase())
  }

  return (
    <input type="text" value={value} onChange={onchange} />
  )
}

export default Home
