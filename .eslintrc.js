module.exports = {
    extends: ['scratch', 'scratch/node', 'scratch/es6'],
    parser: '@babel/eslint-parser',
    parserOptions: {
        requireConfigFile: false,
        ecmaVersion: 2020,
        sourceType: 'module',
        allowImportExportEverywhere: true
    },
    rules: {
        'no-console': 'off',
    }
};
