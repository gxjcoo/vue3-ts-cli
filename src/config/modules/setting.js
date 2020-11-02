/**
 * @description 导出默认配置
 **/
module.exports = {
  //开发环境端口号
  devPort: "8080",
  //默认的接口地址 如果是开发环境和生产环境走mock-server，当然你也可以选择自己配置成需要的接口地址
  baseURL: process.env.NODE_ENV === "development" ? "mock-server" : "mock-server",
};
