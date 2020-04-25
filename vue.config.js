module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/imfundfirus-frontend/" : "/",

  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ["file-loader"]
        }
      ]
    }
  }
};
