## Сущность пользователя

Описание: базовая сущность авторизованного пользователя. Содержит данные аутентификации, роли и пользовательские настройки.

#### Public api

- types

`User` - Тип, описывающий пользователя (id, username, avatar, roles, features, jsonSettings)

`UserSchema` - Тип состояния Redux (authData, _mounted)

`UserRole` - Перечисление ролей пользователя (ADMIN, USER, MANAGER)

- selectors

`selectUserAuthData` - Получение данных авторизованного пользователя

`selectUserMounted` - Получение состояния инициализации приложения

`selectUserRoles` - Получение ролей пользователя

`isUserAdmin` - Проверка наличия роли администратора

`isUserManager` - Проверка наличия роли менеджера

- actions

`userActions` - Экшены для управления состоянием пользователя

- reducers

`userReducer` - Редьюсер пользователя

- services

`initAuthData` - Инициализация данных авторизации из localStorage

`saveJsonSettings` - Сохранение пользовательских настроек (JSON) на сервер

- hooks

`useJsonSettings` - Хук для доступа к пользовательским настройкам
