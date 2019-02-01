const { VueLoaderPlugin } = require('vue-loader');
const { AngularCompilerPlugin } = require('@ngtools/webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        'vue-root': './src/vue/main.js',
        'angular-root': './src/angular/main.ts'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                loader: ['vue-style-loader', 'css-loader']
            },
            {
                test: /\.ts$/,
                loader: '@ngtools/webpack'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new AngularCompilerPlugin({
            tsConfigPath: './tsconfig.json',
            entryModule: './src/angular/app/app.module#AppModule',
            sourceMap: true
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}