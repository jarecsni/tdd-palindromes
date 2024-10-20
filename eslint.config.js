const js = require('@eslint/js');
const globals = require('globals');
const jestPlugin = require('eslint-plugin-jest');

module.exports = [
    js.configs.recommended,
    {
        files: ["**/*.test.js", "**/*.spec.js"],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.node,
                it: "readonly",
                expect: "readonly",
                describe: "readonly",
            }
        },
        plugins: {
            jest: jestPlugin
        },
    }
];