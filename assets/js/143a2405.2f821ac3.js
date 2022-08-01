"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9031],{3905:function(e,t,n){n.d(t,{Zo:function(){return f},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},f=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,f=u(e,["components","mdxType","originalType","parentName"]),s=l(n),m=o,b=s["".concat(c,".").concat(m)]||s[m]||p[m]||a;return n?r.createElement(b,i(i({ref:t},f),{},{components:n})):r.createElement(b,i({ref:t},f))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=s;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},79159:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return l}});var r=n(83117),o=(n(67294),n(3905));const a={slug:"vite",title:"Vite \u7684\u4ecb\u7ecd",authors:"zeffon",tags:["notes"],date:"2022-01-07 10:15"},i=void 0,u={permalink:"/blog/vite",editUrl:"https://github.com/zeffon/zeffon.github.io/blob/master/blog/2022/2022-01-07-vite.md",source:"@site/blog/2022/2022-01-07-vite.md",title:"Vite \u7684\u4ecb\u7ecd",description:"Vite \u7b2c\u4e00\u4e2a\u7248\u672c\u662f\u968f\u7740 Vue3 \u4e00\u8d77\u53d1\u5e03\u7684\uff0c\u8fd9\u4e2a\u7248\u672c\u4e3b\u8981\u662f\u5bf9 Vue3 \u8fdb\u884c\u7f16\u8bd1\u7684\u3002\u4e4b\u540e\u53c8\u5feb\u901f\u5730\u63a8\u51fa\u7b2c\u4e8c\u4e2a\u7248\u672c\u3002V2 \u7248\u672c\u7684 Vite \u662f\u53ef\u4ee5\u8de8\u6846\u67b6\u8fdb\u884c\u7f16\u8bd1\u7684\uff0c\u56e0\u6b64 Vue2 \u548c React \u7b49\u90fd\u662f\u652f\u6301\u7684\u3002\u672c\u6587\u4e3b\u8981\u5bf9 Vite \u7684 \u7b80\u5355\u4ecb\u7ecd\u3002",date:"2022-01-07T10:15:00.000Z",formattedDate:"January 7, 2022",tags:[{label:"notes",permalink:"/blog/tags/notes"}],readingTime:6.39,hasTruncateMarker:!0,authors:[{name:"Zeffon Wu",title:"A web engineer",url:"https://github.com/zeffon",imageURL:"https://github.com/zeffon.png",key:"zeffon"}],frontMatter:{slug:"vite",title:"Vite \u7684\u4ecb\u7ecd",authors:"zeffon",tags:["notes"],date:"2022-01-07 10:15"},prevItem:{title:"PNPM \u521d\u8bc6",permalink:"/blog/pnpm"},nextItem:{title:"GET\u8bf7\u6c42\u5982\u4f55\u4f20\u9012\u6570\u7ec4\u53c2\u6570",permalink:"/blog/get-param-array"}},c={authorsImageUrls:[void 0]},l=[],f={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Vite \u7b2c\u4e00\u4e2a\u7248\u672c\u662f\u968f\u7740 Vue3 \u4e00\u8d77\u53d1\u5e03\u7684\uff0c\u8fd9\u4e2a\u7248\u672c\u4e3b\u8981\u662f\u5bf9 Vue3 \u8fdb\u884c\u7f16\u8bd1\u7684\u3002\u4e4b\u540e\u53c8\u5feb\u901f\u5730\u63a8\u51fa\u7b2c\u4e8c\u4e2a\u7248\u672c\u3002V2 \u7248\u672c\u7684 Vite \u662f\u53ef\u4ee5\u8de8\u6846\u67b6\u8fdb\u884c\u7f16\u8bd1\u7684\uff0c\u56e0\u6b64 Vue2 \u548c React \u7b49\u90fd\u662f\u652f\u6301\u7684\u3002\u672c\u6587\u4e3b\u8981\u5bf9 Vite \u7684 \u7b80\u5355\u4ecb\u7ecd\u3002"),(0,o.kt)("p",null,"\ud83d\udc49 ",(0,o.kt)("a",{parentName:"p",href:"https://www.yuque.com/zeffon/blog/vite"},"\u539f\u6587\u94fe\u63a5")," \ud83d\udc48"))}p.isMDXComponent=!0}}]);