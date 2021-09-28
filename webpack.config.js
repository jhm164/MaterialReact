var path = require("path");

module.exports = {


  mode: "development",
  entry: path.join(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "my-first-webpack.bundle.js",
  },
  devServer: {
    contentBase:__dirname+"/dist",
    port: 3000,
    watchContentBase: true,
  },
  module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        },
      
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.jpg$/i,
          use:"file-loader",
        },
    ],
  },
 
 
};
