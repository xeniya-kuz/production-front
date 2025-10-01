import { API } from '../const'
import { type Article } from '../../../src/5entities/Article'
import { getArticleMock } from '../../helpers/getArticleMock'

const articleMock = getArticleMock()

export const createArticle = (article?: Article): Cypress.Chainable<Article> => {
  return cy.request({
    method: 'POST',
    url: `${API}/articles`,
    headers: { Authorization: 'asas' },
    body: article ?? articleMock
  })
    .then(({ body }) => body)
}

export const removeArticle = (articleId: string): Cypress.Chainable<Cypress.Response<any>> => {
  return cy.request({
    method: 'DELETE',
    url: `${API}/articles/${articleId}`,
    headers: { Authorization: 'asas' }
  })
}

declare global {
  namespace Cypress {
    interface Chainable {
      createArticle: (article?: Article) => Chainable<Article>
      removeArticle: (articleId: string) => Chainable<void>
    }
  }
}
