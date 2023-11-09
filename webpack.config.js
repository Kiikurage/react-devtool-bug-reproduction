const path = require("path");

module.exports = {
    mode: "development",
    entry: "./main.tsx",
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "./build"),
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
    module: {
        rules: [
            {test: /\.tsx?$/, use: "ts-loader"},
        ],
    }
};
