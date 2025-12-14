# node-template

A template for TypeScript projects with Node.js.

## Run the project

Compile the project like so:

```
npx tsc
```

Run the project like so:

```
node dist/app.js
```

```
npx tsc && node dist/app.js
```

### For development:

Skip the build step and run like so:

```
npm start
```

This runs the "start" script defined in packages.json.

## Linting:

Run ESLint like so:

```
npx eslint .
```

## Formatting:

Format all files with Prettier:

```
npx prettier . --write
```

Format a particular file:

```
npx prettier --write src/app.ts
```

Check formatting without fixing (good for CI):

```
npx prettier . --check
```
