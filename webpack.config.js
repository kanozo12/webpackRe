const path = require('path');
const MiniCss = require('mini-css-extract-plugin');

module.exports = {
    entry:'./my.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname, "dist")
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    {
                        loader:MiniCss.loader,
                        options:{
                            hmr:process.env.NODE_ENV === 'development'
                        }
                    },
                    'css-loader'
                ]
            },
            {
                test:/\.(png|jpg|jpeg|gif)$/,
                loader:'url-loader',
                options:{
                    name:'[hash].[ext]',
                    limit:1 * 1000 * 1000,   //0이 8개
                }
            }
        ]
    },
    plugins: [
        new MiniCss({filename: 'style.css'})
    ]
};