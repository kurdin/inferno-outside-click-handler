var webpack = require('webpack');

module.exports = {

  output: {
    library: 'inferno-outside-click-handler',
    libraryTarget: 'umd',
  }, 

  externals: [
    {
      inferno: 'inferno',
      'inferno-component': 'inferno-component',
      'consolidated-events': 'consolidated-events'
    }
  ],

  module: {
    rules: [
    {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-2'],
          plugins: [
          [ 'inferno', { imports: true }],
          'syntax-jsx'
          ]
        }
      }
    ]
  },

  node: {
    Buffer: false
  }

}
