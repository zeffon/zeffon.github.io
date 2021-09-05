"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8897],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return k}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=i.createContext({}),u=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=u(e.components);return i.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=u(t),k=r,f=c["".concat(p,".").concat(k)]||c[k]||d[k]||a;return t?i.createElement(f,l(l({ref:n},m),{},{components:t})):i.createElement(f,l({ref:n},m))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=c;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<a;u++)l[u]=t[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},2877:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},assets:function(){return m},toc:function(){return d},default:function(){return k}});var i=t(7462),r=t(3366),a=(t(7294),t(3905)),l=["components"],o={slug:"segment-tree-and-trie-and-union-find",title:"\u7ebf\u6bb5\u6811\u3001\u5b57\u5178\u6811\u548c\u5e76\u67e5\u96c6",authors:"zeffon",tags:["structure"],date:new Date("2019-09-07T00:00:00.000Z")},p=void 0,u={permalink:"/blog/segment-tree-and-trie-and-union-find",editUrl:"https://github.com/zeffon/zeffon.github.io/blob/master/blog/2019/2019-09-07-segment-tree-and-trie-and-union-find.md",source:"@site/blog/2019/2019-09-07-segment-tree-and-trie-and-union-find.md",title:"\u7ebf\u6bb5\u6811\u3001\u5b57\u5178\u6811\u548c\u5e76\u67e5\u96c6",description:"\u7ebf\u6bb5\u6811\u3001\u5b57\u5178\u6811\u548c\u5e76\u67e5\u96c6",date:"2019-09-07T00:00:00.000Z",formattedDate:"September 7, 2019",tags:[{label:"structure",permalink:"/blog/tags/structure"}],readingTime:.355,truncated:!0,authors:[{name:"Zeffon Wu",title:"A web engineer",url:"https://github.com/zeffon",imageURL:"https://github.com/zeffon.png",key:"zeffon"}],prevItem:{title:"AVL\u6811\u3001\u7ea2\u9ed1\u6811\u548c\u54c8\u5e0c\u8868",permalink:"/blog/avl-and-red\u2013black-tree"},nextItem:{title:"Crontab\u7684\u4f7f\u7528",permalink:"/blog/how-use-crontab"}},m={authorsImageUrls:[void 0]},d=[{value:"Segment Tree \u7ebf\u6bb5\u6811",id:"segment-tree-\u7ebf\u6bb5\u6811",children:[]},{value:"Trie \u5b57\u5178\u6811",id:"trie-\u5b57\u5178\u6811",children:[]},{value:"UnionFind \u5e76\u67e5\u96c6",id:"unionfind-\u5e76\u67e5\u96c6",children:[]},{value:"\u53c2\u8003\u6587\u732e",id:"\u53c2\u8003\u6587\u732e",children:[]}],c={toc:d};function k(e){var n=e.components,t=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u7ebf\u6bb5\u6811\u3001\u5b57\u5178\u6811\u548c\u5e76\u67e5\u96c6"),(0,a.kt)("h2",{id:"segment-tree-\u7ebf\u6bb5\u6811"},"Segment Tree \u7ebf\u6bb5\u6811"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7ebf\u6bb5\u6811\u4e5f\u79f0\u533a\u95f4\u6811\u3002\u5b57\u5178\u6811\u662f\u591a\u53c9\u6811\uff0c\u4e5f\u79f0\u4e3a\u524d\u7f00\u6811\u3002\u5e76\u67e5\u96c6\u662f\u4e00\u79cd\u6811\u578b\u7684\u6570\u636e\u7ed3\u6784\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7ebf\u6bb5\u6811\u5c31\u662f\u5bf9\u4e8e\u4e00\u68f5",(0,a.kt)("inlineCode",{parentName:"li"},"\u4e8c\u53c9\u6811"),"\uff0c\u6bcf\u4e00\u4e2a\u8282\u70b9\u5176\u5b9e\u5b58\u50a8\u7684\u662f\u6bcf\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"li"},"\u7ebf\u6bb5"),"\u6216\u8005\u662f\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"li"},"\u533a\u95f4"),"\u76f8\u5e94\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"\u4fe1\u606f"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7ebf\u6bb5\u6811",(0,a.kt)("inlineCode",{parentName:"li"},"\u4e0d\u662f"),"\u5b8c\u5168\u4e8c\u53c9\u6811\uff0c\u7ebf\u6bb5\u6811\u662f\u5e73\u8861\u4e8c\u53c9\u6811\uff0c\u5806\u4e5f\u662f\u5e73\u8861\u4e8c\u53c9\u6811\u3002")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5b8c\u5168\u4e8c\u53c9\u6811",(0,a.kt)("inlineCode",{parentName:"p"},"\u672c\u8eab"),"\u5c31\u662f\u5e73\u8861\u4e8c\u53c9\u6811\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"\u5e73\u8861\u4e8c\u53c9\u6811"),"\u6982\u5ff5: \u5bf9\u4e8e\u6574\u68f5\u6811\u6765\u8bf4\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"\u6700\u5927"),"\u7684\u6df1\u5ea6\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"\u6700\u5c0f"),"\u7684\u6df1\u5ea6\u4ed6\u4eec\u4e4b\u95f4\u7684\u5dee",(0,a.kt)("inlineCode",{parentName:"p"},"\u6700\u591a"),"\u53ea\u6709\u53ef\u80fd",(0,a.kt)("inlineCode",{parentName:"p"},"\u4e3a1"),"\u3002")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7ecf\u5178\u7684\u7ebf\u6bb5\u6811\u95ee\u9898\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"\u533a\u95f4\u67d3\u8272"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"\u533a\u95f4\u67e5\u8be2"),"\u3002\u7528",(0,a.kt)("inlineCode",{parentName:"li"},"\u6570\u7ec4"),"\u6765\u5b9e\u73b0\u8fd9\u4e24\u4e2a\u95ee\u9898\u7684\u8bdd\uff0c\u66f4\u65b0\u548c\u67e5\u8be2\u90fd\u662f",(0,a.kt)("inlineCode",{parentName:"li"},"O(n)"),"\uff0c\u800c",(0,a.kt)("inlineCode",{parentName:"li"},"\u7ebf\u6bb5\u6811"),"\u5219\u662f",(0,a.kt)("inlineCode",{parentName:"li"},"O(log n)"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u533a\u95f4\u6709 n \u4e2a\u5143\u7d20\uff0c\u7528\u6570\u7ec4\u8868\u793a\u7684\u8bdd\u9700\u8981",(0,a.kt)("inlineCode",{parentName:"li"},"4n"),"\u7684\u7a7a\u95f4\u6765\u5b58\u50a8\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"0\u5c42\uff1a1\n1\u5c42\uff1a2\n2\u5c42\uff1a4              \u5bf9\u4e8e\u6ee1\u4e8c\u53c9\u6811\uff1a\n3\u5c42\uff1a8              h\u5c42\uff0c\u4e00\u5171\u67092^h-1\u8282\u70b9(\u5927\u7ea6\u662f2^h)\n...                \u6700\u540e\u4e00\u5c42(h-1\u5c42)\uff0c\u67092^(h-1)\u4e2a\u8282\u70b9\nh-1\u5c42\uff1a2^(h-1)      \u6700\u540e\u4e00\u5c42\u7684\u8282\u70b9\u6570\u5927\u81f4\u7b49\u4e8e\u524d\u9762\u6240\u6709\u5c42\u8282\u70b9\u4e4b\u548c\n\n                    \u5982\u679cn=2^k(\u6ee1\u4e8c\u53c9\u6811)    \u53ea\u9700\u89812n\u7684\u7a7a\u95f4\n                    \u6700\u574f\u7684\u60c5\u51b5\uff0c\u5982\u679cn=2^k+1 \u9700\u89814n\u7684\u7a7a\u95f4\n")),(0,a.kt)("h2",{id:"trie-\u5b57\u5178\u6811"},"Trie \u5b57\u5178\u6811"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5b57\u5178\u6811\u662f\u4e00\u79cd",(0,a.kt)("inlineCode",{parentName:"li"},"\u6709\u5e8f\u6811"),"\uff0c\u7528\u4e8e\u4fdd\u5b58",(0,a.kt)("inlineCode",{parentName:"li"},"\u5173\u8054\u6570\u7ec4"),"\uff0c\u5176\u4e2d\u7684\u952e\u901a\u5e38\u662f",(0,a.kt)("inlineCode",{parentName:"li"},"\u5b57\u7b26\u4e32"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5b57\u5178\u6811\u4e0e",(0,a.kt)("inlineCode",{parentName:"li"},"\u4e8c\u53c9\u67e5\u627e\u6811"),"\u4e0d\u540c\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"\u952e"),"\u4e0d\u662f\u76f4\u63a5\u4fdd\u5b58\u5728\u8282\u70b9\u4e2d\uff0c\u800c\u662f\u7531\u8282\u70b9\u5728",(0,a.kt)("inlineCode",{parentName:"li"},"\u6811\u4e2d\u7684\u4f4d\u7f6e"),"\u51b3\u5b9a\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u4e00\u4e2a\u8282\u70b9\u7684\u6240\u6709\u5b50\u5b59\u90fd\u6709",(0,a.kt)("inlineCode",{parentName:"li"},"\u76f8\u540c"),"\u7684\u524d\u7f00\uff0c\u4e5f\u5c31\u662f\u8fd9\u4e2a\u8282\u70b9\u5bf9\u5e94\u7684\u5b57\u7b26\u4e32\uff0c\u800c\u6839\u8282\u70b9\u5bf9\u5e94",(0,a.kt)("inlineCode",{parentName:"li"},"\u7a7a\u5b57\u7b26\u4e32"),"\u3002\u4e00\u822c\u60c5\u51b5\u4e0b\uff0c\u4e0d\u662f",(0,a.kt)("inlineCode",{parentName:"li"},"\u6240\u6709"),"\u7684\u8282\u70b9\u90fd\u6709\u5bf9\u5e94\u7684\u503c\uff0c\u53ea\u6709",(0,a.kt)("inlineCode",{parentName:"li"},"\u53f6\u5b50\u8282\u70b9"),"\u548c",(0,a.kt)("inlineCode",{parentName:"li"},"\u90e8\u5206\u5185\u90e8\u8282\u70b9"),"\u6240\u5bf9\u5e94\u7684\u952e\u624d\u6709\u76f8\u5173\u7684\u503c\u3002"),(0,a.kt)("li",{parentName:"ol"},"trie \u6811\u5e38\u7528\u4e8e",(0,a.kt)("inlineCode",{parentName:"li"},"\u641c\u7d22\u63d0\u793a"),"\u3002\u5982\u5f53\u8f93\u5165\u4e00\u4e2a\u7f51\u5740\uff0c\u53ef\u4ee5",(0,a.kt)("inlineCode",{parentName:"li"},"\u81ea\u52a8\u641c\u7d22"),"\u51fa\u53ef\u80fd\u7684\u9009\u62e9\u3002\u5f53\u6ca1\u6709\u5b8c\u5168\u5339\u914d\u7684\u641c\u7d22\u7ed3\u679c\uff0c\u53ef\u4ee5\u8fd4\u56de\u524d\u7f00",(0,a.kt)("inlineCode",{parentName:"li"},"\u6700\u76f8\u4f3c"),"\u7684\u53ef\u80fd\u3002")),(0,a.kt)("h2",{id:"unionfind-\u5e76\u67e5\u96c6"},"UnionFind \u5e76\u67e5\u96c6"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5728\u8ba1\u7b97\u673a\u79d1\u5b66\u4e2d\uff0c\u5e76\u67e5\u96c6\u662f\u4e00\u79cd",(0,a.kt)("inlineCode",{parentName:"li"},"\u6811\u578b"),"\u7684\u6570\u636e\u7ed3\u6784\uff0c\u7528\u4e8e\u5904\u7406\u4e00\u4e9b",(0,a.kt)("inlineCode",{parentName:"li"},"\u4e0d\u4ea4\u96c6"),"\uff08Disjoint Sets\uff09\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"\u5408\u5e76\u53ca\u67e5\u8be2"),"\u95ee\u9898\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5bf9\u4e00\u7ec4\u6570\u636e\uff0c\u4e3b\u8981\u652f\u6301",(0,a.kt)("inlineCode",{parentName:"li"},"\u4e24\u4e2a\u52a8\u4f5c")," :")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Union(p, q)\uff1a\u5c06\u4e24\u4e2a\u5b50\u96c6",(0,a.kt)("inlineCode",{parentName:"li"},"\u5408\u5e76\u6210"),"\u540c\u4e00\u4e2a\u96c6\u5408\u3002"),(0,a.kt)("li",{parentName:"ul"},"isConnected(p, q)\uff1a\u67e5\u8be2\u7ed9\u5b9a\u4e24\u4e2a\u5143\u7d20\u4ed6\u4eec\u662f\u5426\u5c5e\u4e8e\u540c\u4e00\u4e2a\u96c6\u5408\u3002\u5b83\u53ef\u4ee5\u88ab\u7528\u6765\u786e\u5b9a\u4e24\u4e2a\u5143\u7d20\u662f\u5426\u5c5e\u4e8e\u540c\u4e00\u5b50\u96c6\u3002")),(0,a.kt)("h2",{id:"\u53c2\u8003\u6587\u732e"},"\u53c2\u8003\u6587\u732e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7ef4\u57fa\u767e\u79d1-\u5b57\u5178\u6811",(0,a.kt)("a",{parentName:"li",href:"https://zh.wikipedia.org/wiki/Trie"},"Trie")),(0,a.kt)("li",{parentName:"ul"},"\u7ef4\u57fa\u767e\u79d1-\u5e76\u67e5\u96c6",(0,a.kt)("a",{parentName:"li",href:"https://zh.wikipedia.org/wiki/%E5%B9%B6%E6%9F%A5%E9%9B%86"},"UnionFind"))))}k.isMDXComponent=!0}}]);