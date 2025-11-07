import js from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import importPlugin from 'eslint-plugin-import'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  {
    ignores: [
      '**/node_modules/**/*',
      '**/dist/**/*',
      '**/build/**/*',
      '**/.next/**/*',
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    plugins: {
      import: importPlugin,
      '@stylistic': stylistic,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'no-console': 'error',
      'object-shorthand': 'error',
      '@stylistic/quotes': [
        'error',
        'single',
        {
          avoidEscape: true,
          allowTemplateLiterals: 'never',
        },
      ],
      'no-async-promise-executor': 'off',
    },
  },
)
