(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{514:function(t,e,s){"use strict";s.r(e);var a=s(14),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"技术总览"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#技术总览"}},[t._v("#")]),t._v(" 技术总览")]),t._v(" "),s("h2",{attrs:{id:"prerequisites"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node.js 10+"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://classic.yarnpkg.com/en/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Yarn Classic"),s("OutboundLink")],1),t._v(" (Optional)*")])]),t._v(" "),s("p",[t._v("* "),s("em",[t._v("If your project is using webpack 3.x, you may notice some installation issues with npm. In this case, we recommend using Yarn.")])]),t._v(" "),s("h2",{attrs:{id:"quick-start"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#quick-start"}},[t._v("#")]),t._v(" Quick Start")]),t._v(" "),s("p",[t._v("The fastest way to get your VuePress project setup is to use our "),s("a",{attrs:{href:"https://github.com/vuepressjs/create-vuepress-site/",target:"_blank",rel:"noopener noreferrer"}},[t._v("create-vuepress-site generator"),s("OutboundLink")],1),t._v(" which will help scaffold the basic VuePress site structure for you.")]),t._v(" "),s("p",[t._v("To use it, open up your terminal in the desired directory and run the following command:")]),t._v(" "),s("code-group",[s("code-block",{attrs:{title:"YARN",active:""}},[s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" create vuepress-site "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("optionalDirectoryName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])]),t._v(" "),s("code-block",{attrs:{title:"NPM"}},[s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("npx create-vuepress-site "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("optionalDirectoryName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])])],1),t._v(" "),s("p",[t._v("You will then have the opportunity to configure your VuePress site’s metadata such as:")]),t._v(" "),s("ul",[s("li",[t._v("Project Name")]),t._v(" "),s("li",[t._v("Description")]),t._v(" "),s("li",[t._v("Maintainer Email")]),t._v(" "),s("li",[t._v("Maintainer Name")]),t._v(" "),s("li",[t._v("Repository URL")])]),t._v(" "),s("p",[t._v("Once it is complete, you should see your new VuePress site scaffolded in your directory! 🎉")]),t._v(" "),s("h2",{attrs:{id:"manual-installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#manual-installation"}},[t._v("#")]),t._v(" Manual Installation")]),t._v(" "),s("p",[t._v("This section will help you build a basic VuePress documentation site from ground up. If you already have an existing project and would like to keep documentation inside the project, start from Step 3.")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Create and change into a new directory")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" vuepress-starter "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" vuepress-starter\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Initialize with your preferred package manager")]),t._v(" "),s("code-group",[s("code-block",{attrs:{title:"YARN",active:""}},[s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" init\n")])])])]),t._v(" "),s("code-block",{attrs:{title:"NPM"}},[s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" init\n")])])])])],1)],1),t._v(" "),s("li",[s("p",[t._v("Install VuePress locally")]),t._v(" "),s("code-group",[s("code-block",{attrs:{title:"YARN",active:""}},[s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -D vuepress\n")])])])]),t._v(" "),s("code-block",{attrs:{title:"NPM"}},[s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -D vuepress\n")])])])])],1)],1),t._v(" "),s("li",[s("p",[t._v("Create your first document")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" docs "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'# Hello VuePress'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" docs/README.md\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Add some "),s("a",{attrs:{href:"https://classic.yarnpkg.com/en/docs/package-json#toc-scripts",target:"_blank",rel:"noopener noreferrer"}},[t._v("scripts"),s("OutboundLink")],1),t._v(" to "),s("code",[t._v("package.json")])]),t._v(" "),s("p",[t._v("This step is optional but highly recommended, the rest of the documentation will assume those scripts being added.")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"docs:dev"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vuepress dev docs"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"docs:build"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vuepress build docs"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Serve the documentation site in the local server")]),t._v(" "),s("code-group",[s("code-block",{attrs:{title:"YARN",active:""}},[s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" docs:dev\n")])])])]),t._v(" "),s("code-block",{attrs:{title:"NPM"}},[s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run docs:dev\n")])])])])],1),t._v(" "),s("p",[t._v("VuePress will start a hot-reloading development server at "),s("a",{attrs:{href:"http://localhost:8080",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:8080"),s("OutboundLink")],1),t._v(".")])],1)]),t._v(" "),s("p",[t._v("By now, you should have a basic but functional VuePress documentation site. Next, learn about VuePress’ recommended "),s("RouterLink",{attrs:{to:"/guide/directory-structure.html"}},[t._v("directory structure")]),t._v(" and the basics of "),s("RouterLink",{attrs:{to:"/guide/basic-config.html"}},[t._v("configuration")]),t._v(" in VuePress.")],1),t._v(" "),s("p",[t._v("Once you’re familiar with those concepts mentioned above, learn how to enrich your content with "),s("RouterLink",{attrs:{to:"/guide/assets.html"}},[t._v("static assets")]),t._v(", "),s("RouterLink",{attrs:{to:"/guide/markdown.html"}},[t._v("Markdown extensions")]),t._v(" and "),s("RouterLink",{attrs:{to:"/guide/using-vue.html"}},[t._v("vue components")]),t._v(".")],1),t._v(" "),s("p",[t._v("And when your documentation site starts to take shape, be sure to read about "),s("RouterLink",{attrs:{to:"/guide/i18n.html"}},[t._v("multi-language support")]),t._v(" and the "),s("RouterLink",{attrs:{to:"/guide/deploy.html"}},[t._v("deployment guide")]),t._v(".")],1)],1)}),[],!1,null,null,null);e.default=r.exports}}]);