import { Modal } from 'antd'
import React from 'react'

interface LineModalProps {
  isOpened: boolean
  handleClose: () => void
}

const LineModal: React.FC<LineModalProps> = ({ isOpened, handleClose }) => {
  return (
    <Modal footer open={isOpened} onCancel={() => handleClose()}>
      <iframe className='border-none h-[540px] w-full' src='https://line.me/ti/p/leoleoleo684' title='LINE@'></iframe>
    </Modal>
  )
}

export default LineModal
