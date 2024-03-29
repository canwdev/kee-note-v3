# KeeNote

使用 kdbx 加密的笔记应用程序

A note editor application that uses KeePass technology to encrypt storage.

![img](./screenshots/mac.png)

![img](./screenshots/001.png)
![img](./screenshots/002.png)
![img](./screenshots/003.png)
![img](./screenshots/004.png)
![img](./screenshots/005.png)
![img](./screenshots/006.png)
![img](./screenshots/007.png)

## 技术栈 · Technology

- Electron
- Vue 2
- [kdbxweb](https://github.com/keeweb/kdbxweb)
- [TankUI](https://github.com/canwdev/tank-ui)

## 功能 · Features

开发中...

- [ ] ~~创建数据库~~
- [x] 打开kdbx数据库 (`password`/`password+key`)
- [x] 保存/关闭数据库
- [ ] 全数据库搜索
- [x] 黑暗模式
- [x] 多国语言（中文/English/日本語）
- 群组 · Group
    - [x] 创建 Entry
    - [x] 创建 Group
    - [x] 重命名
    - [x] 修改图标
    - [x] 移动
    - [x] 删除/移动到回收站
- 条目 · Entries
    - [x] 列表视图
      - [ ] 多选
    - [ ] 日历视图
    - [x] 修改图标
    - [x] 修改颜色
    - [x] Markdown 预览
    - [x] Monaco 编辑器
    - [x] 删除
    - [x] 移动

## 开发 · Development

```sh
# 安装依赖
yarn ist

# 启动开发环境
yarn run dev
```

## 构建 · Build

```sh
# 安装全局依赖
npm -i -g electron-builder

# 首先构建前端
yarn run build:frontend

# 构建Electron
yarn run build:electron
```

## 备注 · Remarks

- 之前的版本: [kee-diary-react-electron](https://github.com/canwdev/kee-diary-react-electron)



