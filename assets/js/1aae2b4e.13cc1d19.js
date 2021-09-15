"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2496],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=l(r),m=o,d=s["".concat(p,".").concat(m)]||s[m]||f[m]||i;return r?n.createElement(d,a(a({ref:t},u),{},{components:r})):n.createElement(d,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=s;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},3501:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return l},assets:function(){return u},toc:function(){return f},default:function(){return m}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],c={slug:"springboot-redis-keySpaceNotifyfication",title:"SpringBoot\u9879\u76ee\u4e2dRedis\u952e\u7a7a\u95f4\u901a\u77e5",authors:"zeffon",tags:["java","redis"],date:new Date("2020-07-22T00:00:00.000Z")},p=void 0,l={permalink:"/blog/springboot-redis-keySpaceNotifyfication",editUrl:"https://github.com/zeffon/zeffon.github.io/blob/master/blog/2020/2020-07-22-springboot-redis-keySpaceNotifyfication.md",source:"@site/blog/2020/2020-07-22-springboot-redis-keySpaceNotifyfication.md",title:"SpringBoot\u9879\u76ee\u4e2dRedis\u952e\u7a7a\u95f4\u901a\u77e5",description:"\u5f53 redis \u53d7\u5230\u67d0\u4e9b\u4e8b\u4ef6\u7684\u5f71\u54cd\uff0c\u6bd4\u5982\u952e\u88ab\u5220\u9664delete\u6216\u662f\u952e\u8fc7\u671fexpired\uff0credis \u4f1a\u53d1\u5e03\u4e00\u4e2a\u901a\u77e5\u3002\u800c\u6211\u4eec\u53ef\u4ee5\u501f\u52a9\u8fd9\u4e2a\u673a\u5236\u5b9e\u73b0\u4e00\u4e2a\u6d88\u606f\u961f\u5217\u3002",date:"2020-07-22T00:00:00.000Z",formattedDate:"July 22, 2020",tags:[{label:"java",permalink:"/blog/tags/java"},{label:"redis",permalink:"/blog/tags/redis"}],readingTime:5.255,truncated:!0,authors:[{name:"Zeffon Wu",title:"A web engineer",url:"https://github.com/zeffon",imageURL:"https://github.com/zeffon.png",key:"zeffon"}],prevItem:{title:"Vue\u5f15\u8fdbEcharts\u7684\u5173\u7cfb\u56fe",permalink:"/blog/vue-import-echarts-graph"},nextItem:{title:"SpringBoot\u9879\u76ee\u6784\u5efaRocketMQ",permalink:"/blog/springboot-bulid-rocketmq"}},u={authorsImageUrls:[void 0]},f=[],s={toc:f};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5f53 redis \u53d7\u5230\u67d0\u4e9b\u4e8b\u4ef6\u7684\u5f71\u54cd\uff0c\u6bd4\u5982",(0,i.kt)("inlineCode",{parentName:"p"},"\u952e\u88ab\u5220\u9664delete"),"\u6216\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"\u952e\u8fc7\u671fexpired"),"\uff0credis \u4f1a\u53d1\u5e03\u4e00\u4e2a\u901a\u77e5\u3002\u800c\u6211\u4eec\u53ef\u4ee5\u501f\u52a9\u8fd9\u4e2a\u673a\u5236\u5b9e\u73b0\u4e00\u4e2a",(0,i.kt)("strong",{parentName:"p"},"\u6d88\u606f\u961f\u5217"),"\u3002"))}m.isMDXComponent=!0}}]);