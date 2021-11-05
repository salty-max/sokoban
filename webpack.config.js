const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  entry: "./src/Game.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        include: path.resolve(__dirname, "assets"),
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
        ],
      },
      {
        test: /\.ts$/,
        include: path.resolve(__dirname, "src"),
        loader: "ts-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: require.resolve("Phaser"),
        loader: "expose-loader",
        options: { exposes: { globalName: "Phaser", override: true } },
      },
    ],
  },
  plugins: [].concat(
    devMode ? [] : [new CleanWebpackPlugin(), new MiniCssExtractPlugin()],
  ),
  devServer: {
    static: path.resolve(__dirname, "./"),
    host: "localhost",
    hot: true,
    port: 1234,
    open: false,
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};
