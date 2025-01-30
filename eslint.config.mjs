import globals from 'globals';
import pluginJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import { expect, jest, test } from '@jest/globals';

/** @type {import('eslint').Linter.Config[]} */
export default [
    { languageOptions: { globals: { ...globals.node, ...globals.browser } } },
    pluginJs.configs.recommended,
    eslintConfigPrettier,
    { expect, jest, test },
];
