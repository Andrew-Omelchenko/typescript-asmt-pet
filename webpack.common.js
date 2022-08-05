const path = require('path');

module.exports = {
  entry: {
    main: ['./src/loader.ts'],
  },
  output: {
    filename: "loader.js",
    path: path.resolve(__dirname, './dist'),
    clean: true,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
      {
        test: /environment\.ts?$/,
        loader: 'file-replace-loader',
        options: {
          condition: process.env.NODE_ENV === 'production',
          replacement: path.resolve('./src/environments/environment.prod.ts'),
          async: true,
        }
      },
      {
        test: /environment\.ts?$/,
        loader: 'file-replace-loader',
        options: {
          condition: process.env.NODE_ENV === 'staging',
          replacement: path.resolve('./src/environments/environment.staging.ts'),
          async: true,
        }
      },
    ]
  }
};
