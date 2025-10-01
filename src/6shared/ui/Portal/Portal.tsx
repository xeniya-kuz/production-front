import { type ReactPortal, type ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
    children: ReactNode
    element?: HTMLElement
}

// Позволяет располагать компоненты по дом дереву где угодно
export const Portal = ({
    children,
    element = document.body,
}: PortalProps): ReactPortal => {
    return createPortal(children, element)
}
