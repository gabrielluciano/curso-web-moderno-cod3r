const devMode = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const copyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    mode: devMode ? 'development' : 'production',
    entry: './src/index.js',
    output: {
        filename: 'script.js',
        path: __dirname + '/public'
    },
    devServer: {
        contentBase: './public',
        port: 9000
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "/css/app.min.css"
        }),
        new copyWebpackPlugin({
            patterns: [
                { context: './src/assets', from: 'imgs/**/*'}
            ],
        })
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({ // Minify JS
                parallel: true,
                terserOptions: {
                    ecma: 6,
                },
                extractComments: false,
            }),
            new OptimizeCssAssetsPlugin()
        ]
    },
    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                'css-loader',
                MiniCssExtractPlugin.loader,
                'sass-loader'
            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }, {
            test: /\.html$/i,
            use: [
                'html-loader'
            ]
        }]
    }
}