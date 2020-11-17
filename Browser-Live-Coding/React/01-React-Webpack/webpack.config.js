const path = require("path")
const HTMLplugin= require("html-webpack-plugin")

module.exports={
    entry:"./src/script/index.js",
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"bundle.js",
        publicPath:"/"
    },
    module:{
        rules:[
            {
                test:"/\.css$/",
                use:["style-loader","css-loader"]
            }
        ]
    },
    plugins:[
        new HTMLplugin({
            template:"./src/index.html"
        })
    ]
}