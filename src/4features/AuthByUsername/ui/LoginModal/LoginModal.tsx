import { classNames } from '@/6shared/lib/classNames/classNames'
import { Modal } from '@/6shared/ui/deprecated/Modal/Modal'
import { type JSX, Suspense, memo } from 'react'
import { LoginFormAsync } from '../LoginForm/LoginForm.async'
import { Loader } from '@/6shared/ui/deprecated/Loader/Loader'

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
            <Suspense fallback={<Loader />}>
                <LoginFormAsync onSuccess={onClose} />
            </Suspense>
        </Modal>
    )
})
