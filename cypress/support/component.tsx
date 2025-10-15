// ***********************************************************
// This example support/component.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

import { mount, type MountOptions, type MountReturn } from 'cypress/react'
import { type ReactNode } from 'react'
import {
    type componentRenderProps,
    TestProvider,
} from '../../src/6shared/lib/tests/ComponentRender'
import { ThemeProvider } from '../../src/1app/providers/ThemeProvider'
import '../../src/1app/styles/index.scss'
import { Theme } from '@/6shared/const/themes'
import { toggleFeatures } from '@/6shared/lib/features'

// Example use:
// cy.mount(<MyComponent />)

// Augment the Cypress namespace to include type definitions for
// your custom command.
// Alternatively, can be defined in cypress/support/component.d.ts
// with a <reference path="./component" /> at the top of your spec.

type Options = MountOptions & componentRenderProps & { theme?: Theme }

declare global {
    namespace Cypress {
        interface Chainable {
            /**
             * Mounts a React node
             * @param component React Node to mount
             * @param options Additional options to pass into mount
             */
            mount: (
                component: ReactNode,
                options?: Options,
            ) => Cypress.Chainable<MountReturn>
            // mount: typeof mount
        }
    }
}

// TODO: в чем разница между .overwrite и .add и нужно ли тут переделывать на .overwrite?
Cypress.Commands.add(
    'mount',
    (component: React.ReactNode, options: Options = {}) => {
        const theme = options.theme ?? Theme.DARK
        const appStyles = toggleFeatures({
            name: 'isAppRedesigned',
            on: () => 'app_redesigned',
            off: () => 'app',
        })

        const wrapped = (
            <TestProvider options={options}>
                <ThemeProvider initialTheme={theme}>
                    <div className={`${appStyles} ${theme}`}>{component}</div>
                </ThemeProvider>
            </TestProvider>
        )

        return mount(wrapped, options)
    },
)
