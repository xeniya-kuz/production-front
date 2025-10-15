import { classNames } from '@/6shared/lib/classNames/classNames'
import { Modal } from '@/6shared/ui/redesigned/Modal/Modal'
import { type JSX, memo } from 'react'
import { LoginFormContainer } from '../LoginFormContainer/LoginFormContainer'

interface LoginModalProps {
    className?: string
    isOpen: boolean
    onClose: () => void
}

export const LoginModal = memo(function LoginModal({
    className,
    isOpen,
    onClose,
}: LoginModalProps): JSX.Element {
    return (
        <Modal
            className={classNames(undefined, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <LoginFormContainer onSuccess={onClose} />
        </Modal>
    )
})
