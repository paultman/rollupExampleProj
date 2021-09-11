import copy from 'rollup-plugin-copy';
import serve from 'rollup-plugin-serve';
import {terser} from 'rollup-plugin-terser';

export default {
  input: 'src/js/index.js',
  output: { file: 'dist/js/index.min.js', format: 'iife', sourcemap: 'inline', plugins: [terser()] },
  plugins: [
    copy({
      targets: [{ src: 'src/index.html', dest: 'dist/' }],
    }),
    serve('dist'),
  ],
};
