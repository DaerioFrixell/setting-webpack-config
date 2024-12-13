type PlaginList = {
    title: string;
    version: string;
    links: {
        github: string;
        webpack?: string;
    }
}[];

export const plaginList: PlaginList = [
    {
        title: 'html-webpack-plugin',
        version: '5.6.3',
        links: {
            github: 'https://github.com/jantimon/html-webpack-plugin',
            webpack: "https://webpack.js.org/plugins/html-webpack-plugin/",
        },
    },
    {
        title: 'fork-ts-checker-webpack-plugin',
        version: '9.0.2',
        links: {
            github: 'https://github.com/TypeStrong/fork-ts-checker-webpack-plugin',
        },
    },
]