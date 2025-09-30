import * as commonCommands from './commands/common'
import * as profileCommands from './commands/profile'
import * as articleCommands from './commands/article'
import * as commentCommands from './commands/comment'
import * as ratingCommands from './commands/rating'

/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
Cypress.Commands.addAll(commonCommands)
Cypress.Commands.addAll(profileCommands)
Cypress.Commands.addAll(articleCommands)
Cypress.Commands.addAll(commentCommands)
Cypress.Commands.addAll(ratingCommands)

// TODO: разобраться в автоматизированном сохранении и чтении фикстур
Cypress.Commands.overwrite('intercept', (originalFn, ...args) => {
  const FIXTURE_MODE = process.env.FIXTURE_MODE
  const api = process.env.__API__
  console.log('FIXTURE_MODE', FIXTURE_MODE)
  console.log('api', api)
  console.log('originalFn', originalFn)
  console.log('args', args)
  const fixtureName = ''

  if (FIXTURE_MODE === 'READ') {
    // readFixture(fixtureName)
  }
  if (FIXTURE_MODE === 'WRITE') {
    // createFixture(fixtureName, req.body)
  }
  if (FIXTURE_MODE === 'API') {
    // real data from server
  }
  return cy.log('intercept!').then(() => {
    return originalFn(...args)
  })
})

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

export {}
