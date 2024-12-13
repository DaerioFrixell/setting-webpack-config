type LoaderList = {
    title: string;
    version: string;
    links: {
        github?: string;
        webpack: string;
    }
}[];

export const loaderList: LoaderList = [
    {
        title: 'ts-loader',
        version: '9.5.1',
        links: {
            github: 'https://github.com/TypeStrong/ts-loader',
            webpack: "https://webpack.js.org/guides/typescript/",
        },
    },
    {
        title: 'babel-loader',
        version: '9.2.1',
        links: {
            webpack: "https://webpack.js.org/loaders/babel-loader/",
        },
    },
    {
        title: 'sass-loader',
        version: '16.0.4',
        links: {
            github: "https://github.com/webpack-contrib/sass-loader",
            webpack: "https://webpack.js.org/loaders/sass-loader/",
        },
    },
    {
        title: 'css-loader',
        version: '7.1.2',
        links: {
            github: "https://github.com/webpack-contrib/css-loader",
            webpack: "https://webpack.js.org/loaders/css-loader/",
        },
    },
    {
        title: 'style-loader',
        version: '4.0.0',
        links: {
            github: "https://github.com/webpack-contrib/style-loader",
            webpack: "https://webpack.js.org/loaders/style-loader/",
        },
    },
]