# eslint config

A small repository to save [eslint](https://eslint.org/) rules for different project types. Inspired by [@antfu/eslint-config](https://github.com/antfu/eslint-config)
* [base](./base.js): javascript
  * uses [eslint-config-standard](https://github.com/standard/eslint-config-standard), [eslint recommended](https://github.com/eslint/eslint/blob/main/conf/eslint-recommended.js), [eslint-plugin-import/recommended](https://github.com/import-js/eslint-plugin-import), [eslint-plugin-eslint-comments/recommended](https://github.com/mysticatea/eslint-plugin-eslint-comments), [eslint-plugin-jsonc/recommended-with-jsonc](https://github.com/ota-meshi/eslint-plugin-jsonc) and [eslint-plugin-unicorn/recommended](https://github.com/sindresorhus/eslint-plugin-unicorn)
  * handles .json files individually
  * sorts package.json
* [typescript](./typescript.js): like base, but for typescript files
  * uses [eslint-plugin-import/typescript](https://github.com/import-js/eslint-plugin-import), [@typescript-eslint/eslint-plugin/recommended](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin)
* [vue](./vue.js): like typescript, but for vue files
  * uses [eslint-plugin-vue/vue3-recommended](https://github.com/vuejs/eslint-plugin-vue)

## Usage
add an eslint config (e.g. .eslintrc.js) to your project, extending from the type that you need.
```javascript
module.exports = {
  env: {
    browser: false,
    node: true
  },
  extends: [
    '@ameinhardt/eslint-config/typescript'
  ]
};
```
