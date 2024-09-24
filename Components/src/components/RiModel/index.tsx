import React from 'react'
import { createPortal } from 'react-dom'

interface Props {
  hdlClick: () => void
}

const RiModel: React.FC<Props> = function ({ hdlClick }) {
  return (
    <>
      {
        createPortal(
          <div className="flex justify-center w-full h-full bg-gray-500/10 fixed z-50 top-0 left-0" onClick={hdlClick}>
            <div className="h-64 w-[512px] bg-white mt-[20vh] rounded-lg" onClick={e => e.stopPropagation()}>
              <div className="font-bold">Dialog Title</div>
            </div>
          </div>,
          document.body,
        )
      }
    </>
  )
}

export default RiModel
