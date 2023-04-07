/* eslint-disable prettier/prettier */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
    entry: "./src/process.js",
    mode: isProduction ? "production" : "development",
    output:{
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        clean: true,
    },
    module: {
        rules: 
        [{ test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                use: "asset/resource",
            },
            {
                test:/\.(woff|woff2|eor|ttf|otf)$/i,
                use: "asset/resource",
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
        new MiniCssExtractPlugin(),
    ],
    optimization:{
        minimizer: ["...", new CssMinimizerPlugin()]
    },
    devtool: isProduction ? "hidden-source-map" : "source-map",
};