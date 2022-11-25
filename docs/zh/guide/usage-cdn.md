# 通过 CDN 使用

在 `0.0.21` 版本后，你可以使用通过 CDN 使用 UMD 版本的 vue-baidu-map-gl。

如果你要使用 minify 版本的包，将 `https://unpkg.com/vue3-baidu-map-gl@version` 作为 `src`，`version` 是你期望使用的版本，如果不指定 `version` 则会使用最新的版本。

如果你要使用未 minify 版本的包，将 `https://unpkg.com/vue3-baidu-map-gl@version/dist/index.js` 作为 `src`。

免费 CDN
你可以通过以下免费 CDN 服务来使用 Vant:

- [jsdelivr](https://www.jsdelivr.com/package/npm/vue3-baidu-map-gl)
- [unpkg](https://unpkg.com/vue3-baidu-map-gl)

::: tip 提示
最好锁定包的版本，避免不兼容变更带来的影响。
:::

## 示例

点击查看基本的[在线示例](https://jsbin.com/wekecoziwu/1/edit?html,output)：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <script src="https://unpkg.com/vue"></script>
    <!-- Would use latest version, you'd better specify a version -->
    <script src="https://unpkg.com/vue3-baidu-map-gl"></script>
  </head>
  <body>
    <div id="app">
      <b-map :enable-scroll-wheel-zoom="true">
        <b-zoom></b-zoom>
        <b-scale></b-scale>
        <b-location anchor="BMAP_ANCHOR_TOP_RIGHT"></b-location>
      </b-map>
    </div>
    <script>
      const App = {
        setup() {
          return {}
        }
      }
      const app = Vue.createApp(App)
      app.use(Vue3baiduMapGl, { ak: 'rxc8tkdjxtk5gQt4gtzdTuvp5NO4442t' })
      app.mount('#app')
    </script>
  </body>
</html>
```
