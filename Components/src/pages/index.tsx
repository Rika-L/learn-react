import RiModel from '@/components/RiModel'
import { useState } from 'react'

function Home() {
  const [isShow, setIsShow] = useState(false)

  const hdlClick = () => {
    setIsShow(!isShow)
  }

  return (
    <>
      <button type="button" onClick={hdlClick}>展示对话框</button>
      {isShow && <RiModel hdlClick={hdlClick} />}
    </>

  )
}

export default Home
