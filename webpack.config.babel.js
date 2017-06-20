// Sourcemap babel-loader scss loader uglifyjs hmr hml
import webpack from 'webpack';
import path from 'path';
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const SplitByPathPlugin = require('webpack-split-by-path');
const autoprefixer = require('autoprefixer');

require.extensions['.scss'] = () => { return; }; require.extensions['.css'] = () => { return; };

let extractSCSS = new ExtractTextPlugin({
  filename:"style.scss",
  allChunks:true
})
let extractCSS = new ExtractTextPlugin('../css/style.css');
//moving css from /static/css/style.css to /static/ fixed stylesheet link???
const uglifyJs = new UglifyJSPlugin({
  sourceMap: true
});

const config = {
  entry: {
    js: './src/app-client.js',
  },
  output: {
    path: path.join(__dirname, 'src', 'static', 'js'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options:'cacheDirectory=.babel_cache',
        },
      },
      {
        test:/(\.scss$|.css$)/,
        include: path.join(__dirname, 'src','sass'),
        exclude: /node_modules/,
        //postcss loader goes before sass-loader
        loader: extractCSS.extract('css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass-loader?sourceMap=true')
      },
    ],
  },
  plugins:[
    extractCSS,
    extractSCSS,
    new webpack.DefinePlugin({
      'process.env.NODE_ENV' : JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings:false},
      mangle:true,
      sourcemap:true,
      beautify:false,
      dead_code:true
    }),
    // new webpack.LoaderOptionsPlugin({
    //   options: {
    //     postcss: [
    //       autoprefixer({
    //         browsers: [
    //           'last 3 version',
    //           'ie >= 10',
    //         ],
    //       }),
    //     ],
    //     context: path.join(__dirname, 'src'),
    //   },
    // }),
    new ExtractTextPlugin('../css/style.css')
  ]
};

export default config;
