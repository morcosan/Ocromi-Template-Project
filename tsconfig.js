/**
 * This file will generate tsconfig.json
 * It must be executed as a script, since tsconfig.js is not supported by default
 */

require('dotenv-flow').config();
const fs = require('fs');


const tsconfigJSON = {
   compilerOptions: {
      allowJs: true,
      sourceMap: true,
      lib: [
         'es6',
         'dom',
         'es2017',
      ],
      target: 'esnext',
      strict: true,
      experimentalDecorators: true,
      module: 'esnext',
      moduleResolution: 'node',
      baseUrl: '.',
      types: [
         'node',
         'jest',
      ],
      allowSyntheticDefaultImports: true,
      esModuleInterop: true,
      resolveJsonModule: true,
      paths: {
         ocromi: [
            process.env.OCROMI_ROOT,
         ],
      },
   },
   include: [
      'src/**/*',
   ],
   exclude: [
      'docs',
      '.jest',
   ],
};

fs.writeFileSync('tsconfig.json', JSON.stringify(tsconfigJSON, null, '   '));
