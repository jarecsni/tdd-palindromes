/** @type {import('eslint').Linter.Config } */
module.exports = {
    extends: ['eslint:recommended', 'prettier'],
    env: {
        es2021: true,
        node: true,
    },
    overrides: [
        {
            files: ['*.test.js'],
            plugins: ['jest'],
            extends: ['plugin:jest/recommended'],
        },
    ]
}