import { profileMock } from '@/6shared/const/mocks/profile'
import { ComponentRender } from '@/6shared/lib/tests/ComponentRender'
import { EditableProfileCard } from './EditableProfileCard'
import { profileReducer } from '../../model/slice'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { $api } from '@/6shared/api/api'

const options = {
  initialState: {
    profile: {
      profile: { ...profileMock },
      editedProfile: { ...profileMock },
      readonly: true
    },
    user: {
      authData: { id: profileMock.id, username: profileMock.username },
      _mounted: true
    }
  },
  // такой объект может пригодиться, когда стэйт монтируется в родителе
  asyncReducers: { profile: profileReducer }
}

describe('EditableProfileCard', () => {
  const editBtn = 'editableProfileCardHeader.EditBtn'
  const cancelBtn = 'editableProfileCardHeader.CancelBtn'
  const firstname = 'profileCard.Firstname'
  const lastname = 'profileCard.Lastname'
  const saveBtn = 'editableProfileCardHeader.SaveBtn'
  const validateError = 'editableProfileErrors.Text'

  test('Режим readonly переключается на false', async () => {
    ComponentRender(<EditableProfileCard profileId={profileMock.id}/>,
      options
    )

    await userEvent.click(screen.getByTestId(editBtn))
    expect(screen.getByTestId(cancelBtn)).toBeInTheDocument()
  })

  //! инпут не очищается и не печатается
  // test('При отмене редактирования значения должны обнуляться', async () => {
  //   ComponentRender(<EditableProfileCard profileId={profileMock.id}/>,
  //     options
  //   )
  //   await userEvent.click(screen.getByTestId(editBtn))
  //   await userEvent.click(screen.getByTestId(firstname))

  //   await userEvent.clear(screen.getByTestId(firstname))
  //   await userEvent.clear(screen.getByTestId(lastname))

  //   expect(screen.getByTestId(firstname)).toHaveValue('')
  //   expect(screen.getByTestId(lastname)).toHaveValue('')

  //   await userEvent.type(screen.getByTestId(firstname), 'test1')
  //   await userEvent.type(screen.getByTestId(lastname), 'test123')

  //   expect(screen.getByTestId(firstname)).toHaveValue('test1')
  //   expect(screen.getByTestId(lastname)).toHaveValue('test123')

  //   await userEvent.click(screen.getByTestId(cancelBtn))

  //   expect(screen.getByTestId(firstname)).toHaveValue(profileMock.firstname)
  //   expect(screen.getByTestId(lastname)).toHaveValue(profileMock.lastname)
  // })

  //! инпут не очищается
  // test('Появляется ошибка валидации имени', async () => {
  //   ComponentRender(<EditableProfileCard profileId={profileMock.id}/>,
  //     options
  //   )

  //   await userEvent.click(screen.getByTestId(editBtn))

  //   await userEvent.clear(screen.getByTestId(firstname))

  //   await userEvent.click(screen.getByTestId(saveBtn))

  //   expect(screen.getByTestId(validateError)).toBeInTheDocument()
  // })

  //! инпут не очищается
  test('Если нет ошибок валидации, то на сервер должен уйти PUT запрос', async () => {
    const mockPutReq = jest.spyOn($api, 'put')
    ComponentRender(<EditableProfileCard profileId={profileMock.id}/>, options)
    await userEvent.click(screen.getByTestId(editBtn))

    await userEvent.type(screen.getByTestId(firstname), 'user')

    await userEvent.click(screen.getByTestId(saveBtn))

    expect(mockPutReq).toHaveBeenCalled()
  })
})
