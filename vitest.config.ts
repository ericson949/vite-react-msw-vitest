import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        globals: true,
        environment: "jsdom",
        root: __dirname,
        css: false,
        setupFiles: ['./vitest.setup.ts'],
    },
})