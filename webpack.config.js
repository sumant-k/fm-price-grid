const path = require("path")
module.exports = {
    entry: "./src/js/main.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname,"./dist"),
        publicPath: "dist/"
    },
    mode: "none",
    module: {
        rules: [{
            test:/\.(jpg|png)$/,
            use: ["file-loader"]
        }]
    }
}