import { articleMock } from '../../src/5entities/Article/model/const/mocks'

// TODO: все равно user в бд добавляется. Проверить добавление сущностей
export const getArticleMock = () => {
    let article = { userId: articleMock.user.id }
    Object.entries(articleMock).forEach(([key, value]) => {
        if (key !== 'user' && key !== 'id') {
            article = { ...article, [key]: value }
        }
    })
    return article
}
