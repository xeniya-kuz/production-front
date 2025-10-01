import { type StateSchema } from '@/1app/providers/StoreProvider'
import { type AsyncThunkAction } from '@reduxjs/toolkit'
import axios, { type AxiosStatic } from 'axios'

type ActionCreator<Return, Arg, RejectedValue> = (
    arg: Arg,
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>

jest.mock('axios')
const mockedAxios = jest.mocked(axios)

// класс для стандартизации тестирования асинх санков
export class TestAsyncThunk<Return, Arg, RejectedValue> {
    dispatch: jest.MockedFn<any>
    getState: () => StateSchema
    actionCreator: ActionCreator<Return, Arg, RejectedValue>

    api: jest.MockedFunctionDeep<AxiosStatic>
    navigate: jest.MockedFn<any>

    constructor(
        actionCreator: ActionCreator<Return, Arg, RejectedValue>,
        state?: DeepPartial<StateSchema>,
    ) {
        this.actionCreator = actionCreator
        this.dispatch = jest.fn()
        this.getState = jest.fn(() => state as StateSchema)

        this.api = mockedAxios
        this.navigate = jest.fn()
    }

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    async callThunk(arg: Arg) {
        const action = this.actionCreator(arg)
        const result = await action(this.dispatch, this.getState, {
            api: this.api,
            navigate: this.navigate,
        })

        return result
    }
}
