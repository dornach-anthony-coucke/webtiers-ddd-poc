import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import nxPlugin from '@nx/eslint-plugin';

export default tseslint.config(
  {
    ignores: ['dist', 'coverage', 'node_modules', '**/vitest.config.ts'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      globals: { ...globals.node, ...globals.es2024 }
    },
    plugins: {
      '@nx': nxPlugin
    },
    rules: {
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: false,
          allowCircularSelfDependency: false,
          depConstraints: [
            { sourceTag: 'layer:domain', onlyDependOnLibsWithTags: ['layer:domain', 'context:shared'] },
            { sourceTag: 'layer:application', onlyDependOnLibsWithTags: ['layer:application', 'layer:domain', 'context:shared'] },
            { sourceTag: 'context:shared', onlyDependOnLibsWithTags: ['context:shared', 'layer:domain'] }
          ]
        }
      ]
    }
  }
);