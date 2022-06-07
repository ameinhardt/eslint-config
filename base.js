module.exports = {
  root: true,
  extends: [
    'standard',
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:jsonc/recommended-with-jsonc',
    'plugin:unicorn/recommended'
  ],
  parserOptions: {
    ecmaVersion: '2021'
  },
  env: {
    es2021: true
  },
  ignorePatterns: ['dist', 'node_modules'],
  reportUnusedDisableDirectives: true,
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.jsx', '.mjs'] }
    }
  },
  plugins: ['unicorn'],
  rules: {
    semi: ['error', 'always'],
    eqeqeq: ['error', 'always', {
      null: 'ignore'
    }],
    'space-before-function-paren': ['error', {
      asyncArrow: 'always',
      anonymous: 'never',
      named: 'never'
    }],
    'import/named': 'off',
    'no-console': 'error', // [process.env.NODE_ENV === 'production' ? 'error' : 'off'],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc' },
        pathGroups: [
          {
            pattern: '@/**',
            group: 'parent'
          }
        ],
        'newlines-between': 'never',
        pathGroupsExcludedImportTypes: []
      }
    ],
    'max-lines': ['error', 300],
    camelcase: [
      'error',
      {
        properties: 'always'
      }
    ],
    'consistent-return': ['off'],
    'default-case': ['error'],
    // temporary because of https://github.com/babel/babel-eslint/issues/799 :
    'template-curly-spacing': ['off'],
    'no-multi-spaces': 'off',
    'no-shadow': ['warn'],
    'no-unused-vars': ['warn'],
    'no-unused-expressions': 'off',
    'no-use-before-define': [
      'error',
      {
        functions: true,
        classes: true,
        variables: true
      }
    ],
    'one-var': [
      'error',
      {
        var: 'always',
        let: 'always',
        const: 'consecutive',
        separateRequires: true
      }
    ],
    'vars-on-top': 'error',
    'prefer-template': 'warn',
    'promise/param-names': 'warn',
    'promise/always-return': 'warn',
    'promise/catch-or-return': 'warn',
    'import/no-extraneous-dependencies': 'error',
    'unicorn/filename-case': 'off',
    'unicorn/no-null': 'off'
  },
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
      'jsonc/key-spacing': ['error', { beforeColon: false, afterColon: true }],
      'jsonc/no-octal-escape': 'error',
      'jsonc/object-curly-newline': ['error', { multiline: true, consistent: true }],
      'jsonc/object-curly-spacing': ['error', 'always'],
      'jsonc/object-property-newline': ['error', { allowMultiplePropertiesPerLine: true }]
    }
  }, {
    files: ['package.json'],
    parser: 'jsonc-eslint-parser',
    extends: ['plugin:jsonc/recommended-with-json'],
    rules: {
      'jsonc/sort-keys': [
        'error',
        {
          pathPattern: '^$',
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
          ]
        },
        {
          pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
          order: { type: 'asc' }
        },
        {
          pathPattern: '^exports.*$',
          order: [
            'types',
            'require',
            'import'
          ]
        }
      ]
    }
  }]
};
