import pluginAstro from 'eslint-plugin-astro';
import tsParser from '@typescript-eslint/parser';

export default [
	// Ignore build artifacts & external folders
	{ ignores: ['dist/**', 'node_modules/**', '.astro/**', 'sanity/**', 'src/components/content/**', 'src/pages/about/**', 'src/pages/stays/**'] },

	// Astro recommended rules (flat config)
	...pluginAstro.configs['flat/recommended'],

	// TypeScript files
	{
		files: ['**/*.ts', '**/*.tsx'],
		languageOptions: {
			parser: tsParser,
			ecmaVersion: 2022,
			sourceType: 'module',
		},
		rules: {
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/ban-ts-comment': 'off',
		},
	},

	// Astro templates specific tweaks
	{
		files: ['**/*.astro'],
		rules: {
			'astro/semi': 'off',
		},
	},
];