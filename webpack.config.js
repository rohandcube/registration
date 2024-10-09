const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    setupMiddlewares: (middlewares, devServer) => {
      if (!devServer) {
        throw new Error('webpack-dev-server is not defined');
      }

      // Equivalent of onBeforeSetupMiddleware
      devServer.app.use((req, res, next) => {
        // Your middleware logic here
        next();
      });

      // Equivalent of onAfterSetupMiddleware
      devServer.app.use((req, res, next) => {
        // Your middleware logic here
        next();
      });

      return middlewares;
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
