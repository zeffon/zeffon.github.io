"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6210],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=l.createContext({}),k=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=k(e.components);return l.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=k(n),c=a,N=d["".concat(p,".").concat(c)]||d[c]||m[c]||i;return n?l.createElement(N,r(r({ref:t},u),{},{components:n})):l.createElement(N,r({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var k=2;k<i;k++)r[k]=n[k];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5094:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return k},assets:function(){return u},toc:function(){return m},default:function(){return c}});var l=n(7462),a=n(3366),i=(n(7294),n(3905)),r=["components"],o={slug:"avl-and-red\u2013black-tree",title:"AVL\u6811\u3001\u7ea2\u9ed1\u6811\u548c\u54c8\u5e0c\u8868",authors:"zeffon",tags:["structure"],date:new Date("2019-09-08T00:00:00.000Z")},p=void 0,k={permalink:"/blog/avl-and-red\u2013black-tree",editUrl:"https://github.com/zeffon/zeffon.github.io/blob/master/blog/2019/2019-09-08-avl-and-red\u2013black-tree.md",source:"@site/blog/2019/2019-09-08-avl-and-red\u2013black-tree.md",title:"AVL\u6811\u3001\u7ea2\u9ed1\u6811\u548c\u54c8\u5e0c\u8868",description:"AVL \u6811\u3001\u7ea2\u9ed1\u6811\u548c\u54c8\u5e0c\u8868",date:"2019-09-08T00:00:00.000Z",formattedDate:"September 8, 2019",tags:[{label:"structure",permalink:"/blog/tags/structure"}],readingTime:1.61,truncated:!0,authors:[{name:"Zeffon Wu",title:"A web engineer",url:"https://github.com/zeffon",imageURL:"https://github.com/zeffon.png",key:"zeffon"}],prevItem:{title:"\u514d\u8d39https\u901a\u914d\u7b26\u8bc1\u4e66\u7533\u8bf7\u4e0e\u914d\u7f6e",permalink:"/blog/how-apply-https"},nextItem:{title:"\u7ebf\u6bb5\u6811\u3001\u5b57\u5178\u6811\u548c\u5e76\u67e5\u96c6",permalink:"/blog/segment-tree-and-trie-and-union-find"}},u={authorsImageUrls:[void 0]},m=[{value:"AVL \u6811",id:"avl-\u6811",children:[]},{value:"Red black tree \u7ea2\u9ed1\u6811",id:"red-black-tree-\u7ea2\u9ed1\u6811",children:[{value:"\u7ea2\u9ed1\u6811\u6027\u8d28 :",id:"\u7ea2\u9ed1\u6811\u6027\u8d28-",children:[]},{value:"\u6027\u80fd\u603b\u7ed3",id:"\u6027\u80fd\u603b\u7ed3",children:[]},{value:"\u6269\u5c55",id:"\u6269\u5c55",children:[]}]},{value:"Hash Table \u54c8\u5e0c\u8868",id:"hash-table-\u54c8\u5e0c\u8868",children:[{value:"\u54c8\u5e0c\u8868\u6982\u5ff5",id:"\u54c8\u5e0c\u8868\u6982\u5ff5",children:[]},{value:"\u54c8\u5e0c\u51fd\u6570\u8bbe\u8ba1",id:"\u54c8\u5e0c\u51fd\u6570\u8bbe\u8ba1",children:[]},{value:"\u5904\u7406\u51b2\u7a81",id:"\u5904\u7406\u51b2\u7a81",children:[]}]},{value:"\u53c2\u8003\u6587\u732e",id:"\u53c2\u8003\u6587\u732e",children:[]}],d={toc:m};function c(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,l.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"AVL \u6811\u3001\u7ea2\u9ed1\u6811\u548c\u54c8\u5e0c\u8868"),(0,i.kt)("h2",{id:"avl-\u6811"},"AVL \u6811"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"AVL \u6811\u5bf9\u4e8e\u4efb\u610f\u4e00\u4e2a\u8282\u70b9\uff0c\u5de6\u5b50\u6811\u548c\u53f3\u5b50\u6811\u7684\u9ad8\u5ea6\u5dee\u4e0d\u80fd\u4e3a\u8d85\u8fc7 1\u3002\u7ea2\u9ed1\u6811\u662f\u4e00\u79cd\u81ea\u5e73\u8861\u4e8c\u53c9\u67e5\u627e\u6811\u3002\u54c8\u5e0c\u8868\u4e5f\u79f0\u6563\u5217\u8868\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5e73\u8861\u4e8c\u53c9\u6811\u7684\u9ad8\u5ea6\u548c\u8282\u70b9\u6570\u91cf\u4e4b\u95f4\u7684\u5173\u7cfb\u4e5f\u662f",(0,i.kt)("inlineCode",{parentName:"li"},"O(log n)"),"\u7684\u3002"),(0,i.kt)("li",{parentName:"ol"},"AVL \u6811\u8282\u70b9\u7684",(0,i.kt)("inlineCode",{parentName:"li"},"\u5e73\u8861\u56e0\u5b50"),"\u662f\u5b83\u7684\u5de6\u5b50\u6811\u7684\u9ad8\u5ea6\u51cf\u53bb\u5b83\u7684\u53f3\u5b50\u6811\u7684\u9ad8\u5ea6\uff08\u6709\u65f6\u76f8\u53cd\uff09\u3002\u5e26\u6709\u5e73\u8861\u56e0\u5b50 1\u30010 \u6216 -1 \u7684\u8282\u70b9\u88ab\u8ba4\u4e3a\u662f",(0,i.kt)("inlineCode",{parentName:"li"},"\u5e73\u8861"),"\u7684\u3002\u5e26\u6709\u5e73\u8861\u56e0\u5b50 -2 \u6216 2 \u7684\u8282\u70b9\u88ab\u8ba4\u4e3a\u662f",(0,i.kt)("inlineCode",{parentName:"li"},"\u4e0d\u5e73\u8861"),"\u7684\uff0c\u5e76\u9700\u8981",(0,i.kt)("inlineCode",{parentName:"li"},"\u91cd\u65b0"),"\u5e73\u8861\u8fd9\u4e2a\u6811\u3002\u5e73\u8861\u56e0\u5b50\u53ef\u4ee5\u76f4\u63a5",(0,i.kt)("inlineCode",{parentName:"li"},"\u5b58\u50a8"),"\u5728\u6bcf\u4e2a\u8282\u70b9\u4e2d\uff0c\u6216\u4ece\u53ef\u80fd\u5b58\u50a8\u5728\u8282\u70b9\u4e2d\u7684",(0,i.kt)("inlineCode",{parentName:"li"},"\u5b50\u6811\u9ad8\u5ea6"),"\u8ba1\u7b97\u51fa\u6765\u3002"),(0,i.kt)("li",{parentName:"ol"},"AVL \u6811\u7684",(0,i.kt)("inlineCode",{parentName:"li"},"\u57fa\u672c\u64cd\u4f5c"),"\u4e00\u822c\u6d89\u53ca\u8fd0\u4f5c\u540c\u5728",(0,i.kt)("inlineCode",{parentName:"li"},"\u4e0d\u5e73\u8861"),"\u7684\u4e8c\u53c9\u67e5\u627e\u6811\u6240\u8fd0\u4f5c\u7684\u540c\u6837\u7684\u7b97\u6cd5\u3002\u4f46\u662f\u8981\u8fdb\u884c\u9884\u5148\u6216\u968f\u540e\u505a\u4e00\u6b21\u6216\u591a\u6b21\u6240\u8c13\u7684",(0,i.kt)("inlineCode",{parentName:"li"},"AVL\u65cb\u8f6c"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5931\u53bb\u5e73\u8861\u540e\u8fdb\u884c\u7684\u89c4\u5f8b\u53ef\u5f52\u7eb3\u4e3a\u4e0b\u5217\u56db\u79cd\u60c5\u51b5\uff1a")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u53f3\u65cb\u8f6c(RR)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"    \u5bf9\u8282\u70b9y\u8fdb\u884c\u5411\u53f3\u65cb\u8f6c\u64cd\u4f5c\uff0c\u8fd4\u56de\u65cb\u8f6c\u540e\u65b0\u7684\u6839\u8282\u70b9x          T1< z < T2 < x < T3 < y < T4\n           y                              x            x.right = y\n          / \\                           /   \\          y.left = T3\n         x   T4     \u5411\u53f3\u65cb\u8f6c (y)        z     y\n        / \\       - - - - - - - ->    / \\   / \\\n       z   T3                       T1  T2 T3 T4\n      / \\\n    T1   T2\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5de6\u65cb\u8f6c(LL)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"    \u5bf9\u8282\u70b9y\u8fdb\u884c\u5411\u5de6\u65cb\u8f6c\u64cd\u4f5c\uff0c\u8fd4\u56de\u65cb\u8f6c\u540e\u65b0\u7684\u6839\u8282\u70b9x          T4 < y < T3 < x < T1 < z < T2\n       y                             x                 x.left = y\n     /  \\                          /   \\               y.right = T3\n    T1   x      \u5411\u5de6\u65cb\u8f6c (y)       y     z\n        / \\   - - - - - - - ->   / \\   / \\\n      T2   z                    T1 T2 T3 T4\n          / \\\n         T3 T4\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"LR")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"    \u9996\u5148\u5bf9x\u8fdb\u884c\u5de6\u65cb\u8f6c\uff0c\u8f6c\u5316\u4e3a\u4e86LL\u7684\u60c5\u51b5\n           y                                y\n          / \\                              / \\\n         x   T4     \u5411\u5de6\u65cb\u8f6c (x)           z   T4\n        / \\       - - - - - - - ->      /  \\\n       T1  z                           x   T3\n          / \\                         / \\\n        T2   T3                      T1 T2\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"RL")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"    \u9996\u5148\u5bf9x\u8fdb\u884c\u53f3\u65cb\u8f6c\uff0c\u8f6c\u5316\u4e3a\u4e86RR\u7684\u60c5\u51b5\n       y                            y\n      / \\                          / \\\n    T1   x      \u5411\u53f3\u65cb\u8f6c (x)       T1  z\n        / \\   - - - - - - - ->       / \\\n       z  T4                        T2  x\n      / \\                              / \\\n     T2 T3                            T3 T4\n")),(0,i.kt)("h2",{id:"red-black-tree-\u7ea2\u9ed1\u6811"},"Red black tree \u7ea2\u9ed1\u6811"),(0,i.kt)("p",null,"\u7ea2\u9ed1\u6811\u7b49\u4ef7\u4e8e",(0,i.kt)("inlineCode",{parentName:"p"},"2-3\u6811"),"\uff0c\u7ea2\u9ed1\u6811\u662f\u6bcf\u4e2a\u8282\u70b9\u90fd",(0,i.kt)("inlineCode",{parentName:"p"},"\u5e26\u6709\u989c\u8272"),"\u5c5e\u6027\u7684\u4e8c\u53c9\u67e5\u627e\u6811"),(0,i.kt)("h3",{id:"\u7ea2\u9ed1\u6811\u6027\u8d28-"},"\u7ea2\u9ed1\u6811\u6027\u8d28 :"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u6bcf\u4e2a\u8282\u70b9\u662f\u7ea2\u8272\u6216\u8005\u9ed1\u8272\u3002"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"\u6839\u8282\u70b9"),"\u662f\u9ed1\u8272\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u6240\u6709",(0,i.kt)("inlineCode",{parentName:"li"},"\u53f6\u5b50"),"\u90fd\u662f\u9ed1\u8272\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5982\u679c\u4e00\u4e2a\u8282\u70b9\u662f\u7ea2\u8272\u7684\uff0c\u90a3\u4e48\u5b83\u7684\u5b69\u5b50\u8282\u70b9",(0,i.kt)("inlineCode",{parentName:"li"},"\u90fd\u662f"),"\u9ed1\u8272\u7684"),(0,i.kt)("li",{parentName:"ol"},"\u4ece\u4efb\u610f\u4e00\u4e2a\u8282\u70b9\u5230\u53f6\u5b50\u8282\u70b9\uff0c\u7ecf\u8fc7\u7684\u9ed1\u8272\u8282\u70b9\u662f",(0,i.kt)("inlineCode",{parentName:"li"},"\u4e00\u6837"),"\u7684\u3002")),(0,i.kt)("h3",{id:"\u6027\u80fd\u603b\u7ed3"},"\u6027\u80fd\u603b\u7ed3"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5bf9\u4e8e",(0,i.kt)("inlineCode",{parentName:"li"},"\u5b8c\u5168\u968f\u673a"),"\u7684\u6570\u636e\uff0c\u666e\u901a\u7684",(0,i.kt)("inlineCode",{parentName:"li"},"\u4e8c\u5206\u641c\u7d22\u6811"),"\u5f88\u597d\u7528\u3002",(0,i.kt)("inlineCode",{parentName:"li"},"\u7f3a\u70b9"),"\uff1a\u6781\u7aef\u60c5\u51b5\u9000\u5316\u6210\u94fe\u8868\uff08\u6216\u8005\u9ad8\u5ea6\u4e0d\u5e73\u8861\uff09"),(0,i.kt)("li",{parentName:"ol"},"\u5bf9\u4e8e",(0,i.kt)("inlineCode",{parentName:"li"},"\u67e5\u8be2\u8f83\u591a"),"\u7684\u4f7f\u7528\u60c5\u51b5\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"AVL\u6811"),"\u5f88\u597d\u7528"),(0,i.kt)("li",{parentName:"ol"},"\u7ea2\u9ed1\u6811\u727a\u7272\u4e86",(0,i.kt)("inlineCode",{parentName:"li"},"\u5e73\u8861\u6027"),"\uff082logn \u7684\u9ad8\u5ea6\uff09\uff0c\u4f46\u5b83\u7684",(0,i.kt)("inlineCode",{parentName:"li"},"\u7edf\u8ba1\u6027\u80fd"),"\u66f4\u4f18\uff08\u7efc\u5408\u589e\u5220\u6539\u67e5\u6240\u6709\u64cd\u4f5c\uff09")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7ea2\u9ed1\u6811\u662f\u4fdd\u6301",(0,i.kt)("inlineCode",{parentName:"li"},"\u9ed1\u5e73\u8861"),"\u7684\u4e8c\u53c9\u6811\u3002\u4e25\u683c\u610f\u4e49\u4e0a\u4e0d\u662f",(0,i.kt)("inlineCode",{parentName:"li"},"\u5e73\u8861\u4e8c\u53c9\u6811"),"\uff0c\u6700\u5927\u9ad8\u5ea6: ",(0,i.kt)("inlineCode",{parentName:"li"},"2log n"),"\uff0c\u65f6\u95f4\u590d\u6742\u5ea6: ",(0,i.kt)("inlineCode",{parentName:"li"},"O(log n)"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u7ea2\u9ed1\u6811\u548c",(0,i.kt)("inlineCode",{parentName:"li"},"AVL\u6811"),"\u4e00\u6837\u90fd\u5bf9\u63d2\u5165\u65f6\u95f4\u3001\u5220\u9664\u65f6\u95f4\u548c\u67e5\u627e\u65f6\u95f4\u63d0\u4f9b\u4e86\u6700\u597d\u53ef\u80fd\u7684\u6700\u574f\u60c5\u51b5\u62c5\u4fdd\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u7ea2\u9ed1\u6811\u76f8\u5bf9\u4e8e AVL \u6811\u6765\u8bf4\uff0c\u727a\u7272\u4e86\u90e8\u5206\u5e73\u8861\u6027\u4ee5\u6362\u53d6",(0,i.kt)("inlineCode",{parentName:"li"},"\u63d2\u5165/\u5220\u9664"),"\u64cd\u4f5c\u65f6\u5c11\u91cf\u7684\u65cb\u8f6c\u64cd\u4f5c\uff0c\u6574\u4f53\u6765\u8bf4\u6027\u80fd\u8981",(0,i.kt)("inlineCode",{parentName:"li"},"\u4f18\u4e8e"),"AVL \u6811\u3002")),(0,i.kt)("h3",{id:"\u6269\u5c55"},"\u6269\u5c55"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"java.util \u4e2d\u7684",(0,i.kt)("inlineCode",{parentName:"li"},"TreeMap"),"\u548c",(0,i.kt)("inlineCode",{parentName:"li"},"TreeSet"),"\u57fa\u4e8e\u7ea2\u9ed1\u6811\u5b9e\u73b0\u7684"),(0,i.kt)("li",{parentName:"ul"},"\u7ea2\u9ed1\u6811\u662f\u4e00\u79cd",(0,i.kt)("inlineCode",{parentName:"li"},"\u7edf\u8ba1\u6027\u80fd"),"\u4f18\u79c0\u7684\u6811\u7ed3\u6784\uff0c\u53e6\u4e00\u79cd\u662f Splay Tree(\u4f38\u5c55\u6811)\u3002\u5b83\u7684\u5c40\u90e8\u6027\u539f\u7406\uff1a\u521a\u88ab\u8bbf\u95ee\u7684\u5185\u5bb9",(0,i.kt)("inlineCode",{parentName:"li"},"\u4e0b\u6b21"),"\u9ad8\u6982\u7387\u88ab\u518d\u6b21\u8bbf\u95ee\u3002")),(0,i.kt)("h2",{id:"hash-table-\u54c8\u5e0c\u8868"},"Hash Table \u54c8\u5e0c\u8868"),(0,i.kt)("h3",{id:"\u54c8\u5e0c\u8868\u6982\u5ff5"},"\u54c8\u5e0c\u8868\u6982\u5ff5"),(0,i.kt)("p",null,"\u54c8\u5e0c\u8868\uff08Hash table\uff0c\u4e5f\u53eb\u6563\u5217\u8868\uff09\uff0c\u662f\u6839\u636e\u952e\uff08Key\uff09\u800c",(0,i.kt)("inlineCode",{parentName:"p"},"\u76f4\u63a5"),"\u8bbf\u95ee\u5728\u5185\u5b58\u5b58\u50a8\u4f4d\u7f6e\u7684\u6570\u636e\u7ed3\u6784\u3002\u5b83\u901a\u8fc7\u8ba1\u7b97\u4e00\u4e2a\u5173\u4e8e\u952e\u503c\u7684\u51fd\u6570\uff0c\u5c06\u6240\u9700\u67e5\u8be2\u7684\u6570\u636e",(0,i.kt)("inlineCode",{parentName:"p"},"\u6620\u5c04"),"\u5230\u8868\u4e2d\u4e00\u4e2a\u4f4d\u7f6e\u6765\u8bbf\u95ee\u8bb0\u5f55\uff0c\u8fd9\u52a0\u5feb\u4e86\u67e5\u627e\u901f\u5ea6\u3002\u8fd9\u4e2a\u6620\u5c04\u51fd\u6570\u79f0\u505a",(0,i.kt)("inlineCode",{parentName:"p"},"\u54c8\u5e0c\u51fd\u6570"),"\uff0c\u5b58\u653e\u8bb0\u5f55\u7684\u6570\u7ec4\u79f0\u505a",(0,i.kt)("inlineCode",{parentName:"p"},"\u54c8\u5e0c\u8868"),"\u3002"),(0,i.kt)("h3",{id:"\u54c8\u5e0c\u51fd\u6570\u8bbe\u8ba1"},"\u54c8\u5e0c\u51fd\u6570\u8bbe\u8ba1"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"\u54c8\u5e0c\u8868"),"\u5145\u5206\u8868\u73b0\u4e86\u7b97\u6cd5\u8bbe\u8ba1\u9886\u57df\u7684\u7ecf\u5178\u601d\u60f3\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"\u7a7a\u95f4\u6362\u65f6\u95f4")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"\u952e"),"\u901a\u8fc7\u51fd\u6570\u51fd\u6570\u5f97\u5230\u7684",(0,i.kt)("inlineCode",{parentName:"li"},"\u7d22\u5f15"),"\u5206\u5e03\u8d8a\u5747\u5300\u8d8a\u597d")),(0,i.kt)("h3",{id:"\u5904\u7406\u51b2\u7a81"},"\u5904\u7406\u51b2\u7a81"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"\u94fe\u5730\u5740\u6cd5"),"\uff1a\u5c06\u6563\u5217\u5230\u540c\u4e00\u4e2a\u5b58\u50a8\u4f4d\u7f6e\u7684\u6240\u6709\u5143\u7d20\u4fdd\u5b58\u5728\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"li"},"\u94fe\u8868"),"\u4e2d\u3002\u5b9e\u73b0\u65f6\uff0c\u4e00\u79cd\u7b56\u7565\u662f\u6563\u5217\u8868\u540c\u4e00\u4f4d\u7f6e\u7684\u6240\u6709\u51b2\u7a81\u7ed3\u679c\u90fd\u662f\u7528",(0,i.kt)("inlineCode",{parentName:"li"},"\u6808"),"\u5b58\u653e\u7684\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"\u65b0\u5143\u7d20"),"\u88ab\u63d2\u5165\u5230\u8868\u7684\u524d\u7aef\u8fd8\u662f\u540e\u7aef\u5b8c\u5168\u53d6\u51b3\u4e8e\u600e\u6837\u65b9\u4fbf\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"\u5f00\u653e\u5b9a\u5740\u6cd5")," :")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u7ebf\u6027\u63a2\u6d4b: \u9010\u4e2a\u63a2\u6d4b\u5b58\u653e\u5730\u5740\u7684\u8868\uff0c\u76f4\u5230\u67e5\u627e\u5230\u4e00\u4e2a\u7a7a\u5355\u5143\uff0c\u628a\u6563\u5217\u5730\u5740\u5b58\u653e\u5728\u8be5\u7a7a\u5355\u5143\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5e73\u65b9\u63a2\u6d4b: \u7ebf\u6027\u63a2\u6d4b\uff0c\u76f8\u5f53\u4e8e\u53d1\u751f\u51b2\u7a81\u65f6\u63a2\u6d4b\u95f4\u9694 d =i^2 \u4e2a\u5355\u5143\u7684\u4f4d\u7f6e\u662f\u5426\u4e3a\u7a7a\uff0c\u5982\u679c\u4e3a\u7a7a\uff0c\u5c06\u5730\u5740\u5b58\u653e\u8fdb\u53bb\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u4e8c\u6b21\u63a2\u67e5: \u4e00\u6b21\u6563\u5217\u4ea7\u751f\u54c8\u5e0c\u5730\u5740\u51b2\u7a81\uff0c\u4e3a\u4e86\u89e3\u51b3\u51b2\u7a81\uff0c\u91c7\u7528\u53e6\u5916\u7684\u6563\u5217\u51fd\u6570\u6216\u8005\u5bf9\u51b2\u7a81\u7ed3\u679c\u8fdb\u884c\u5904\u7406\u7684\u65b9\u6cd5\u3002")),(0,i.kt)("h2",{id:"\u53c2\u8003\u6587\u732e"},"\u53c2\u8003\u6587\u732e"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7ef4\u57fa\u767e\u79d1-",(0,i.kt)("a",{parentName:"li",href:"https://zh.wikipedia.org/wiki/AVL%E6%A0%91"},"AVL \u6811")),(0,i.kt)("li",{parentName:"ul"},"\u7ef4\u57fa\u767e\u79d1-",(0,i.kt)("a",{parentName:"li",href:"https://zh.wikipedia.org/wiki/%E7%BA%A2%E9%BB%91%E6%A0%91"},"\u7ea2\u9ed1\u6811")),(0,i.kt)("li",{parentName:"ul"},"\u7ef4\u57fa\u767e\u79d1-",(0,i.kt)("a",{parentName:"li",href:"https://zh.wikipedia.org/wiki/%E5%93%88%E5%B8%8C%E8%A1%A8"},"\u54c8\u5e0c\u8868"))))}c.isMDXComponent=!0}}]);