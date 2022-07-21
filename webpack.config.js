const path = require("path");
const package = require("./package.json");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const FILENAME = package.name;

module.exports = {
  entry: "./src/main.js",

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: FILENAME + ".[hash].js",
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
  ],
};
