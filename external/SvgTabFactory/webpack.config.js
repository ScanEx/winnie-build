var ExtractTextPlugin = require ('extract-text-webpack-plugin');

module.exports = {
    entry: "./src/SvgTabFactory.js",
    output: {
        filename: "svgTabFactory.js",
        path: __dirname + '/dist',
        library: 'SvgTabFactory'
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {        
        extensions: ["", ".webpack.js", ".web.js", ".js", ".jsx"]
    },

    module: {
        loaders: [            
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            },
        ],        
    },

    externals: {
        // "react": "React",
        // "react-dom": "ReactDOM",        
    },

    plugins: [   
        new ExtractTextPlugin('svgTabFactory.css')
    ]
};