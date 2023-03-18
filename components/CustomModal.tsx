import { Modal } from 'antd'
import React from 'react'

interface CustomModalProps {
  isOpened: boolean
  handleClose: () => void
  children?: React.ReactNode
}

const CustomModal: React.FC<CustomModalProps> = ({ isOpened, handleClose, children }) => {
  return (
    <Modal footer open={isOpened} onCancel={() => handleClose()}>
      {children}
    </Modal>
  )
}

export default CustomModal
