import js from '@eslint/js';
import prettierPlugin from 'eslint-plugin-prettier';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import astroPlugin from 'eslint-plugin-astro';
import typescriptParser from '@typescript-eslint/parser';
import astroParser from 'astro-eslint-parser';

export default [
	js.configs.recommended,
	{
		files: ['*.ts', '*.tsx', '*.astro'],
		ignores: ['node_modules', 'dist'],
		plugins: {
			'@typescript-eslint': typescriptPlugin,
			prettier: prettierPlugin,
			astro: astroPlugin,
		},
		languageOptions: {
			parser: typescriptParser,
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
			},
		},
		rules: {
			'prettier/prettier': 'warn',
			'@typescript-eslint/no-unused-vars': 'warn',
			'@typescript-eslint/explicit-module-boundary-types': 'off',
		},
		settings: {
			astro: {
				version: 'latest',
			},
		},
	},
	{
		files: ['*.astro'],
		languageOptions: {
			parser: astroParser,
		},
		rules: {},
	},
];
