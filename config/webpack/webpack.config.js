const path = require('path')
  CleanWebpackPlugin = require("clean-webpack-plugin"),
  CopyWebpackPlugin = require("copy-webpack-plugin");

const OUTPUT_FOLDER = path.resolve(__dirname, '../../extension');

module.exports = {
  entry: {
    background: path.resolve(__dirname, '../../src/background.ts'),
    content: path.resolve(__dirname, '../../src/content.ts'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: '[name].bundle.js',
    path: OUTPUT_FOLDER
  },
  plugins: [
    new CleanWebpackPlugin(
      [OUTPUT_FOLDER],
      { root: path.resolve(__dirname, '../../') }
    ),
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, '../../src/manifest.json'),
      transform: function (content, path) {
        // generates the manifest file using the package.json informations
        return Buffer.from(JSON.stringify({
          description: process.env.npm_package_description,
          version: process.env.npm_package_version,
          ...JSON.parse(content.toString())
        }))
      }
    }]),
    new CopyWebpackPlugin([{ from: path.resolve(__dirname, '../../src/icons') }]),
  ]
};
