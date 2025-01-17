import { type AppDispatch } from '@/1app/providers/StoreProvider'
import { useDispatch } from 'react-redux'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useAppDispatch = () => useDispatch<AppDispatch>()
