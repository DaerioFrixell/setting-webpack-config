const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.ts", // Путь к вашему исходному файлу
  output: {
    filename: "bundle.js", // Имя итогового файла
    path: path.resolve(__dirname, "dist"), // Папка для сборки
  },
  mode: "development", // Режим разработки
  resolve: {
    extensions: [".ts", ".js"], // Обработка расширений .ts и .js
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // Применяем к файлам с расширением .ts
        use: "ts-loader", // Используем ts-loader для компиляции TypeScript
        exclude: /node_modules/, // Исключаем папку node_modules
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"), // Папка с файлом bundle.js
    },
    compress: true, // Включаем сжатие
    port: 9000, // Порт, на котором будет доступен сервер
    open: true, // Открывает браузер автоматически
    hot: true, // Включаем горячую перезагрузку
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Указываем путь к исходному HTML файлу
      filename: "index.html", // Имя итогового HTML файла в папке dist
    }),
  ],
};
