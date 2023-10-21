module.exports = {
  env: {
    es2021: true
  },
  extends: [
    'standard',
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:jsonc/recommended-with-jsonc',
    'plugin:unicorn/recommended'
  ],
  ignorePatterns: ['dist', 'node_modules'],
  overrides: [{
    files: ['.eslintrc.js'],
    rules: {
      'unicorn/prefer-module': 'off'
    }
  }, {
    files: ['*.json', '*.json5'],
    parser: 'jsonc-eslint-parser',
    rules: {
      'jsonc/array-bracket-spacing': ['error', 'never'],
      'jsonc/comma-dangle': ['error', 'never'],
      'jsonc/comma-style': ['error', 'last'],
      'jsonc/indent': ['error', 2],
      'jsonc/key-spacing': ['error', { afterColon: true, beforeColon: false }],
      'jsonc/no-octal-escape': 'error',
      'jsonc/object-curly-newline': ['error', { consistent: true, multiline: true }],
      'jsonc/object-curly-spacing': ['error', 'always'],
      'jsonc/object-property-newline': ['error', { allowMultiplePropertiesPerLine: true }]
    }
  }, {
    extends: ['plugin:jsonc/recommended-with-json'],
    files: ['package.json'],
    parser: 'jsonc-eslint-parser',
    rules: {
      'jsonc/sort-keys': [
        'error',
        {
          order: [
            'publisher',
            'name',
            'displayName',
            'type',
            'version',
            'private',
            'packageManager',
            'description',
            'author',
            'license',
            'funding',
            'homepage',
            'repository',
            'bugs',
            'keywords',
            'categories',
            'sideEffects',
            'exports',
            'main',
            'module',
            'unpkg',
            'jsdelivr',
            'types',
            'typesVersions',
            'bin',
            'icon',
            'files',
            'engines',
            'activationEvents',
            'contributes',
            'scripts',
            'peerDependencies',
            'peerDependenciesMeta',
            'dependencies',
            'optionalDependencies',
            'devDependencies',
            'pnpm',
            'overrides',
            'resolutions',
            'husky',
            'simple-git-hooks',
            'lint-staged',
            'eslintConfig'
          ],
          pathPattern: '^$'
        },
        {
          order: { type: 'asc' },
          pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$'
        },
        {
          order: [
            'types',
            'import',
            'require',
            'default'
          ],
          pathPattern: '^exports.*$'
        }
      ]
    }
  }],
  parserOptions: {
    ecmaVersion: '2021'
  },
  plugins: ['unicorn', 'sort-keys'],
  reportUnusedDisableDirectives: true,
  root: true,
  rules: {
    camelcase: [
      'error',
      {
        properties: 'always'
      }
    ],
    'consistent-return': ['off'],
    'default-case': ['error'],
    eqeqeq: ['error', 'always', {
      null: 'ignore'
    }],
    'import/named': 'off',
    'import/no-extraneous-dependencies': 'error',
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc' },
        'newlines-between': 'never',
        pathGroups: [
          {
            group: 'parent',
            pattern: '@/**'
          }
        ],
        pathGroupsExcludedImportTypes: []
      }
    ],
    'max-lines': ['error', 300],
    'no-console': 'error', // [process.env.NODE_ENV === 'production' ? 'error' : 'off'],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-multi-spaces': 'off',
    'no-shadow': ['warn'],
    'no-unused-expressions': 'off',
    'no-unused-vars': ['warn'],
    'no-use-before-define': [
      'error',
      {
        classes: true,
        functions: true,
        variables: true
      }
    ],
    'one-var': [
      'error',
      {
        const: 'consecutive',
        let: 'always',
        separateRequires: true,
        var: 'always'
      }
    ],
    'prefer-template': 'warn',
    'promise/always-return': 'warn',
    'promise/catch-or-return': 'warn',
    'promise/param-names': 'warn',
    semi: ['error', 'always'],
    'sort-keys': 0,
    'sort-keys/sort-keys-fix': 'error',
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      asyncArrow: 'always',
      named: 'never'
    }],
    // temporary because of https://github.com/babel/babel-eslint/issues/799 :
    'template-curly-spacing': ['off'],
    'unicorn/filename-case': 'off',
    'unicorn/no-null': 'off',
    'vars-on-top': 'error'
  },
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.jsx', '.mjs'] }
    }
  }
};
