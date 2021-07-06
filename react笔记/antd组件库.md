# 自定义配置

## 配置主题

![image-20210706102910121](https://blog.bsat1314.cn//file/img/image-20210706102910121.png)

## 配置别名

![image-20210706102924036](https://blog.bsat1314.cn//file/img/image-20210706102924036.png)

```js
const CracoLessPlugin = require('craco-less');
const path = require("path")

const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  webpack: {
    alias: {
      "@": resolve("src"),
      "components": resolve("src/components")
    }
  }
};

```

