(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{629:function(t,s,a){"use strict";a.r(s);var e=a(14),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"基本配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本配置"}},[t._v("#")]),t._v(" 基本配置")]),t._v(" "),a("h2",{attrs:{id:"配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置文件"}},[t._v("#")]),t._v(" 配置文件")]),t._v(" "),a("p",[t._v("如果没有任何配置，这个网站将会是非常局限的，用户也无法在你的网站上自由导航。为了更好地自定义你的网站，让我们首先在你的文档目录下创建一个 "),a("code",[t._v(".vuepress")]),t._v(" 目录，所有 VuePress 相关的文件都将会被放在这里。你的项目结构可能是这样：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(".\n├─ docs\n│  ├─ README.md\n│  └─ .vuepress\n│     └─ config.js\n└─ package.json\n")])])]),a("p",[t._v("一个 VuePress 网站必要的配置文件是 "),a("code",[t._v(".vuepress/config.js")]),t._v("，它应该导出一个 JavaScript 对象：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello VuePress'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  description"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Just playing around'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("对于上述的配置，如果你运行起 dev server，你应该能看到一个页面，它包含一个页头，里面包含一个标题和一个搜索框。VuePress 内置了基于 headers 的搜索 —— 它会自动为所有页面的标题、"),a("code",[t._v("h2")]),t._v(" 和 "),a("code",[t._v("h3")]),t._v(" 构建起一个简单的搜索索引。")]),t._v(" "),a("p",[t._v("参见 "),a("RouterLink",{attrs:{to:"/zh/config/"}},[t._v("配置")]),t._v(" 来查看所有可配置的选项。")],1),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("其他配置格式")]),t._v(" "),a("p",[t._v("你也可以使用 YAML ("),a("code",[t._v(".vuepress/config.yml")]),t._v(") 或是 TOML ("),a("code",[t._v(".vuepress/config.toml")]),t._v(") 格式的配置文件。")])]),t._v(" "),a("h2",{attrs:{id:"主题配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主题配置"}},[t._v("#")]),t._v(" 主题配置")]),t._v(" "),a("p",[t._v("一个 VuePress 主题应该负责整个网站的布局和交互细节。在 VuePress 中，目前自带了一个默认的主题（正是你现在所看到的），它是为技术文档而设计的。同时，默认主题提供了一些选项，让你可以去自定义导航栏（navbar）、 侧边栏（sidebar）和 首页（homepage） 等，详情请参见 "),a("RouterLink",{attrs:{to:"/zh/theme/default-theme-config.html"}},[t._v("默认主题")]),t._v(" 。")],1),t._v(" "),a("p",[t._v("如果你想开发一个自定义主题，可以参考 "),a("RouterLink",{attrs:{to:"/zh/theme/"}},[t._v("自定义主题")]),t._v("。")],1),t._v(" "),a("h2",{attrs:{id:"应用级别的配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用级别的配置"}},[t._v("#")]),t._v(" 应用级别的配置")]),t._v(" "),a("p",[t._v("由于 VuePress 是一个标准的 Vue 应用，你可以通过创建一个 "),a("code",[t._v(".vuepress/enhanceApp.js")]),t._v(" 文件来做一些应用级别的配置，当该文件存在的时候，会被导入到应用内部。"),a("code",[t._v("enhanceApp.js")]),t._v(" 应该 "),a("code",[t._v("export default")]),t._v(" 一个钩子函数，并接受一个包含了一些应用级别属性的对象作为参数。你可以使用这个钩子来安装一些附加的 Vue 插件、注册全局组件，或者增加额外的路由钩子等：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用异步函数也是可以的")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// VuePress 正在使用的 Vue 构造函数")]),t._v("\n  options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 附加到根实例的一些选项")]),t._v("\n  router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当前应用的路由实例")]),t._v("\n  siteData"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 站点元数据")]),t._v("\n  isServer "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当前应用配置是处于 服务端渲染 或 客户端")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...做一些其他的应用级别的优化")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("相关阅读：")])]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/zh/plugin/option-api.html#enhanceappfiles"}},[t._v("插件 API 中的 enhanceApp")])],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);