/* eslint import/no-extraneous-dependencies: ['error', {'devDependencies': true}] */
import babel from 'rollup-plugin-babel';
import autoExternal from 'rollup-plugin-auto-external';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/index.js',
  plugins: [
    autoExternal(),
    nodeResolve({mainFields: ['module']}),
    babel({
      babelrc: false,
      exclude: ['./node_modules/**'],
      presets: [
        ['@travi', {targets: {node: 10, browser: true}, react: true, modules: false}],
        '@emotion/babel-preset-css-prop'
      ],
      plugins: [['transform-react-remove-prop-types', {mode: 'wrap'}]]
    })
  ],
  output: [
    {file: 'lib/index.cjs.js', format: 'cjs', sourcemap: true},
    {file: 'lib/index.es.js', format: 'es', sourcemap: true}
  ]
};
