"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9055],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=u(r),m=o,y=s["".concat(p,".").concat(m)]||s[m]||f[m]||a;return r?n.createElement(y,i(i({ref:t},l),{},{components:r})):n.createElement(y,i({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=s;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},1253:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return u},assets:function(){return l},toc:function(){return f},default:function(){return m}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],c={slug:"typeScript",title:"TypeScript \u57fa\u7840\u68b3\u7406",authors:"zeffon",tags:["ts"],date:new Date("2021-05-28T00:00:00.000Z")},p=void 0,u={permalink:"/blog/typeScript",editUrl:"https://github.com/zeffon/zeffon.github.io/blob/master/blog/2021/2021-05-28-typescript.md",source:"@site/blog/2021/2021-05-28-typescript.md",title:"TypeScript \u57fa\u7840\u68b3\u7406",description:'TypeScript \u662f "\u5f3a\u7c7b\u578b" \u7248\u7684 JavaScript\uff0c\u5f53\u6211\u4eec\u5728\u4ee3\u7801\u4e2d\u5b9a\u4e49\u53d8\u91cf(\u5305\u62ec\u666e\u901a\u53d8\u91cf\u3001\u51fd\u6570\u3001\u7ec4\u4ef6\u3001hook \u7b49)\u7684\u65f6\u5019\uff0cTypeScript \u5141\u8bb8\u6211\u4eec\u5728\u5b9a\u4e49\u7684\u540c\u65f6\u6307\u5b9a\u5176\u7c7b\u578b\uff0c\u8fd9\u6837\u4f7f\u7528\u8005\u5728\u4f7f\u7528\u4e0d\u5f53\u7684\u65f6\u5019\u5c31\u4f1a\u88ab\u53ca\u65f6\u62a5\u9519\u63d0\u9192\u3002',date:"2021-05-28T00:00:00.000Z",formattedDate:"May 28, 2021",tags:[{label:"ts",permalink:"/blog/tags/ts"}],readingTime:8,truncated:!0,authors:[{name:"Zeffon Wu",title:"A web engineer",url:"https://github.com/zeffon",imageURL:"https://github.com/zeffon.png",key:"zeffon"}],prevItem:{title:"HTML5 \u57fa\u7840",permalink:"/blog/html5"},nextItem:{title:"SpringBoot\u914d\u7f6eES\u6570\u636e\u5e93",permalink:"/blog/springboot-elasticsearch"}},l={authorsImageUrls:[void 0]},f=[],s={toc:f};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"TypeScript"),' \u662f "\u5f3a\u7c7b\u578b" \u7248\u7684 ',(0,a.kt)("strong",{parentName:"p"},"JavaScript"),"\uff0c\u5f53\u6211\u4eec\u5728\u4ee3\u7801\u4e2d\u5b9a\u4e49\u53d8\u91cf(\u5305\u62ec\u666e\u901a\u53d8\u91cf\u3001\u51fd\u6570\u3001\u7ec4\u4ef6\u3001hook \u7b49)\u7684\u65f6\u5019\uff0c",(0,a.kt)("strong",{parentName:"p"},"TypeScript")," \u5141\u8bb8\u6211\u4eec\u5728\u5b9a\u4e49\u7684\u540c\u65f6\u6307\u5b9a\u5176\u7c7b\u578b\uff0c\u8fd9\u6837\u4f7f\u7528\u8005\u5728\u4f7f\u7528\u4e0d\u5f53\u7684\u65f6\u5019\u5c31\u4f1a\u88ab\u53ca\u65f6\u62a5\u9519\u63d0\u9192\u3002"))}m.isMDXComponent=!0}}]);