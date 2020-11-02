/**
 * @description vue.config.js全局配置
 */
const path = require("path");
const {
  devPort,
  /* baseURL, */
} = require("./src/config");
const resolve = (dir) => {
  return path.join(__dirname, dir);
};
const globalVars = require("./src/config/globalVars");

const mockServer = () => {
  if (process.env.NODE_ENV === "development") {
    return require("./mock/mockServer.js");
  } else {
    return "";
  }
};
module.exports = {
  devServer: {
    port: devPort,
    hot: true,
    open: true,
    noInfo: false,
    overlay: {
      warnings: true,
      errors: true,
    },
    // 注释掉的地方是前端配置代理访问后端的示例
    // proxy: {
    //   [baseURL]: {
    //     target: `http://你的后端接口地址`,
    //     ws: true,
    //     changeOrigin: true,
    //     pathRewrite: {
    //       ["^/" + baseURL]: "",
    //     },
    //   },
    // },
    after: mockServer(),
  },
  configureWebpack() {
    return {
      resolve: {
        extensions: [".js", ".vue", ".ts", ".tsx", ".json"],
        alias: {
          "@": resolve("src"),
          "*": resolve(""),
          "@com": resolve("src/components/common"),
          "@bus": resolve("src/components/business"),
          "@style": resolve("src/assets/style/index.less"),
        },
      },
    };
  },
  chainWebpack(config) {
    config.resolve.symlinks(true);
    // config.resolve.extensions = [".js", ".jsx", ".tsx", ".ts", ".vue"];
    config.when(process.env.NODE_ENV === "development", (config) => {
      config.devtool("source-map");
    });

    config.when(process.env.NODE_ENV !== "development", (config) => {
      config.performance.set("hints", false);
      config.devtool("none");
      config.optimization.splitChunks({
        chunks: "all",
        cacheGroups: {
          libs: {
            name: "vue_ts_cli_libs",
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: "initial",
          },
        },
      });
    });
  },
  runtimeCompiler: true,
  productionSourceMap: false,
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
        globalVars,
      },
    },
  },
};
