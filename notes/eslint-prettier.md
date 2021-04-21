#### eslint搭配prettier

- 安装依赖
  + `npm install prettier eslint-config-prettier eslint-plugin-prettier -D`
  + 相关依赖
    ```js
    {
      "scripts": {
        "lint-staged": "lint-staged",
        "lint-staged:js": "eslint --ext .js,.jsx"
      },
      "husky": {
        "hooks": {
          "pre-commit": "npm run lint-staged"
        }
      },
      "lint-staged": {
        "**/*.{js,jsx,ts,json,html,css,less,scss,md}": [
          "prettier --write",
          "git add"
        ],
        "**/*.{js,jsx}": "npm run lint-staged:js"
      },
      "devDependencies": {
        "eslint": "~7.13.0",
        "eslint-config-prettier": "~6.15.0",
        "eslint-config-standard": "~16.0.1",
        "eslint-loader": "~4.0.2",
        "eslint-plugin-import": "~2.22.1",
        "eslint-plugin-node": "~11.1.0",
        "eslint-plugin-prettier": "~3.1.4",
        "eslint-plugin-promise": "~4.2.1",
        "eslint-plugin-react": "~7.21.5",
        "eslint-plugin-react-hooks": "~4.2.0",
        "prettier": "^2.1.2",
        "husky": "^4.3.0",
        "lint-staged": "^10.5.2",
      }
    }
    ```
  
- eslint 配置文件添加 prettier
  + 简单配置：`extends: ['standard', 'prettier']`
  + .eslintrc.js相关配置
    ```js
    module.exports = {
      root: true,
      env: {
        browser: true,
        es6: true,
        node: true,
      },
      extends: ['standard', 'plugin:react/recommended', 'plugin:react-hooks/recommended', 'plugin:prettier/recommended'],
      parser: 'babel-eslint',
      plugins: ['react', 'react-hooks'],
      globals: {
        SERVER: true,
      },
      rules: {
        'no-unused-vars': 'off',
        'react/prop-types': 0,
        'react/jsx-no-target-blank': 0,
        'react/no-deprecated': 0,
      },
      settings: {
        react: {
          version: 'detect',
        },
      },
    };
    ```
  
- prettier 格式化 npm 修复命令
  + `npx prettier --write .`
  + `"prettier-fix": "prettier --config .prettierrc --write \"./**/*.{html,js,jsx,css,less,scss,json,md}\""`
  + .prettierrc.js文件
    ```js
    module.exports = {
      printWidth: 120,
      tabWidth: 2,
      useTabs: false,
      semi: true,
      singleQuote: true,
      jsxSingleQuote: false,
      endOfLine: 'auto',
    };
    ```
- ignore相关配置
  + .eslintignore
    ```
    /dist/
    /examples/
    /node_modules/
    /notes/
    ```
  + .prettierignore
    ```
    dist/
    src/font/
    ```
- vscode相关配置
  ```js
  {
    "editor.tabSize": 2,
    "editor.formatOnSave": true,
    "editor.formatOnPaste": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "cSpell.words": ["noreferrer", "retdata", "retmsg"],
    "files.eol": "\n"
  }
  ```
    
