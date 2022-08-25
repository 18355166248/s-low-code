# s-low-code 低代码

目录

## pnpm

### 全局安装依赖 pnpm install typescript -D -W

如果是一个开发依赖的话，可以加上 -D 参数，表示这是一个开发依赖，会装到 pacakage.json 中的 devDependencies 中
pnpm install rollup -wD

### 局部安装依赖 pnpm install vue -r --filter @panda/web

### 模块建依赖安装 pnpm i @panda/tools -r --filter @panda/server @panda/web

### 本地依赖变外部依赖

实际上，当执行了 pnpm publish 后，会把基于的 workspace 的依赖变成外部依赖，如：

```json
// before
"dependencies": {
  "@panda/tools": "workspace:^1.0.0"
}
// after
"dependencies": {
  "@panda/tools": "^1.0.0"
}
```

### 启动

```json
"scripts": {
  "start": "pnpm -C ./packages/s-low-components start & pnpm -C ./packages/s-low-control start & pnpm -C ./packages/s-low-render start",
}
```

###

```js
pnpm -r --filter=!@slow/cli --filter=!@slow/core run start
```
