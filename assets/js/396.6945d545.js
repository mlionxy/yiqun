(window.webpackJsonp=window.webpackJsonp||[]).push([[396],{870:function(v,_,t){"use strict";t.r(_);var s=t(14),i=Object(s.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"操作系统基础"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#操作系统基础"}},[v._v("#")]),v._v(" 操作系统基础")]),v._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[v._v("Hi")]),v._v(" "),t("p",[v._v("计算机基础知识的重要性是不言而喻的，现在的技术可以说是按秒的速度在更新，可是基础的东西却几十年不会变一次。本文为第一篇，操作系统概览，带着大家熟悉一下整个计算机操作系统中都有些什么，后边详细文章中会深入分享的知识点")])]),v._v(" "),t("p",[t("strong",[v._v("1、什么是操作系统？")])]),v._v(" "),t("ul",[t("li",[v._v("操作系统是管理计算机硬件和软件资源的计算机程序。也就是说，操作系统实际上是一个计算机程序，功能是管理计算机硬件和软件资源。")]),v._v(" "),t("li",[v._v("管理配置内存、决定资源供需顺序、控制输入输出设备等。")]),v._v(" "),t("li",[v._v("操作系统提供让用户和系统交互的操作界面")]),v._v(" "),t("li",[v._v("操作系统的种类是多种多样的，不局限于计算机")]),v._v(" "),t("li",[v._v("从手机到超级计算机，操作系统可以简单也可以复杂")]),v._v(" "),t("li",[v._v("在不同的设备上，操作系统可向用户呈现多种操作手段(比如在手机上，我们可以通过手指的触摸控制手机里的硬件设备(如摄像头、声音)、而在我们普通的PC端，我们主要是通过鼠标、键盘来控制硬件)")])]),v._v(" "),t("p",[v._v("我们平时中所能接触到的计算机操作系统： a.比如说手机，手机分为安卓和IOS，其实我们所说的安卓就属于安卓操作系统，IOS就是指IOS操作系统。 Android里边我们经常会知道小米的MIUI、OPPO/VIVO的colorOS、魅族的Flyme等，这一些严格来说其实不属于操作系统，这些都是基于Android这个操作系统改造而来的(可能是换了UI、做了优化等，本质还是Android操作系统)")]),v._v(" "),t("p",[v._v("再比如说我们常说的电脑，Windows、Linux、MacOS等，这些都是我们生活中常见的计算机操作系统 想Linux系统有Centos、Ubuntu，他们本质上都属于Linux操作系统")]),v._v(" "),t("p",[v._v("下面给出计算机操作系统的终极定义："),t("strong",[v._v("它是管理硬件、提供用户交互的软件系统")])]),v._v(" "),t("p",[t("strong",[v._v("为什么要使用操作系统")])]),v._v(" "),t("ul",[t("li",[v._v("我们不可能直接的去操作计算机的硬件。比如说我需要计算机给我算1+1，不可能说我直接告诉CPU说我们要算1+1，而我们需要借助操作系统，让操作系统去告诉硬件我们要做什么事情")]),v._v(" "),t("li",[v._v("计算机发展到现在，设备种类繁多复杂，需要统一界面。操作系统提供统一的操作界面，屏蔽了不同设备之间的差异。有了操作系统我们就不需要关注不同的设备，也不需要关注不同的接口")]),v._v(" "),t("li",[v._v("操作系统的简易性使得更多人能够使用计算机。更多的人可以使用计算机就意味着解放和发展的生产力，对人类科技的提升是大有帮助的")])]),v._v(" "),t("p",[t("strong",[v._v("操作系统的基本功能")])]),v._v(" "),t("ul",[t("li",[v._v("处理器资源(也就是CPU资源)")]),v._v(" "),t("li",[v._v("存储器资源(内存、硬盘)")]),v._v(" "),t("li",[v._v("IO设备资源(打印机、键盘、显示器)")]),v._v(" "),t("li",[v._v("文件资源")])]),v._v(" "),t("p",[t("strong",[v._v("操作系统会统一管理着计算机资源")])]),v._v(" "),t("p",[v._v("比如说我们要操作一个文件，我们并不是直接操作这个文件存储的地方的，我们是通过操作系统去操作这个文件的 再比如说我们存储或读取一个文件的时候，我们不是直接去控制存储器里边的机械设备读取的，而是通过操作系统去读写这些信息的")]),v._v(" "),t("p",[v._v("有了操作系统，我们在使用这些计算机资源的时候有什么不一样呢？")]),v._v(" "),t("img",{attrs:{src:v.$withBase("/guidesystem.jpg"),alt:"mixureSecure"}}),v._v(" "),t("p",[t("strong",[v._v("用户无需面向硬件接口编程")]),v._v("。也就是说我们无需面向存储器、IO设备这些硬件，而只需面向操作系统去编程就可以了。 举个例子，在操作系统里边有IO设备管理软件，这个软件提供了读写接口，用户在进行编程时，直接调用这个接口，并不需要具体的接触某个IO设备")]),v._v(" "),t("p",[t("strong",[v._v("操作实现了对计算机资源的抽象")]),v._v("。这个抽象就是通过管理软件来实现的，这些管理软件屏蔽了硬件设备，并且给用户提供了逻辑设备，使得每个用户在使用的时候都是一样的，这个就是对计算机资源的抽象")]),v._v(" "),t("p",[t("strong",[v._v("操作系统提供了用户与计算机之间的接口")]),v._v("。如：图形窗口形式（windows中通过鼠标点点点）、命令形式(Linux中通过在shell终端中输入命令的方式)、系统调用形式(主要是编程的时候，比如打开文件、读取数据这些操作，都是通过系统调用来完成的) 如果给硬件、操作系统和用户画一个层次的话，接口就相当于下边红色部分的层次：")]),v._v(" "),t("img",{attrs:{src:v.$withBase("/guidesystem2.jpg"),alt:"mixureSecure"}})])}),[],!1,null,null,null);_.default=i.exports}}]);