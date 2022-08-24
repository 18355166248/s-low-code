# s-low-code低代码

目录

## pnpm

### 全局安装依赖  pnpm install typescript -D -W

### 局部安装依赖 pnpm install vue -r --filter @panda/web

### 模块建依赖安装 pnpm i @panda/tools -r --filter @panda/server @panda/web

### 本地依赖变外部依赖

实际上，当执行了pnpm publish后，会把基于的workspace的依赖变成外部依赖，如：

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
