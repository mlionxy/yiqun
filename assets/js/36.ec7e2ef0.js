(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{498:function(e,t,a){"use strict";a.r(t);var r=a(14),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"frontmatter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter"}},[e._v("#")]),e._v(" Frontmatter")]),e._v(" "),a("p",[e._v("Any Markdown file that contains a YAML frontmatter block will be processed by "),a("a",{attrs:{href:"https://github.com/jonschlinkert/gray-matter",target:"_blank",rel:"noopener noreferrer"}},[e._v("gray-matter"),a("OutboundLink")],1),e._v(". The frontmatter must be at the top of the Markdown file, and must take the form of valid YAML set between triple-dashed lines. Example:")]),e._v(" "),a("div",{staticClass:"language-markdown extra-class"},[a("pre",{pre:!0,attrs:{class:"language-markdown"}},[a("code",[a("span",{pre:!0,attrs:{class:"token hr punctuation"}},[e._v("---")]),e._v("\ntitle: Blogging with VuePress\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[e._v("lang: en-US\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("---")])]),e._v("\n")])])]),a("p",[e._v("Between the triple-dashed lines, you can set "),a("a",{attrs:{href:"#predefined-variables"}},[e._v("predefined variables")]),e._v(", or even create custom ones of your own. These variables can be used via the "),a("code",[a("RouterLink",{attrs:{to:"/guide/global-computed.html#frontmatter"}},[e._v("$frontmatter")])],1),e._v(" variable.")]),e._v(" "),a("p",[e._v("Here’s an example of how you could use it in your Markdown file:")]),e._v(" "),a("div",{staticClass:"language-markdown extra-class"},[a("pre",{pre:!0,attrs:{class:"language-markdown"}},[a("code",[a("span",{pre:!0,attrs:{class:"token hr punctuation"}},[e._v("---")]),e._v("\ntitle: Blogging with VuePress\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[e._v("lang: en-US\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("---")])]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("#")]),e._v(" {{ $frontmatter.title }}")]),e._v("\n\nMy blog post is written in {{ $frontmatter.language }}.\n")])])]),a("h2",{attrs:{id:"alternative-frontmatter-formats"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#alternative-frontmatter-formats"}},[e._v("#")]),e._v(" Alternative frontmatter Formats")]),e._v(" "),a("p",[e._v("VuePress also supports JSON and "),a("a",{attrs:{href:"https://github.com/toml-lang/toml",target:"_blank",rel:"noopener noreferrer"}},[e._v("TOML"),a("OutboundLink")],1),e._v(" frontmatter syntax.")]),e._v(" "),a("p",[e._v("JSON frontmatter needs to start and end in curly braces:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('---\n{\n  "title": "Blogging Like a Hacker",\n  "lang": "en-US"\n}\n---\n')])])]),a("p",[e._v("TOML frontmatter needs to be explicitly marked as TOML:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('---toml\ntitle = "Blogging Like a Hacker"\nlang = "en-US"\n---\n')])])]),a("h2",{attrs:{id:"predefined-variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#predefined-variables"}},[e._v("#")]),e._v(" Predefined Variables")]),e._v(" "),a("h3",{attrs:{id:"title"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#title"}},[e._v("#")]),e._v(" title")]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("string")])]),e._v(" "),a("li",[e._v("Default: "),a("code",[e._v("h1_title || siteConfig.title")])])]),e._v(" "),a("p",[e._v("Title of the current page.")]),e._v(" "),a("h3",{attrs:{id:"lang"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lang"}},[e._v("#")]),e._v(" lang")]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("string")])]),e._v(" "),a("li",[e._v("Default: "),a("code",[e._v("en-US")])])]),e._v(" "),a("p",[e._v("Language of the current page.")]),e._v(" "),a("h3",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" description")]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("string")])]),e._v(" "),a("li",[e._v("Default: "),a("code",[e._v("siteConfig.description")])])]),e._v(" "),a("p",[e._v("Description of the current page.")]),e._v(" "),a("h3",{attrs:{id:"layout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#layout"}},[e._v("#")]),e._v(" layout")]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("string")])]),e._v(" "),a("li",[e._v("Default: "),a("code",[e._v("Layout")])])]),e._v(" "),a("p",[e._v("Set the layout component of the current page.")]),e._v(" "),a("h3",{attrs:{id:"permalink"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#permalink"}},[e._v("#")]),e._v(" permalink")]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("string")])]),e._v(" "),a("li",[e._v("Default: "),a("code",[e._v("siteConfig.permalink")])])]),e._v(" "),a("p",[e._v("See "),a("RouterLink",{attrs:{to:"/guide/permalinks.html"}},[e._v("Permalinks")]),e._v(" for details.")],1),e._v(" "),a("h3",{attrs:{id:"metatitle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#metatitle"}},[e._v("#")]),e._v(" metaTitle")]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("string")])]),e._v(" "),a("li",[e._v("Default: "),a("code",[e._v("`${page.title} | ${siteConfig.title}`")])])]),e._v(" "),a("p",[e._v("Override the default meta title.")]),e._v(" "),a("h3",{attrs:{id:"meta"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#meta"}},[e._v("#")]),e._v(" meta")]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("array")])]),e._v(" "),a("li",[e._v("Default: "),a("code",[e._v("undefined")])])]),e._v(" "),a("p",[e._v("Specify extra meta tags to be injected:")]),e._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("---")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("meta")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" description\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" hello\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" keywords\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" super duper SEO\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("---")]),e._v("\n")])])]),a("h3",{attrs:{id:"canonicalurl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#canonicalurl"}},[e._v("#")]),e._v(" canonicalUrl "),a("Badge",{attrs:{text:"1.7.1+"}})],1),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("string")])]),e._v(" "),a("li",[e._v("Default: "),a("code",[e._v("undefined")])])]),e._v(" "),a("p",[e._v("Set the canonical URL for the current page.")]),e._v(" "),a("h2",{attrs:{id:"predefined-variables-powered-by-default-theme"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#predefined-variables-powered-by-default-theme"}},[e._v("#")]),e._v(" Predefined Variables Powered By Default Theme")]),e._v(" "),a("h3",{attrs:{id:"navbar"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#navbar"}},[e._v("#")]),e._v(" navbar")]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("boolean")])]),e._v(" "),a("li",[e._v("Default: "),a("code",[e._v("undefined")])])]),e._v(" "),a("p",[e._v("See "),a("RouterLink",{attrs:{to:"/theme/default-theme-config.html#disable-the-navbar"}},[e._v("Default Theme Config > Disable the Navbar")]),e._v(" for details.")],1),e._v(" "),a("h3",{attrs:{id:"sidebar"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sidebar"}},[e._v("#")]),e._v(" sidebar")]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("boolean|'auto'")])]),e._v(" "),a("li",[e._v("Default: "),a("code",[e._v("undefined")])])]),e._v(" "),a("p",[e._v("See "),a("RouterLink",{attrs:{to:"/theme/default-theme-config.html#sidebar"}},[e._v("Default Theme Config > Sidebar")]),e._v(" for details.")],1),e._v(" "),a("h3",{attrs:{id:"prev"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prev"}},[e._v("#")]),e._v(" prev")]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("boolean|string")])]),e._v(" "),a("li",[e._v("Default: "),a("code",[e._v("undefined")])])]),e._v(" "),a("p",[e._v("See "),a("RouterLink",{attrs:{to:"/theme/default-theme-config.html#prev-next-links"}},[e._v("Default Theme Config > Prev / Next Links")]),e._v(" for details.")],1),e._v(" "),a("h3",{attrs:{id:"next"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#next"}},[e._v("#")]),e._v(" next")]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("boolean|string")])]),e._v(" "),a("li",[e._v("Default: "),a("code",[e._v("undefined")])])]),e._v(" "),a("p",[e._v("See "),a("RouterLink",{attrs:{to:"/theme/default-theme-config.html#prev-next-links"}},[e._v("Default Theme Config > Prev / Next Links")]),e._v(" for details.")],1),e._v(" "),a("h3",{attrs:{id:"search"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#search"}},[e._v("#")]),e._v(" search")]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("boolean")])]),e._v(" "),a("li",[e._v("Default: "),a("code",[e._v("undefined")])])]),e._v(" "),a("p",[e._v("See "),a("RouterLink",{attrs:{to:"/theme/default-theme-config.html#built-in-search"}},[e._v("Default Theme Config > Built-in Search")]),e._v(" for details.")],1),e._v(" "),a("h3",{attrs:{id:"tags"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tags"}},[e._v("#")]),e._v(" tags")]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("array")])]),e._v(" "),a("li",[e._v("Default: "),a("code",[e._v("undefined")])])]),e._v(" "),a("p",[e._v("See "),a("RouterLink",{attrs:{to:"/theme/default-theme-config.html#built-in-search"}},[e._v("Default Theme Config > Built-in Search")]),e._v(". For details.")],1)])}),[],!1,null,null,null);t.default=n.exports}}]);