(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{377:function(t,s,a){t.exports={example:"example_2DuOfB6G"}},460:function(t,s,a){"use strict";var e=a(377),n=a.n(e);a.d(s,"default",(function(){return n.a}))},507:function(t,s,a){"use strict";a.r(s);var e={props:["slot-key"],mounted:function(){document.querySelector(".".concat(this.$style.example)).textContent="This is rendered by inline script and styled by inline CSS"}},n=a(460),r=a(14);var o=Object(r.a)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"using-vue-in-markdown"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-vue-in-markdown"}},[t._v("#")]),t._v(" Using Vue in Markdown")]),t._v(" "),a("h2",{attrs:{id:"browser-api-access-restrictions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#browser-api-access-restrictions"}},[t._v("#")]),t._v(" Browser API Access Restrictions")]),t._v(" "),a("p",[t._v("Because VuePress applications are server-rendered in Node.js when generating static builds, any Vue usage must conform to the "),a("a",{attrs:{href:"https://ssr.vuejs.org/en/universal.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("universal code requirements"),a("OutboundLink")],1),t._v(". In short, make sure to only access Browser / DOM APIs in "),a("code",[t._v("beforeMount")]),t._v(" or "),a("code",[t._v("mounted")]),t._v(" hooks.")]),t._v(" "),a("p",[t._v("If you are using or demoing components that are not SSR-friendly (for example, contain custom directives), you can wrap them inside the built-in "),a("code",[t._v("<ClientOnly>")]),t._v(" component:")]),t._v(" "),a("div",{staticClass:"language-md extra-class"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ClientOnly")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("NonSSRFriendlyComponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ClientOnly")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("Note this does not fix components or libraries that access Browser APIs "),a("strong",[t._v("on import")]),t._v(". To use code that assumes a browser environment on import, you need to dynamically import them in proper lifecycle hooks:")]),t._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mounted")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./lib-that-access-window-on-import'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("module")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// use code")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("If your module "),a("code",[t._v("export default")]),t._v(" a Vue component, you can register it dynamically:")]),t._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("component")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-if")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("dynamicComponent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":is")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("dynamicComponent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("component")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      dynamicComponent"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mounted")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./lib-that-access-window-on-import'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("module")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dynamicComponent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("default\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[a("strong",[t._v("Also see:")])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org/v2/guide/components.html#Dynamic-Components",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue.js > Dynamic Components"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"templating"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#templating"}},[t._v("#")]),t._v(" Templating")]),t._v(" "),a("h3",{attrs:{id:"interpolation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interpolation"}},[t._v("#")]),t._v(" Interpolation")]),t._v(" "),a("p",[t._v("Each Markdown file is first compiled into HTML and then passed on as a Vue component to "),a("code",[t._v("vue-loader")]),t._v(". This means you can use Vue-style interpolation in text:")]),t._v(" "),a("p",[a("strong",[t._v("Input")])]),t._v(" "),a("div",{staticClass:"language-md extra-class"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[t._v("{{ 1 + 1 }}\n")])])]),a("p",[a("strong",[t._v("Output")])]),t._v(" "),a("div",{staticClass:"language-text"},[a("pre",[a("code",[t._v(t._s(2))])])]),t._v(" "),a("h3",{attrs:{id:"directives"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#directives"}},[t._v("#")]),t._v(" Directives")]),t._v(" "),a("p",[t._v("Directives also work:")]),t._v(" "),a("p",[a("strong",[t._v("Input")])]),t._v(" "),a("div",{staticClass:"language-md extra-class"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-for")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("i in 3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ i }} "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[a("strong",[t._v("Output")])]),t._v(" "),a("div",{staticClass:"language-text"},[a("pre",[a("code",t._l(3,(function(s){return a("span",[t._v(t._s(s)+" ")])})),0)])]),t._v(" "),a("h3",{attrs:{id:"access-to-site-page-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#access-to-site-page-data"}},[t._v("#")]),t._v(" Access to Site & Page Data")]),t._v(" "),a("p",[t._v("The compiled component does not have any private data but does have access to the "),a("RouterLink",{attrs:{to:"/theme/writing-a-theme.html#site-and-page-metadata"}},[t._v("site metadata")]),t._v(". For example:")],1),t._v(" "),a("p",[a("strong",[t._v("Input")])]),t._v(" "),a("div",{staticClass:"language-md extra-class"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[t._v("{{ $page }}\n")])])]),a("p",[a("strong",[t._v("Output")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"path"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/using-vue.html"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Using Vue in Markdown"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"frontmatter"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"escaping"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#escaping"}},[t._v("#")]),t._v(" Escaping")]),t._v(" "),a("p",[t._v("By default, fenced code blocks are automatically wrapped with "),a("code",[t._v("v-pre")]),t._v(". To display raw mustaches or Vue-specific syntax inside inline code snippets or plain text, you need to wrap a paragraph with the "),a("code",[t._v("v-pre")]),t._v(" custom container:")]),t._v(" "),a("p",[a("strong",[t._v("Input")])]),t._v(" "),a("div",{staticClass:"language-md extra-class"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[t._v("::: v-pre\n"),a("span",{pre:!0,attrs:{class:"token code keyword"}},[t._v("`{{ This will be displayed as-is }}`")]),t._v("\n:::\n")])])]),a("p",[a("strong",[t._v("Output")])]),t._v(" "),a("div",{pre:!0},[a("p",[a("code",[t._v("{{ This will be displayed as-is }}")])])]),a("h2",{attrs:{id:"using-components"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-components"}},[t._v("#")]),t._v(" Using Components")]),t._v(" "),a("p",[t._v("Any "),a("code",[t._v("*.vue")]),t._v(" files found in "),a("code",[t._v(".vuepress/components")]),t._v(" are automatically registered as "),a("a",{attrs:{href:"https://vuejs.org/v2/guide/components-registration.html#Global-Registration",target:"_blank",rel:"noopener noreferrer"}},[t._v("global"),a("OutboundLink")],1),t._v(", "),a("a",{attrs:{href:"https://vuejs.org/v2/guide/components-dynamic-async.html#Async-Components",target:"_blank",rel:"noopener noreferrer"}},[t._v("async"),a("OutboundLink")],1),t._v(" components. For example:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(".\n└─ .vuepress\n   └─ components\n      ├─ demo-1.vue\n      ├─ OtherComponent.vue\n      └─ Foo\n         └─ Bar.vue\n")])])]),a("p",[t._v("Inside any Markdown file you can then directly use the components (names are inferred from filenames):")]),t._v(" "),a("div",{staticClass:"language-md extra-class"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("demo-1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("OtherComponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Foo-Bar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),a("demo-1"),t._v(" "),a("OtherComponent"),t._v(" "),a("Foo-Bar"),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("IMPORTANT")]),t._v(" "),a("p",[t._v("Make sure a custom component’s name either contains a hyphen or is in PascalCase. Otherwise it will be treated as an inline element and wrapped inside a "),a("code",[t._v("<p>")]),t._v(" tag, which will lead to hydration mismatch because "),a("code",[t._v("<p>")]),t._v(" does not allow block elements to be placed inside it.")])]),t._v(" "),a("h3",{attrs:{id:"using-components-in-headers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-components-in-headers"}},[t._v("#")]),t._v(" Using Components In Headers")]),t._v(" "),a("p",[t._v("You can use Vue components in the headers, but note the difference between the following syntaxes:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Markdown")]),t._v(" "),a("th",[t._v("Output HTML")]),t._v(" "),a("th",[t._v("Parsed Header")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("pre",{pre:!0},[a("code",[t._v(" # text <Tag/> ")])])]),t._v(" "),a("td",[a("code",[t._v("<h1>text <Tag/></h1>")])]),t._v(" "),a("td",[a("code",[t._v("text")])])]),t._v(" "),a("tr",[a("td",[a("pre",{pre:!0},[a("code",[t._v(" # text `<Tag/>` ")])])]),t._v(" "),a("td",[a("code",[t._v("<h1>text <code>&lt;Tag/&gt;</code></h1>")])]),t._v(" "),a("td",[a("code",[t._v("text <Tag/>")])])])])]),t._v(" "),a("p",[t._v("The HTML wrapped by "),a("code",[t._v("<code>")]),t._v(" will be displayed as-is; only the HTML that is "),a("strong",[t._v("not")]),t._v(" wrapped will be parsed by Vue.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("The output HTML is accomplished by "),a("a",{attrs:{href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"}},[t._v("markdown-it"),a("OutboundLink")],1),t._v(", while the parsed headers are handled by VuePress (and used for both the "),a("RouterLink",{attrs:{to:"/theme/default-theme-config.html#sidebar"}},[t._v("sidebar")]),t._v(" and document title).")],1)]),t._v(" "),a("h2",{attrs:{id:"using-pre-processors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-pre-processors"}},[t._v("#")]),t._v(" Using Pre-processors")]),t._v(" "),a("p",[t._v("VuePress has built-in webpack support for the following pre-processors: "),a("code",[t._v("sass")]),t._v(", "),a("code",[t._v("scss")]),t._v(", "),a("code",[t._v("less")]),t._v(", "),a("code",[t._v("stylus")]),t._v(" and "),a("code",[t._v("pug")]),t._v(". All you need to do is installing the corresponding dependencies. For example, to enable "),a("code",[t._v("sass")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -D sass-loader node-sass\n")])])]),a("p",[t._v("Now you can use the following in Markdown and theme components:")]),t._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("lang")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("sass"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token style"}},[a("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n.title\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20px\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("Using "),a("code",[t._v('<template lang="pug">')]),t._v(" requires installing "),a("code",[t._v("pug")]),t._v(" and "),a("code",[t._v("pug-plain-loader")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -D pug pug-plain-loader\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("If you are a Stylus user, you don’t need to install "),a("code",[t._v("stylus")]),t._v(" and "),a("code",[t._v("stylus-loader")]),t._v(" in your project; VuePress uses Stylus internally.")]),t._v(" "),a("p",[t._v("For pre-processors that do not have built-in webpack config support, you will need to "),a("RouterLink",{attrs:{to:"/config/#configurewebpack"}},[t._v("extend the internal webpack config")]),t._v(" and install the necessary dependencies.")],1)]),t._v(" "),a("h2",{attrs:{id:"script-style-hoisting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#script-style-hoisting"}},[t._v("#")]),t._v(" Script & Style Hoisting")]),t._v(" "),a("p",[t._v("Sometimes you may need to apply some JavaScript or CSS only to the current page. In those cases, you can directly write root-level "),a("code",[t._v("<script>")]),t._v(" or "),a("code",[t._v("<style>")]),t._v(" blocks in the Markdown file. These will be hoisted out of the compiled HTML and used as the "),a("code",[t._v("<script>")]),t._v(" and "),a("code",[t._v("<style>")]),t._v(" blocks for the resulting Vue single-file component:")]),t._v(" "),a("p",{staticClass:"demo",class:t.$style.example}),t._v(" "),a("h2",{attrs:{id:"built-in-components"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#built-in-components"}},[t._v("#")]),t._v(" Built-In Components")]),t._v(" "),a("h3",{attrs:{id:"outboundlink"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#outboundlink"}},[t._v("#")]),t._v(" OutboundLink "),a("Badge",{attrs:{text:"stable"}})],1),t._v(" "),a("p",[t._v("The indicator "),a("OutboundLink"),t._v(" is used to denote external links. In VuePress, this component has been followed by every external link.")],1),t._v(" "),a("h3",{attrs:{id:"clientonly"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clientonly"}},[t._v("#")]),t._v(" ClientOnly "),a("Badge",{attrs:{text:"stable"}})],1),t._v(" "),a("p",[t._v("See "),a("a",{attrs:{href:"#browser-api-access-restrictions"}},[t._v("Browser API Access Restrictions")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"content"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#content"}},[t._v("#")]),t._v(" Content")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("Props")]),t._v(":")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("pageKey")]),t._v(" - string, "),a("RouterLink",{attrs:{to:"/guide/global-computed.html#page"}},[t._v("page")]),t._v("'s hash key, defaults to current page’s key.")],1),t._v(" "),a("li",[a("code",[t._v("slotKey")]),t._v(" - string, key of "),a("RouterLink",{attrs:{to:"/guide/markdown-slot.html"}},[t._v("Markdown slot")]),t._v(". Defaults to "),a("RouterLink",{attrs:{to:"/guide/markdown-slot.html#default-slot-content"}},[t._v("default slot")]),t._v(".")],1)])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Usage")]),t._v("：")])])]),t._v(" "),a("p",[t._v("Specify a specific slot for a specific page (.md) for rendering. This is useful when using a "),a("RouterLink",{attrs:{to:"/theme/default-theme-config.html#custom-layout-for-specific-pages"}},[t._v("Custom Layout")]),t._v(" or "),a("RouterLink",{attrs:{to:"/theme/writing-a-theme.html"}},[t._v("Writing a theme")]),t._v(":")],1),t._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),a("p",[a("strong",[t._v("Also see:")])]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/guide/global-computed.html#page"}},[t._v("Global Computed > $page")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/guide/markdown-slot.html"}},[t._v("Markdown Slot")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/theme/writing-a-theme.html#content-outlet"}},[t._v("Writing a theme > Content Outlet")])],1)]),t._v(" "),a("h3",{attrs:{id:"badge"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#badge"}},[t._v("#")]),t._v(" Badge "),a("Badge",{attrs:{text:"beta",type:"warning"}}),t._v(" "),a("Badge",{attrs:{text:"default theme"}})],1),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("Props")]),t._v(":")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("text")]),t._v(" - string")]),t._v(" "),a("li",[a("code",[t._v("type")]),t._v(" - string, optional value: "),a("code",[t._v('"tip"|"warning"|"error"')]),t._v(", defaults to "),a("code",[t._v('"tip"')]),t._v(".")]),t._v(" "),a("li",[a("code",[t._v("vertical")]),t._v(" - string, optional value: "),a("code",[t._v('"top"|"middle"')]),t._v(", defaults to "),a("code",[t._v('"top"')]),t._v(".")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Usage")]),t._v(":")])])]),t._v(" "),a("p",[t._v("You can use this component in a header to add some status for an API:")]),t._v(" "),a("div",{staticClass:"language-md extra-class"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("###")]),t._v(' Badge <Badge text="beta" type="warning"/> <Badge text="default theme"/>')]),t._v("\n")])])]),a("p",[a("strong",[t._v("Also see:")])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#using-components-in-headers"}},[t._v("Using Components In Headers")])])])],1)}),[],!1,(function(t){this.$style=n.default.locals||n.default}),null,null);s.default=o.exports}}]);