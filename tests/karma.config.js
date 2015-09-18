
module.exports = function (config) {
  config.set({
    browsers: [ 'Firefox' ],

    files: [
      'index.js'
    ],

    frameworks: [ 'chai', 'mocha' ],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-chai',
      'karma-mocha',
      'karma-webpack',
    ],

    preprocessors: {
      'index.js': [
        'webpack'
      ]
    },
    reporters: [ 'dots' ],
    singleRun: true,

    webpack: {
      module: {
        loaders: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel'
          }
        ],
      },
      resolve: {
        extensions: ['', '.js', '.jsx']
      }
    },

    webpackMiddleware: {
      noInfo: true,
    }

  })
}
