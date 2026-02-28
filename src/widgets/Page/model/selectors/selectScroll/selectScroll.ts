import { type StateSchema } from '@/app/providers/StoreProvider'
import { type ScrollSchema } from '../../types/PageSchema'

export const selectScroll = (state: StateSchema): ScrollSchema =>
    state.page.scroll
