const path = require('path')
const webpack = require('webpack')


module.exports = (env, argv) => ({

    entry: './src/index.js',
    
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js',
        publicPath: 'assets/js/',
        pathinfo: true
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: [path.resolve(__dirname, 'src')],
                use: ['babel-loader']
            }
        ]
    },

    resolve: {
        modules: ['src', 'node_modules'],
        extensions: ['.js', '.jsx'],
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(argv.mode),
        })
    ],

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    priority: -10,
                    test: /[\\/]node_modules[\\/]/
                }
            },

            chunks: 'async',
            minChunks: 1,
            minSize: 30000,
            name: true
        }
    },

    devtool: argv.mode === 'development' ? 'source-map' : false, 

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        hot: true,
        port: 8080,
        host: '0.0.0.0',
        publicPath: '/assets/js/'
    }
})