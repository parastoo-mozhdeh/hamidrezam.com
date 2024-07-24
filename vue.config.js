const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  publicPath: "/",
  devServer: {
    proxy: {
      images: {
        target: process.env.VUE_APP_BACKEND_URL || "http://localhost:4000",
        changeOrigin: true,
      },
    },
  },

  configureWebpack: {
    // webpack configuration
  },
};