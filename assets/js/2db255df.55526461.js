"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2724],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=s(t),d=o,m=f["".concat(c,".").concat(d)]||f[d]||l[d]||a;return t?r.createElement(m,p(p({ref:n},u),{},{components:t})):r.createElement(m,p({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,p=new Array(a);p[0]=f;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var s=2;s<a;s++)p[s]=t[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8510:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},assets:function(){return u},toc:function(){return l},default:function(){return d}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),p=["components"],i={slug:"npm-dependencies",title:"npm \u4f9d\u8d56\u7ba1\u7406 dependencies devDependencies",authors:"zeffon",tags:["notes"],date:"2021-09-24 10:15"},c=void 0,s={permalink:"/blog/npm-dependencies",editUrl:"https://github.com/zeffon/zeffon.github.io/blob/master/blog/2021/2021-09-24-npm-dependencies.md",source:"@site/blog/2021/2021-09-24-npm-dependencies.md",title:"npm \u4f9d\u8d56\u7ba1\u7406 dependencies devDependencies",description:"\u5728\u5e73\u5e38\u5bfc\u5165\u4f9d\u8d56\u65f6\uff0c\u6211\u4eec\u5927\u591a\u4f1a\u4f7f\u7528 yarn add xxx \u6216\u8005 npm install xxx \u547d\u4ee4\u3002\u800c\u5728\u4f7f\u7528\u8fd9\u4e9b\u547d\u4ee4\u65f6\u901a\u5e38\u90fd\u4f1a\u5728\u540e\u9762\u52a0\u4e0a -D\u3001-S\u6216\u8005 --save\u3001--save-dev \u7b49\u53c2\u6570\u3002\u4f7f\u7528\u4e0d\u540c\u53c2\u6570\u7684\u7ed3\u679c\u4f1a\u5bfc\u81f4\u5b89\u88c5\u4f9d\u8d56\u51fa\u73b0\u5728 package.json \u6587\u4ef6\u4f9d\u8d56\u7ba1\u7406\u4e2d\u7684 dependencies \u3001devDependencies \u7684\u4e0d\u540c\u3002",date:"2021-09-24T10:15:00.000Z",formattedDate:"September 24, 2021",tags:[{label:"notes",permalink:"/blog/tags/notes"}],readingTime:6.565,truncated:!0,authors:[{name:"Zeffon Wu",title:"A web engineer",url:"https://github.com/zeffon",imageURL:"https://github.com/zeffon.png",key:"zeffon"}],nextItem:{title:"\u6301\u7eed\u96c6\u6210\u3001\u6301\u7eed\u4ea4\u4ed8\u548c\u6301\u7eed\u90e8\u7f72",permalink:"/blog/ci-and-cd"}},u={authorsImageUrls:[void 0]},l=[],f={toc:l};function d(e){var n=e.components,t=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5728\u5e73\u5e38\u5bfc\u5165\u4f9d\u8d56\u65f6\uff0c\u6211\u4eec\u5927\u591a\u4f1a\u4f7f\u7528 ",(0,a.kt)("strong",{parentName:"p"},"yarn add xxx")," \u6216\u8005 ",(0,a.kt)("strong",{parentName:"p"},"npm install xxx")," \u547d\u4ee4\u3002\u800c\u5728\u4f7f\u7528\u8fd9\u4e9b\u547d\u4ee4\u65f6\u901a\u5e38\u90fd\u4f1a\u5728\u540e\u9762\u52a0\u4e0a ",(0,a.kt)("strong",{parentName:"p"},"-D"),"\u3001",(0,a.kt)("strong",{parentName:"p"},"-S"),"\u6216\u8005 ",(0,a.kt)("strong",{parentName:"p"},"--save\u3001--save-dev")," \u7b49\u53c2\u6570\u3002\u4f7f\u7528\u4e0d\u540c\u53c2\u6570\u7684\u7ed3\u679c\u4f1a\u5bfc\u81f4\u5b89\u88c5\u4f9d\u8d56\u51fa\u73b0\u5728 ",(0,a.kt)("strong",{parentName:"p"},"package.json \u6587\u4ef6"),"\u4f9d\u8d56\u7ba1\u7406\u4e2d\u7684 ",(0,a.kt)("strong",{parentName:"p"},"dependencies \u3001devDependencies")," \u7684\u4e0d\u540c\u3002\n\u200b"))}d.isMDXComponent=!0}}]);