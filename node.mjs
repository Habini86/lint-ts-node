import globals from 'globals'
import config from './base.mjs'
import vitest from '@vitest/eslint-plugin'

export default [
  ...config,
  {
    rules: {
      camelcase: 'off',
    },
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  {
    ignores: ['dist'],
  },
  {
    files: ['**/*.spec.{ts,tsx}'],
    ...vitest.configs.recommended,
    languageOptions: {
      globals: {
        ...vitest.environments.env.globals,
      },
    },
  },
]
