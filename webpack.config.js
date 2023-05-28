const path = require('path');

module.exports = {
  entry: 'main/script.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
