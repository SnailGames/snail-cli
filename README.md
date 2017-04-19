# snail-cli
> 与 `snail-fed` 配套使用的命令行工具，是一个能快速创建前端开发环境的命令行工具，可用于单个或者多个页面的活动/专题/官网



## 全局安装		

```bash
npm i snail-cli -g
```



## 特点

- 支持 sass、less 、stylus，并能**自动添加前缀**

- 模块**热更新**处理，页面自动追随代码变更

- 支持 ES6 语法

- 线上代码压缩

  ​

## 使用

新建项目

```bash
snail demo 			#初始化一个名为 demo 的项目
```

这时会要求用户**依次**输入三个信息：

```bash
? frontend name:     #前端名字
? designer name:     #设计名字
? backend name:      #后端名字
```

>  这些信息会被自动插入</head>标签之前

接着就是进入 demo 文件，安装依赖：

```bash
cd demo
npm i
```



## 本地调试

```bash
npm run dev
```

> 端口号为8080，可以在 config/index.js 里修改端口号port，浏览器自动打开页面



## 产出

```bash
npm run build
```

> 最终生成 dist 目录，图片、样式和js都单独保存在独立的文件里



## 注意

- 建议在 js 中引入样式文件

- 不符合 CommonJS 规范的需要在html里手动引入

- html文件 | 样式文件 | 图片 | 字体文件，分别统一放在 src | style | images | fonts 目录下

- 入口路径为 src/js 目录（可以在 config/webpack.base.config.js 里修改），这就导致一个问题：若新建了另一个页面 index2.html，需要在 src/js 下对应地新建一个index2.js文件，否则不会生成 index2.html 页面

- 直接打开 dist 目录下的html文件并不起效，需要在该目录启动一个http服务



## 其他功能 

- 在当前目录启动一个http服务，自动分配可用的端口号

  ```bash
  snail -b
  ```

  ​