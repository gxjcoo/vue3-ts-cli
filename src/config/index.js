const request = require("./modules/request");
const setting = require("./modules/setting");
//导出配置
module.exports = Object.assign({}, request, setting);
