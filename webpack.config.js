let path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractHTML = new ExtractTextPlugin("index.html");
const extractCSS = new ExtractTextPlugin("main.css");

let conf = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "main.js"

    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.html/,
                use: extractHTML.extract({
                    use: [
                        {
                            loader: "html-loader",
                            options: {
                                attrs: ['img:src', 'source:srcset']
                            }
                        }

                    ]
                })
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
                test: /\.(png|jpg|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '/images/[name]_[hash:7].[ext]',
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
        extractHTML,
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

