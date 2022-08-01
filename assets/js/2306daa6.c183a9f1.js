"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4485],{3905:function(e,t,n){n.d(t,{Zo:function(){return f},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},f=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,f=u(e,["components","mdxType","originalType","parentName"]),s=c(n),m=o,b=s["".concat(l,".").concat(m)]||s[m]||p[m]||i;return n?r.createElement(b,a(a({ref:t},f),{},{components:n})):r.createElement(b,a({ref:t},f))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=s;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},78379:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return a},default:function(){return p},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var r=n(83117),o=(n(67294),n(3905));const i={slug:"linux-environment-variable",title:"Linux\u4e2d\u7684\u73af\u5883\u53d8\u91cf\u914d\u7f6e\u6587\u4ef6",authors:"zeffon",tags:["linux"],date:new Date("2019-11-30T00:00:00.000Z")},a=void 0,u={permalink:"/blog/linux-environment-variable",editUrl:"https://github.com/zeffon/zeffon.github.io/blob/master/blog/2019/2019-11-30-linux-environment-variable.md",source:"@site/blog/2019/2019-11-30-linux-environment-variable.md",title:"Linux\u4e2d\u7684\u73af\u5883\u53d8\u91cf\u914d\u7f6e\u6587\u4ef6",description:"\u5e73\u65f6\u5728 linux \u4e0a\u5b89\u88c5\u4e00\u4e9b\u5e94\u7528\uff0c\u6709\u65f6\u5019\u9700\u8981\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf\uff0c\u73af\u5883\u53d8\u91cf\u6309\u7167\u5176\u4f5c\u7528\u8303\u56f4\u4e0d\u540c\u5927\u81f4\u53ef\u4ee5\u5206\u4e3a\u7cfb\u7edf\u7ea7\u73af\u5883\u53d8\u91cf\u548c\u7528\u6237\u7ea7\u73af\u5883\u53d8\u91cf\u3002",date:"2019-11-30T00:00:00.000Z",formattedDate:"November 30, 2019",tags:[{label:"linux",permalink:"/blog/tags/linux"}],readingTime:5.81,hasTruncateMarker:!0,authors:[{name:"Zeffon Wu",title:"A web engineer",url:"https://github.com/zeffon",imageURL:"https://github.com/zeffon.png",key:"zeffon"}],frontMatter:{slug:"linux-environment-variable",title:"Linux\u4e2d\u7684\u73af\u5883\u53d8\u91cf\u914d\u7f6e\u6587\u4ef6",authors:"zeffon",tags:["linux"],date:"2019-11-30T00:00:00.000Z"},prevItem:{title:"Java \u63a7\u5236\u53cd\u8f6c(IoC)\u548c\u4f9d\u8d56\u6ce8\u5165(DI)",permalink:"/blog/java-ioc-di"},nextItem:{title:"Heroku \u642d\u5efa V2ray",permalink:"/blog/heroku-v2ray"}},l={authorsImageUrls:[void 0]},c=[],f={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5e73\u65f6\u5728 linux \u4e0a\u5b89\u88c5\u4e00\u4e9b\u5e94\u7528\uff0c\u6709\u65f6\u5019\u9700\u8981\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf\uff0c\u73af\u5883\u53d8\u91cf\u6309\u7167\u5176\u4f5c\u7528\u8303\u56f4\u4e0d\u540c\u5927\u81f4\u53ef\u4ee5\u5206\u4e3a\u7cfb\u7edf\u7ea7\u73af\u5883\u53d8\u91cf\u548c\u7528\u6237\u7ea7\u73af\u5883\u53d8\u91cf\u3002"))}p.isMDXComponent=!0}}]);