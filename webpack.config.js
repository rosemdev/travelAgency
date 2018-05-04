let path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractCSS = new ExtractTextPlugin("main.css");

let conf = {
    entry: {
        App: "./src/index.js",
        Lazy: "./src/lazy.js"
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].js"

    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.html/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            attrs: ['img:src', 'source:srcset', 'source:data-srcset', 'img:data-src']
                        }
                    }

                ]
            },
            {
                test: /\.pcss$/,
                use: extractCSS.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1
                            }
                        },
                        'postcss-loader'
                    ]
                })
            },
            {
                test: /\.(png|jpg|gif|svg|ico)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: './images/[name]_[hash:7].[ext]',
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        query: {
                            presets: ['es2015']
                        }
                    }

                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            favicon: './src/assets/images/icons/favicon.ico',
            template: './src/index.html'
        }),
        extractCSS,
    ],
};


module.exports = (env, options) => {

    let production = options.mode === 'production';
    conf.devtool = production
        ? 'source-map'
        : 'eval-sourcemap';

return conf;
};

