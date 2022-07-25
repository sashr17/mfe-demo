const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 1000,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "dashboard",
      remotes: {
        app1: "app1@http://localhost:1001/remoteEntry.js",
        app2: "app2@http://localhost:1002/remoteEntry.js",
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
