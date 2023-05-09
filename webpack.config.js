/* eslint-disable prettier/prettier */
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const webpack = require('webpack');

module.exports = {
    entry: "./src/index.js",
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            { 
                test: /\.css$/, 
                use: [MiniCssExtractPlugin.loader, "css-loader"] 
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                use: "asset/resource",
            },
            {
                test:/\.(woff|woff2|eor|ttf|otf)$/i,
                use: "asset/resource",
            },
            { 
                test: /\.(js)$/, 
                use: 'babel-loader',
            },
        ],
    },
    output:{
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        clean: true,
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
        new MiniCssExtractPlugin(),
        new webpack.EnvironmentPlugin({
            'NODE_ENV': 'production'
        }),
    ],
    optimization:{
        minimizer: ["...", new CssMinimizerPlugin()]
    },
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development'
};