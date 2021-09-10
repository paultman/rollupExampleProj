import copy from 'rollup-plugin-copy';
import serve from 'rollup-plugin-serve';

export default {
  input: 'src/js/index.js',
  output: { file: 'dist/js/index.min.js', format: 'iife', sourcemap: 'inline' },
  plugins: [
    copy({
      targets: [{ src: 'src/index.html', dest: 'dist/' }],
    }),
    serve('dist'),
  ],
};
