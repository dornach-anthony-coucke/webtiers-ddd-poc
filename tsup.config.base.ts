import { defineConfig } from 'tsup';

export const makeTsupConfig = (entry: string | string[] = 'src/index.ts') =>
  defineConfig({
    entry: Array.isArray(entry) ? entry : [entry],
    dts: true,
    format: ['esm', 'cjs'],
    outDir: 'dist',
    target: 'node18',
    clean: true,
    sourcemap: false
  });