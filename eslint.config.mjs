import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import stylistic from '@stylistic/eslint-plugin'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    ignores: ["**/*.config.{js,ts}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@stylistic': stylistic
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      "@typescript-eslint/no-empty-object-type": "off",
      "react-refresh/only-export-components": 'off',
      "react-hooks/exhaustive-deps":'off',
      "no-unreachable": 'error',
      "arrow-body-style": 'error',
      "camelcase": 'error',
      "eqeqeq":'error',
      "comma-dangle": 'error',
      "semi-spacing": 'error',
      "space-before-function-paren": 'error',
      "keyword-spacing":'error',
      "no-multi-spaces":'error',
      '@stylistic/indent': ['error', 2],
    },
  },
)
