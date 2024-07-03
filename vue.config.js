const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  devServer: {
    proxy: {
      images: {
        target: process.env.VUE_APP_BACKEND_URL || "http://localhost:4000",
        changeOrigin: true,
      },
    },
  },

  configureWebpack: {
    // Your webpack configuration
  },
};
