import { type Comment } from '5entities/Comment'
import { userMock } from './user'

export const commentsMock: Comment[] = [{ id: '1', text: 'Comment 1', user: { id: '1', username: 'user1' } }]

export const commentMock: Comment = { id: '1', text: 'Comment 1', user: userMock }
