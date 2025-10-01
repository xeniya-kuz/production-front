import { rtkApi } from '@/6shared/api/rtkApi'
import { type Notification } from '../model/types/notification'

const notificationApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getNotifications: build.query<Notification[], null>({
            query: () => ({
                url: '/notifications',
            }),
        }),
    }),
})

export const useNotifications = notificationApi.useGetNotificationsQuery
