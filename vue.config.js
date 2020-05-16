const path = require('path');

let alias;
if (process.env.OCROMI_ROOT && process.env.OCROMI_ROOT !== 'ocromi') {
   alias = {
      ocromi: path.resolve(__dirname, '../ocromi'),
      vue: path.resolve(__dirname, '../ocromi/node_modules/vue'),
   };
}

module.exports = {
   configureWebpack: {
      resolve: {
         alias,
      },
   },
};
