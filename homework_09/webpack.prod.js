const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = merge(common, {
  plugins: [
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require("cssnano"),
      cssProcessorOptions: { discardComments: { removeAll: true } },
      canPrint: true
    }),
    new BundleAnalyzerPlugin(),
    new UglifyJSPlugin()
  ]
});
