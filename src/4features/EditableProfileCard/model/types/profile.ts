import { type Profile } from '@/5entities/Profile'
import { type ValidateProfileError } from '../const/validate'

export interface ProfileSchema {
  profile?: Profile
  editedProfile?: Profile
  isLoading: boolean
  error?: string
  readonly: boolean
  validateErrors?: ValidateProfileError[]
}
