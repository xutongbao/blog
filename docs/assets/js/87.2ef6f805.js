(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{608:function(r,t,e){"use strict";e.r(t);var n=e(7),s=Object(n.a)({},(function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[e("p",[r._v("当我们输入URL，按下回车发生了什么？")]),r._v(" "),e("p",[r._v("查找服务器的IP地址："),e("br"),r._v("\n1.在本地hosts文件中查询"),e("br"),r._v("\n2.在浏览器缓存中查询。"),e("br"),r._v("\n3.在系统缓存中查询。"),e("br"),r._v("\n4.在路由器缓存中查询。"),e("br"),r._v("\n5.在DNS服务器中查询，直到找到这个IP地址。"),e("br"),r._v("\n6.通过TCP协议与Web服务器创建连接。(俗称三次握手)，向服务器发送请求"),e("br"),r._v("\n7.浏览器接收响应，开始下载并渲染，将页面呈现在我们面前"),e("br"),r._v("\n浏览器接收到html代码，即自上而下解析：构建DOM树+构建CSSOM =>渲染树（解析——构建对象模型Object Model）"),e("br"),r._v("\n遇到script文件和CSS文件都会另起线程去下载；内嵌的script标签和style标签，会直接执行，分别阻塞DOM树和CSS规则树"),e("br"),r._v("\n无论内嵌的script脚本、外链的script脚本下载完都会阻塞构建DOM树； CSS文件执行和内嵌的style标签阻塞CSSOM"),e("br"),r._v("\n直到DOM树和CSSOM规则生成完毕后，浏览器结合两者生成渲染树RenderTree，浏览器将渲染树绘制到页面上，也就是首次显示页面")]),r._v(" "),e("p",[r._v("最后，body底部的JS脚本下载完成后通过DOM API修改DOM， 通过CSSOM API修改样式，每次修改都会造成渲染树RenderTree的重新布局和重绘， 也就是Reflow。（而修改颜色的话，只会Repaint 不会Reflow")]),r._v(" "),e("p",[e("strong",[e("strong",[r._v("备注")]),r._v("：欢迎加入web前端求职招聘qq群："),e("strong",[r._v("668352707")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);