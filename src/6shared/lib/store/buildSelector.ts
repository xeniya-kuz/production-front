import { type StateSchema } from '@/1app/providers/StoreProvider'
import { useSelector } from 'react-redux'

type Selector<T> = (selector: StateSchema) => T
type Result<T> = [() => T, Selector<T>]
export function buildSelector<T>(selector: Selector<T>): Result<T> {
    const useSelectHook = (): T => {
        return useSelector(selector)
    }

    return [useSelectHook, selector]
}
