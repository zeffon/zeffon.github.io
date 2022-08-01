"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8965],{3905:function(e,t,r){r.d(t,{Zo:function(){return f},kt:function(){return b}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},f=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),s=u(r),b=o,m=s["".concat(c,".").concat(b)]||s[b]||p[b]||a;return r?n.createElement(m,i(i({ref:t},f),{},{components:r})):n.createElement(m,i({ref:t},f))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},95100:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return u}});var n=r(83117),o=(r(67294),r(3905));const a={slug:"how-build-apollo",title:"\u6784\u5efa\u5206\u5e03\u5f0f\u914d\u7f6e\u4e2d\u5fc3\u963f\u6ce2\u7f57",authors:"zeffon",tags:["docker"],date:new Date("2019-10-31T00:00:00.000Z")},i=void 0,l={permalink:"/blog/how-build-apollo",editUrl:"https://github.com/zeffon/zeffon.github.io/blob/master/blog/2019/2019-10-31-how-build-apollo.md",source:"@site/blog/2019/2019-10-31-how-build-apollo.md",title:"\u6784\u5efa\u5206\u5e03\u5f0f\u914d\u7f6e\u4e2d\u5fc3\u963f\u6ce2\u7f57",description:"\u5206\u5e03\u5f0f\u914d\u7f6e\u4e2d\u5fc3\u963f\u6ce2\u7f57\u662f\u56fd\u5185\u643a\u7a0b\u6846\u67b6\u90e8\u95e8\u7814\u53d1\u7684\u5206\u5e03\u5f0f\u914d\u7f6e\u4e2d\u5fc3\uff0c\u80fd\u591f\u96c6\u4e2d\u5316\u7ba1\u7406\u5e94\u7528\u4e0d\u540c\u73af\u5883\u3001\u4e0d\u540c\u96c6\u7fa4\u7684\u914d\u7f6e\uff0c\u914d\u7f6e\u4fee\u6539\u540e\u80fd\u591f\u5b9e\u65f6\u63a8\u9001\u5230\u5e94\u7528\u7aef\uff0c\u5e76\u4e14\u5177\u5907\u89c4\u8303\u7684\u6743\u9650\u3001\u6d41\u7a0b\u6cbb\u7406\u7b49\u7279\u6027\uff0c\u9002\u7528\u4e8e\u5fae\u670d\u52a1\u914d\u7f6e\u7ba1\u7406\u573a\u666f\u3002",date:"2019-10-31T00:00:00.000Z",formattedDate:"October 31, 2019",tags:[{label:"docker",permalink:"/blog/tags/docker"}],readingTime:2.38,hasTruncateMarker:!0,authors:[{name:"Zeffon Wu",title:"A web engineer",url:"https://github.com/zeffon",imageURL:"https://github.com/zeffon.png",key:"zeffon"}],frontMatter:{slug:"how-build-apollo",title:"\u6784\u5efa\u5206\u5e03\u5f0f\u914d\u7f6e\u4e2d\u5fc3\u963f\u6ce2\u7f57",authors:"zeffon",tags:["docker"],date:"2019-10-31T00:00:00.000Z"},prevItem:{title:"Docker\u642d\u5efaMaven\u79c1\u670d",permalink:"/blog/docker-build-maven"},nextItem:{title:"Docker\u5b89\u88c5MQ\u961f\u5217",permalink:"/blog/docker-install-mq"}},c={authorsImageUrls:[void 0]},u=[],f={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5206\u5e03\u5f0f\u914d\u7f6e\u4e2d\u5fc3\u963f\u6ce2\u7f57\u662f\u56fd\u5185\u643a\u7a0b\u6846\u67b6\u90e8\u95e8\u7814\u53d1\u7684\u5206\u5e03\u5f0f\u914d\u7f6e\u4e2d\u5fc3\uff0c\u80fd\u591f\u96c6\u4e2d\u5316\u7ba1\u7406\u5e94\u7528\u4e0d\u540c\u73af\u5883\u3001\u4e0d\u540c\u96c6\u7fa4\u7684\u914d\u7f6e\uff0c\u914d\u7f6e\u4fee\u6539\u540e\u80fd\u591f\u5b9e\u65f6\u63a8\u9001\u5230\u5e94\u7528\u7aef\uff0c\u5e76\u4e14\u5177\u5907\u89c4\u8303\u7684\u6743\u9650\u3001\u6d41\u7a0b\u6cbb\u7406\u7b49\u7279\u6027\uff0c\u9002\u7528\u4e8e\u5fae\u670d\u52a1\u914d\u7f6e\u7ba1\u7406\u573a\u666f\u3002"))}p.isMDXComponent=!0}}]);