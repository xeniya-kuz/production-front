import {
    ComponentRender,
    type componentRenderProps,
} from '@/shared/lib/tests/ComponentRender'
import { EditableProfileCard } from './EditableProfileCard'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { $api } from '@/shared/api/api'
import { profileMock, profileReducer } from '@/entities/Profile'
import { DATA_TEST_ID } from '@/shared/const/tests'

const options: componentRenderProps = {
    initialState: {
        profile: {
            profile: { ...profileMock },
            editedProfile: { ...profileMock },
            readonly: true,
            isLoading: false,
        },
        user: {
            authData: {
                id: profileMock.id!,
                username: profileMock.username!,
            },
            _mounted: true,
        },
    },
    // такой объект может пригодиться, когда стэйт монтируется в родителе
    asyncReducers: { profile: profileReducer },
}

// TODO: add comments
const user = userEvent.setup()

const editBtn = DATA_TEST_ID.editableProfileCardHeaderEditBtn
const cancelBtn = DATA_TEST_ID.editableProfileCardHeaderCancelBtn
const firstname = DATA_TEST_ID.profileCardFirstname
const lastname = DATA_TEST_ID.profileCardLastname
const saveBtn = DATA_TEST_ID.editableProfileCardHeaderSaveBtn
const validateError = DATA_TEST_ID.editableProfileErrors

describe('EditableProfileCard', () => {
    test('Режим readonly переключается на false', async () => {
        ComponentRender(
            <EditableProfileCard profileId={profileMock.id} />,
            options,
        )

        await userEvent.click(screen.getByTestId(editBtn))
        expect(screen.getByTestId(cancelBtn)).toBeInTheDocument()
    })

    test('При отмене редактирования значения должны обнуляться', async () => {
        ComponentRender(
            <EditableProfileCard profileId={profileMock.id} />,
            options,
        )
        await user.click(screen.getByTestId(editBtn))

        await user.clear(screen.getByTestId(firstname))
        await user.clear(screen.getByTestId(lastname))

        expect(screen.getByTestId(firstname)).toHaveValue('')
        expect(screen.getByTestId(lastname)).toHaveValue('')

        await user.type(screen.getByTestId(firstname), 'test1')
        await user.type(screen.getByTestId(lastname), 'test123')

        expect(screen.getByTestId(firstname)).toHaveValue('test1')
        expect(screen.getByTestId(lastname)).toHaveValue('test123')

        await user.click(screen.getByTestId(cancelBtn))

        expect(screen.getByTestId(firstname)).toHaveValue(profileMock.firstname)
        expect(screen.getByTestId(lastname)).toHaveValue(profileMock.lastname)
    })

    test('Появляется ошибка валидации имени', async () => {
        ComponentRender(
            <EditableProfileCard profileId={profileMock.id} />,
            options,
        )

        await user.click(screen.getByTestId(editBtn))

        await user.clear(screen.getByTestId(firstname))

        await user.click(screen.getByTestId(saveBtn))

        expect(screen.getByTestId(validateError)).toBeInTheDocument()
    })

    test('Если нет ошибок валидации, то на сервер должен уйти PUT запрос', async () => {
        const mockPutReq = jest.spyOn($api, 'put')
        ComponentRender(
            <EditableProfileCard profileId={profileMock.id} />,
            options,
        )
        await userEvent.click(screen.getByTestId(editBtn))

        await userEvent.type(screen.getByTestId(firstname), 'user')

        await userEvent.click(screen.getByTestId(saveBtn))

        expect(mockPutReq).toHaveBeenCalled()
    })
})
