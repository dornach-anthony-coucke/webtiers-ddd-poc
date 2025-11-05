import { defineConfig } from 'vitest/config';

export const baseConfig = defineConfig({
  test: {
    watch: false,
    passWithNoTests: true,
    include: ['src/**/*.(spec|test).ts'],
    reporters: ['default'],
    coverage: {
      enabled: false,
      reporter: ['text', 'lcov']
    }
  }
});