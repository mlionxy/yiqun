(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{517:function(t,s,a){"use strict";a.r(s);var e=a(14),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vuepress-plugin-medium-zoom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-plugin-medium-zoom"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/plugin-medium-zoom",target:"_blank",rel:"noopener noreferrer"}},[t._v("@vuepress/plugin-medium-zoom"),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://github.com/francoischalifour/medium-zoom",target:"_blank",rel:"noopener noreferrer"}},[t._v("medium-zoom"),a("OutboundLink")],1),t._v(" plugin")])]),t._v(" "),a("h2",{attrs:{id:"install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[t._v("#")]),t._v(" Install")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -D @vuepress/plugin-medium-zoom\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# OR npm install -D @vuepress/plugin-medium-zoom")]),t._v("\n")])])]),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("p",[a("strong",[t._v("Simple")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vuepress/medium-zoom'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("With options")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vuepress/medium-zoom'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      selector"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'img.zoom-custom-imgs'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// medium-zoom options here")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// See: https://github.com/francoischalifour/medium-zoom#options")]),t._v("\n      options"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        margin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" Options")]),t._v(" "),a("h3",{attrs:{id:"selector"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#selector"}},[t._v("#")]),t._v(" selector")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v(".theme-default-content :not(a) > img")])])]),t._v(" "),a("p",[t._v("Note that "),a("code",[t._v(".theme-default-content")]),t._v(" is the class name of "),a("RouterLink",{attrs:{to:"/guide/using-vue.html#content"}},[a("code",[t._v("<Content />")])]),t._v(" component in default theme.")],1),t._v(" "),a("h3",{attrs:{id:"options-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options-2"}},[t._v("#")]),t._v(" options")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("object")])]),t._v(" "),a("li",[t._v("Default: "),a("code",[t._v("undefined")])])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/francoischalifour/medium-zoom#options",target:"_blank",rel:"noopener noreferrer"}},[t._v("Options"),a("OutboundLink")],1),t._v(" for "),a("a",{attrs:{href:"https://github.com/francoischalifour/medium-zoom",target:"_blank",rel:"noopener noreferrer"}},[t._v("medium-zoom"),a("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);s.default=n.exports}}]);