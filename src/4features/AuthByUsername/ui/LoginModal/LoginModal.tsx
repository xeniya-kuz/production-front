import { classNames } from '6shared/lib/classNames/classNames'
import { Modal } from '6shared/ui/Modal/Modal'
import { LoginForm } from '../LoginForm/LoginForm'

interface LoginModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps): JSX.Element => {
  return (
      <Modal
        className={classNames(undefined, [className])}
        isOpen={isOpen}
        onClose={onClose}
        lazy>
          <LoginForm/>
      </Modal>
  )
}
