import { Modal } from 'antd'
import React from 'react'

interface ResumeModalProps {
  isOpened: boolean
  handleClose: () => void
}

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpened, handleClose }) => {
  return (
    <Modal title='Basic Modal' open={isOpened} onCancel={() => handleClose()}>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  )
}

export default ResumeModal
