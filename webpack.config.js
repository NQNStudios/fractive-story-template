path = require('path');

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js"
  },
  resolveLoader: {
    modules: [path.resolve(__dirname, 'node_modules'), path.resolve(__dirname, 'loaders')]
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.ts', '.tsx', '.js', '.md']
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
      { test: /\.md$/, loader: 'fractive-markdown-loader!html-loader' },
      { test: /\.html$/, loader: 'html-loader' }
    ]
  }
};
