const path = require("node:path");
const HandlebarsPlugin = require("handlebars-webpack-plugin");

module.exports = (env) => ({
  mode: env.production ? "production" : "development",

  entry: {
    index: "./src/js/index.js",
    vendor: "./src/js/vendor.js",
  },
  output: {
    path: path.resolve(__dirname, "dist/assets/js"),
    filename: "[name].js",
  },

  module: env.production
    ? {
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
        ],
      }
    : {},

  plugins: [
    new HandlebarsPlugin({
      entry: path.resolve(__dirname, "src/views/*.hbs"),
      output: path.resolve(__dirname, "dist/[name].html"),
      partials: [path.resolve(__dirname, "src/views/partials/**/*.hbs")],
    }),
  ],

  watch: !env.production,

  optimization: {
    minimize: env.production,
  },
});
