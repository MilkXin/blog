#### eslint搭配prettier

- 安装插件
  + `npm install prettier eslint-config-prettier eslint-plugin-prettier -D`
- eslint 配置文件添加 prettier
  + `extends: ['standard', 'prettier']`
- prettier 修复命令
  + `"prettier-fix": "prettier --config .prettierrc --write \"./**/*.{html,js,jsx,css,less,scss,json,md}\""`
