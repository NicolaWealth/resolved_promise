import {defineConfig} from 'rolldown';
import {dts} from 'rolldown-plugin-dts';

const input = 'src/index.ts';

export default defineConfig([
  {
    input,
    output: [
      {file: 'dist/index.mjs', format: 'es', sourcemap: true},
      {file: 'dist/index.cjs', format: 'cjs', sourcemap: true},
      {file: 'dist/index.umd.js', format: 'umd', name: 'ResolvedPromise', sourcemap: true},
    ],
  },
  {
    input,
    plugins: [dts({emitDtsOnly: true})],
    output: {dir: 'dist/types'},
  },
]);
