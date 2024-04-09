const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: process.env.NODE_ENV,
  entry: { index: "./client/index.js" },
  output: {
    filename: "main.bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  watch: true,
  target: "web",
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({ title: "development", template: "./index.html" }),
    new Dotenv()
  ],
  devServer: {
    historyApiFallback: true,
    open: true,
    hot: true,
    liveReload: true,
    static: {
      directory: path.resolve(__dirname),
      publicPath: "/",
    },
    proxy: [
      {
        context: ["/"],
        target: "http://localhost:3000",
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [require("tailwindcss"), require("autoprefixer")],
              },
            },
          },
        ],
      },
    ],
  },
};
