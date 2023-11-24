### Vite

```sh
npm create vite@latest
```

https://vitejs.dev/guide/#scaffolding-your-first-vite-project

### MUI

```sh
npm install @mui/material @emotion/react @emotion/styled
```

https://mui.com/material-ui/getting-started/installation/#default-installation

### Icons

```sh
npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
```

### Install React Router

```sh
npm install react-router-dom localforage match-sorter sort-by
```

https://reactrouter.com/en/main/start/tutorial#setup

### Adding a router

https://reactrouter.com/en/main/start/tutorial#adding-a-router



### linter & formatter
- Eslint, Prettier: download eslint and prettier from vscode marketplace

- .vscode/settings.json-iin tohirgoo

```
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.organizeImports": true
  },
  "eslint.codeActionsOnSave.mode": "all",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "vscode.json-language-features"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[markdown]": {
    "editor.formatOnSave": false
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```
- .prettierrc -g uurchlunu
```
{
  "tabWidth": 2,
  "useTabs": false,
  "singleQuote": true,
  "printWidth": 80
}
```
- install dependencies
```
npm i --save-dev eslint prettier eslint-plugin-prettier@latest eslint-config-prettier
```

- eslint init
```
npm init @eslint/config
```
garsan eslintrc.json file-g ustgaad
.eslintrc.cjs file-g uurchlunu


```
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  ignorePatterns: [
    'dist',
    '.eslintrc.cjs',
    'package.json',
    'package-lock.json',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'prettier'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 2,
      },
    ],
    'prettier/prettier': 'error',
  },
};
```

- Github action(lint)

.github/workflows/check.yml
```
name: linter & formatter
on: [push]
jobs:
  eslint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Install modules
        run: npm i
      - name: Run ESLint
        run: npm run lint

```


i18n

```
➜  openai-test git:(feature/i18n) npm install i18next i18next-browser-languagedetector react-i18next
```


Task1.
Prettieriin ed nariig tailbarlana
"semi": true,
"singleQuote": true,
"trailingComma": "all",
"bracketSpacing": true

Task2.
React Lazy import tailbarlana.

Task3.
Page Title solih
