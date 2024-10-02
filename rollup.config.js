import * as path from 'node:path';
import json from '@rollup/plugin-json';
import typescript from '@rollup/plugin-typescript';
import pkg from './package.json';

const banner = `
/**
 * @file ${pkg.description}
 * @module ${pkg.name}
 * @version ${pkg.version}
 * @author ${pkg.author}
 * @license ${pkg.license}
 * @copyright 2017-${new Date().getFullYear()} ${pkg.author}
 * @see {@link ${pkg.repository.url}}
 */
`;

export default [
  {
    input: './src/index.ts',
    output: {
      dir: path.dirname(pkg.main),
      format: 'cjs',
      banner: banner.trim(),
      sourcemap: false,
      preserveModules: true,
      exports: 'auto',
    },
    plugins: [json(), typescript({ tsconfig: './tsconfig.module.json' })],
  },
  {
    input: './src/index.ts',
    output: {
      dir: path.dirname(pkg.module),
      format: 'es',
      banner: banner.trim(),
      sourcemap: false,
      preserveModules: true,
    },
    plugins: [
      json(),
      typescript({
        tsconfig: './tsconfig.module.json',
        declaration: true,
        declarationMap: false,
        declarationDir: path.dirname(pkg.module),
      }),
    ],
  },
];
