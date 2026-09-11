import {defineConfig} from 'vite';
import {resolve} from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    dts({
      outDirs: 'dist/types',
      include: ['src/**/*.ts'],
      exclude: ['src/**/*.test.ts'],
    }),
  ],
  build: {
    lib: {
      entry: resolve(import.meta.dirname, 'src/index.ts'),
      name: 'ResolvedPromise',
      fileName: (format) => `index.${format === 'es' ? 'mjs' : format === 'cjs' ? 'cjs' : 'umd.js'}`,
      formats: ['es', 'cjs', 'umd'],
    },
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true,
  },
});
