const path = require("path");

module.exports = {
    mode: "development", // mode: 'production',
    entry: "./src/index.js", // точка входа
    output: {   // точка выхода
    path: path.resolve(__dirname, "build"),    
    filename: "main.js",     //название выходного файла
  },
     devServer: {   // натройки сервака
    static: {
      directory: path.join(__dirname, "build"),
    },
    compress: true,
    port: 9000,
  },
}