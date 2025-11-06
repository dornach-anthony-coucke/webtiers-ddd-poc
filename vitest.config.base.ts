import { defineConfig } from 'vitest/config';

export const baseConfig = defineConfig({
  test: {
    watch: false,
    passWithNoTests: true,
    include: ['src/**/*.(spec|test).ts'],
    coverage: {
      enabled: true,
      reporter: ['text', 'html', 'lcov'],
      provider: 'v8' as const,
      reportsDirectory: './coverage/'
    },    
    globals: true,
    environment: 'node',
  }
});