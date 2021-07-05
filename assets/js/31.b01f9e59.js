(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{493:function(t,e,o){"use strict";o.r(e);var r=o(14),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"introduction"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),o("Bit"),t._v(" "),o("p",[t._v("VuePress is composed of two parts: a "),o("a",{attrs:{href:"https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/core",target:"_blank",rel:"noopener noreferrer"}},[t._v("minimalistic static site generator"),o("OutboundLink")],1),t._v(" with a Vue-powered "),o("RouterLink",{attrs:{to:"/theme/"}},[t._v("theming system")]),t._v(" and "),o("RouterLink",{attrs:{to:"/plugin/"}},[t._v("Plugin API")]),t._v(", and a "),o("RouterLink",{attrs:{to:"/theme/default-theme-config.html"}},[t._v("default theme")]),t._v(" optimized for writing technical documentation. It was created to support the documentation needs of Vue’s own sub projects.")],1),t._v(" "),o("p",[t._v("Each page generated by VuePress has its own pre-rendered static HTML, providing great loading performance and is SEO-friendly. Yet, once the page is loaded, Vue takes over the static content and turns it into a full Single-Page Application (SPA). Extra pages are fetched on demand as the user navigates around the site.")]),t._v(" "),o("h2",{attrs:{id:"how-it-works"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-it-works"}},[t._v("#")]),t._v(" How It Works")]),t._v(" "),o("p",[t._v("A VuePress site is in fact a SPA powered by "),o("a",{attrs:{href:"http://vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue"),o("OutboundLink")],1),t._v(", "),o("a",{attrs:{href:"https://github.com/vuejs/vue-router",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue Router"),o("OutboundLink")],1),t._v(" and "),o("a",{attrs:{href:"http://webpack.js.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack"),o("OutboundLink")],1),t._v(". If you’ve used Vue before, you will notice the familiar development experience when you are writing or developing custom themes (you can even use Vue DevTools to debug your custom theme!).")]),t._v(" "),o("p",[t._v("During the build, we create a server-rendered version of the app and render the corresponding HTML by virtually visiting each route. This approach is inspired by "),o("a",{attrs:{href:"https://nuxtjs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nuxt"),o("OutboundLink")],1),t._v("'s "),o("code",[t._v("nuxt generate")]),t._v(" command and other projects like "),o("a",{attrs:{href:"https://www.gatsbyjs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gatsby"),o("OutboundLink")],1),t._v(".")]),t._v(" "),o("p",[t._v("Each Markdown file is compiled into HTML with "),o("a",{attrs:{href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"}},[t._v("markdown-it"),o("OutboundLink")],1),t._v(" and then processed as the template of a Vue component. This allows you to directly use Vue inside your Markdown files and is great when you need to embed dynamic content.")]),t._v(" "),o("h2",{attrs:{id:"features"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#features"}},[t._v("#")]),t._v(" Features")]),t._v(" "),o("p",[o("strong",[t._v("Built-in Markdown extensions")])]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/guide/markdown.html#table-of-contents"}},[t._v("Table of Contents")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/guide/markdown.html#custom-containers"}},[t._v("Custom Containers")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/guide/markdown.html#line-highlighting-in-code-blocks"}},[t._v("Line Highlighting")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/guide/markdown.html#line-numbers"}},[t._v("Line Numbers")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/guide/markdown.html#import-code-snippets"}},[t._v("Import Code Snippets")])],1)]),t._v(" "),o("p",[o("strong",[t._v("Using Vue in Markdown")])]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/guide/using-vue.html#templating"}},[t._v("Templating")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/guide/using-vue.html#using-components"}},[t._v("Using Components")])],1)]),t._v(" "),o("p",[o("strong",[t._v("Vue-powered custom theme system")])]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/theme/writing-a-theme.html#site-and-page-metadata"}},[t._v("Metadata")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/theme/writing-a-theme.html#content-excerpt"}},[t._v("Content Excerpt")])],1)]),t._v(" "),o("p",[o("strong",[t._v("Default theme")])]),t._v(" "),o("ul",[o("li",[t._v("Responsive layout")]),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/theme/default-theme-config.html#homepage"}},[t._v("Optional Homepage")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/theme/default-theme-config.html#built-in-search"}},[t._v("Simple out-of-the-box header-based search")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/theme/default-theme-config.html#algolia-search"}},[t._v("Algolia Search")])],1),t._v(" "),o("li",[t._v("Customizable "),o("RouterLink",{attrs:{to:"/theme/default-theme-config.html#navbar"}},[t._v("navbar")]),t._v(" and "),o("RouterLink",{attrs:{to:"/theme/default-theme-config.html#sidebar"}},[t._v("sidebar")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/theme/default-theme-config.html#git-repo-and-edit-links"}},[t._v("Auto-generated GitHub link and page edit links")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/theme/default-theme-config.html#popup-ui-to-refresh-contents"}},[t._v("PWA: Popup UI to refresh contents")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/theme/default-theme-config.html#last-updated"}},[t._v("Last Updated")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/guide/i18n.html"}},[t._v("Multi-Language Support")])],1)]),t._v(" "),o("p",[o("strong",[t._v("Blog theme")])]),t._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://vuepress-theme-blog.ulivz.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Documentation"),o("OutboundLink")],1)]),t._v(" "),o("li",[o("a",{attrs:{href:"https://ulivz.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Live Example"),o("OutboundLink")],1)])]),t._v(" "),o("p",[o("strong",[t._v("Plugin")])]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/plugin/"}},[t._v("Powerful Plugin API")])],1),t._v(" "),o("li",[o("a",{attrs:{href:"https://vuepress-plugin-blog.ulivz.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Blog Plugin"),o("OutboundLink")],1)]),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/plugin/official/plugin-search.html"}},[t._v("Search Plugin")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/plugin/official/plugin-pwa.html"}},[t._v("PWA Plugin")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/plugin/official/plugin-google-analytics.html"}},[t._v("Google Analytics Plugin")])],1),t._v(" "),o("li",[t._v("...")])]),t._v(" "),o("h2",{attrs:{id:"why-not"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#why-not"}},[t._v("#")]),t._v(" Why Not ...?")]),t._v(" "),o("h3",{attrs:{id:"nuxt"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#nuxt"}},[t._v("#")]),t._v(" Nuxt")]),t._v(" "),o("p",[t._v("Nuxt is capable of doing what VuePress does, but it’s designed for building applications. VuePress is focused on content-centric static sites and provides features tailored for technical documentation out of the box.")]),t._v(" "),o("h3",{attrs:{id:"docsify-docute"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#docsify-docute"}},[t._v("#")]),t._v(" Docsify / Docute")]),t._v(" "),o("p",[t._v("Both are great projects and also Vue-powered. Except they are both fully runtime-driven and therefore not SEO-friendly. If you don’t care for SEO and don’t want to mess with installing dependencies, these are still great choices.")]),t._v(" "),o("h3",{attrs:{id:"hexo"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#hexo"}},[t._v("#")]),t._v(" Hexo")]),t._v(" "),o("p",[t._v("Hexo has been serving the Vue docs well - in fact, we are probably still a long way to go from migrating away from it for our main site. The biggest problem is that its theming system is static and string-based - we want to take advantage of Vue for both the layout and the interactivity. Also, Hexo’s Markdown rendering isn’t the most flexible to configure.")]),t._v(" "),o("h3",{attrs:{id:"gitbook"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#gitbook"}},[t._v("#")]),t._v(" GitBook")]),t._v(" "),o("p",[t._v("We’ve been using GitBook for most of our sub project docs. The primary problem with GitBook is that its development reload performance is intolerable with a large amount of files. The default theme also has a pretty limiting navigation structure, and the theming system is, again, not Vue based. The team behind GitBook is also more focused on turning it into a commercial product rather than an open-source tool.")])],1)}),[],!1,null,null,null);e.default=a.exports}}]);