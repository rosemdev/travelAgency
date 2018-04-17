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
    module : {
        rules: [
            {
                test: /\.html/,
                use: extractHTML.extract({
                    use: [
                        "html-loader",
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
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            },
        ]
    },
    plugins: [
        extractHTML,
        extractCSS,
    ],
};




//
//     module: {
//         rules: [
//             {
//                 test: /\.pcss$/,
//                 exclude: /node_modules/,
//                 use: ExtractTextPlugin.extract({
//                     fallback: "style-loader",
//                     use: "css-loader"
//                 }),
//                 use: [
//                     {
//                         loader: 'style-loader',
//                     },
//                     {
//                         loader: 'css-loader',
//                         options: {
//                             importLoaders: 1,
//                         }
//                     },
//
//                 ]
//             }
//         ]
//     },
//     plugins: [
//         new ExtractTextPlugin("styles.css"),
//     ]
//
// };

module.exports = conf;

