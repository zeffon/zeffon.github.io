"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6459],{3905:function(t,e,n){n.d(e,{Zo:function(){return i},kt:function(){return m}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},p=Object.keys(t);for(r=0;r<p.length;r++)n=p[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(r=0;r<p.length;r++)n=p[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),s=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},i=function(t){var e=s(t.components);return r.createElement(u.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,p=t.originalType,u=t.parentName,i=l(t,["components","mdxType","originalType","parentName"]),g=s(n),m=a,k=g["".concat(u,".").concat(m)]||g[m]||c[m]||p;return n?r.createElement(k,o(o({ref:e},i),{},{components:n})):r.createElement(k,o({ref:e},i))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var p=n.length,o=new Array(p);o[0]=g;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var s=2;s<p;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6906:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},assets:function(){return i},toc:function(){return c},default:function(){return m}});var r=n(7462),a=n(3366),p=(n(7294),n(3905)),o=["components"],l={slug:"ts-generic",title:"TypeScript \u6cdb\u578b\u7684\u7406\u89e3",authors:"zeffon",tags:["ts"],date:new Date("2021-07-02T00:00:00.000Z")},u=void 0,s={permalink:"/blog/ts-generic",editUrl:"https://github.com/zeffon/zeffon.github.io/blob/master/blog/2021/2021-07-02-ts-generic.md",source:"@site/blog/2021/2021-07-02-ts-generic.md",title:"TypeScript \u6cdb\u578b\u7684\u7406\u89e3",description:"\u5728 Java \u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u6cdb\u578b\u6765\u5c01\u88c5\u4e00\u4e9b\u901a\u7528\u7684\u7ec4\u4ef6\u6216\u8005\u5de5\u5177\u7c7b\u3002\u6cdb\u578b\u7684\u4f5c\u7528\u4f7f\u5f97\u8fd9\u4e9b\u5de5\u5177\u7c7b\u6216\u8005\u7ec4\u4ef6\u66f4\u52a0\u5177\u6709\u7075\u6d3b\uff0c\u53ef\u4ee5\u63a5\u6536\u5404\u79cd\u4e0d\u540c\u7684\u53c2\u6570\u7c7b\u578b\u3002\u540c\u6837\uff0c\u5728 TypeScript \u4e2d\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u6cdb\u578b\u8fbe\u5230\u76f8\u540c\u7684\u6548\u679c\u3002",date:"2021-07-02T00:00:00.000Z",formattedDate:"July 2, 2021",tags:[{label:"ts",permalink:"/blog/tags/ts"}],readingTime:5.635,truncated:!0,authors:[{name:"Zeffon Wu",title:"A web engineer",url:"https://github.com/zeffon",imageURL:"https://github.com/zeffon.png",key:"zeffon"}],prevItem:{title:"\u5757\u7ea7\u683c\u5f0f\u5316\u4e0a\u4e0b\u6587 - BFC",permalink:"/blog/bfc"},nextItem:{title:"CSS \u5c45\u4e2d\u65b9\u6cd5\u6574\u7406",permalink:"/blog/css-center"}},i={authorsImageUrls:[void 0]},c=[{value:"\u4ec0\u4e48\u662f\u6cdb\u578b",id:"\u4ec0\u4e48\u662f\u6cdb\u578b",children:[]},{value:"\u6cdb\u578b\u521d\u4f53\u9a8c",id:"\u6cdb\u578b\u521d\u4f53\u9a8c",children:[]},{value:"\u6cdb\u578b\u66f4\u591a\u5e94\u7528",id:"\u6cdb\u578b\u66f4\u591a\u5e94\u7528",children:[{value:"\u6cdb\u578b\u4e0e\u7c7b\u548c\u63a5\u53e3",id:"\u6cdb\u578b\u4e0e\u7c7b\u548c\u63a5\u53e3",children:[]},{value:"\u6cdb\u578b\u7ea6\u675f",id:"\u6cdb\u578b\u7ea6\u675f",children:[]}]}],g={toc:c};function m(t){var e=t.components,l=(0,a.Z)(t,o);return(0,p.kt)("wrapper",(0,r.Z)({},g,l,{components:e,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"\u5728 Java \u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u6cdb\u578b\u6765\u5c01\u88c5\u4e00\u4e9b\u901a\u7528\u7684\u7ec4\u4ef6\u6216\u8005\u5de5\u5177\u7c7b\u3002\u6cdb\u578b\u7684\u4f5c\u7528\u4f7f\u5f97\u8fd9\u4e9b\u5de5\u5177\u7c7b\u6216\u8005\u7ec4\u4ef6\u66f4\u52a0\u5177\u6709\u7075\u6d3b\uff0c\u53ef\u4ee5\u63a5\u6536\u5404\u79cd\u4e0d\u540c\u7684\u53c2\u6570\u7c7b\u578b\u3002\u540c\u6837\uff0c\u5728 TypeScript \u4e2d\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u6cdb\u578b\u8fbe\u5230\u76f8\u540c\u7684\u6548\u679c\u3002"),(0,p.kt)("h2",{id:"\u4ec0\u4e48\u662f\u6cdb\u578b"},"\u4ec0\u4e48\u662f\u6cdb\u578b"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u6cdb\u578b"),"\uff08",(0,p.kt)("strong",{parentName:"p"},"Generics"),"\uff09\u662f\u6307\u5728\u5b9a\u4e49\u51fd\u6570\u3001\u63a5\u53e3\u6216\u7c7b\u7684\u65f6\u5019\uff0c\u4e0d\u9884\u5148\u6307\u5b9a\u5177\u4f53\u7684\u7c7b\u578b\uff0c\u800c\u5728\u4f7f\u7528\u7684\u65f6\u5019\u518d\u6307\u5b9a\u7c7b\u578b\u7684\u4e00\u79cd\u7279\u6027\u3002\n\u4ee5\u4e0b\u5c31\u662f\u6cdb\u578b\u5e38\u89c1\u5199\u6cd5\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"function input<T>(param: T): T {\n  return param;\n}\n")),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"\u5728\u4e0a\u9762\u4e2d\uff0c\u51fa\u73b0\u4e86\u4e09\u4e2a ",(0,p.kt)("strong",{parentName:"p"},"T"),"\uff0c\u5206\u522b\u662f\u4ec0\u4e48\uff0c\u4f5c\u7528\u662f\u4ec0\u4e48\uff0c\u6709\u4ec0\u4e48\u533a\u522b\u5417\uff1f")),(0,p.kt)("p",null,"\u5176\u4e2d T \u4ee3\u8868 ",(0,p.kt)("strong",{parentName:"p"},"Type"),"\uff0c\u5728\u5b9a\u4e49\u6cdb\u578b\u65f6\u901a\u5e38\u7528\u4f5c\u7b2c\u4e00\u4e2a\u7c7b\u578b\u53d8\u91cf\u540d\u79f0\u3002\u4f46\u5b9e\u9645\u4e0a\u6211\u4eec\u662f\u53ef\u4ee5\u7528\u5176\u5b83\u5b57\u6bcd\u6765\u4ee3\u66ff ",(0,p.kt)("strong",{parentName:"p"},"T"),"\u3002\u9664\u4e86 ",(0,p.kt)("strong",{parentName:"p"},"T")," \u4e4b\u5916\uff0c\u4ee5\u4e0b\u662f\u5e38\u89c1\u6cdb\u578b\u53d8\u91cf\u4ee3\u8868\u7684\u610f\u601d\uff1a"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"K(Key): \u8868\u793a\u5bf9\u8c61\u4e2d\u7684\u952e\u7c7b\u578b\uff1b"),(0,p.kt)("li",{parentName:"ul"},"V(Value): \u8868\u793a\u5bf9\u8c61\u4e2d\u7684\u503c\u7c7b\u578b\uff1b"),(0,p.kt)("li",{parentName:"ul"},"E(Element): \u8868\u793a\u5143\u7d20\u7c7b\u578b\u3002")),(0,p.kt)("p",null,"\u5728\u56fe\u4e2d\uff0c",(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"<T>"))," \u8868\u793a\u7684\u662f ",(0,p.kt)("strong",{parentName:"p"},"inupt")," \u51fd\u6570\u7684\u4f20\u9012\u7c7b\u578b\uff0c\u5b83\u6709 ",(0,p.kt)("strong",{parentName:"p"},"\u8c03\u7528\u65b9")," \u4f20\u9012\u5177\u4f53\u7684\u53c2\u6570\u7c7b\u578b\uff0c\u4ece\u800c\u4f20\u9012\u81f3\u53c2\u6570 ",(0,p.kt)("strong",{parentName:"p"},"param"),"\u7684 ",(0,p.kt)("strong",{parentName:"p"},"T")," \u548c\u51fd\u6570\u7684\u8fd4\u56de\u7c7b\u578b ",(0,p.kt)("strong",{parentName:"p"},"T"),"\u3002\n\u5728 ",(0,p.kt)("strong",{parentName:"p"},"input")," \u51fd\u6570\u4e2d\uff0c\u6211\u4eec\u63a5\u6536\u4e00\u4e2a ",(0,p.kt)("strong",{parentName:"p"},"param")," \u53c2\u6570\u3002",(0,p.kt)("strong",{parentName:"p"},"input")," \u51fd\u6570\u5e76\u4e0d\u77e5\u9053 ",(0,p.kt)("strong",{parentName:"p"},"param")," \u662f\u4ec0\u4e48\u7c7b\u578b\uff0c\u7528 ",(0,p.kt)("strong",{parentName:"p"},"T")," \u6765\u5360\u4f4d\u8868\u793a\u8be5\u53c2\u6570\u7684\u7c7b\u578b\uff1b\u800c\u6211\u4eec\u51fd\u6570\u8fd4\u56de\u7684 ",(0,p.kt)("strong",{parentName:"p"},"T")," \u4e5f\u662f\u672a\u77e5\uff0c\u7531 ",(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"<T>"))," \u6765\u8fdb\u884c\u7c7b\u578b\u7684\u4f20\u9012\u5de5\u4f5c\u3002\n",(0,p.kt)("img",{alt:"image.png",src:n(8103).Z})),(0,p.kt)("h2",{id:"\u6cdb\u578b\u521d\u4f53\u9a8c"},"\u6cdb\u578b\u521d\u4f53\u9a8c"),(0,p.kt)("p",null,"\u6bd4\u5982\u6709\u4e00\u4e2a ",(0,p.kt)("strong",{parentName:"p"},"input")," \u51fd\u6570\uff0c\u4e0d\u52a0\u4e0a\u4efb\u4f55\u7684\u53c2\u6570\u9650\u5236\u3002"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},"\u4f20\u5165 number \u7c7b\u578b\u7684\u53c2\u6570 ",(0,p.kt)("strong",{parentName:"li"},"123\uff0c"),"\u51fd\u6570\u7684\u8fd4\u56de\u7ed3\u679c ",(0,p.kt)("strong",{parentName:"li"},"result1 "),"\u662f ",(0,p.kt)("strong",{parentName:"li"},"any "),"\u7c7b\u578b",(0,p.kt)("strong",{parentName:"li"},"\u3002"),"\u5728\u6253\u5370\u7684\u65f6\u5019\u4e5f\u53ef\u4ee5\u6b63\u786e\u7684\u6253\u5370\u51fa\u6211\u4eec\u60f3\u8981\u7684\u7ed3\u679c\u3002"),(0,p.kt)("li",{parentName:"ol"},"\u4f20\u5165 string \u7c7b\u578b\u7684\u53c2\u6570 ",(0,p.kt)("strong",{parentName:"li"},"'abc', "),"\u51fd\u6570\u7684\u8fd4\u56de\u7ed3\u679c ",(0,p.kt)("strong",{parentName:"li"},"result2 "),"\u662f ",(0,p.kt)("strong",{parentName:"li"},"any "),"\u7c7b\u578b\u3002\u7ed3\u679c\u6253\u5370\u7684\u65f6\u5019\u4e5f\u662f ",(0,p.kt)("strong",{parentName:"li"},"'abc'"),"\u3002")),(0,p.kt)("p",null,"\u4e0a\u9762\u7684\u7ed3\u679c\u4f3c\u4e4e\u633a\u597d\u7684\uff0c\u90fd\u53ef\u4ee5\u62ff\u5230\u6211\u4eec\u81ea\u5df1\u60f3\u8981\u7684\u6570\u503c\u3002\u4f46\u662f\uff0c",(0,p.kt)("strong",{parentName:"p"},"any "),"\u7c7b\u578b\u4f1a\u8ba9\u6211\u4eec\u60f3\u8981\u7684\u7ed3\u679c\u7c7b\u578b\u592a\u5e7f\u4e86\uff0c\u4f7f\u5f97\u8fd4\u56de\u7ed3\u679c\u7c7b\u578b\u6211\u4eec\u65e0\u6cd5\u51c6\u786e\u5730\u77e5\u9053\u662f\u4e2a\u4ec0\u4e48\u7c7b\u578b\u7684\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},'function input(data) {\n  return data;\n}\nconst result1 = input(123);\nconst result2 = input("abc");\n')),(0,p.kt)("p",null,"\u6240\u4ee5\uff0c\u5c06\u4e0a\u9762\u7684\u4ee3\u7801\u5e94\u7528\u6cdb\u578b\u7684\uff0c\u8fd9\u6837\uff0c\u6211\u4eec\u5728\u660e\u786e\u5730\u77e5\u9053",(0,p.kt)("strong",{parentName:"p"}," result1 "),"\u662f",(0,p.kt)("strong",{parentName:"p"}," number "),"\u7c7b\u578b\uff0c",(0,p.kt)("strong",{parentName:"p"},"result2 "),"\u662f ",(0,p.kt)("strong",{parentName:"p"},"string "),"\u7c7b\u578b\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},'function input<T>(data: T): T {\n  return data;\n}\nconst result1 = input(123);\nconst result2 = input("abc");\n')),(0,p.kt)("p",null,"\u540c\u65f6\uff0c\u6cdb\u578b\u662f\u652f\u6301\u591a\u4e2a\u4f20\u5165\u7684\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},'function swap<T, U>(tuple: [T, U]): [U, T] {\n  return [tuple[1], tuple[0]];\n}\nconst result = swap(["string", 123]);\n// result \u7684\u7c7b\u578b\u662f [number, string]\n')),(0,p.kt)("h2",{id:"\u6cdb\u578b\u66f4\u591a\u5e94\u7528"},"\u6cdb\u578b\u66f4\u591a\u5e94\u7528"),(0,p.kt)("h3",{id:"\u6cdb\u578b\u4e0e\u7c7b\u548c\u63a5\u53e3"},"\u6cdb\u578b\u4e0e\u7c7b\u548c\u63a5\u53e3"),(0,p.kt)("p",null,"\u6cdb\u578b\u66f4\u591a\u7684\u4e0e\u63a5\u53e3 ",(0,p.kt)("strong",{parentName:"p"},"interface "),"\u8fdb\u884c\u7ec4\u5408\u642d\u914d"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},'// \u6cdb\u578b \u548c interface\ninterface KeyPair<T, U> {\n  key: T;\n  value: U;\n}\n\nlet kp1: KeyPair<number, string> = { key: 1, value: "str" };\nlet kp2: KeyPair<string, number> = { key: "str", value: 123 };\n')),(0,p.kt)("p",null,"\u5728\u4e0b\u9762\u4ee3\u7801\u4e2d\u5b58\u5728\u4e00\u4e2a\u95ee\u9898\uff0c\u5b83\u5141\u8bb8\u4f60\u5411\u961f\u5217\u4e2d\u6dfb\u52a0\u4efb\u4f55\u7c7b\u578b\u7684\u6570\u636e\uff0c\u5f53\u7136\uff0c\u5f53\u6570\u636e\u88ab\u5f39\u51fa\u961f\u5217\u65f6\uff0c\u4e5f\u53ef\u4ee5\u662f\u4efb\u610f\u7c7b\u578b\u3002\u6bd4\u5982\u53ef\u4ee5\u5411\u961f\u5217\u4e2d\u6dfb\u52a0 ",(0,p.kt)("strong",{parentName:"p"},"string "),"\u7c7b\u578b\u7684\u6570\u636e\uff0c\u4f46\u662f \u51fd\u6570\u5916\u9762\u63a5\u6536\u65f6 queue.pop().toFixed() \u56db\u820d\u4e94\u5165\u65e0\u6cd5\u8bc6\u522b ",(0,p.kt)("strong",{parentName:"p"},"string"),"\uff0c\u5c31\u4f1a\u51fa\u73b0\u6211\u4eec\u65e0\u6cd5\u5728\u7f16\u8bd1\u524d\u6355\u6349\u5230\u7684\u9519\u8bef\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},'class Queue {\n  private data = [];\n  push(item) {\n    return this.data.push(item);\n  }\n  pop() {\n    return this.data.shift();\n  }\n}\n\nconst queue = new Queue();\nqueue.push(1);\nqueue.push("str");\nconsole.log(queue.pop().toFixed());\nconsole.log(queue.pop().toFixed());\n')),(0,p.kt)("p",null,"\u5c06\u4e0a\u8ff0\u7684\u961f\u5217\u91c7\u7528\u6cdb\u578b\u7684\u65b9\u5f0f\u4f20\u9012\u53c2\u6570\uff0c\u53ef\u4ee5\u89c4\u907f\u4e00\u4e9b\u56e0\u7c7b\u578b\u5bfc\u81f4\u5728\u7c7b\u7684\u5185\u90e8\u9519\u8bef"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"class Queue<T> {\n  private data = [];\n  push(item: T) {\n    return this.data.push(item);\n  }\n  pop(): T {\n    return this.data.shift();\n  }\n}\nconst queue = new Queue<number>();\n")),(0,p.kt)("h3",{id:"\u6cdb\u578b\u7ea6\u675f"},"\u6cdb\u578b\u7ea6\u675f"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u5728\u51fd\u6570\u5185\u90e8\u4f7f\u7528\u6cdb\u578b\u53d8\u91cf\u7684\u65f6\u5019\uff0c\u7531\u4e8e\u4e8b\u5148\u4e0d\u77e5\u9053\u5b83\u662f\u54ea\u79cd\u7c7b\u578b\uff0c\u6240\u4ee5\u4e0d\u80fd\u968f\u610f\u7684\u64cd\u4f5c\u5b83\u7684\u5c5e\u6027\u6216\u65b9\u6cd5\u3002"),"\n\u4e0b\u9762\u4f8b\u5b50\u4e2d\uff0c\u6cdb\u578b T \u4e0d\u4e00\u5b9a\u5305\u542b\u5c5e\u6027 ",(0,p.kt)("strong",{parentName:"p"},"length"),"\uff0c\u6211\u4eec\u53ef\u4ee5\u7ed9\u5b83\u4f20\u5165\u4efb\u610f\u7c7b\u578b\uff0c\u5f53\u7136\u6709\u4e9b\u4e0d\u5305\u62ec ",(0,p.kt)("strong",{parentName:"p"},"length "),"\u5c5e\u6027\uff0c\u90a3\u6837\u5c31\u4f1a\u62a5\u9519\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"function input<T>(arg: T): T {\n  console.log(arg.length);\n  return arg;\n}\n")),(0,p.kt)("p",null,"\u6240\u4ee5\u6211\u4eec\u5bf9",(0,p.kt)("strong",{parentName:"p"},"\u6cdb\u578b\u8fdb\u884c\u7ea6\u675f"),"\uff0c\u6211\u4eec\u8ba9\u6cdb\u578b\u7ee7\u627f\u81ea\u4e00\u4e2a\u63a5\u53e3 ",(0,p.kt)("strong",{parentName:"p"},"ILength"),"\uff0c\u8be5\u63a5\u53e3\u6709 ",(0,p.kt)("strong",{parentName:"p"},"length "),"\u5c5e\u6027\u3002\u8fd9\u6837\u7684\u8bdd\u6240\u6709\u4f20\u5165\u7684\u4efb\u610f\u7c7b\u578b\u4e2d\u90fd\u4f1a\u6709",(0,p.kt)("strong",{parentName:"p"}," length "),"\u5c5e\u6027\u3002\u8fd9\u6837\u5c31\u4e0d\u4f1a\u62a5\u9519\u4e86\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},'interface ILength {\n  length: number;\n}\nfunction input<T extends ILength>(arg: T): T {\n  console.log(arg.length);\n  return arg;\n}\n\nconst str = input("str");\nconst obj = input({ length: 10 });\nconst arr = input([1, 2, 3]);\n')))}m.isMDXComponent=!0},8103:function(t,e,n){e.Z=n.p+"assets/images/07-02-01-99349df87781dfd907fe97e9913f582a.png"}}]);