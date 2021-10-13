const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const TerserWebPackPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsWebPackPlugin = require('optimize-css-assets-webpack-plugin');
const WorkboxWebPackPlugin = require('workbox-webpack-plugin');


module.exports = {
    entry: './src/client/index.js',
    mode: 'production',
    output: {
        libraryTarget: "var",
        library: 'Client'
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserWebPackPlugin(), new OptimizeCSSAssetsWebPackPlugin()],
    },
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
        ]
    },
    
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new MiniCssExtractPlugin({ filename: "[name].css" }),
        new WorkboxWebPackPlugin.GenerateSW()
    ]
}
