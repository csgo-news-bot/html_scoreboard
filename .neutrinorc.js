const web = require('@neutrinojs/web');

module.exports = {
  options: {
    root: __dirname,
  },
  use: [
    web({
      publicPath: '/',
      html: {
        title: 'html'
      },
      style:{
        // Override the default file extension of `.css` if needed
        test: /\.(css|sass|scss)$/,
        modulesTest: /\.module\.(css|sass|scss)$/,
        loaders: [
          // Define loaders as objects. Note: loaders must be specified in reverse order.
          // ie: for the loaders below the actual execution order would be:
          // input file -> sass-loader -> postcss-loader -> css-loader -> style-loader/mini-css-extract-plugin
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
            useId: 'sass'
          },
        ],
      }
    }),
    (neutrino) => {
      // the original value of filename is "[name].[chunkhash].js"
      neutrino.config.output.filename('[name].js');
    }
  ],
};
