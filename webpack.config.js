const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

//do generatorów es6:
//@babel/plugin-transform-regenerator -D
//@babel/plugin-transform-runtime -D
//@babel/runtime


module.exports = function (env) {
    const isDev = (env && env.dev) ? true : false;

    const config = {
        devtool: isDev ? 'eval-source-map' : false,
        entry: './src/index.js',
        output: {
            filename: 'app.js',
            path: path.resolve(__dirname, 'docs')
        },
        mode: isDev ? 'development' : 'production',
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/env'],
                            plugins: [
                                '@babel/plugin-transform-runtime',
                                '@babel/plugin-transform-regenerator'
                            ]
                        }
                    }
                },
                {
                    test: /\.css$/,
                    use: [
                        isDev ?
                            { loader: 'style-loader', options: { sourceMap: true } }
                            : MiniCssExtractPlugin.loader,
                        { loader: 'css-loader', options: { sourceMap: isDev } }
                    ]
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: './index.html',
            }),
            new MiniCssExtractPlugin({
                filename: 'style.css'
            })
        ]
    };

    return config;
};