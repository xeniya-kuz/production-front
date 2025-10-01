import { classNames, type Mods } from '@/6shared/lib/classNames/classNames'
import { useModal } from '@/6shared/lib/hooks'
import { type JSX, type ReactNode } from 'react'
import { Overlay } from '../Overlay/Overlay'
import { Portal } from '../Portal/Portal'
import styles from './Modal.module.scss'

interface ModalProps {
    className?: string
    children?: ReactNode
    isOpen: boolean
    onClose: () => void
    lazy?: boolean
}

// мемоизировать компонент (memo) не имеет смысла, т.к. в кач-ве children всегда передается какая-то двевовидная структура, которая часто меняется и стоит дорого для мемоизации
export const Modal = ({
    className,
    children,
    isOpen,
    onClose,
    lazy = false,
}: ModalProps): JSX.Element | null => {
    const { close, isClosing, isMounted } = useModal({
        isOpen,
        onClose,
        delay: 300,
    })

    const mods: Mods = {
        [styles.opened]: isOpen,
        [styles.isClosing]: isClosing,
    }

    if (lazy && !isMounted) {
        return null
    }

    return (
        <Portal>
            <div className={classNames(styles.modal, [className], mods)}>
                <Overlay onClick={close} />
                <div className={styles.content}>{children}</div>
            </div>
        </Portal>
    )
}
