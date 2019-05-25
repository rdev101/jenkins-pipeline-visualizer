const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin"); //installed via npm
const webpack = require("webpack"); //to access built-in plugins
var config = {
  module: {
    rules: [
      // {
      //   test: /\.html$/,
      //   loader: "file-loader?name=[name].[ext]"
      // },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          // plugins: ["@babel/plugin-transform-runtime"]
          plugins: ["@babel/plugin-proposal-class-properties"]
        },
        loader: "babel-loader",
        resolve: {
          // Allows us to include js and jsx files without specifying the extension
          extensions: [".jsx", ".js"]
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[name]_[local]_[hash:base64]",
              sourceMap: true,
              minimize: true
            }
          }
        ]
      }
    ]
  },
  entry: "./src/index.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app-bundle.js"
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html"
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin({
      multiStep: false
    })
  ]
};

module.exports = (env, argv) => {
  if (argv.mode === "development") {
    config.devtool = "source-map";
    config.mode = "development";
    config.devServer = {
      historyApiFallback: true,
      hot: true,
      inline: true,

      host: "localhost", // Defaults to `localhost`
      port: 3000, // Defaults to 8080
      proxy: {
        "/api/*": "http://localhost:8080/"
      }
    };
  }

  if (argv.mode === "production") {
    config.mode = "production";
  }

  return config;
};
