import { useLayoutEffect } from 'react'

function LayoutEffect() {
  useLayoutEffect(() => {
    console.log('useLayoutEffect')
  })
  return (<>1</>)
}

export default LayoutEffect