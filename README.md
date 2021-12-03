![Alt](https://repobeats.axiom.co/api/embed/a29a41089283cd78c9d7795cdde64a910b707af5.svg "Repobeats analytics image")

# zombie-ui 是一个 Vue UI 库
[![Build Status](https://travis-ci.com/ZombieBrand/Zombie_UI.svg?branch=main)](https://travis-ci.com/ZombieBrand/Zombie_UI)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/ZombieBrand/Zombie_UI)
![npm](https://img.shields.io/npm/v/vue-zombie-ui)
![NPM](https://img.shields.io/npm/l/vue-zombie-ui)
![GitHub last commit](https://img.shields.io/github/last-commit/ZombieBrand/Zombie_UI)
![Vue](https://img.shields.io/badge/Vue-2.x-brightgreen)
![developer](https://img.shields.io/badge/developer-ZombieBrand-lightgrey)
## 介绍

基于Vue2.x开发的 UI 库
未来会使用Vue3 + TypeScript
## 开始使用
1. 安装 zombie ui
`npm install --save vue-zombie-ui`
2. 按需引入使用
```js
import { Button, ButtonGroup } from "vue-zombie-ui";
import "vue-zombie-ui/dist/index.css";

export default {
  components: {
    "z-button": Button,
    "z-button-group": ButtonGroup
  }
};
```
```html
 <z-button label="测试" type="danger" round :loading="true"></z-button>
```
## 提问

## 变更记录

## 联系方式

## 贡献代码
