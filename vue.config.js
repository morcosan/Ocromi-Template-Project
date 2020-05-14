const path = require('path');


module.exports = {
   configureWebpack: {
      resolve: {
         alias: {
            ocromi: path.resolve(__dirname, '../ocromi'),
            vue: path.resolve(__dirname, '../ocromi/node_modules/vue'),
         },
      },
   },
};
