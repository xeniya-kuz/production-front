import { classNames, type Mods } from '@/6shared/lib/classNames/classNames'
import { useModal, useTheme } from '@/6shared/lib/hooks'
import { type JSX, type ReactNode } from 'react'
import { Overlay } from '../../redesigned/Overlay/Overlay'
import { Portal } from '../../redesigned/Portal/Portal'
import styles from './Modal.module.scss'
import { toggleFeatures } from '@/6shared/lib/features'

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
    const { theme } = useTheme()
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

    const modalStyles = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => styles.modalRedesigned,
        off: () => styles.modalDeprecated,
    })

    // element={document.getElementById('app') ?? document.body}
    return (
        <Portal>
            <div
                className={classNames(
                    styles.modal,
                    [theme, modalStyles, className],
                    mods,
                )}
            >
                <Overlay onClick={close} />
                <div className={styles.content}>{children}</div>
            </div>
        </Portal>
    )
}
