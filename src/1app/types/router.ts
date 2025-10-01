import { type RouteProps } from 'react-router-dom'
import { type UserRole } from '@/5entities/User'

export type AppRoutesProps = RouteProps & {
    isPrivate?: boolean
    roles?: UserRole[]
}
