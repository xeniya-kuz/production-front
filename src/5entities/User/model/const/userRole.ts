export const UserRole = {
    ADMIN: 'ADMIN',
    USER: 'USER',
    MANAGER: 'MANAGER',
} as const
// eslint-disable-next-line @typescript-eslint/no-redeclare
export type UserRole = (typeof UserRole)[keyof typeof UserRole]
