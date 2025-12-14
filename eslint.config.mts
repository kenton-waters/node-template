// @ts-check

import eslint from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import path from 'path';
import tseslint from 'typescript-eslint';

export default defineConfig(
  // Ignore TypeScript compilation output:
  globalIgnores(['dist/']),
  
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
  },
  {
    // Don't do type-aware linting on this file (eslint.config.mts). That causes issues:
    files: [path.basename(__filename)],
    extends: [tseslint.configs.disableTypeChecked],
  },
);