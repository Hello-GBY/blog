# CSS 工程方案


## normalize.css
对不同浏览器自带得默认样式进行一个统一表现。

比如：body 默认有 margin 即使内部元素全部填充上 也没有铺满整体是不是熟悉以下样式定义, 这是我们所常见得用来确定统一body，还有个浏览器默认得 h1 大小等等。

```css
body {
    margin: 0;
    padding: 0;
}
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}
```

以更为推荐的 `Normalize.css 为例`，它的核心思想是：

> 使浏览器更一致地呈现所有元素并符合现代标准。它精确地只针对需要规范化的样式。

### 下载
官网：https://necolas.github.io/normalize.css/
```js
pnpm run normalize.css
```

源码算上大量注释一共就300多行，每一个样式都有详细得作用说明。

### 使用
::: tip
尽可能最优先加载。
:::
#### 以vue中为例
我是将Normalize.css 放在项目执行之前加载。

按照样式都放到 `assets/css/base.scss` 中统一引用，减少主文件代码量
:::: code-group
::: code-group-item main.ts
```ts{4}
import { createApp } from 'vue'
import App from './App.vue'
...
import '@/assets/css/base.scss'
...
const app = createApp(App).mount('#app')
```
:::
::: code-group-item base.scss
```ts{1}
@import '/node_modules/normalize.css/normalize.css';
...
html, body, #app{
  width: 100%;
  height: 100%;
}
...
```
:::
::::
####其他
`sanitize.css、Modern-CSS-Reset`。感兴趣得自行了解。

# 问题
编写的 CSS 总是全局的。JS可被封装为模块，CSS 代码却不行。

这导致在大型应用中：
- CSS 规则很可能互相干扰（选择器权重问题、命名冲突问题），带来混乱
- 由于不确定会发生什么，无人敢删 CSS 代码。于是项目里的 CSS 代码永远只增不减，成为一个烂摊子

# 框架提供的方案

## Vue 的 scope css
它提供了  scoped CSS 方案，主要原理时，在打包的时候，在打包时，对于被标注为scoped的 style，其中的所有选择器被额外加上随机字符串[data-v-xxxxx]，来实现模块化机制。
具体可查看 [Vue Loader - scope CSS](https://vue-loader.vuejs.org/guide/scoped-css.html#mixing-local-and-global-styles)

