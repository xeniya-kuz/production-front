import { type DropdownDirection } from '@/shared/types/ui'
import styles from './popup.module.scss'

export const mapDirectionsClass: Record<DropdownDirection, string> = {
    'top left': styles.topLeft,
    'top right': styles.topRight,
    'bottom left': styles.bottomLeft,
    'bottom right': styles.bottomRight,
}
