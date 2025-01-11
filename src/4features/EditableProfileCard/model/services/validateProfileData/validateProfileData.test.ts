import { profileMock } from '6shared/const/mocks/profile'
import { validateProfileData } from './validateProfileData'
import { ValidateProfileError } from '../../const/validate'

describe('validateProfileData', () => {
  test('success', async () => {
    const result = validateProfileData(profileMock)

    expect(result).toEqual([])
  })

  test('no first name', async () => {
    const result = validateProfileData({ ...profileMock, firstname: '' })

    expect(result).toEqual([ValidateProfileError.NAME])
  })

  test('no country', async () => {
    const result = validateProfileData({ ...profileMock, country: undefined })

    expect(result).toEqual([ValidateProfileError.COUNTRY])
  })

  test('incorrect age', async () => {
    const result = validateProfileData({ ...profileMock, age: 0 })

    expect(result).toEqual([ValidateProfileError.AGE])
  })

  test('incorrect all', async () => {
    const result = validateProfileData({})

    expect(result).toEqual([
      ValidateProfileError.NAME,
      ValidateProfileError.AGE,
      ValidateProfileError.COUNTRY])
  })

  test('no data', async () => {
    const result = validateProfileData()

    expect(result).toEqual([ValidateProfileError.NO_DATA])
  })
})
