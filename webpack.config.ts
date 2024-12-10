import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    mode: "development",
    resolve: {
        alias: {
            app: path.resolve(__dirname, 'src/app/'),
            pages: path.resolve(__dirname, 'src/pages/'),
            shared: path.resolve(__dirname, 'src/shared/'),
        },
        extensions: [".ts", ".js", ".tsx"],
    },
    module: {
        rules: [
            {
                test: /\.m?tsx$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', "@babel/preset-typescript", ['@babel/preset-react']]
                        }
                    },
                    {
                        loader: "ts-loader",
                        options: {
                            transpileOnly: true, // Отключает проверку типов в ts-loader
                        },
                    },
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
        ],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "dist"),
        },
        compress: true,
        port: 3000,
        hot: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "index.html",
        }),
        new ForkTsCheckerWebpackPlugin(),
    ],
};
