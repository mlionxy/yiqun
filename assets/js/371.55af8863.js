(window.webpackJsonp=window.webpackJsonp||[]).push([[371],{863:function(t,a,e){"use strict";e.r(a);var r=e(14),s=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"front-matter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#front-matter"}},[t._v("#")]),t._v(" Front Matter")]),t._v(" "),e("p",[t._v("任何包含 YAML front matter 的 Markdown 文件都将由 "),e("a",{attrs:{href:"https://github.com/jonschlinkert/gray-matter",target:"_blank",rel:"noopener noreferrer"}},[t._v("gray-matter"),e("OutboundLink")],1),t._v(" 处理。front matter 必须是 markdown 文件中的第一部分，并且必须采用在三点划线之间书写的有效的 YAML。 这是一个基本的例子：")]),t._v(" "),e("div",{staticClass:"language-markdown extra-class"},[e("pre",{pre:!0,attrs:{class:"language-markdown"}},[e("code",[e("span",{pre:!0,attrs:{class:"token hr punctuation"}},[t._v("---")]),t._v("\ntitle: Blogging Like a Hacker\n"),e("span",{pre:!0,attrs:{class:"token title important"}},[t._v("lang: en-US\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")])]),t._v("\n")])])]),e("p",[t._v("在这些三条虚线之间，你可以设置预定义变量（参见"),e("a",{attrs:{href:"#%E9%A2%84%E5%AE%9A%E4%B9%89%E5%8F%98%E9%87%8F"}},[t._v("下面")]),t._v("），甚至可以创建自己的自定义变量。 然后，您可以使用 "),e("code",[e("RouterLink",{attrs:{to:"/zh/guide/global-computed.html#frontmatter"}},[t._v("$frontmatter")])],1),t._v(" 在页面的其余部分、以及所有的自定义和主题组件访问这些变量。")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("p",[t._v("在 VuePress 中，Front matter 是 "),e("strong",[t._v("可选的")]),t._v("。")])]),t._v(" "),e("h2",{attrs:{id:"其他格式的-front-matter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其他格式的-front-matter"}},[t._v("#")]),t._v(" 其他格式的 Front Matter")]),t._v(" "),e("p",[t._v("除了 YAML 之外，VuePress 也支持 JSON 或者 "),e("a",{attrs:{href:"https://github.com/toml-lang/toml",target:"_blank",rel:"noopener noreferrer"}},[t._v("TOML"),e("OutboundLink")],1),t._v(" 格式的 front matter。")]),t._v(" "),e("p",[t._v("JSON front matter 需要以花括号开头和结尾：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('---\n{\n  "title": "Blogging Like a Hacker",\n  "lang": "en-US"\n}\n---\n')])])]),e("p",[t._v("TOML front matter 需要显式地标注为 TOML：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('---toml\ntitle = "Blogging Like a Hacker"\nlang = "en-US"\n---\n')])])]),e("h2",{attrs:{id:"预定义变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#预定义变量"}},[t._v("#")]),t._v(" 预定义变量")]),t._v(" "),e("h3",{attrs:{id:"title"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#title"}},[t._v("#")]),t._v(" title")]),t._v(" "),e("ul",[e("li",[t._v("类型: "),e("code",[t._v("string")])]),t._v(" "),e("li",[t._v("默认值: "),e("code",[t._v("h1_title || siteConfig.title")])])]),t._v(" "),e("p",[t._v("当前页面的标题。")]),t._v(" "),e("h3",{attrs:{id:"lang"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lang"}},[t._v("#")]),t._v(" lang")]),t._v(" "),e("ul",[e("li",[t._v("类型: "),e("code",[t._v("string")])]),t._v(" "),e("li",[t._v("默认值: "),e("code",[t._v("en-US")])])]),t._v(" "),e("p",[t._v("当前页面的语言。")]),t._v(" "),e("h3",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),e("ul",[e("li",[t._v("类型: "),e("code",[t._v("string")])]),t._v(" "),e("li",[t._v("默认值: "),e("code",[t._v("siteConfig.description")])])]),t._v(" "),e("p",[t._v("当前页面的描述。")]),t._v(" "),e("h3",{attrs:{id:"layout"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#layout"}},[t._v("#")]),t._v(" layout")]),t._v(" "),e("ul",[e("li",[t._v("类型: "),e("code",[t._v("string")])]),t._v(" "),e("li",[t._v("默认值: "),e("code",[t._v("Layout")])])]),t._v(" "),e("p",[t._v("设置当前页面的布局组件。")]),t._v(" "),e("h3",{attrs:{id:"permalink"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#permalink"}},[t._v("#")]),t._v(" permalink")]),t._v(" "),e("ul",[e("li",[t._v("类型: "),e("code",[t._v("string")])]),t._v(" "),e("li",[t._v("默认值: "),e("code",[t._v("siteConfig.permalink")])])]),t._v(" "),e("p",[t._v("参考: "),e("RouterLink",{attrs:{to:"/zh/guide/permalinks.html"}},[t._v("Permalinks")]),t._v(".")],1),t._v(" "),e("h3",{attrs:{id:"metatitle"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#metatitle"}},[t._v("#")]),t._v(" metaTitle")]),t._v(" "),e("ul",[e("li",[t._v("类型: "),e("code",[t._v("string")])]),t._v(" "),e("li",[t._v("默认值: "),e("code",[t._v("`${page.title} | ${siteConfig.title}`")])])]),t._v(" "),e("p",[t._v("重写默认的 meta title。")]),t._v(" "),e("h3",{attrs:{id:"meta"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#meta"}},[t._v("#")]),t._v(" meta")]),t._v(" "),e("ul",[e("li",[t._v("类型: "),e("code",[t._v("array")])]),t._v(" "),e("li",[t._v("默认值: "),e("code",[t._v("undefined")])])]),t._v(" "),e("p",[t._v("指定额外的要注入的 meta 标签：")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("meta")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" description\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("content")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hello\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" keywords\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("content")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" super duper SEO\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n")])])]),e("h2",{attrs:{id:"默认主题的预定义变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#默认主题的预定义变量"}},[t._v("#")]),t._v(" 默认主题的预定义变量")]),t._v(" "),e("h3",{attrs:{id:"navbar"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#navbar"}},[t._v("#")]),t._v(" navbar")]),t._v(" "),e("ul",[e("li",[t._v("类型: "),e("code",[t._v("boolean")])]),t._v(" "),e("li",[t._v("默认值: "),e("code",[t._v("undefined")])])]),t._v(" "),e("p",[t._v("参考: "),e("RouterLink",{attrs:{to:"/zh/theme/default-theme-config.html#禁用导航栏"}},[t._v("默认主题配置 > 禁用导航栏")]),t._v("。")],1),t._v(" "),e("h3",{attrs:{id:"sidebar"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sidebar"}},[t._v("#")]),t._v(" sidebar")]),t._v(" "),e("ul",[e("li",[t._v("类型: "),e("code",[t._v("boolean|'auto'")])]),t._v(" "),e("li",[t._v("默认值: "),e("code",[t._v("undefined")])])]),t._v(" "),e("p",[t._v("参考: "),e("RouterLink",{attrs:{to:"/zh/theme/default-theme-config.html#侧边栏"}},[t._v("默认主题配置 > 侧边栏")]),t._v("。")],1),t._v(" "),e("h3",{attrs:{id:"prev"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prev"}},[t._v("#")]),t._v(" prev")]),t._v(" "),e("ul",[e("li",[t._v("类型: "),e("code",[t._v("boolean|string")])]),t._v(" "),e("li",[t._v("默认值: "),e("code",[t._v("undefined")])])]),t._v(" "),e("p",[t._v("参考: "),e("RouterLink",{attrs:{to:"/zh/theme/default-theme-config.html#上-下一篇链接"}},[t._v("默认主题配置 > 上 / 下一篇链接")]),t._v("。")],1),t._v(" "),e("h3",{attrs:{id:"next"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#next"}},[t._v("#")]),t._v(" next")]),t._v(" "),e("ul",[e("li",[t._v("类型: "),e("code",[t._v("boolean|string")])]),t._v(" "),e("li",[t._v("默认值: "),e("code",[t._v("undefined")])])]),t._v(" "),e("p",[t._v("参考: "),e("RouterLink",{attrs:{to:"/zh/theme/default-theme-config.html#上-下一篇链接"}},[t._v("默认主题配置 > 上 / 下一篇链接")]),t._v("。")],1),t._v(" "),e("h3",{attrs:{id:"search"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#search"}},[t._v("#")]),t._v(" search")]),t._v(" "),e("ul",[e("li",[t._v("类型: "),e("code",[t._v("boolean")])]),t._v(" "),e("li",[t._v("默认值: "),e("code",[t._v("undefined")])])]),t._v(" "),e("p",[t._v("参考: "),e("RouterLink",{attrs:{to:"/zh/theme/default-theme-config.html#内置搜索"}},[t._v("默认主题配置 > 内置搜索")]),t._v("。")],1),t._v(" "),e("h3",{attrs:{id:"tags"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tags"}},[t._v("#")]),t._v(" tags")]),t._v(" "),e("ul",[e("li",[t._v("类型: "),e("code",[t._v("array")])]),t._v(" "),e("li",[t._v("默认值: "),e("code",[t._v("undefined")])])]),t._v(" "),e("p",[t._v("参考: "),e("RouterLink",{attrs:{to:"/zh/theme/default-theme-config.html#内置搜索"}},[t._v("默认主题配置 > 内置搜索")]),t._v("。")],1)])}),[],!1,null,null,null);a.default=s.exports}}]);