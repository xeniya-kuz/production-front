import { type StateSchema } from '@/1app/providers/StoreProvider'
import { useSelector } from 'react-redux'

type Selector<T, Args extends any[]> = (
    selector: StateSchema,
    ...args: Args
) => T
type Hook<T, Args extends any[]> = (...args: Args) => T
type Result<T, Args extends any[]> = [Hook<T, Args>, Selector<T, Args>]
export function buildSelector<T, Args extends any[]>(
    selector: Selector<T, Args>,
): Result<T, Args> {
    const useSelectHook: Hook<T, Args> = (...args: Args): T => {
        return useSelector((state: StateSchema) => selector(state, ...args))
    }

    return [useSelectHook, selector]
}
