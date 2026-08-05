const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            additionalData: `@import "@/assets/scss/index.scss";`
                        }
                    }
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        'scss': [
                            'style-loader',
                            'css-loader',
                            {
                                loader: 'sass-loader',
                                options: {
                                    additionalData: `@import "@/assets/scss/index.scss";`
                                }
                            }
                        ],
                    }
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.svg$/,
                include: path.resolve(__dirname, 'src/assets/icons'),
                issuer: /\.(js|vue)$/, // 👈 обрабатывать только при импорте из JS/Vue
                use: [
                    {
                        loader: 'svg-sprite-loader',
                        options: {
                            symbolId: 'icon-[name]',
                            spriteFilename: 'sprite.svg',
                        },
                    },
                ],
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve(__dirname, 'src'),
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
            favicon: './public/favicon.ico',
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'public/favicon.ico',
                    to: 'favicon.ico'
                },
            ],
        }),
    ],
    devServer: {
        static: './dist',
        hot: true,
        port: 8080
    }
};