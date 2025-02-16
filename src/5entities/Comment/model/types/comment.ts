import { type User } from '@/5entities/User'

export interface Comment {
  id: string
  text: string
  user: User
}
