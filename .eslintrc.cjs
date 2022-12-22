module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:all",
        "plugin:react/all"
    ],
    "overrides": [
    ],
    "parserOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module",
    },
    "settings": {
      "react": {
        "version": 'detect'
      },
      'import/resolver': {
        "node": {
          "paths": ['src'],
          "extensions": ['.js', '.jsx']
        }
      }
    },
    "plugins": [
      "react"
    ],
    "rules": {
      "no-debugger": "warn",
      "no-unused-vars": "warn",
      "sort-keys": "warn",
      "indent": ["error", 2],
      "react/jsx-indent": ["error", 2],
      "react/jsx-indent-props": ["error", 2],
      "max-lines-per-function": ["error", 80],
      "max-statements": ["error", 12],
      "max-lines-per-function": ["error", 100],
      "object-curly-spacing": "off",
      "linebreak-style": "off",
      "quote-props": "off",
      "arrow-body-style": "off",
      "sort-imports": "off",
      "no-use-before-define": "off",
      "one-var": "off",
      "array-element-newline": "off",
      "no-negated-condition": "off",
      "function-paren-newline": "off",
      "no-ternary": "off",
      "function-call-argument-newline": "off",
      "no-extra-parens": "off",
      "require-atomic-updates": "off",
      "react/function-component-definition": "off",
      "func-style": "off",
      "react/jsx-newline": "off",
      "react\jsx-no-leaked-render": "off",
      "react/jsx-no-bind" : "off",
      "react/jsx-props-no-spreading": "off",
      "react/jsx-no-leaked-render": "off",
      "react/forbid-prop-types": "off",
      "react/jsx-max-depth": "off",
      "react/forbid-component-props": "off",
      "react/jsx-no-constructed-context-values": "off",
      "react/no-array-index-key": "off",
    }
}
