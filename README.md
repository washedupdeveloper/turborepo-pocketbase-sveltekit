# Turborepo Sveltekit project

A trial and error project about how to utilize a mono repo for a svelte(kit) codebase

## What's inside?

This turborepo uses [pnpm](https://pnpm.io) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `backend`: A [Pocketbase](https://pocketbase.io/) BaaS app, utilizing SQLite and Go.
- `web`: a [Sveltekit](https://kit.svelte.dev/) fullstack app
<!-- TODO Eventually add this, is avoided for now for simplicity sake - `ui`: a [Sveltekit](https://kit.svelte.dev/) library app, intended to be used as a UI library  -->
- `eslint-config`:
### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Tailwind css](https://tailwindcss.com/) & [Daisy UI](https://daisyui.com/) for CSS

### Build

To build all apps and packages, run the following command:

```
cd sveltekit-example
pnpm run build
```

### Develop

To develop all apps and packages, run the following command:

```
cd sveltekit-example
pnpm run dev
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
