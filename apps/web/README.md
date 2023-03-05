# Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Testing

### Unit tests

Unit tests will be utilizing `Vitest`, associated with their component file.

### End To End tests

E2E tests will be utilizing `Playwright`, and will be located at the `tests` directory.

To see how to run these tests, check out `package.json`

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Environment variables.

Defines environment variables for the app to use. Check out [Sveltekit Environment Variables](https://kit.svelte.dev/docs/configuration#env) to see how to go about setting private and public variables for use throughout the app.

To get started: Copy over the example file as `cp .env.example .env` and fill in the information. By edefault [Pocketbase](https://pocketbase.io/) will be running at `localhost:8090`
