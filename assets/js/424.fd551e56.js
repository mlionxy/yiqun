(window.webpackJsonp=window.webpackJsonp||[]).push([[424],{886:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vuepress-plugin-register-components"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-plugin-register-components"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/plugin-register-components",target:"_blank",rel:"noopener noreferrer"}},[t._v("@vuepress/plugin-register-components"),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("register-components plugin for VuePress")])]),t._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -D @vuepress/plugin-register-components\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# OR npm install -D @vuepress/plugin-register-components")]),t._v("\n")])])]),a("h2",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vuepress/register-components'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[t._v("#")]),t._v(" 选项")]),t._v(" "),a("h3",{attrs:{id:"componentsdir"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#componentsdir"}},[t._v("#")]),t._v(" componentsDir")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("Array | String")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("[]")])])]),t._v(" "),a("p",[t._v("在这个目录下的所有组件将会被注册为全局组件，组件的命名将遵循在 "),a("a",{attrs:{href:"https://vuepress.vuejs.org/guide/using-vue.html#using-components",target:"_blank",rel:"noopener noreferrer"}},[t._v(".vuepress/components"),a("OutboundLink")],1),t._v(" 中找到的组件的命名。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vuepress/register-components'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        componentsDir"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" somepath\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"components"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#components"}},[t._v("#")]),t._v(" components")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("{ name: string, path: string }")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("[]")])])]),t._v(" "),a("p",[t._v("通过明确的名称和路径来注册组件。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vuepress/register-components'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        components"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'V-Card'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path/to/card.vue'")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"getcomponentname"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getcomponentname"}},[t._v("#")]),t._v(" getComponentName")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("(file: string) => string")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("file => file.replace(/\\/|\\\\/g, '-')")])])]),t._v(" "),a("p",[t._v("自定义 "),a("code",[t._v("componentsDir")]),t._v(" 中注册的组件的名称。")])])}),[],!1,null,null,null);s.default=e.exports}}]);