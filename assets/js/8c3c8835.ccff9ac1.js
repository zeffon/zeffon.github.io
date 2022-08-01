"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2849],{3905:function(e,t,a){a.d(t,{Zo:function(){return k},kt:function(){return c}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),i=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},k=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,k=s(e,["components","mdxType","originalType","parentName"]),u=i(a),c=r,g=u["".concat(l,".").concat(c)]||u[c]||m[c]||o;return a?n.createElement(g,p(p({ref:t},k),{},{components:a})):n.createElement(g,p({ref:t},k))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,p=new Array(o);p[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,p[1]=s;for(var i=2;i<o;i++)p[i]=a[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},87613:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return i}});var n=a(83117),r=(a(67294),a(3905));const o={slug:"koa-web",title:"\u4f7f\u7528 TypeScript \u6784\u5efa Koa2 RESTful API \u6700\u4f73\u7684\u811a\u624b\u67b6",authors:"zeffon",tags:["js","node"],date:"2022-04-13 12:11"},p=void 0,s={permalink:"/blog/koa-web",editUrl:"https://github.com/zeffon/zeffon.github.io/blob/master/blog/2022/2022-04-13-koa-web.md",source:"@site/blog/2022/2022-04-13-koa-web.md",title:"\u4f7f\u7528 TypeScript \u6784\u5efa Koa2 RESTful API \u6700\u4f73\u7684\u811a\u624b\u67b6",description:"koa2 \u662f\u57fa\u4e8e NodeJS \u4e0b\u4e00\u4ee3 Web \u5f00\u53d1\u6846\u67b6\u3002\u4f46\u662f\uff0cKoa2 \u5e76\u6ca1\u6cd5\u50cf Java \u7684 SpringBoot \u6846\u67b6\u90a3\u822c\u5f00\u7bb1\u5373\u7528\u3002Koa2 \u5982\u679c\u4e0d\u901a\u8fc7\u4e8c\u6b21\u5c01\u88c5\uff0c\u771f\u7684\u5f88\u96be\u76f4\u63a5\u4f5c\u4e3a Web \u5f00\u53d1\u6846\u67b6\u5f00\u53d1\u5177\u4f53\u7684\u4e1a\u52a1\u3002",date:"2022-04-13T12:11:00.000Z",formattedDate:"April 13, 2022",tags:[{label:"js",permalink:"/blog/tags/js"},{label:"node",permalink:"/blog/tags/node"}],readingTime:8.845,hasTruncateMarker:!0,authors:[{name:"Zeffon Wu",title:"A web engineer",url:"https://github.com/zeffon",imageURL:"https://github.com/zeffon.png",key:"zeffon"}],frontMatter:{slug:"koa-web",title:"\u4f7f\u7528 TypeScript \u6784\u5efa Koa2 RESTful API \u6700\u4f73\u7684\u811a\u624b\u67b6",authors:"zeffon",tags:["js","node"],date:"2022-04-13 12:11"},nextItem:{title:"\u6d4f\u89c8\u5668\u6e32\u67d3\u9875\u9762",permalink:"/blog/page-render"}},l={authorsImageUrls:[void 0]},i=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u6b63\u6587",id:"\u6b63\u6587",level:2},{value:"\u8fd0\u884c",id:"\u8fd0\u884c",level:3},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:3},{value:"\u5168\u5c40\u5f02\u5e38",id:"\u5168\u5c40\u5f02\u5e38",level:4},{value:"\u6570\u636e\u6821\u9a8c",id:"\u6570\u636e\u6821\u9a8c",level:4},{value:"Auth \u8ba4\u8bc1",id:"auth-\u8ba4\u8bc1",level:4},{value:"\u6570\u636e\u5e93\u8fde\u63a5",id:"\u6570\u636e\u5e93\u8fde\u63a5",level:4},{value:"Redis \u6570\u636e\u5e93",id:"redis-\u6570\u636e\u5e93",level:4},{value:"\u672c\u5730\u7f13\u5b58",id:"\u672c\u5730\u7f13\u5b58",level:4},{value:"API \u6587\u6863",id:"api-\u6587\u6863",level:4}],k={toc:i};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://koa.bootcss.com/"},"koa2")," \u662f\u57fa\u4e8e NodeJS \u4e0b\u4e00\u4ee3 Web \u5f00\u53d1\u6846\u67b6\u3002\u4f46\u662f\uff0cKoa2 \u5e76\u6ca1\u6cd5\u50cf Java \u7684 SpringBoot \u6846\u67b6\u90a3\u822c\u5f00\u7bb1\u5373\u7528\u3002Koa2 \u5982\u679c\u4e0d\u901a\u8fc7\u4e8c\u6b21\u5c01\u88c5\uff0c\u771f\u7684\u5f88\u96be\u76f4\u63a5\u4f5c\u4e3a Web \u5f00\u53d1\u6846\u67b6\u5f00\u53d1\u5177\u4f53\u7684\u4e1a\u52a1\u3002\nKoa \u6700\u4e3b\u8981\u7684\u6838\u5fc3\u5c31\u662f \u5e94\u7528\u4e0a\u4e0b\u6587 \u548c \u4e2d\u95f4\u4ef6\u3002\u56e0\u6b64\uff0cKoa2 \u5982\u679c\u60f3\u8981\u50cf SpringBoot \u53ef\u4ee5\u7ed9\u5f00\u53d1\u8005\u5f00\u7bb1\u5373\u7528\uff0c\u663e\u7136\u662f\u4e0d\u53ef\u80fd\u3002\u800c\u4e14\uff0cKoa2 \u5728\u4ee5\u524d\u7248\u672c\u662f\u4e0d\u652f\u6301 ESModule \u7684\uff0c\u5373\u65e0\u6cd5\u4f7f\u7528 import \u5bfc\u5165\uff0c\u53ea\u80fd\u4f7f\u7528 require\u3002\u4e0d\u8fc7\u76ee\u524d Koa \u4f9d\u8d56 ",(0,r.kt)("strong",{parentName:"p"},"node v7.6.0+")," \u6216 ES2015 \u53ca\u66f4\u9ad8\u7248\u672c\u548c async \u65b9\u6cd5\u652f\u6301\uff0c\u53ef\u4ee5\u5b9e\u73b0 ESModule \u65b9\u5f0f\u7684\u4f7f\u7528\u3002\n\u968f\u7740 Typescript \u7684\u666e\u53ca\uff0c\u4f5c\u4e3a NodeJS \u7684\u5f00\u53d1\u6846\u67b6\u5f53\u7136\u4f7f\u7528 ",(0,r.kt)("strong",{parentName:"p"},"TS "),"\u7c7b\u578b\u624d\u80fd\u964d\u4f4e\u7ef4\u62a4\u6210\u672c\u3002\u5bf9\u6b64\uff0c\u672c\u4eba\u5728 Koa2 + Typescript \u7684\u57fa\u7840\u96c6\u6210\u4e86\u4e00\u4e2a Web \u5f00\u53d1\u6846\u67b6 -- ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zeffon/koa-web"},(0,r.kt)("strong",{parentName:"a"},"koa-web")),(0,r.kt)("strong",{parentName:"p"},"\u3002"),"\u5927\u5bb6\u8981\u662f\u89c9\u5f97",(0,r.kt)("strong",{parentName:"p"},"koa-web"),"\u4e0d\u9519\uff0c\u53ef\u4ee5\u7ed9\u4e2a",(0,r.kt)("strong",{parentName:"p"},"star"),"\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u8c22\u8c22\uff01")),(0,r.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://koa.bootcss.com/"},"koa2")," \u662f\u57fa\u4e8e NodeJS \u4e0b\u4e00\u4ee3 Web \u5f00\u53d1\u6846\u67b6\u3002\u4f46\u662f\uff0cKoa2 \u5e76\u6ca1\u6cd5\u50cf Java \u7684 SpringBoot \u6846\u67b6\u90a3\u822c\u5f00\u7bb1\u5373\u7528\u3002Koa2 \u5982\u679c\u4e0d\u901a\u8fc7\u4e8c\u6b21\u5c01\u88c5\uff0c\u771f\u7684\u5f88\u96be\u76f4\u63a5\u4f5c\u4e3a Web \u5f00\u53d1\u6846\u67b6\u5f00\u53d1\u5177\u4f53\u7684\u4e1a\u52a1\u3002\nKoa \u6700\u4e3b\u8981\u7684\u6838\u5fc3\u5c31\u662f \u5e94\u7528\u4e0a\u4e0b\u6587 \u548c \u4e2d\u95f4\u4ef6\u3002\u56e0\u6b64\uff0cKoa2 \u5982\u679c\u60f3\u8981\u50cf SpringBoot \u53ef\u4ee5\u7ed9\u5f00\u53d1\u8005\u5f00\u7bb1\u5373\u7528\uff0c\u663e\u7136\u662f\u4e0d\u53ef\u80fd\u3002\u800c\u4e14\uff0cKoa2 \u5728\u4ee5\u524d\u7248\u672c\u662f\u4e0d\u652f\u6301 ESModule \u7684\uff0c\u5373\u65e0\u6cd5\u4f7f\u7528 import \u5bfc\u5165\uff0c\u53ea\u80fd\u4f7f\u7528 require\u3002\u4e0d\u8fc7\u76ee\u524d Koa \u4f9d\u8d56 ",(0,r.kt)("strong",{parentName:"p"},"node v7.6.0+")," \u6216 ES2015 \u53ca\u66f4\u9ad8\u7248\u672c\u548c async \u65b9\u6cd5\u652f\u6301\u3002\n\u968f\u7740 Typescript \u7684\u666e\u53ca\uff0c\u4f5c\u4e3a NodeJS \u7684\u5f00\u53d1\u6846\u67b6\u5f53\u7136\u4f7f\u7528 ",(0,r.kt)("strong",{parentName:"p"},"TS "),"\u7c7b\u578b\u624d\u80fd\u964d\u4f4e\u7ef4\u62a4\u6210\u672c\u3002\u5bf9\u6b64\uff0c\u672c\u4eba\u5728 Koa2 + Typescript \u7684\u57fa\u7840\u96c6\u6210\u4e86\u4e00\u4e2a Web \u5f00\u53d1\u6846\u67b6 -- ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zeffon/koa-web"},(0,r.kt)("strong",{parentName:"a"},"koa-web")),(0,r.kt)("strong",{parentName:"p"},"\u3002"),"\u5927\u5bb6\u8981\u662f\u89c9\u5f97",(0,r.kt)("strong",{parentName:"p"},"koa-web"),"\u4e0d\u9519\uff0c\u53ef\u4ee5\u7ed9\u4e2a",(0,r.kt)("strong",{parentName:"p"},"star"),"\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u8c22\u8c22\uff01")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"koa-web")," Github \u5730\u5740\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zeffon/koa-web"},"https://github.com/zeffon/koa-web")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"koa-web")," npm \u5730\u5740\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/create-koa-web"},"https://www.npmjs.com/package/create-koa-web")),(0,r.kt)("h2",{id:"\u6b63\u6587"},"\u6b63\u6587"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Koa-web")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83d\udca1 ",(0,r.kt)("strong",{parentName:"li"},"TypeScript"),": \u652f\u6301 TypeScript"),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udfa8 ",(0,r.kt)("strong",{parentName:"li"},"prettier"),"\uff1aprettier \u89c4\u8303\u4ee3\u7801\u683c\u5f0f"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\ude80 ",(0,r.kt)("strong",{parentName:"li"},"\u5168\u5c40\u5f02\u5e38"),"\uff1a\u5168\u5c40\u5f02\u5e38\u7edf\u4e00\u5904\u7406"),(0,r.kt)("li",{parentName:"ul"},"\u2708\ufe0f ",(0,r.kt)("strong",{parentName:"li"},"\u6570\u636e\u6821\u9a8c"),"\uff1a\u5b9e\u7528\u4e14\u9ad8\u6548\u7684\u6570\u636e\u6821\u9a8c\u65b9\u5f0f"),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udf40 ",(0,r.kt)("strong",{parentName:"li"},"Database"),"\uff1a\u652f\u6301 Sequelize \u8fde\u63a5"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udd25 ",(0,r.kt)("strong",{parentName:"li"},"Redis"),"\uff1a\u652f\u6301 Redis \u6570\u636e\u5e93\u8fde\u63a5"),(0,r.kt)("li",{parentName:"ul"},"\u26a1 ",(0,r.kt)("strong",{parentName:"li"},"Cache"),"\uff1a\u652f\u6301 \u672c\u5730\u7f13\u5b58"),(0,r.kt)("li",{parentName:"ul"},"\u270d\ufe0f ",(0,r.kt)("strong",{parentName:"li"},"Auth"),"\uff1a\u901a\u7528 JWT \u6388\u6743"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udcd6 ",(0,r.kt)("strong",{parentName:"li"},"\u65e5\u5fd7"),"\uff1a\u8bb0\u5f55 SQL \u65e5\u5fd7\u548c\u9519\u8bef\u65e5\u5fd7"),(0,r.kt)("li",{parentName:"ul"},"\u2705 ",(0,r.kt)("strong",{parentName:"li"},"\u5355\u5143\u6d4b\u8bd5"),"\uff1a\u652f\u6301\u5355\u5143\u6d4b\u8bd5"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udcdd ",(0,r.kt)("strong",{parentName:"li"},"API \u6587\u6863"),"\uff1aAPI \u6587\u6863\u6d4b\u8bd5")),(0,r.kt)("h3",{id:"\u8fd0\u884c"},"\u8fd0\u884c"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u8981\u4f7f\u7528 ",(0,r.kt)("strong",{parentName:"p"},"koa-web")," \u6765\u4f5c\u4e3a web \u5f00\u53d1\u6846\u67b6\uff0c\u662f\u4e0d\u9700\u8981\u4e0b\u8f7d github \u4ee3\u7801\uff0c\u76f4\u63a5\u4f7f\u7528 npm \u547d\u4ee4\u5feb\u901f\u642d\u5efa\u811a\u624b\u67b6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"$ npm create koa-web@latest\n# \u6216\u8005\u6307\u5b9a\u9879\u76ee\u540d\u79f0\n$ npm create koa-web@latest koa-web-project\n")),(0,r.kt)("p",null,"\u5b89\u88c5\u5b8c\u6bd5\uff0c\u5373\u53ef\u8fd0\u884c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"# 1. \u6253\u5f00\u5b89\u88c5\u7684\u9879\u76ee\n$ cd koa-web-project\n\n# 2. \u5b89\u88c5\u4f9d\u8d56\n$ npm install\n\n# 3. \u8fd0\u884c\u9879\u76ee\n$ npm run start\n\n# 4. \u6253\u5f00\u5728\u7ebf\u6587\u6863\n# please open in: http://127.0.0.1:3000/koa-web/v1/doc.html\n")),(0,r.kt)("h3",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,r.kt)("p",null,"\u4e00\u4e2a web \u5f00\u53d1\u6846\u67b6\u6700\u6838\u5fc3\u3001\u6700\u57fa\u7840\u7684\u65e0\u975e\u5c31\u662f\u4ece\u5f02\u5e38\u5904\u7406\u548c\u6570\u636e\u6821\u9a8c\u8fd9\u4e24\u4e2a\u6a21\u5757\u5f00\u59cb\u3002"),(0,r.kt)("h4",{id:"\u5168\u5c40\u5f02\u5e38"},"\u5168\u5c40\u5f02\u5e38"),(0,r.kt)("p",null,"\u501f\u52a9 Koa2 \u4e2d\u95f4\u4ef6\u7684\u7279\u6027\u5b9e\u73b0\u4e86\u5168\u5c40\u5f02\u5e38\u6355\u83b7\u53ca\u5904\u7406\u3002\nKoa-web \u4e2d\uff0c\u5f02\u5e38\u5206\u4e3a\u4e24\u79cd\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5df2\u77e5\u5f02\u5e38"),(0,r.kt)("li",{parentName:"ol"},"\u672a\u77e5\u5f02\u5e38")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5df2\u77e5\u5f02\u5e38\uff08HTTP \u5f02\u5e38\uff09")," \u53c8\u5206\u4e3a\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u53c2\u6570\u5f02\u5e38 ParameterException"),(0,r.kt)("li",{parentName:"ol"},"\u672a\u6388\u6743\u5f02\u5e38 UnAuthenticatedException"),(0,r.kt)("li",{parentName:"ol"},"\u7981\u6b62\u8bbf\u95ee\u5f02\u5e38 ForbiddenException"),(0,r.kt)("li",{parentName:"ol"},"404 \u5f02\u5e38 NotFoundException"),(0,r.kt)("li",{parentName:"ol"},"\u670d\u52a1\u4e0d\u53ef\u7528\u5f02\u5e38 ServerErrorException"),(0,r.kt)("li",{parentName:"ol"},"\u6570\u636e\u64cd\u4f5c GET\u3001POST\u3001PUT\u3001DELETE\uff08Koa-web \u5bf9\u6570\u636e\u64cd\u4f5c\u6210\u529f\u4e5f\u7b97\u662f\u4e00\u79cd\u5f02\u5e38\uff09")),(0,r.kt)("p",null,"\u901a\u8fc7\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"exception-code"),"\u5b9a\u4e49\u76f8\u5bf9\u5e94",(0,r.kt)("strong",{parentName:"p"},"\u9519\u8bef\u7801"),"\u548c",(0,r.kt)("strong",{parentName:"p"},"\u9519\u8bef\u63d0\u793a"),"\uff0c\u629b\u51fa\u53bb\u5f02\u5e38\u5c31\u53ef\u4ee5\u7edf\u4e00\u683c\u5f0f\u4e86\u3002\n\u5728\u7cfb\u7edf\u521d\u59cb\u5316\u9636\u6bb5\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"UnifyResponse"),"\u7edf\u4e00\u8fd4\u56de\u683c\u5f0f \u8d4b\u503c\u7ed9 ",(0,r.kt)("inlineCode",{parentName:"p"},"global.UnifyResponse"),",\u4e4b\u540e\u5728\u7f16\u5199\u4e1a\u52a1\u4ee3\u7801\u4fbf\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"global.UnifyResponse"),"\u6839\u636e\u786e\u5b9a\u7684\u5f02\u5e38\u5206\u7c7b\u8fd4\u56de\u5bf9\u5e94\u7684\u5f02\u5e38\u4fe1\u606f\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u672a\u77e5\u5f02\u5e38")," \u4e00\u822c\u662f\u672a\u53d1\u73b0\u7684\u5f02\u5e38\u63d0\u793a\uff0c\u76ee\u524d\u53ef\u4ee5\u901a\u8fc7\u8bb0\u5f55\u65e5\u5fd7\u7684\u65b9\u5f0f\u8bb0\u5f55\u8be5\u5f02\u5e38\u4fe1\u606f\u3002"),(0,r.kt)("h4",{id:"\u6570\u636e\u6821\u9a8c"},"\u6570\u636e\u6821\u9a8c"),(0,r.kt)("p",null,"\u6570\u636e\u6821\u9a8c\u6709\u4e24\u79cd\u6821\u9a8c\u5c42\u6b21\uff0c\u4e00\u79cd\u662f\u57fa\u4e8e ",(0,r.kt)("strong",{parentName:"p"},"koa-swagger-decorator")," \u8fdb\u884c\u7b80\u5355\u53c2\u6570\u4f20\u9012\u7684\u6821\u9a8c\uff0c\u53e6\u4e00\u79cd\u662f\u57fa\u4e8e ",(0,r.kt)("strong",{parentName:"p"},"validator")," \u5c01\u88c5\u7684\u590d\u6742\u53c2\u6570\u6821\u9a8c ",(0,r.kt)("strong",{parentName:"p"},"LinValidator"),"\uff08\u6765\u81ea 7 \u4e03\u6708\u8001\u5e08\uff09\u3002\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Cody2333/koa-swagger-decorator"},(0,r.kt)("strong",{parentName:"a"},"koa-swagger-decorator"))," \u4e2d\u7684\u53c2\u6570\u6821\u9a8c\u4e5f\u662f\u57fa\u4e8e ",(0,r.kt)("strong",{parentName:"p"},"validator")," \u4e0a\u3002\u800c ",(0,r.kt)("strong",{parentName:"p"},"Koa-web")," \u4e3a\u4ec0\u4e48\u6709\u4e86 \u81ea\u5df1\u5c01\u88c5\u7684\u53c2\u6570\u6821\u9a8c\u5668\uff0c\u8fd8\u8981\u4f7f\u7528 ",(0,r.kt)("strong",{parentName:"p"},"koa-swagger-decorator")," \u5462\uff1f\u4f7f\u7528 ",(0,r.kt)("strong",{parentName:"p"},"koa-swagger-decorator")," \u662f\u60f3\u8ba9 ",(0,r.kt)("strong",{parentName:"p"},"Koa-web")," \u53ef\u4ee5 ",(0,r.kt)("strong",{parentName:"p"},"\u5728\u7ebf API \u6587\u6863")," \u8c03\u8bd5\uff0c\u800c ",(0,r.kt)("strong",{parentName:"p"},"koa-swagger-decorator")," \u5728\u53c2\u6570\u4f20\u9012\u4e0a\u6709\u81ea\u5df1\u4e00\u5957\u6821\u9a8c\u89c4\u5219\uff0c\u6743\u8861\u4e00\u4e8c\u540e\uff0c\u5c06\u7b80\u5355\u89c4\u5219\u7684\u6821\u9a8c\u653e\u5728 ",(0,r.kt)("strong",{parentName:"p"},"koa-swagger-decorator")," \uff0c\u800c ",(0,r.kt)("strong",{parentName:"p"},"LinValidator")," \u7528\u6765\u6821\u9a8c\u590d\u6742\u53c2\u6570\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"koa-swagger-decorator")," \u7684\u8be6\u7ec6\u89c4\u5219\u4f7f\u7528\u53ef\u4ee5\u67e5\u770b\u5176\u5b98\u65b9 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Cody2333/koa-swagger-decorator"},"Github \u5730\u5740"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"LinValidator")," \u7684\u4f7f\u7528")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Koa-web")," \u76f8\u5173\u6a21\u5757\u7684\u6821\u9a8c\u5668\u662f\u7edf\u4e00\u653e\u7f6e\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"src/app/api/valid")," \u76ee\u5f55\u4e0b\uff0c\u6bd4\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'export class RegisterValidator extends LinValidator {\n  private email;\n  private nickname;\n  private password1;\n  private password2;\n  private remark;\n\n  constructor() {\n    super();\n    this.email = [\n      new Rule("isLength", "Min 12 characters, max 32 characters", {\n        min: 6,\n        max: 32,\n      }),\n      new Rule("isEmail", "Please enter email format"),\n    ];\n    this.nickname = [\n      new Rule("isLength", "Nickname does not match the length", {\n        min: 4,\n        max: 32,\n      }),\n    ];\n    this.password1 = [\n      new Rule("isLength", "Password has min 6 characters, max 32 characters", {\n        min: 6,\n        max: 32,\n      }),\n      new Rule(\n        "matches",\n        "Password does not meet specifications",\n        "^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]"\n      ),\n    ];\n    this.password2 = this.password1;\n    this.remark = [\n      new Rule("isOptional"), // \u53ef\u9009\uff0c\u4e0d\u6821\u9a8c\n    ];\n  }\n\n  validatePassword(vals: any) {\n    const password1 = vals.body.password1;\n    const password2 = vals.body.password2;\n    if (password1 !== password2) {\n      throw new Error("Both passwords must be the same");\n    }\n  }\n}\n')),(0,r.kt)("h4",{id:"auth-\u8ba4\u8bc1"},"Auth \u8ba4\u8bc1"),(0,r.kt)("p",null,"core \u76ee\u5f55\u4e0b auth \u6a21\u5757\u662f\u8ba4\u8bc1\u673a\u5236\u3002",(0,r.kt)("strong",{parentName:"p"},"Koa-web")," \u7684\u6388\u6743\u673a\u5236\u662f\u57fa\u4e8e ",(0,r.kt)("strong",{parentName:"p"},"jsonwebtoken")," \u6765 ",(0,r.kt)("strong",{parentName:"p"},"\u9881\u53d1")," \u548c ",(0,r.kt)("strong",{parentName:"p"},"\u6821\u9a8c")," Token \u4ee4\u724c\u7684\u3002Koa-web \u5168\u5c40\u62e6\u622a\u6240\u6709\u8bf7\u6c42\uff0c\u9664\u4e86\u5728 ",(0,r.kt)("strong",{parentName:"p"},"unlessPaths")," \u4e2d\u8def\u7531\uff0c\u5176\u5b83\u6240\u6709\u7684\u8bf7\u6c42\u90fd\u9700\u8981\u5728\u8bf7\u6c42\u5934\u4e0a\u643a\u5e26 ",(0,r.kt)("strong",{parentName:"p"},"authorization")," \u53c2\u6570\u540e\u624d\u80fd\u6b63\u5e38\u8bbf\u95ee\uff0c\u4e0d\u7136\u53ea\u80fd\u8fd4\u56de 401 \u8bf7\u6c42\u3002\n",(0,r.kt)("strong",{parentName:"p"},"unlessPaths")," \u4e2d\u8def\u7531\u6570\u7ec4\u5c31\u662f\u8fc7\u6ee4 url \u8def\u7531\u3002",(0,r.kt)("strong",{parentName:"p"},"unlessPaths")," \u652f\u6301\u5b57\u7b26\u4e32\u7cbe\u51c6\u7684\u8def\u7531\u548c\u6b63\u5219\u5339\u914d\u89c4\u5219\u7684\u8def\u7531\u65b9\u5f0f\uff08\u63a8\u8350\u4f7f\u7528\u6b63\u5219\u65b9\u5f0f\uff09\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"let unlessPaths = [\n  /^\\/koa-web\\/v1\\/json\\.html[\\/#\\?]?$/i,\n  /^\\/koa-web\\/v1\\/doc\\.html[\\/#\\?]?$/i,\n  /^\\/koa-web\\/v1\\/user\\/login[\\/#\\?]?$/i,\n  /^\\/koa-web\\/v1\\/user\\/register[\\/#\\?]?$/i\n]\n# \u6216\u8005\nlet unlessPaths = [\n  '/koa-web/v1/json.html',\n  '/koa-web/v1/doc.html',\n  '/koa-web/v1/user/login',\n  '/koa-web/v1/user/register'\n]\n")),(0,r.kt)("h4",{id:"\u6570\u636e\u5e93\u8fde\u63a5"},"\u6570\u636e\u5e93\u8fde\u63a5"),(0,r.kt)("p",null,"\u6570\u636e\u5e93\u662f ",(0,r.kt)("a",{parentName:"p",href:"https://sequelize.org/"},(0,r.kt)("strong",{parentName:"a"},"sequelize"))," \u8fdb\u884c\u8fde\u63a5\u7684\uff0c\u91c7\u7528 ",(0,r.kt)("strong",{parentName:"p"},"MySQL")," \u5f15\u64ce\u3002\u800c\u5bf9\u6570\u636e\u5e93\u64cd\u4f5c\u91c7\u7528 ",(0,r.kt)("strong",{parentName:"p"},"sequelize")," \u7684",(0,r.kt)("a",{parentName:"p",href:"https://github.com/demopark/sequelize-docs-Zh-CN/blob/v6/core-concepts/model-basics.md"},"\u6a21\u578b"),"\u3002\u53ef\u4ee5\u53c2\u8003 ",(0,r.kt)("strong",{parentName:"p"},"Koa-web")," \u4e2d\u7684 user \u6a21\u5757\u8fdb\u884c\u6a21\u578b\u8bbe\u8ba1\uff0c\u914d\u7f6e\u4e0a\u6b63\u786e\u7684\u6570\u636e\u5e93\u5730\u5740\u4fbf\u53ef\u4ee5\u751f\u6210\u5bf9\u5e94\u7684\u8868\u7ed3\u6784\u3002\u914d\u7f6e\u6587\u4ef6\u5728 ",(0,r.kt)("strong",{parentName:"p"},"config")," \u76ee\u5f55\u4e0b\uff0c\u5206\u6709\u4e09\u79cd\u8fd0\u884c\u73af\u5883\u6587\u4ef6\uff0c\u9009\u62e9\u5f53\u524d\u8fd0\u884c\u73af\u5883\u7684\u6587\u4ef6\u8fdb\u884c\u914d\u7f6e ",(0,r.kt)("strong",{parentName:"p"},"DATABASE")," \u76f8\u5173\u53c2\u6570\u914d\u7f6e\u3002"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"src/app/api/model")," \u4e0b\u7f16\u5199\u5bf9\u5e94\u7684\u6a21\u578b\uff0c\u5e76\u4e14\u9700\u8981\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"index.ts")," \u8fdb\u884c\u5bfc\u51fa\uff0c\u4f1a\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"src/core/database/init.ts")," \u68c0\u6d4b\u5230\u5b9a\u4e49\u7684\u6a21\u578b\uff0c\u8fdb\u884c\u6570\u636e\u5e93\u8868\u521b\u5efa\u3002"),(0,r.kt)("h4",{id:"redis-\u6570\u636e\u5e93"},"Redis \u6570\u636e\u5e93"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("strong",{parentName:"p"},"config")," \u914d\u7f6e\u4e0b\uff0cREDIS.ENABLED \u662f\u5426\u5f00\u542f Redis \u670d\u52a1\uff0c\u586b\u5199\u6b63\u786e\u7684 redis \u7684 host\u3001port\u3001password \u8fde\u63a5 Redis \u5ba2\u6237\u7aef\u3002\u63d0\u4f9b\u4e09\u4e2a\u65b9\u6cd5\u64cd\u4f5c\u6570\u636e\u7684\u5b58\u50a8\u3001\u83b7\u53d6\u3001\u5220\u9664\uff0c\u66f4\u591a\u65b9\u6cd5\u53ef\u4ee5\u8fdb\u884c\u6269\u5c55\u3002"),(0,r.kt)("h4",{id:"\u672c\u5730\u7f13\u5b58"},"\u672c\u5730\u7f13\u5b58"),(0,r.kt)("p",null,"\u672c\u5730\u7f13\u5b58\u662f\u5b58\u50a8\u5728 NodeJS \u8fdb\u7a0b\u4e2d\uff0c\u4f1a\u968f\u7740\u8fdb\u7a0b\u7684\u91cd\u542f\u800c\u88ab\u6e05\u695a\u7f13\u5b58\u6570\u636e\u3002\u53ef\u4ee5\u5b58\u50a8\u4e00\u4e9b\u4e0d\u91cd\u8981\u7684\u6570\u636e\u3002"),(0,r.kt)("h4",{id:""}),(0,r.kt)("h4",{id:"api-\u6587\u6863"},"API \u6587\u6863"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"API \u6587\u6863")," \u662f\u91c7\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Cody2333/koa-swagger-decorator"},(0,r.kt)("strong",{parentName:"a"},"koa-swagger-decorator"))," \u5b9e\u73b0\u7684\u3002\u53ef\u4ee5\u901a\u8fc7",(0,r.kt)("strong",{parentName:"p"},"\u88c5\u9970\u5668"),"\u7684\u65b9\u5f0f\uff0c\u66f4\u52a0\u7b80\u6d01\u5c06 api \u63a5\u53e3\u7f16\u7801\u51fa\u6765\u3002\u5e76\u4e14\u501f\u52a9 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Cody2333/koa-swagger-decorator"},(0,r.kt)("strong",{parentName:"a"},"koa-swagger-decorator"))," \u5b9e\u73b0\u7b80\u5355\u7684\u53c2\u6570\u6821\u9a8c\u3002\u5728 API \u6587\u6863\u4e0a\u53ef\u4ee5\u66f4\u52a0\u65b9\u4fbf\u5730\u3001\u76f4\u89c2\u5730\u8fdb\u884c\u8c03\u8bd5\u63a5\u53e3\u3002"))}m.isMDXComponent=!0}}]);