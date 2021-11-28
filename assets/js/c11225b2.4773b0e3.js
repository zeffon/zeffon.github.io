"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8239],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),f=o,b=m["".concat(c,".").concat(f)]||m[f]||s[f]||a;return n?r.createElement(b,i(i({ref:t},u),{},{components:n})):r.createElement(b,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},50361:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return u},toc:function(){return s},default:function(){return f}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={slug:"mysql-concurrent-access-problem",title:"Mysql\u5e76\u53d1\u8bbf\u95ee\u4e8b\u52a1\u95ee\u9898",authors:"zeffon",tags:["database","mysql"],date:new Date("2019-10-13T00:00:00.000Z")},c=void 0,p={permalink:"/blog/mysql-concurrent-access-problem",editUrl:"https://github.com/zeffon/zeffon.github.io/blob/master/blog/2019/2019-10-13-mysql-concurrent-access-problem.md",source:"@site/blog/2019/2019-10-13-mysql-concurrent-access-problem.md",title:"Mysql\u5e76\u53d1\u8bbf\u95ee\u4e8b\u52a1\u95ee\u9898",description:"Mysql \u4e8b\u52a1\u5e76\u53d1\u8bbf\u95ee\u5bfc\u81f4\u7684\u95ee\u9898--\u66f4\u65b0\u4e22\u5931\u3001\u810f\u8bfb\u3001\u4e0d\u53ef\u91cd\u590d\u8bfb\u3001\u5e7b\u8bfb\u3002",date:"2019-10-13T00:00:00.000Z",formattedDate:"October 13, 2019",tags:[{label:"database",permalink:"/blog/tags/database"},{label:"mysql",permalink:"/blog/tags/mysql"}],readingTime:7.8,truncated:!0,authors:[{name:"Zeffon Wu",title:"A web engineer",url:"https://github.com/zeffon",imageURL:"https://github.com/zeffon.png",key:"zeffon"}],prevItem:{title:"Java\u5e38\u89c1\u7684\u6a21\u578b\u8f6c\u6362\u65b9\u6cd5",permalink:"/blog/java-model-convert-method"},nextItem:{title:"\u4fee\u6539Git\u5df2\u63d0\u4ea4\u7684\u7528\u6237\u540d\u548c\u90ae\u7bb1",permalink:"/blog/modify-git-submitted-user-and-email"}},u={authorsImageUrls:[void 0]},s=[],m={toc:s};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Mysql \u4e8b\u52a1\u5e76\u53d1\u8bbf\u95ee\u5bfc\u81f4\u7684\u95ee\u9898--\u66f4\u65b0\u4e22\u5931\u3001\u810f\u8bfb\u3001\u4e0d\u53ef\u91cd\u590d\u8bfb\u3001\u5e7b\u8bfb\u3002\nMysql \u6570\u636e\u5e93\u4e8b\u52a1\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"\u56db\u5927"),"\u7279\u6027--\u539f\u5b50\u6027\u3001\u4e00\u81f4\u6027\u3001\u9694\u79bb\u6027\u3001\u6301\u4e45\u6027\u3002\u800c",(0,a.kt)("inlineCode",{parentName:"p"},"\u9501"),"\u662f\u6570\u636e\u5e93\u4e2d\u7684\u4e00\u4e2a\u975e\u5e38\u91cd\u8981\u7684\u6982\u5ff5\uff0c\u5b83\u4e3b\u8981\u7528\u4e8e\u591a\u7528\u6237\u73af\u5883\u4e0b\u4fdd\u8bc1\u6570\u636e\u5e93",(0,a.kt)("inlineCode",{parentName:"p"},"\u5b8c\u6574\u6027"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"\u4e00\u81f4\u6027"),"\u3002\u5982\u679c\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"\u591a\u7528\u6237"),"\u5e76\u53d1\u60c5\u51b5\u4e0b\uff0c\u4ed6\u4eec\u7684\u4e8b\u52a1",(0,a.kt)("inlineCode",{parentName:"p"},"\u540c\u65f6"),"\u5bf9",(0,a.kt)("inlineCode",{parentName:"p"},"\u76f8\u540c"),"\u7684\u6570\u636e\u8fdb\u884c\u64cd\u4f5c\uff0c\u662f\u4f1a\u5bfc\u81f4\u66f4\u65b0\u4e22\u5931\u3001\u810f\u8bfb\u3001\u4e0d\u53ef\u91cd\u590d\u8bfb\u3001\u5e7b\u8bfb\u7684\u95ee\u9898\u7684\u3002"))}f.isMDXComponent=!0}}]);