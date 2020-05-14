const path = require('path');

module.exports = {
   configureWebpack: {
      resolve: {
         alias: {
            ocromi2: path.resolve(__dirname, '../ocromi/src/main.ts'),
         },
      },
   },
};
