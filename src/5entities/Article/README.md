## Сущность статьи

Описание: базовая сущность статьи. Содержит компоненты для отображения детальной информации и списков статей, типы данных, сортировку и фильтрацию.

#### Public api

- Components

`ArticleDetails` - Детальная страница статьи с блоками текста, кода и изображений

`ArticleList` - Список статей с поддержкой виртуализации, бесконечного скролла и двух режимов отображения

`ArticleListItem` - Карточка статьи в режиме плитки или списка

- types

`Article` - Тип, описывающий статью (id, user, title, subtitle, img, views, createdAt, type, blocks)

`ArticleDetailsSchema` - Тип состояния Redux (isLoading, error, article)

`ArticleBlockType` - Перечисление типов блоков статьи (TEXT, CODE, IMAGE)

`ArticleType` - Перечисление категорий статьи (ALL, IT, SCIENCE, ECONOMICS)

`ArticleView` - Перечисление режимов отображения (LIST, TILE)

`ArticleSortField` - Перечисление полей сортировки (VIEWS, TITLE, CREATED)

- selectors

`selectArticleDetails` - Получение данных текущей открытой статьи

`selectIsArticleAuthor` - Проверка, является ли текущий пользователь автором статьи

- reducers

`articleDetailsReducer` - Редьюсер для управления состоянием детальной страницы статьи
