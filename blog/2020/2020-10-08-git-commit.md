---
slug: git-commit
title: Git Commit 规范提交
authors: zeffon
tags: [git]
date: 2020-10-08
---

之前看了阿里技术公众号里的一篇推文《如何规范你的 Git commit?》，瞬间联想自己以前杂乱无章的 commit。自我感觉这篇文章简直就是美味佳肴。今天重新使用博客来记录一下。

<!--truncate-->

## 前文

初期我们在互联网上搜索了大量有关 git commit 规范的资料，但只有 Angular 规范是目前使用最广的写法，比较合理和系统化，并且有配套的工具（IDEA 就有插件支持这种写法）。最后综合阿里巴巴高德地图相关部门已有的规范总结出了一套 git commit 规范。

其实阮老师之前也写过[《Git commit 的规范》](https://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html)

## 正文

主要来自阿里技术公众号的推文[《如何规范你的 Git commit?》](https://mp.weixin.qq.com/s/vzgST0ko-HZVkFFiSZ2xGg)

### 规范格式

commit message 格式

```javascript
<type>(<scope>): <subject>
```

### 格式说明

#### type(必须)

用于说明 git commit 的类别，只允许使用下面的标识。

| type 类型 | 描述                                                                     |
| --------- | ------------------------------------------------------------------------ |
| feat      | 新功能（feature）                                                        |
| fix/to    | 修复 bug，可以是 QA 发现的 BUG，也可以是研发自己发现的 BUG               |
| fix       | 产生 diff 并自动修复此问题。适合于一次提交直接修复问题                   |
| to        | 只产生 diff 不自动修复此问题。适合于多次提交。最终修复问题提交时使用 fix |
| docs      | 文档（documentation）                                                    |
| style     | 格式（不影响代码运行的变动）                                             |
| refactor  | 重构（即不是新增功能，也不是修改 bug 的代码变动）                        |
| perf      | 优化相关，比如提升性能、体验                                             |
| test      | 增加测试                                                                 |
| chore     | 构建过程或辅助工具的变动                                                 |
| revert    | 回滚到上一个版本                                                         |
| merge     | 代码合并                                                                 |
| sync      | 同步主线或分支的 Bug                                                     |

#### scope(可选)

scope 用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同。

例如在 Angular，可以是 location，browser，compile，compile，rootScope， ngHref，ngClick，ngView 等。如果你的修改影响了不止一个 scope，你可以使用\*代替。

#### subject(必须)

subject 是 commit 目的的简短描述，`不超过50`个字符。

建议使用中文（感觉中国人用中文描述问题能更清楚一些）。

结尾不加句号或其他标点符号。

根据以上规范 git commit message 将是如下的格式：

```
fix(DAO):用户查询缺少username属性
feat(Controller):用户查询接口开发
```

### 规范的好处

- 便于程序员对提交历史进行追溯，了解发生了什么情况。
- 一旦约束了 commit message，意味着我们将慎重的进行每一次提交，不能再一股脑的把各种各样的改动都放在一个 git commit 里面，这样一来整个代码改动的历史也将更加清晰。
- 格式化的 commit message 才可以用于自动化输出 Change log。
