import { type StateSchema } from '@/1app/providers/StoreProvider'
import { type ScrollSchema } from '../../types/PageSchema'

export const selectScroll = (state: StateSchema): ScrollSchema => state.page.scroll
