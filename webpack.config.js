const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const { extendDefaultPlugins } = require("svgo");


module.exports = {
    mode: "production",
    entry: {
        index: './src/index.js',
    },
    devtool: 'inline-source-map',
    plugins: [
            new HtmlWebpackPlugin({
                title: 'Restaurant Page',
            }),
            new ImageMinimizerPlugin({
                minimizerOptions: {
                  // Lossless optimization with custom option
                  // Feel free to experiment with options for better result for you
                  plugins: [
                    ["gifsicle", { interlaced: true }],
                    ["jpegtran", { progressive: true }],
                    ["optipng", { optimizationLevel: 5 }],
                    // Svgo configuration here https://github.com/svg/svgo#configuration
                    [
                      "svgo",
                      {
                        plugins: extendDefaultPlugins([
                          {
                            name: "removeViewBox",
                            active: false,
                          },
                          {
                            name: "addAttributesToSVGElement",
                            params: {
                              attributes: [{ xmlns: "http://www.w3.org/2000/svg" }],
                            },
                          },
                        ]),
                      },
                    ],
                  ],
                },
            }),
        ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                type: "asset",
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
};