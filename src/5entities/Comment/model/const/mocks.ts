import { userMock } from '@/5entities/User'
import { type Comment } from '../types/comment'

export const commentsMock: Comment[] = [
    { id: '1', text: 'Comment 1', user: userMock },
]

export const commentMock: Comment = {
    id: '1',
    text: 'Comment 1',
    user: userMock,
}
