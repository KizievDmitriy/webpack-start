const path = require('path');

module.exports = {
    entry: './src/index.js', // точка входа
    output: {   // точка выхода
    path: path.resolve(__dirname, 'build'),    
    filename: 'main.js',     //название выходного файла
  },
}