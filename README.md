## To Complete

- Documentation
- npm run generate:slice
- Comments on scripts
- Add translations everywhere
- Loki fails in Git Actions because of "Failed fetching stories because the server is down"
- скролл отскакивает наверх при прокрутке статей в плитках
- добавить и проверить написанные tests
- fix db (user-profile) - плохая структура
- везде проверить, что меняется язык
- добавить сторисы
- скролл в статьях
- декомпозиция
- написать линтер, чтобы в новом коде старый вариант компонентов не использовался
- заменить дурацкие === undefined/true/false

## Project Launch

```
npm install
npm run start:dev or npm run start:dev:vite
```

---

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

---

## Project Architecture

The project is written following the Feature Sliced Design methodology.

Documentation link - [Feature Sliced Design](https://feature-sliced.design/docs/get-started/tutorial)

---

## Working with Translations

The project uses the i18next library for translations.
Translation files are stored in `public/locales`.

For a better experience, we recommend installing a plugin for WebStorm/VScode.

i18next Documentation - [https://react.i18next.com/](https://react.i18next.com/)

---

## Testing

The project includes 4 types of tests:

1. Standard unit tests with Jest - `npm run test:unit`
2. Component tests with React Testing Library - `npm run test:unit`
3. Screenshot testing with Loki - `npm run test:ui`
4. e2e testing with Cypress - `npm run test:e2e`

More details about tests - [Testing Documentation](/docs/tests.md)

---

## Linting

The project uses ESLint for TypeScript code and Stylelint for style files.

Additionally, to enforce strict architectural principles,
the custom ESLint plugin _eslint-plugin-ulbi-tv-plugin_ is used,
which includes three rules:

1. `path-checker` - Prohibits absolute imports within the same module
2. `layer-imports` - Checks for correct layer usage according to FSD principles
   (e.g., widgets should not be used in 4features or entities)
3. `public-api-imports` - Allows imports from other modules only via public API (supports auto-fix)

##### Running Linters

- `npm run lint:ts` - Check TypeScript files with linter
- `npm run lint:ts:fix` - Fix TypeScript files with linter
- `npm run lint:scss` - Check SCSS files with style linter
- `npm run lint:scss:fix` - Fix SCSS files with style linter

---

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

import { ThemeDecorator } from '@/6shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { Theme } from '@/6shared/const/theme';

export default {
    title: '6shared/Button',
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

---

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

---

## CI Pipeline and Pre-Commit Hooks

GitHub Actions configuration is in `/.github/workflows`.
CI runs all types of tests, project and Storybook builds, and linting.

Pre-commit hooks enforce linting, configuration in `/.husky`

---

### Working with Data

Data interaction is done using Redux Toolkit.
Where possible, reusable entities should be normalized using `EntityAdapter`.

Server requests are made via [RTK Query](/src/6shared/api/rtkApi.ts).

To asynchronously connect reducers (to avoid pulling them into the global bundle), the
[DynamicModuleLoader](/src/6shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx) is used.

---

### Working with feature-flags

Разрешено использование feature flags только с помощью хелпера toggleFeatures

в него передается объект с опциями 

{
   name: название фича-флага, 
   on: функция, которая отработает после Включения фичи 
   of: функция, которая отработает после ВЫключения фичи
}

Для автоматического удаления фичи использовать скрипт remove-feature.ts,
который принимает 2 аргумента
1. Название удаляемого фича-флага
2. Состояние (on\off)

---

## Entities

- [Article](/src/5entities/Article/README.md)
- [Comment](/src/5entities/Comment/README.md)
- [Country](/src/5entities/CountryDropdown/README.md)
- [Currency](/src/5entities/CurrencyDropdown/README.md)
- [Notification](/src/5entities/Notification/README.md)
- [Profile](/src/5entities/Profile/README.md)
- [Rating](/src/5entities/Rating/README.md)
- [User](/src/5entities/User/README.md)
- [CommentForm](/src/5entities/CommentForm/README.md)

## Features

- [articleComments](/src/4features/ArticleComments/README.md)
- [articleRating](/src/4features/ArticleRating/README.md)
- [articleRecommendations](/src/4features/ArticleRecommendations/README.md)
- [AuthByUsername](/src/4features/AuthByUsername/README.md)
- [avatarDropdown](/src/4features/AvatarDropdown/README.md)
- [editableProfileCard](/src/4features/EditableProfileCard/README.md)
- [LangSwitcher](/src/4features/LangSwitcher/README.md)
- [ThemeSwitcher](/src/4features/ThemeSwitcher/README.md)
- [ViewSwitcher](/src/4features/ViewSwitcher/README.md)
