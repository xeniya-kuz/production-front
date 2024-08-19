import { type Profile } from '5entities/Profile'

export interface ProfileSchema {
  profile?: Profile
  editedProfile?: Profile
  isLoading: boolean
  error?: string
  readonly: boolean
}
