"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1177],{3905:function(e,t,n){n.d(t,{Zo:function(){return f},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},f=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),s=u(n),m=o,b=s["".concat(l,".").concat(m)]||s[m]||p[m]||a;return n?r.createElement(b,c(c({ref:t},f),{},{components:n})):r.createElement(b,c({ref:t},f))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},89908:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return u}});var r=n(83117),o=(n(67294),n(3905));const a={slug:"java-model-convert-method",title:"Java\u5e38\u89c1\u7684\u6a21\u578b\u8f6c\u6362\u65b9\u6cd5",authors:"zeffon",tags:["java"],date:new Date("2019-10-15T00:00:00.000Z")},c=void 0,i={permalink:"/blog/java-model-convert-method",editUrl:"https://github.com/zeffon/zeffon.github.io/blob/master/blog/2019/2019-10-15-java-model-convert-method.md",source:"@site/blog/2019/2019-10-15-java-model-convert-method.md",title:"Java\u5e38\u89c1\u7684\u6a21\u578b\u8f6c\u6362\u65b9\u6cd5",description:"\u5728\u8fdb\u884c\u4e0d\u540c\u9886\u57df\u5bf9\u8c61\u8f6c\u6362\u65f6,\u539f\u5bf9\u8c61\u548c\u76ee\u6807\u5bf9\u8c61\u76f8\u540c\u5c5e\u6027\u7684\u7c7b\u578b\u4e0d\u4e00\u6837,\u6240\u4ee5\u5bf9\u8c61\u8f6c\u6362\u65f6\u4e00\u4e9b\u9700\u8981\u8003\u8651\u7684\u95ee\u9898\u3002",date:"2019-10-15T00:00:00.000Z",formattedDate:"October 15, 2019",tags:[{label:"java",permalink:"/blog/tags/java"}],readingTime:10.355,hasTruncateMarker:!0,authors:[{name:"Zeffon Wu",title:"A web engineer",url:"https://github.com/zeffon",imageURL:"https://github.com/zeffon.png",key:"zeffon"}],frontMatter:{slug:"java-model-convert-method",title:"Java\u5e38\u89c1\u7684\u6a21\u578b\u8f6c\u6362\u65b9\u6cd5",authors:"zeffon",tags:["java"],date:"2019-10-15T00:00:00.000Z"},prevItem:{title:"\u5b89\u88c5nvm",permalink:"/blog/install-nvm"},nextItem:{title:"Mysql\u5e76\u53d1\u8bbf\u95ee\u4e8b\u52a1\u95ee\u9898",permalink:"/blog/mysql-concurrent-access-problem"}},l={authorsImageUrls:[void 0]},u=[],f={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5728\u8fdb\u884c\u4e0d\u540c\u9886\u57df\u5bf9\u8c61\u8f6c\u6362\u65f6,\u539f\u5bf9\u8c61\u548c\u76ee\u6807\u5bf9\u8c61\u76f8\u540c\u5c5e\u6027\u7684\u7c7b\u578b\u4e0d\u4e00\u6837,\u6240\u4ee5\u5bf9\u8c61\u8f6c\u6362\u65f6\u4e00\u4e9b\u9700\u8981\u8003\u8651\u7684\u95ee\u9898\u3002\n\u6211\u5728\u8fdb\u884c\u4e0d\u540c\u9886\u57df\u5bf9\u8c61\u8f6c\u6362\uff0c\u4e00\u76f4\u90fd\u662f\u7528 BeanUtils.copyProperties()\u642d\u914d Set()\u4f7f\u7528\u7684\u3002\u542c\u4e86\u5f20\u8001\u5e08\u8bb2\u89e3\u4e4b\u540e\uff0c\u624d\u77e5\u9053\u65b9\u6cd5\u5982\u6b64\u4e4b\u591a\u3002"))}p.isMDXComponent=!0}}]);