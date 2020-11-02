# vue3_ts_cli

## icon

- 使用 antd/icon + remixicon 组件库
- remixicon 封装在@com/Icon。进行统一配置，使用
- 官网 ：[https://remixicon.com/](https://remixicon.com/)，用于 icon 查询。

## 文档

- [vue3 中文文档](https://vue-docs-next-zh-cn.netlify.app/)
- [antdv2.0 文档](https://2x.antdv.com/docs/vue/introduce-cn/)

## git 提交规范

- build：主要目的是修改项目构建系统(例如 glup，webpack 等的配置等)的提交
- ci：主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle 等)的提交
- docs：文档更新
- feat：新增功能
- merge：分支合并 Merge branch ? of ?
- fix：bug 修复
- perf：性能, 体验优化
- refactor：重构代码(既没有新增功能，也没有修复 bug)
- style：不影响程序逻辑的代码修改(修改空白字符，格式缩进，补全缺失的分号等，没有改变代码逻辑)
- test：新增测试用例或是更新现有测试
- revert：回滚某个更早之前的提交
- chore：不属于以上类型的其他类型

## 代码规范

```bash
- 文件夹：全小写 demo
- 文件：小写驼峰 demoFile.ts
- 变量/常量：小写驼峰 let demoArr = []
- store.mutation:全大写 ADDCOUNT
- store.action:小写驼峰 addCount
- 全局样式：使用横杠连接 global-style:{}
- 局部样式：使用下划线连接 local_style:{}
```
