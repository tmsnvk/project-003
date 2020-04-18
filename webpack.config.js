const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    index: "./src/index.js",
    pricing: "./src/pricing.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: __dirname + "/dist",
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3003
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/html/index.html",
      filename: "index.html",
      inject: 'body',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      filename: "page_pricing.html",
      template: "./src/html/page_pricing.html",
      inject: 'body',
      chunks: ['pricing']
    }),
    new HtmlWebpackPlugin({
      filename: "page_search.html",
      template: "./src/html/page_search.html"
    }),
    new HtmlWebpackPlugin({
      filename: "page_about.html",
      template: "./src/html/page_about.html"
    }),
    new HtmlWebpackPlugin({
      filename: "page_contact.html",
      template: "./src/html/page_contact.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
     })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: [/.css$|.scss$/],
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]"
            }
          }
        ],
      },
      {
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]"
            }
          }
        ],
      },
    ]
  }
};