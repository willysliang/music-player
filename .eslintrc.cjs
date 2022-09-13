// "off" or 0 - 关闭这个规则校验
// "warn" or 1 - 开启这个规则校验，但只是提醒，不会退出
// "error" or 2 - 开启这个规则校验，并退出

module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
        'es6': true,
    },
    parserOptions: {
        ecmaVersion: 2020
    },
    "extends": [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'prettier',
        // 'plugin:vue/recommended',
        // 'plugin:prettier/recommended',
        'plugin:vue/vue3-essential',
        '@vue/standard',
        '@vue/typescript/recommended'
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "globals": {
        document: false,
        navigator: false,
        window: false
    },
    "rules": {
        "eslint-disable-next-line": 0,
        "eslint-disable": 0,
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'vue/multi-word-component-names': 'off',
        "comma-dangle": ["off", "always"],
        'quotes': 'off',
        'semi': 'off',
    }
}
