## Сущность профиля

Описание: сущность профиля пользователя. Содержит данные профиля, логику загрузки, обновления и валидации.

#### Public api

- types

`Profile` - Тип, описывающий профиль (firstname, lastname, age, currency, country, city, username, avatar, id)

`ProfileSchema` - Тип состояния Redux (profile, editedProfile, isLoading, error, readonly, validateErrors)

`ValidateProfileError` - Перечисление ошибок валидации (NAME, AGE, COUNTRY, NO_DATA, SERVER)

- selectors

`selectProfileData` - Получение данных профиля

`selectProfileError` - Получение ошибки профиля

`selectProfileIsLoading` - Получение состояния загрузки

`selectProfileReadonly` - Получение режима только для чтения

`selectEditedProfile` - Получение редактируемых данных профиля

`selectProfileValidateErrors` - Получение ошибок валидации

- actions

`profileActions` - Экшены для управления состоянием профиля

- reducers

`profileReducer` - Редьюсер профиля

- services

`fetchProfileData` - Асинхронный thunk для загрузки данных профиля по id

`updateProfileData` - Асинхронный thunk для сохранения изменений профиля

`validateProfileErrorsTranslations` - Переводы ошибок валидации профиля
