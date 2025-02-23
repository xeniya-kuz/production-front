## To Complete

- Documentation
- npm run generate:slice
- Comments on scripts
- Add translations everywhere
- Loki fails in Git Actions because of "Failed fetching stories because the server is down"


## Project Launch

```
npm install
npm run start:dev or npm run start:dev:vite
```

----

## Scripts

- `npm run start` - Start frontend project on Webpack dev server
- `npm run start:vite` - Start frontend project on Vite
- `npm run start:dev` - Start frontend project on Webpack dev server + backend
- `npm run start:dev:vite` - Start frontend project on Vite + backend
- `npm run start:dev:server` - Start backend server
- `npm run build:prod` - Build in production mode
- `npm run build:dev` - Build in development mode (not minimized)
- `npm run lint:ts` - Check TypeScript files with linter
- `npm run lint:ts:fix` - Fix TypeScript files with linter
- `npm run lint:scss` - Check SCSS files with style linter
- `npm run lint:scss:fix` - Fix SCSS files with style linter
- `npm run test:jest` - Run unit tests with Jest
- `npm run test:loki` - Run screenshot tests with Loki
- `npm run test:loki:ok` - Approve new screenshots
- `npm run test:loki:ci` - Run screenshot tests in CI
- `npm run test:loki:report` - Generate full report for screenshot tests
- `npm run test:loki:json` - Generate JSON report for screenshot tests
- `npm run test:loki:html` - Generate HTML report for screenshot tests
- `npm run storybook` - Launch Storybook
- `npm run storybook:build` - Build Storybook
- `npm run prepare` - Pre-commit hooks
- `npm run generate:slice` - Script for generating FSD slices

----

## Project Architecture

The project is written following the Feature Sliced Design methodology.

Documentation link - [Feature Sliced Design](https://feature-sliced.design/docs/get-started/tutorial)

----

## Working with Translations

The project uses the i18next library for translations.
Translation files are stored in `public/locales`.

For a better experience, we recommend installing a plugin for WebStorm/VScode.

i18next Documentation - [https://react.i18next.com/](https://react.i18next.com/)

----

## Testing

The project includes 4 types of tests:
1) Standard unit tests with Jest - `npm run test:unit`
2) Component tests with React Testing Library - `npm run test:unit`
3) Screenshot testing with Loki - `npm run test:ui`
4) e2e testing with Cypress - `npm run test:e2e`

More details about tests - [Testing Documentation](/docs/tests.md)

----

## Linting

The project uses ESLint for TypeScript code and Stylelint for style files.

Additionally, to enforce strict architectural principles,
the custom ESLint plugin *eslint-plugin-ulbi-tv-plugin* is used,
which includes three rules:
1) `path-checker` - Prohibits absolute imports within the same module
2) `layer-imports` - Checks for correct layer usage according to FSD principles
   (e.g., widgets should not be used in features or entities)
3) `public-api-imports` - Allows imports from other modules only via public API (supports auto-fix)

##### Running Linters
- `npm run lint:ts` - Check TypeScript files with linter
- `npm run lint:ts:fix` - Fix TypeScript files with linter
- `npm run lint:scss` - Check SCSS files with style linter
- `npm run lint:scss:fix` - Fix SCSS files with style linter

----
## Storybook

Story cases are described for each component in the project.
Server requests are mocked using `storybook-addon-mock`.

The story file is created next to the component with the `.stories.tsx` extension.

Launch Storybook with:
- `npm run storybook`

More details about [Storybook](/docs/storybook.md)

Example:

```typescript jsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
};
```

----

## Project Configuration

For development, the project has two configurations:
1. Webpack - `./config/build`
2. Vite - `vite.config.ts`

Both bundlers are adapted to the main features of the application.

All configurations are stored in `/config`:
- `/config/babel` - Babel
- `/config/build` - Webpack configuration
- `/config/jest` - Test environment configuration
- `/config/storybook` - Storybook configuration

Various scripts for refactoring, simplifying code writing, and report generation are in the `scripts` folder.

----

## CI Pipeline and Pre-Commit Hooks

GitHub Actions configuration is in `/.github/workflows`.
CI runs all types of tests, project and Storybook builds, and linting.

Pre-commit hooks enforce linting, configuration in `/.husky`

----

### Working with Data

Data interaction is done using Redux Toolkit.
Where possible, reusable entities should be normalized using `EntityAdapter`.

Server requests are made via [RTK Query](/src/shared/api/rtkApi.ts).

To asynchronously connect reducers (to avoid pulling them into the global bundle), the
[DynamicModuleLoader](/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx) is used.

----

## Entities

- [Article](/src/entities/Article)
- [Comment](/src/entities/Comment)
- [Counter](/src/entities/Counter)
- [Country](/src/entities/Country)
- [Currency](/src/entities/Currency)
- [Notification](/src/entities/Notification)
- [Profile](/src/entities/Profile)
- [Rating](/src/entities/Rating)
- [User](/src/entities/User)

## Features

- [addCommentForm](/src/features/addCommentForm)
- [articleEditForm](/src/features/articleEditForm)
- [articleRating](/src/features/articleRating)
- [articleRecommendationsList](/src/features/articleRecommendationsList)
- [AuthByUsername](/src/features/AuthByUsername)
- [avatarDropdown](/src/features/avatarDropdown)
- [editableProfileCard](/src/features/editableProfileCard)
- [LangSwitcher](/src/features/LangSwitcher)
- [notificationButton](/src/features/notificationButton)
- [profileRating](/src/features/profileRating)
- [ThemeSwitcher](/src/features/ThemeSwitcher)
- [UI](/src/features/UI)

