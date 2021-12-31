"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3741],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return c}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},p=Object.keys(t);for(a=0;a<p.length;a++)n=p[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(a=0;a<p.length;a++)n=p[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),m=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=m(t.components);return a.createElement(i.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,p=t.originalType,i=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),g=m(n),c=r,N=g["".concat(i,".").concat(c)]||g[c]||k[c]||p;return n?a.createElement(N,o(o({ref:e},s),{},{components:n})):a.createElement(N,o({ref:e},s))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var p=n.length,o=new Array(p);o[0]=g;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var m=2;m<p;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},29226:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return m},assets:function(){return s},toc:function(){return k},default:function(){return c}});var a=n(87462),r=n(63366),p=(n(67294),n(3905)),o=["components"],l={slug:"event-loop",title:"JS \u7684\u4efb\u52a1\u7ba1\u7406\u673a\u5236",authors:"zeffon",tags:["js"],date:"2021-11-06 21:32"},i=void 0,m={permalink:"/blog/event-loop",editUrl:"https://github.com/zeffon/zeffon.github.io/blob/master/blog/2021/2021-11-06-event-loop.md",source:"@site/blog/2021/2021-11-06-event-loop.md",title:"JS \u7684\u4efb\u52a1\u7ba1\u7406\u673a\u5236",description:"JavaScript \u662f\u88ab\u8bbe\u8ba1\u4e3a\u5355\u7ebf\u7a0b\u7684\uff0c\u8fd9\u610f\u5473\u7740\u4efb\u52a1\u53ea\u80fd\u4e00\u4e2a\u4e00\u4e2a\u5904\u7406\u3002\u5982\u679c\u67d0\u4e00\u4e2a\u4efb\u52a1\u662f I/O \u64cd\u4f5c\u7c7b\u578b\u7684\uff0c\u6bd4\u5982\u7528\u6237\u8f93\u5165\uff0c\u90a3\u4e48\u8be5\u64cd\u4f5c\u672a\u5b8c\u6210\u524d\uff0c\u5176\u4ed6\u6240\u6709\u4efb\u52a1\u90fd\u5904\u4e8e\u7b49\u5f85\u72b6\u6001\uff0c\u8fd9\u6837\u5c31\u4f1a\u9020\u6210\u9875\u9762\u5047\u6b7b\u72b6\u6001\uff0c\u4ece\u800c\u5bfc\u81f4\u7528\u6237\u4f53\u9a8c\u6781\u5dee\u3002\u4e3a\u4e86\u89e3\u51b3\u8be5\u95ee\u9898\uff0c JavaScript \u5c06\u4efb\u52a1\u5206\u4e3a\u540c\u6b65\u4efb\u52a1\u548c\u5f02\u6b65\u4efb\u52a1\uff0c\u786e\u4fdd\u9875\u9762\u7684\u4ea4\u4e92\u548c\u6e32\u67d3\u5904\u7406\u80fd\u9ad8\u6548\u8fdb\u884c\u3002",date:"2021-11-06T21:32:00.000Z",formattedDate:"November 6, 2021",tags:[{label:"js",permalink:"/blog/tags/js"}],readingTime:.9,truncated:!0,authors:[{name:"Zeffon Wu",title:"A web engineer",url:"https://github.com/zeffon",imageURL:"https://github.com/zeffon.png",key:"zeffon"}],prevItem:{title:"CSS3 \u52a8\u753b",permalink:"/blog/css3-animation"},nextItem:{title:"\u524d\u7aef\u8def\u7531 hash \u548c history \u6a21\u5f0f",permalink:"/blog/web-route"}},s={authorsImageUrls:[void 0]},k=[{value:"\u540c\u6b65\u4efb\u52a1",id:"\u540c\u6b65\u4efb\u52a1",children:[]},{value:"\u5f02\u6b65\u4efb\u52a1",id:"\u5f02\u6b65\u4efb\u52a1",children:[]},{value:"\u4efb\u52a1\u7ba1\u7406\u673a\u5236",id:"\u4efb\u52a1\u7ba1\u7406\u673a\u5236",children:[]},{value:"\u5b8f\u4efb\u52a1\u548c\u5fae\u4efb\u52a1",id:"\u5b8f\u4efb\u52a1\u548c\u5fae\u4efb\u52a1",children:[]}],g={toc:k};function c(t){var e=t.components,l=(0,r.Z)(t,o);return(0,p.kt)("wrapper",(0,a.Z)({},g,l,{components:e,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"JavaScript")," \u662f\u88ab\u8bbe\u8ba1\u4e3a\u5355\u7ebf\u7a0b\u7684\uff0c\u8fd9\u610f\u5473\u7740\u4efb\u52a1\u53ea\u80fd\u4e00\u4e2a\u4e00\u4e2a\u5904\u7406\u3002\u5982\u679c\u67d0\u4e00\u4e2a\u4efb\u52a1\u662f I/O \u64cd\u4f5c\u7c7b\u578b\u7684\uff0c\u6bd4\u5982\u7528\u6237\u8f93\u5165\uff0c\u90a3\u4e48\u8be5\u64cd\u4f5c\u672a\u5b8c\u6210\u524d\uff0c\u5176\u4ed6\u6240\u6709\u4efb\u52a1\u90fd\u5904\u4e8e\u7b49\u5f85\u72b6\u6001\uff0c\u8fd9\u6837\u5c31\u4f1a\u9020\u6210\u9875\u9762\u5047\u6b7b\u72b6\u6001\uff0c\u4ece\u800c\u5bfc\u81f4\u7528\u6237\u4f53\u9a8c\u6781\u5dee\u3002\u4e3a\u4e86\u89e3\u51b3\u8be5\u95ee\u9898\uff0c ",(0,p.kt)("strong",{parentName:"p"},"JavaScript")," \u5c06\u4efb\u52a1\u5206\u4e3a",(0,p.kt)("strong",{parentName:"p"},"\u540c\u6b65\u4efb\u52a1"),"\u548c",(0,p.kt)("strong",{parentName:"p"},"\u5f02\u6b65\u4efb\u52a1"),"\uff0c\u786e\u4fdd\u9875\u9762\u7684\u4ea4\u4e92\u548c\u6e32\u67d3\u5904\u7406\u80fd\u9ad8\u6548\u8fdb\u884c\u3002"),(0,p.kt)("h2",{id:"\u540c\u6b65\u4efb\u52a1"},"\u540c\u6b65\u4efb\u52a1"),(0,p.kt)("p",null,"\u540c\u6b65\u4efb\u52a1\u662f\u4f1a\u963b\u585e\u4e3b\u7ebf\u7a0b\uff0c\u5f53\u4e3b\u7ebf\u7a0b\u4e0a\u6709\u4efb\u52a1\u5728\u6392\u961f\u6267\u884c\u65f6\uff0c\u540e\u4e00\u4e2a\u4efb\u52a1\u9700\u8981\u7b49\u5f85\u524d\u4e00\u4e2a\u4efb\u52a1\u5b8c\u6574\u5730\u6267\u884c\u5b8c\u6210\u540e\uff0c\u5b83\u624d\u53ef\u4ee5\u88ab\u6267\u884c\u3002"),(0,p.kt)("p",null,"\u5728 ",(0,p.kt)("strong",{parentName:"p"},"JavaScript")," \u4e2d\uff0c\u540c\u6b65\u4efb\u52a1\u57fa\u672c\u4e0a\u53ef\u4ee5\u8ba4\u4e3a\u662f\u6267\u884c ",(0,p.kt)("strong",{parentName:"p"},"JavaScript")," \u4ee3\u7801\u3002\u800c ",(0,p.kt)("strong",{parentName:"p"},"JavaScript")," \u5728\u6267\u884c\u8fc7\u7a0b\u4e2d\u6bcf\u8fdb\u5165\u4e00\u4e2a\u4e0d\u540c\u7684\u8fd0\u884c\u73af\u5883\uff08\u7c97\u7565\u5730\u7406\u89e3\u4e3a\u4e00\u4e2a\u51fd\u6570\uff09\u65f6\uff0c\u90fd\u4f1a\u521b\u5efa\u4e00\u4e2a\u76f8\u5e94\u7684\u6267\u884c\u4e0a\u4e0b\u6587\u3002\u800c\u8fd9\u4e9b\u6267\u884c\u4e0a\u4e0b\u6587\uff0c",(0,p.kt)("strong",{parentName:"p"},"JavaScript")," \u89e3\u91ca\u5668\u91c7\u7528 ",(0,p.kt)("strong",{parentName:"p"},"\u6808")," \u7684\u65b9\u5f0f\u8fdb\u884c\u7ba1\u7406\u3002\u8fd9\u4e9b",(0,p.kt)("strong",{parentName:"p"},"\u6267\u884c\u4e0a\u4e0b\u6587"),"\u548c",(0,p.kt)("strong",{parentName:"p"},"\u51fd\u6570"),"\u4e4b\u95f4\u7684\u8c03\u7528\u5173\u7cfb\uff0c\u5f62\u6210",(0,p.kt)("strong",{parentName:"p"},"\u51fd\u6570\u8c03\u7528\u6808"),"\uff08call stack\uff09\uff0c\u9075\u5faa FILO\uff08\u5148\u8fdb\u540e\u51fa\uff09\u7684\u539f\u5219\uff09\u3002"),(0,p.kt)("p",null,"JavaScript \u4e2d\u4ee3\u7801\u5728",(0,p.kt)("strong",{parentName:"p"},"\u51fd\u6570\u8c03\u7528\u6808"),"\u6267\u884c\u7684\u8fc7\u7a0b\u4e2d\uff0c\u4f1a\u8fdb\u884c\u4ee5\u4e0b\u7684\u5904\u7406\uff1a"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},"\u8fdb\u5165\u5168\u5c40\u73af\u5883\uff0c",(0,p.kt)("strong",{parentName:"li"},"\u5168\u5c40"),"\u6267\u884c\u4e0a\u4e0b\u6587\u88ab\u521b\u5efa\u5e76\u6dfb\u52a0\u8fdb",(0,p.kt)("strong",{parentName:"li"},"\u8c03\u7528\u6808"),"\u4e2d"),(0,p.kt)("li",{parentName:"ol"},"\u6bcf\u8c03\u7528\u4e00\u4e2a\u51fd\u6570\uff0c\u8be5\u51fd\u6570\u6267\u884c\u4e0a\u4e0b\u6587\u4f1a\u88ab\u6dfb\u52a0\u8fdb",(0,p.kt)("strong",{parentName:"li"},"\u8c03\u7528\u6808"),"\uff0c\u5e76\u5f00\u59cb\u6267\u884c\uff1b"),(0,p.kt)("li",{parentName:"ol"},"\u5982\u679c\u6b63\u5728",(0,p.kt)("strong",{parentName:"li"},"\u8c03\u7528\u6808"),"\u4e2d\u6267\u884c\u7684 A \u51fd\u6570\u8fd8\u8c03\u7528\u4e86 B \u51fd\u6570\uff0c\u90a3\u4e48 B \u51fd\u6570\u4e5f\u5c06\u4f1a\u88ab\u6dfb\u52a0\u8fdb",(0,p.kt)("strong",{parentName:"li"},"\u8c03\u7528\u6808"),"\uff1b"),(0,p.kt)("li",{parentName:"ol"},"\u4e00\u65e6 B \u51fd\u6570\u88ab\u8c03\u7528\uff0c\u4fbf\u4f1a\u7acb\u5373\u6267\u884c"),(0,p.kt)("li",{parentName:"ol"},"\u5f53\u524d\u51fd\u6570\u6267\u884c\u5b8c\u6bd5\u540e\uff0c",(0,p.kt)("strong",{parentName:"li"},"JavaScript")," \u89e3\u91ca\u5668\u5c06\u5176\u6e05\u51fa",(0,p.kt)("strong",{parentName:"li"},"\u8c03\u7528\u6808"),"\uff0c\u7ee7\u7eed\u6267\u884c\u5f53\u524d\u6267\u884c\u73af\u5883\u4e0b\u5269\u4f59\u7684\u4ee3\u7801")),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"\u7531\u4e8e JS \u7684\u6808\u4e0e Java \u7684\u6808\u662f\u5f88\u76f8\u4f3c\u7684\uff0c\u540c\u6837\u4f1a\u6709\u6808\u6ea2\u51fa\u7684\u60c5\u51b5\u3002\n\u5982\u679c",(0,p.kt)("strong",{parentName:"p"},"\u51fd\u6570\u8c03\u7528\u6808"),"\u5ffd\u7565",(0,p.kt)("strong",{parentName:"p"},"\u5168\u5c40\u6267\u884c\u4e0a\u4e0b\u6587"),"\u7684\u8bdd\uff0c\u6574\u4e2a\u51fd\u6570\u8c03\u7528\u6808\u6267\u884c\u5b8c\u51fd\u6570\u540e\u662f\u4e3a\u7a7a\u6808")),(0,p.kt)("p",null,"\u7531\u6b64\u53ef\u89c1\uff0cJavaScript \u4ee3\u7801\u6267\u884c\u8fc7\u7a0b\u4e2d\uff0c",(0,p.kt)("strong",{parentName:"p"},"\u51fd\u6570\u8c03\u7528\u6808"),"\u6808\u5e95\u6c38\u8fdc\u662f",(0,p.kt)("strong",{parentName:"p"},"\u5168\u5c40\u6267\u884c\u4e0a\u4e0b\u6587"),"\uff0c\u6808\u9876\u6c38\u8fdc\u662f",(0,p.kt)("strong",{parentName:"p"},"\u5f53\u524d\u6267\u884c\u4e0a\u4e0b\u6587"),"\u3002\n\u8fd9\u6837\u7684\u4e00\u4e2a\u51fd\u6570\u8c03\u7528\u6808\u7ed3\u6784\uff0c\u53ef\u4ee5\u7406\u89e3\u4e3a JavaScript \u4e2d\u540c\u6b65\u4efb\u52a1\u7684\u6267\u884c\u73af\u5883\uff0c\u540c\u6b65\u4efb\u52a1\u4e5f\u53ef\u4ee5\u7406\u89e3\u4e3a JavaScript \u4ee3\u7801\u7247\u6bb5\u7684\u6267\u884c\u3002"),(0,p.kt)("p",null,"\u56e0\u6b64\uff0c\u540c\u6b65\u4efb\u52a1\u7684\u6267\u884c\u8fc7\u7a0b\u4e2d\u662f\u4f1a\u963b\u585e\u4e3b\u7ebf\u7a0b\uff0c\u5176\u5b83\u4efb\u52a1\u53ea\u80fd\u5728\u5f53\u524d\u6267\u884c\u5b8c\u6210\u540e\uff0c\u624d\u80fd\u88ab\u6267\u884c\u3002\u800c\u5982\u679c\u8be5\u4efb\u52a1\u7684\u6267\u884c\u65f6\u95f4\u957f\u7684\u8bdd\uff0c\u4f1a\u5bfc\u81f4\u6d4f\u89c8\u5668\u957f\u65f6\u95f4\u5904\u7406\u7b49\u5f85\u72b6\u6001\uff0c\u65e0\u6cd5\u6267\u884c\u5176\u5b83\u4efb\u52a1\uff0c\u5bfc\u81f4\u6d4f\u89c8\u5668\u65e0\u6cd5\u5904\u7406\u4e0e\u7528\u6237\u7684\u5176\u5b83\u4ea4\u4e92\u3002\u663e\u7136\uff0c\u8fd9\u6837\u7684\u673a\u5236\u662f\u4e0d\u591f\u9ad8\u6548\u7684\u3002\u56e0\u6b64\uff0c\u9664\u4e86\u540c\u6b65\u4efb\u52a1\uff0c\u6d4f\u89c8\u5668\u8fd8\u9700\u8981\u5f02\u6b65\u4efb\u52a1\u3002"),(0,p.kt)("h2",{id:"\u5f02\u6b65\u4efb\u52a1"},"\u5f02\u6b65\u4efb\u52a1"),(0,p.kt)("p",null,"\u540c\u6b65\u4efb\u52a1\u662f\u4e0d\u4f1a\u963b\u585e\u4e3b\u7ebf\u7a0b\uff0c\u5728\u5176\u4efb\u52a1\u6267\u884c\u5b8c\u6210\u4e4b\u540e\uff0c\u4f1a\u518d\u6839\u636e\u4e00\u5b9a\u7684\u89c4\u5219\u53bb\u6267\u884c\u76f8\u5173\u7684\u56de\u8c03\u3002"),(0,p.kt)("p",null,"\u5f02\u6b65\u4efb\u52a1\u4e3b\u8981\u6267\u884c\uff1a\u7528\u6237\u4ea4\u4e92\u3001HTTP \u8bf7\u6c42\u3001\u5b9a\u65f6\u5668\u7b49\u8fd9\u4e9b\u9700\u8981\u7b49\u5f85\u54cd\u5e94\u7684\u4efb\u52a1\u3002\n\u7528\u6237\u4ea4\u4e92\u5305\u62ec\u5f88\u591a\u64cd\u4f5c\uff0c\u6bd4\u5982\u6587\u5b57\u8f93\u5165\u3001\u6587\u4ef6\u9009\u62e9\u4e0a\u4f20\u3001\u70b9\u51fb\u64cd\u4f5c...\nHTTP \u8bf7\u6c42\u5c31\u662f\u8bf7\u6c42\u670d\u52a1\u7aef\u7684\u8bf7\u6c42\u4efb\u52a1\uff0c\u9700\u8981\u670d\u52a1\u7aef\u8fd4\u56de\u76f8\u5e94\u3002\u540c\u6837\u662f\u8017\u65f6\u7684 I/O \u7c7b\u578b\u4efb\u52a1\u3002\n\u8fd9\u4e9b\u5982\u679c\u4e0d\u4f7f\u7528\u5f02\u6b65\u4efb\u52a1\uff0c\u800c\u662f\u4f7f\u7528\u540c\u6b65\u4efb\u52a1\u7684\u673a\u5236\uff0c\u663e\u7136\u7528\u6237\u7684\u4f53\u9a8c\u662f\u5341\u5206\u7cdf\u7cd5\u7684\u3002"),(0,p.kt)("p",null,"\u5f02\u6b65\u4efb\u52a1\u4e0e\u540c\u6b65\u4efb\u52a1\u91c7\u7528",(0,p.kt)("strong",{parentName:"p"},"\u51fd\u6570\u8c03\u7528\u6808"),"\u7684\u673a\u5236\u4e0d\u540c\uff0c\u5b83\u91c7\u7528\u7684\u662f",(0,p.kt)("strong",{parentName:"p"},"\u56de\u8c03\u961f\u5217"),"\u7684\u673a\u5236\uff0c\u9075\u5faa FIFO\uff08\u5148\u8fdb\u5148\u51fa\uff09\u7684\u539f\u5219\u3002\n",(0,p.kt)("strong",{parentName:"p"},"JavaScript")," \u5728\u8fd0\u884c\u7684\u65f6\u5019\uff0c\u9664\u4e86",(0,p.kt)("strong",{parentName:"p"},"\u51fd\u6570\u8c03\u7528\u6808"),"\u4e4b\u5916\uff0c\u8fd8\u5305\u542b\u4e86\u4e00\u4e2a\u5f85\u5904\u7406\u7684",(0,p.kt)("strong",{parentName:"p"},"\u56de\u8c03\u961f\u5217"),"\u3002"),(0,p.kt)("p",null,"JavaScript \u4e2d\u4ee3\u7801\u5728",(0,p.kt)("strong",{parentName:"p"},"\u56de\u8c03\u961f\u5217"),"\u6267\u884c\u7684\u8fc7\u7a0b\u4e2d\uff0c\u4f1a\u8fdb\u884c\u4ee5\u4e0b\u7684\u5904\u7406\uff1a"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},"\u5f02\u6b65\u4efb\u52a1\u5f00\u59cb\u6267\u884c\u65f6\uff0c\u4f1a\u521b\u5efa\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\u5173\u8054\u7740\u5f02\u6b65\u4efb\u52a1"),(0,p.kt)("li",{parentName:"ol"},"\u5f02\u6b65\u4efb\u52a1\u6267\u884c\u7ed3\u675f\u540e\uff0c\u62ff\u5230\u5f02\u6b65\u7ed3\u679c\uff0c\u8be5\u5f02\u6b65\u4efb\u52a1\u548c\u4e0e\u5176\u5173\u8054\u7684\u56de\u8c03\u51fd\u6570\u4f1a\u88ab\u5b58\u653e\u5230",(0,p.kt)("strong",{parentName:"li"},"\u56de\u8c03\u961f\u5217"),"\u4e2d"),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("strong",{parentName:"li"},"\u56de\u8c03\u961f\u5217"),"\u4f1a\u6709\u591a\u4e2a\u5f02\u6b65\u4efb\u52a1\uff0c\u4f46\u4f1a\u4ece\u6700\u5148\u8fdb\u5165\u961f\u5217\u7684\u4efb\u52a1\u5f00\u59cb\u5904\u7406"),(0,p.kt)("li",{parentName:"ol"},"\u88ab\u5904\u7406\u7684\u4efb\u52a1\u4f1a\u88ab\u79fb\u51fa\u961f\u5217\uff0c\u8be5\u4efb\u52a1\u7684\u8fd0\u884c\u7ed3\u679c\u4f1a\u4f5c\u4e3a\u8f93\u5165\u53c2\u6570\uff0c\u5e76\u8c03\u7528\u4e0e\u4e4b\u5173\u8054\u7684",(0,p.kt)("strong",{parentName:"li"},"\u56de\u8c03\u51fd\u6570"),"\uff0c\u6b64\u65f6\u4f1a\u4ea7\u751f\u4e00\u4e2a",(0,p.kt)("strong",{parentName:"li"},"\u51fd\u6570\u8c03\u7528\u6808")),(0,p.kt)("li",{parentName:"ol"},"\u8fd9\u65f6\u4f1a\u6267\u884c",(0,p.kt)("strong",{parentName:"li"},"\u51fd\u6570\u8c03\u7528\u6808"),"\u4e2d\u7684\u51fd\u6570"),(0,p.kt)("li",{parentName:"ol"},"\u5f53",(0,p.kt)("strong",{parentName:"li"},"\u51fd\u6570\u8c03\u7528\u6808"),"\u4e2d\u7684",(0,p.kt)("strong",{parentName:"li"},"\u56de\u8c03\u51fd\u6570"),"\u88ab\u5904\u7406\u5b8c\u540e\uff0c",(0,p.kt)("strong",{parentName:"li"},"JavaScript")," \u624d\u4f1a\u5904\u7406",(0,p.kt)("strong",{parentName:"li"},"\u56de\u8c03\u961f\u5217"),"\u4e2d\u7684\u4e0b\u4e00\u4e2a\u5f02\u6b65\u4efb\u52a1")),(0,p.kt)("p",null,"\u4ece\u4e0a\u53ef\u77e5\uff0c",(0,p.kt)("strong",{parentName:"p"},"\u56de\u8c03\u961f\u5217"),"\u4e2d\u7684",(0,p.kt)("strong",{parentName:"p"},"\u5f02\u6b65\u4efb\u52a1"),"\u6700\u7ec8\u4f1a\u5728\u4e3b\u7ebf\u7a0b\u4e2d\u4ee5",(0,p.kt)("strong",{parentName:"p"},"\u51fd\u6570\u8c03\u7528\u6808"),"\u7684\u65b9\u5f0f\u8fd0\u884c\u3002\u4e0d\u540c\u7684\u662f\uff0c\u5f02\u6b65\u4efb\u52a1\u5c31\u9700\u8981\u5728\u6267\u884c\u524d\u63d0\u4f9b",(0,p.kt)("strong",{parentName:"p"},"\u56de\u8c03\u51fd\u6570"),"\uff0c\u5f53\u5f02\u6b65\u4efb\u52a1\u6709\u4e86\u8fd0\u884c\u7ed3\u679c\u4e4b\u540e\uff0c\u8be5\u4efb\u52a1\u5219\u4f1a\u88ab\u6dfb\u52a0\u5230\u56de\u8c03\u961f\u5217\u4e2d\uff0c\u4e3b\u7ebf\u7a0b\u5728\u9002\u5f53\u7684\u65f6\u5019\u4f1a\u4ece\u56de\u8c03\u961f\u5217\u4e2d\u53d6\u51fa\u76f8\u5e94\u7684\u56de\u8c03\u51fd\u6570\u5e76\u6267\u884c\u3002\u90a3\u4e48\u4f1a\u5728\u4ec0\u4e48\u65f6\u5019\u53d6\u51fa\u6267\u884c\u5462\uff1f\u8fd9\u4e2a\u5c31\u662f\u6d4f\u89c8\u5668\u7684",(0,p.kt)("strong",{parentName:"p"},"Event Loop")," \u673a\u5236\u6765\u63a7\u5236\u3002"),(0,p.kt)("h2",{id:"\u4efb\u52a1\u7ba1\u7406\u673a\u5236"},"\u4efb\u52a1\u7ba1\u7406\u673a\u5236"),(0,p.kt)("p",null,"\u65e2\u7136\u4efb\u52a1\u5206\u6709\u540c\u6b65\u4efb\u52a1\u548c\u5f02\u6b65\u4efb\u52a1\uff0c\u90a3\u4e48 ",(0,p.kt)("strong",{parentName:"p"},"JavaScript")," \u4ec0\u4e48\u65f6\u5019\u5e94\u8be5\u6267\u884c\u540c\u6b65\u4efb\u52a1\uff0c\u4ec0\u4e48\u65f6\u5019\u5e94\u8be5\u6267\u884c\u5f02\u6b65\u4efb\u52a1\u5462\uff1f\u8fd9\u4e2a\u5c31\u9700\u8981\u6d4f\u89c8\u5668\u7684 ",(0,p.kt)("strong",{parentName:"p"},"Event Loop")," \u673a\u5236\u6765\u7ba1\u7406\u5355\u7ebf\u7a0b\u7684 ",(0,p.kt)("strong",{parentName:"p"},"JavaScript")," \u4e2d\u540c\u6b65\u4efb\u52a1\u548c\u5f02\u6b65\u4efb\u52a1\u7684\u6267\u884c\u95ee\u9898\u3002"),(0,p.kt)("p",null,"\u90a3\u4ec0\u4e48\u662f ",(0,p.kt)("strong",{parentName:"p"},"Event Loop")," \u673a\u5236\u5462\uff1f\n",(0,p.kt)("img",{alt:"image.png",src:n(55305).Z}),"\n\u5982\u4e0a\u56fe\uff0c\u5728\u6d4f\u89c8\u5668\u4e3b\u7ebf\u7a0b\u8fd0\u884c\u65f6\uff0c\u4f1a\u6709\u5806\uff08Memory Heap\uff09\u548c\u6808\uff08Call Stack\uff09\uff0c\u5176\u4e2d\u5806\u4e3a\u5185\u5b58\uff0c\u6808\u4e3a\u51fd\u6570\u8c03\u7528\u6808\u3002\u800c ",(0,p.kt)("strong",{parentName:"p"},"Event Loop")," \u8d1f\u8d23\u6267\u884c\u4ee3\u7801\u3001\u6536\u96c6\u548c\u5904\u7406\u4e8b\u4ef6\u4ee5\u53ca\u6267\u884c\u961f\u5217\u4e2d\u7684\u5b50\u4efb\u52a1\uff0c\u5177\u4f53\u5305\u62ec\u4ee5\u4e0b\u8fc7\u7a0b\uff1a"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("strong",{parentName:"li"},"JavaScript")," \u6709\u4e00\u4e2a",(0,p.kt)("strong",{parentName:"li"},"\u4e3b\u7ebf\u7a0b"),"\u548c",(0,p.kt)("strong",{parentName:"li"},"\u51fd\u6570\u8c03\u7528\u6808"),"\uff0c\u6240\u6709\u7684\u4efb\u52a1\u6700\u7ec8\u90fd\u4f1a\u88ab\u653e\u5230",(0,p.kt)("strong",{parentName:"li"},"\u8c03\u7528\u6808"),"\u7b49\u5f85\u4e3b\u7ebf\u7a0b\u6267\u884c\u3002"),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("strong",{parentName:"li"},"\u540c\u6b65\u4efb\u52a1"),"\u4f1a\u88ab\u653e\u5728",(0,p.kt)("strong",{parentName:"li"},"\u8c03\u7528\u6808"),"\u4e2d\uff0c\u6309\u7167\u987a\u5e8f\u7b49\u5f85",(0,p.kt)("strong",{parentName:"li"},"\u4e3b\u7ebf\u7a0b"),"\u4f9d\u6b21\u6267\u884c\u3002"),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("strong",{parentName:"li"},"\u4e3b\u7ebf\u7a0b"),"\u4e4b\u5916\u5b58\u5728\u4e00\u4e2a",(0,p.kt)("strong",{parentName:"li"},"\u56de\u8c03\u961f\u5217"),"\uff0c",(0,p.kt)("strong",{parentName:"li"},"\u56de\u8c03\u961f\u5217"),"\u4e2d\u7684",(0,p.kt)("strong",{parentName:"li"},"\u5f02\u6b65\u4efb\u52a1"),"\u6700\u7ec8\u4f1a\u5728",(0,p.kt)("strong",{parentName:"li"},"\u4e3b\u7ebf\u7a0b"),"\u4e2d\u4ee5",(0,p.kt)("strong",{parentName:"li"},"\u8c03\u7528\u6808"),"\u7684\u65b9\u5f0f\u8fd0\u884c\u3002"),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("strong",{parentName:"li"},"\u540c\u6b65\u4efb\u52a1"),"\u90fd\u5728",(0,p.kt)("strong",{parentName:"li"},"\u4e3b\u7ebf\u7a0b"),"\u4e0a\u6267\u884c\uff0c\u6808\u4e2d\u4ee3\u7801\u5728\u6267\u884c\u7684\u65f6\u5019\u4f1a\u8c03\u7528\u6d4f\u89c8\u5668\u7684 API\uff0c\u6b64\u65f6\u4f1a\u4ea7\u751f\u4e00\u4e9b",(0,p.kt)("strong",{parentName:"li"},"\u5f02\u6b65\u4efb\u52a1"),"\u3002"),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("strong",{parentName:"li"},"\u5f02\u6b65\u4efb\u52a1"),"\u4f1a\u5728\u6709\u4e86\u7ed3\u679c\u540e\uff0c\u4f1a\u5c06",(0,p.kt)("strong",{parentName:"li"},"\u5f02\u6b65\u4efb\u52a1"),"\u4ee5\u53ca\u5173\u8054\u7684",(0,p.kt)("strong",{parentName:"li"},"\u56de\u8c03\u51fd\u6570"),"\u653e\u5165",(0,p.kt)("strong",{parentName:"li"},"\u56de\u8c03\u961f\u5217"),"\u4e2d\u3002"),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("strong",{parentName:"li"},"\u8c03\u7528\u6808"),"\u4e2d\u4efb\u52a1\u6267\u884c\u5b8c\u6bd5\u540e\uff0c\u6b64\u65f6",(0,p.kt)("strong",{parentName:"li"},"\u4e3b\u7ebf\u7a0b"),"\u5904\u4e8e\u7a7a\u95f2\u72b6\u6001\uff0c\u4f1a\u4ece",(0,p.kt)("strong",{parentName:"li"},"\u56de\u8c03\u961f\u5217"),"\u4e2d\u83b7\u53d6\u4efb\u52a1\u8fdb\u884c\u5904\u7406\u3002")),(0,p.kt)("p",null,"\u4e0a\u8ff0\u8fc7\u7a0b\u4f1a\u4e0d\u65ad\u91cd\u590d\uff0c\u8fd9\u5c31\u662f ",(0,p.kt)("strong",{parentName:"p"},"JavaScript")," \u7684\u8fd0\u884c\u673a\u5236\uff0c\u79f0\u4e3a\u4e8b\u4ef6\u5faa\u73af\u673a\u5236\uff08",(0,p.kt)("strong",{parentName:"p"},"Event Loop"),"\uff09\u3002"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},(0,p.kt)("strong",{parentName:"p"},"Event Loop")," \u7684\u8bbe\u8ba1\u4f1a\u5e26\u6765\u4e00\u4e9b\u95ee\u9898\uff0c\u6bd4\u5982 setTimeout\u3001setInterval \u7684 \u65f6\u95f4\u7cbe\u786e\u6027\u3002\u8fd9\u4e24\u4e2a\u65b9\u6cd5\u4f1a\u8bbe\u7f6e\u4e00\u4e2a\u8ba1\u65f6\u5668\uff0c\u5f53\u8ba1\u65f6\u5668\u8ba1\u65f6\u5b8c\u6210\uff0c\u9700\u8981\u6267\u884c",(0,p.kt)("strong",{parentName:"p"},"\u56de\u8c03\u51fd\u6570"),"\uff0c\u6b64\u65f6\u624d\u628a",(0,p.kt)("strong",{parentName:"p"},"\u56de\u8c03\u51fd\u6570"),"\u653e\u5165",(0,p.kt)("strong",{parentName:"p"},"\u56de\u8c03\u961f\u5217"),"\u4e2d\u3002\u5982\u679c\u5f53\u56de\u8c03\u51fd\u6570\u653e\u5165\u56de\u8c03\u961f\u5217\u65f6\uff0c\u961f\u5217\u4e2d\u8fd8\u6709\u5927\u91cf\u7684\u56de\u8c03\u51fd\u6570\u5728\u7b49\u5f85\u6267\u884c\uff0c\u6b64\u65f6\u5c31\u4f1a\u9020\u6210\u4efb\u52a1\u6267\u884c\u65f6\u95f4\u4e0d\u7cbe\u786e\u3002")),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"\u8981\u4f18\u5316\u8fd9\u4e2a\u95ee\u9898\uff0c\u53ef\u4ee5\u4f7f\u7528\u7cfb\u7edf\u65f6\u949f\u6765\u8865\u507f\u8ba1\u65f6\u5668\u7684\u4e0d\u51c6\u786e\u6027\uff0c\u4ece\u800c\u63d0\u5347\u7cbe\u786e\u5ea6\u3002\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u5982\u679c\u4f60\u7684\u8ba1\u65f6\u5668\u4f1a\u5728\u56de\u8c03\u65f6\u89e6\u53d1\u4e8c\u6b21\u8ba1\u65f6\uff0c\u53ef\u4ee5\u5728\u6bcf\u6b21\u56de\u8c03\u4efb\u52a1\u7ed3\u675f\u7684\u65f6\u5019\uff0c\u6839\u636e\u6700\u521d\u7684\u7cfb\u7edf\u65f6\u95f4\u548c\u8be5\u4efb\u52a1\u7684\u6267\u884c\u65f6\u95f4\u8fdb\u884c\u5dee\u503c\u6bd4\u8f83\uff0c\u6765\u4fee\u6b63\u540e\u7eed\u7684\u8ba1\u65f6\u5668\u65f6\u95f4\u3002")),(0,p.kt)("h2",{id:"\u5b8f\u4efb\u52a1\u548c\u5fae\u4efb\u52a1"},"\u5b8f\u4efb\u52a1\u548c\u5fae\u4efb\u52a1"),(0,p.kt)("p",null,"\u4e8b\u4ef6\u5faa\u73af\u4e2d\u56de\u8c03\u961f\u5217\u4f1a\u6709\u4e24\u79cd\u961f\u5217\uff1a\u5b8f\u4efb\u52a1\u961f\u5217\uff08Task Queue\uff09\u548c\u5fae\u4efb\u52a1\u961f\u5217\uff08MicroTask Queue\uff09\u3002\n",(0,p.kt)("img",{alt:"image.png",src:n(92590).Z}),"\n\u5b8f\u4efb\u52a1\u961f\u5217\uff1a",(0,p.kt)("strong",{parentName:"p"},"script")," \u5168\u90e8\u4ee3\u7801\u3001",(0,p.kt)("strong",{parentName:"p"},"setTimeout"),"\u3001",(0,p.kt)("strong",{parentName:"p"},"setInterval"),"\u3001",(0,p.kt)("strong",{parentName:"p"},"setImmediate"),"\uff08Node.js\uff09\u3001",(0,p.kt)("strong",{parentName:"p"},"I/O")," \u64cd\u4f5c\u3001",(0,p.kt)("strong",{parentName:"p"},"UI")," \u6e32\u67d3\n\uff08\u6d4f\u89c8\u5668\uff09\u3001",(0,p.kt)("strong",{parentName:"p"},"requestAnimationFrame"),"\uff08\u6d4f\u89c8\u5668\uff09\u3002"),(0,p.kt)("p",null,"\u5fae\u4efb\u52a1\u961f\u5217\uff1a",(0,p.kt)("strong",{parentName:"p"},"Promise"),"\u3001",(0,p.kt)("strong",{parentName:"p"},"Mutation Observer\u3001process.nextTick"),"\uff08Node.js\uff09\u3002"),(0,p.kt)("p",null,"\u4e3a\u4ec0\u4e48\u8981\u5c06\u5f02\u6b65\u4efb\u52a1\u4e2d\u7684\u56de\u8c03\u961f\u5217\u5206\u4e3a\u5b8f\u4efb\u52a1\u961f\u5217\u548c\u5fae\u4efb\u52a1\u961f\u5217\u5462\uff1f\n\u4e3b\u8981\u662f\u5b8f\u4efb\u52a1\u9700\u8981\u6267\u884c\u4e0a\u4e0b\u6587\uff08\u8fd9\u91cc\u6307\u7684\u662f\u8d44\u6e90\u7684\u5207\u6362\uff09\uff0c\u5fae\u4efb\u52a1\u4e0d\u9700\u8981\u6267\u884c\u4e0a\u4e0b\u6587\u3002\u8fd9\u6837\u7684\u7ed3\u679c\u4f1a\u5bfc\u81f4\u5b8f\u4efb\u52a1\u7684\u6267\u884c\u65f6\u95f4\u6bd4\u8f83\u957f\u3002\u6240\u4ee5\uff0c\u4e3a\u4e86\u907f\u514d\u56de\u8c03\u961f\u5217\u4e2d\u7b49\u5f85\u6267\u884c\u7684\u5f02\u6b65\u4efb\u52a1\uff08\u5b8f\u4efb\u52a1\uff09\u8fc7\u591a\uff0c\u4ece\u800c\u4f1a\u5bfc\u81f4\u67d0\u4e9b\u5f02\u6b65\u4efb\u52a1\uff08\u5fae\u4efb\u52a1\uff09\u7684\u7b49\u5f85\u6267\u884c\u7684\u65f6\u95f4\u8fc7\u957f\u3002\u4e3a\u6b64\uff0c\u5728\u6bcf\u4e2a\u5b8f\u4efb\u52a1\u6267\u884c\u5b8c\u6210\u4e4b\u540e\uff0c\u4f1a\u5148\u5c06\u5fae\u4efb\u52a1\u961f\u5217\u4e2d\u7684\u4efb\u52a1\u6267\u884c\u5b8c\u6bd5\uff0c\u518d\u6267\u884c\u4e0b\u4e00\u4e2a\u5b8f\u4efb\u52a1\u3002"),(0,p.kt)("p",null,"\u5728\u6d4f\u89c8\u5668\u7684\u5f02\u6b65\u56de\u8c03\u961f\u5217\u4e2d\uff0c\u5b8f\u4efb\u52a1\u548c\u5fae\u4efb\u52a1\u7684\u6267\u884c\u8fc7\u7a0b\u5982\u4e0b\uff1a"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},"\u5b8f\u4efb\u52a1\u961f\u5217\u4e00\u6b21\u53ea\u4ece\u961f\u5217\u4e2d\u53d6\u4e00\u4e2a\u4efb\u52a1\u6267\u884c\uff0c\u6267\u884c\u5b8c\u540e\u5c31\u53bb\u6267\u884c\u5fae\u4efb\u52a1\u961f\u5217\u4e2d\u7684\u4efb\u52a1\u3002"),(0,p.kt)("li",{parentName:"ol"},"\u5fae\u4efb\u52a1\u961f\u5217\u4e2d\u6240\u6709\u7684\u4efb\u52a1\u90fd\u4f1a\u88ab\u4f9d\u6b21\u53d6\u51fa\u6765\u6267\u884c\uff0c\u76f4\u5230\u5fae\u4efb\u52a1\u961f\u5217\u4e3a\u7a7a\u3002"),(0,p.kt)("li",{parentName:"ol"},"\u5728\u6267\u884c\u5b8c\u6240\u6709\u7684\u5fae\u4efb\u52a1\u4e4b\u540e\uff0c\u6267\u884c\u4e0b\u4e00\u4e2a\u5b8f\u4efb\u52a1\u4e4b\u524d\uff0c\u6d4f\u89c8\u5668\u4f1a\u6267\u884c UI \u6e32\u67d3\u64cd\u4f5c\u3001\u66f4\u65b0\u754c\u9762\u3002")),(0,p.kt)("p",null,"\u4e3a\u6b64\uff0c\u5728\u6d4f\u89c8\u5668\u4e2d\u6bcf\u4e2a\u5b8f\u4efb\u52a1\u6267\u884c\u5b8c\u6210\u540e\uff0c\u90fd\u4f1a\u4f1a\u6267\u884c\u5fae\u4efb\u52a1\u961f\u5217\u4e2d\u7684\u4efb\u52a1\u3002"),(0,p.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,p.kt)("div",{parentName:"div",className:"admonition-heading"},(0,p.kt)("h5",{parentName:"div"},(0,p.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,p.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,p.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,p.kt)("div",{parentName:"div",className:"admonition-content"},(0,p.kt)("p",{parentName:"div"},"\u5176\u5b9e\u9664\u4e86\u6d4f\u89c8\u5668\u7684 ",(0,p.kt)("strong",{parentName:"p"},"Event Loop")," \u673a\u5236\u5916\uff0cNode \u4e5f\u6709\u4e00\u5957 ",(0,p.kt)("strong",{parentName:"p"},"Event Loop")," \u673a\u5236\u3002\u4f46\u662f\u5728 Node11 \u540e\uff0c\u5176 ",(0,p.kt)("strong",{parentName:"p"},"Event Loop")," \u8ddf\u6d4f\u89c8\u5668\u4fdd\u5b58\u4e00\u81f4\u4e86\u3002"))))}c.isMDXComponent=!0},55305:function(t,e,n){e.Z=n.p+"assets/images/11-06-01-102647aa8b16f87d16d6e5b8d78a6295.png"},92590:function(t,e,n){e.Z=n.p+"assets/images/11-06-02-c2e6de85fdd5f209cb11948c1b370da7.png"}}]);