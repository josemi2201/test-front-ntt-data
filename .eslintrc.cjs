module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
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
    }
}
