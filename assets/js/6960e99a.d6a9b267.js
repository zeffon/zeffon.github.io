"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3579],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=u(n),k=a,d=s["".concat(p,".").concat(k)]||s[k]||c[k]||o;return n?r.createElement(d,i(i({ref:t},m),{},{components:n})):r.createElement(d,i({ref:t},m))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},23807:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},assets:function(){return m},toc:function(){return c},default:function(){return k}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={slug:"heroku-v2ray",title:"Heroku \u642d\u5efa V2ray",authors:"zeffon",tags:["notes"],date:new Date("2019-11-25T00:00:00.000Z")},p=void 0,u={permalink:"/blog/heroku-v2ray",editUrl:"https://github.com/zeffon/zeffon.github.io/blob/master/blog/2019/2019-11-25-heroku-v2ray.md",source:"@site/blog/2019/2019-11-25-heroku-v2ray.md",title:"Heroku \u642d\u5efa V2ray",description:"Heroku \u662f\u4e00\u4e2a\u652f\u6301\u591a\u8bed\u8a00\u7684 PaaS\u3002\u7b80\u5355\u6765\u8bf4\u8fd9\u662f\u4e00\u4e2a\u53ef\u4ee5\u514d\u8d39\u5feb\u901f\u5c06\u81ea\u5df1\u7684\u5e94\u7528\u90e8\u7f72\u5728\u4e0a\u9762\u7684\u4e91\u5e73\u53f0\u3002",date:"2019-11-25T00:00:00.000Z",formattedDate:"November 25, 2019",tags:[{label:"notes",permalink:"/blog/tags/notes"}],readingTime:.4,truncated:!0,authors:[{name:"Zeffon Wu",title:"A web engineer",url:"https://github.com/zeffon",imageURL:"https://github.com/zeffon.png",key:"zeffon"}],prevItem:{title:"Linux\u4e2d\u7684\u73af\u5883\u53d8\u91cf\u914d\u7f6e\u6587\u4ef6",permalink:"/blog/linux-environment-variable"},nextItem:{title:"acme.sh\u514d\u8d39\u7533\u8bf7Let's Encrypt\u6cdb\u57df\u540d\u8bc1\u4e66",permalink:"/blog/acme.sh"}},m={authorsImageUrls:[void 0]},c=[{value:"\u642d\u5efa",id:"\u642d\u5efa",children:[]},{value:"\u8fde\u63a5",id:"\u8fde\u63a5",children:[]}],s={toc:c};function k(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Heroku \u662f\u4e00\u4e2a\u652f\u6301\u591a\u8bed\u8a00\u7684 PaaS\u3002\u7b80\u5355\u6765\u8bf4\u8fd9\u662f\u4e00\u4e2a\u53ef\u4ee5\u514d\u8d39\u5feb\u901f\u5c06\u81ea\u5df1\u7684\u5e94\u7528\u90e8\u7f72\u5728\u4e0a\u9762\u7684\u4e91\u5e73\u53f0\u3002"),(0,o.kt)("h3",{id:"\u642d\u5efa"},"\u642d\u5efa"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u9996\u5148\u9700\u8981\u6709 heroku \u8d26\u53f7\uff0c\u6240\u4ee5\u9700\u8981\u5148",(0,o.kt)("a",{parentName:"li",href:"https://signup.heroku.com/"},"\u6ce8\u518c")),(0,o.kt)("li",{parentName:"ol"},"\u9a8c\u8bc1\u5b8c heroku \u8d26\u53f7\u540e\uff0c\u4f7f\u7528\u5927\u795e",(0,o.kt)("inlineCode",{parentName:"li"},"zyp997"),"\u5199\u63d2\u4ef6",(0,o.kt)("a",{parentName:"li",href:"https://github.com/zyp997/ss-heroku"},"ss-heroku"),"\u3002\u76f4\u63a5\u70b9\u51fb README.md \u4e2d",(0,o.kt)("inlineCode",{parentName:"li"},"Deploy to Heroku"),"\u56fe\u6807\uff0c\u8fdb\u884c\u4e00\u952e\u5728 Heroku \u8fdb\u884c\u642d\u5efa v2ray"),(0,o.kt)("li",{parentName:"ol"},"\u8df3\u8f6c\u5230 Heroku \u586b\u5199\u4fe1\u606f\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"\u540d\u79f0"),"\u968f\u4fbf\u586b\u5199\u3001",(0,o.kt)("inlineCode",{parentName:"li"},"\u5730\u533a"),"\u9009\u62e9\u5c31\u8fd1\u7684\u3001",(0,o.kt)("inlineCode",{parentName:"li"},"AppName"),"\u9700\u8981\u4e0e\u524d\u9762\u7684",(0,o.kt)("inlineCode",{parentName:"li"},"\u540d\u79f0"),"\u76f8\u540c\u3001",(0,o.kt)("inlineCode",{parentName:"li"},"ENCRYPT"),"\u8bbe\u7f6e\u4e3a",(0,o.kt)("inlineCode",{parentName:"li"},"rc4-md5"),"\u52a0\u5bc6\u7b97\u6cd5\uff0c\u5176\u4ed6\u9ed8\u8ba4\u5373\u53ef\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,o.kt)("inlineCode",{parentName:"li"},"Deploy app"),"\u8fdb\u884c\u90e8\u7f72\u5b8c\u540e\uff0c\u70b9\u51fb",(0,o.kt)("inlineCode",{parentName:"li"},"View"),"\u4f1a\u8df3\u8f6c\u5230\u4e00\u4e2a\u52a8\u6001\u9875\u9762\uff0c\u5982\u679c\u80fd\u6b63\u5e38\u5728\u6d4f\u89c8\u5668\u67e5\u770b\u4e8c\u7ef4\u7801",(0,o.kt)("inlineCode",{parentName:"li"},"https://AppName.herokuapp.com/qr_img/v2.png"),"\uff0c\u5219\u90e8\u7f72\u6210\u529f\u4e86\u3002")),(0,o.kt)("h3",{id:"\u8fde\u63a5"},"\u8fde\u63a5"),(0,o.kt)("h4",{id:"\u624b\u673aandroid"},"\u624b\u673a(Android)"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u4e0b\u8f7d",(0,o.kt)("a",{parentName:"li",href:"https://apkcombo.com/tw-tw/shadowsocks/com.github.shadowsocks/"},"shadowsocks")),(0,o.kt)("li",{parentName:"ol"},"\u4e0b\u8f7d",(0,o.kt)("a",{parentName:"li",href:"https://github.com/shadowsocks/v2ray-plugin-android/releases"},"v2ray \u63d2\u4ef6"),"\uff0c\u6211\u8bd5\u8fc7\u7cbe\u7b80\u7248\u7684",(0,o.kt)("inlineCode",{parentName:"li"},"\u5b89\u88c5\u4e0d\u4e86"),"\uff0c\u6240\u6709\u9009\u62e9",(0,o.kt)("inlineCode",{parentName:"li"},"universal"),"\u901a\u7528\u7248\u8fdb\u884c\u5b89\u88c5\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u6253\u5f00",(0,o.kt)("inlineCode",{parentName:"li"},"shadowsocks"),"\uff0c\u70b9\u51fb\u53f3\u4e0a\u89d2\u4e0a\u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},"+")," \uff0c\u9009\u62e9\u626b\u63cf\u4e8c\u7ef4\u7801\u3002\u626b\u63cf\u4e4b\u524d\u7684\u4e8c\u7ef4\u7801",(0,o.kt)("inlineCode",{parentName:"li"},"https://yourAppName.herokuapp.com/qr_img/v2.png"),"\uff0c\u5373\u53ef\u6dfb\u52a0\u8282\u70b9\u3002")),(0,o.kt)("h4",{id:"win10"},"win10"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u4e0b\u8f7d",(0,o.kt)("a",{parentName:"li",href:"https://github.com/shadowsocks/shadowsocks-windows/releases"},"shadowsocks")),(0,o.kt)("li",{parentName:"ol"},"\u4e0b\u8f7d",(0,o.kt)("a",{parentName:"li",href:"https://github.com/shadowsocks/v2ray-plugin/releases"},"v2ray-plugin \u63d2\u4ef6")),(0,o.kt)("li",{parentName:"ol"},"\u6253\u5f00",(0,o.kt)("inlineCode",{parentName:"li"},"shadowsocks"),"\u5ba2\u6237\u7aef\uff0c\u6dfb\u52a0\u4e00\u4e2a\u670d\u52a1\u5668\u3002")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u670d\u52a1\u5668\u5730\u5740 : ",(0,o.kt)("inlineCode",{parentName:"li"},"yourAppName.herokuapp.com")),(0,o.kt)("li",{parentName:"ul"},"\u7aef\u53e3 : 443"),(0,o.kt)("li",{parentName:"ul"},"\u5bc6\u7801 : \u5bc6\u7801\u9ed8\u8ba4\u4e3a",(0,o.kt)("inlineCode",{parentName:"li"},"5c301bb8-6c77-41a0-a606-4ba11bbab084")),(0,o.kt)("li",{parentName:"ul"},"\u52a0\u5bc6\u7b97\u6cd5 : rc4-md5"),(0,o.kt)("li",{parentName:"ul"},"\u63d2\u4ef6\u7a0b\u5e8f : \u63d2\u4ef6\u7684\u8def\u5f84"),(0,o.kt)("li",{parentName:"ul"},"\u63d2\u4ef6\u9009\u9879 : path=/static;host=yourAppName.herokuapp.com;tls")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6216\u8005\u626b\u63cf\u624b\u673a\u5206\u4eab\u7684\u4e8c\u7ef4\u7801\u6dfb\u52a0\uff0c\u518d\u66f4\u6539\u63d2\u4ef6\u7a0b\u5e8f\u7684\u8def\u5f84\u5373\u53ef")),(0,o.kt)("h4",{id:"mac"},"mac"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5f85\u7eed")))}k.isMDXComponent=!0}}]);