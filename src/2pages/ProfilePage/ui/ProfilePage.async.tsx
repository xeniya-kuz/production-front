import { lazy } from 'react'

export const ProfilePageAsync = lazy(async () => await new Promise(resolve => {
  // @ts-expect-error - type error
  // имитация загрузки
  setTimeout(() => { resolve(import('./ProfilePage')) }, 1500)
})
)
