"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9945],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return N}});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=l.createContext({}),k=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=k(e.components);return l.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=k(n),N=a,c=d["".concat(p,".").concat(N)]||d[N]||u[N]||i;return n?l.createElement(c,r(r({ref:t},m),{},{components:n})):l.createElement(c,r({ref:t},m))}));function N(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var k=2;k<i;k++)r[k]=n[k];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4324:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return k},assets:function(){return m},toc:function(){return u},default:function(){return N}});var l=n(7462),a=n(3366),i=(n(7294),n(3905)),r=["components"],o={slug:"java-concurrent",title:"Java \u5e76\u53d1\u7f16\u7a0b\u7684\u57fa\u77f3",authors:"zeffon",tags:["java"],date:new Date("2019-11-18T00:00:00.000Z")},p=void 0,k={permalink:"/blog/java-concurrent",editUrl:"https://github.com/zeffon/zeffon.github.io/blob/master/blog/2019/2019-11-18-java-concurrent.md",source:"@site/blog/2019/2019-11-18-java-concurrent.md",title:"Java \u5e76\u53d1\u7f16\u7a0b\u7684\u57fa\u77f3",description:"\u5b66\u4e60\u5e76\u53d1\u7f16\u7a0b\uff0c\u5bf9\u4e8e\u7ebf\u7a0b\u4e0e\u8fdb\u7a0b\u3001\u7ebf\u7a0b\u4e0e\u591a\u7ebf\u7a0b\u3001\u5e76\u884c\u4e0e\u5e76\u53d1\u3001\u5e76\u53d1\u4e0e\u9ad8\u5e76\u53d1\u3001\u540c\u6b65\u4e0e\u5f02\u6b65\u3001\u963b\u585e\u4e0e\u975e\u963b\u585e\u4e4b\u95f4\u7684\u6982\u5ff5\u4e0e\u5173\u7cfb\uff0c\u9700\u8981\u8fdb\u4e00\u6b65\u7684\u7406\u89e3\u3002\u672c\u7bc7\u5b66\u4e60\u4e8e\u6155\u8bfe\u7f51\u609f\u7a7a\u8001\u5e08\u7684\u300aJava \u5e76\u53d1\u7f16\u7a0b\u7684\u57fa\u77f3\u300b",date:"2019-11-18T00:00:00.000Z",formattedDate:"November 18, 2019",tags:[{label:"java",permalink:"/blog/tags/java"}],readingTime:10.78,truncated:!0,authors:[{name:"Zeffon Wu",title:"A web engineer",url:"https://github.com/zeffon",imageURL:"https://github.com/zeffon.png",key:"zeffon"}],prevItem:{title:"Docker\u5b89\u88c5Mysql\u548cRedis",permalink:"/blog/docker-install-mysql-and-redis"},nextItem:{title:"Java \u6ce8\u89e3",permalink:"/blog/java-annotation"}},m={authorsImageUrls:[void 0]},u=[{value:"\u524d\u6587",id:"\u524d\u6587",children:[]},{value:"\u6b63\u6587",id:"\u6b63\u6587",children:[{value:"\u7ebf\u7a0b\u3001\u8fdb\u7a0b\u548c\u591a\u7ebf\u7a0b",id:"\u7ebf\u7a0b\u8fdb\u7a0b\u548c\u591a\u7ebf\u7a0b",children:[]},{value:"\u5e76\u884c\u3001\u5e76\u53d1\u548c\u9ad8\u5e76\u53d1",id:"\u5e76\u884c\u5e76\u53d1\u548c\u9ad8\u5e76\u53d1",children:[]},{value:"\u540c\u6b65\u4e0e\u5f02\u6b65\u3001\u963b\u585e\u4e0e\u975e\u963b\u585e",id:"\u540c\u6b65\u4e0e\u5f02\u6b65\u963b\u585e\u4e0e\u975e\u963b\u585e",children:[]}]}],d={toc:u};function N(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,l.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5b66\u4e60",(0,i.kt)("inlineCode",{parentName:"p"},"\u5e76\u53d1\u7f16\u7a0b"),"\uff0c\u5bf9\u4e8e\u7ebf\u7a0b\u4e0e\u8fdb\u7a0b\u3001\u7ebf\u7a0b\u4e0e\u591a\u7ebf\u7a0b\u3001\u5e76\u884c\u4e0e\u5e76\u53d1\u3001\u5e76\u53d1\u4e0e\u9ad8\u5e76\u53d1\u3001\u540c\u6b65\u4e0e\u5f02\u6b65\u3001\u963b\u585e\u4e0e\u975e\u963b\u585e\u4e4b\u95f4\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"\u6982\u5ff5\u4e0e\u5173\u7cfb"),"\uff0c\u9700\u8981\u8fdb\u4e00\u6b65\u7684\u7406\u89e3\u3002\u672c\u7bc7\u5b66\u4e60\u4e8e\u6155\u8bfe\u7f51\u609f\u7a7a\u8001\u5e08\u7684",(0,i.kt)("a",{parentName:"p",href:"https://www.imooc.com/course/introduction/id/1186"},"\u300aJava \u5e76\u53d1\u7f16\u7a0b\u7684\u57fa\u77f3\u300b")),(0,i.kt)("h2",{id:"\u524d\u6587"},"\u524d\u6587"),(0,i.kt)("p",null,"\u5b66\u4e60",(0,i.kt)("inlineCode",{parentName:"p"},"\u5e76\u53d1\u7f16\u7a0b"),"\uff0c\u5bf9\u4e8e\u7ebf\u7a0b\u4e0e\u8fdb\u7a0b\u3001\u7ebf\u7a0b\u4e0e\u591a\u7ebf\u7a0b\u3001\u5e76\u884c\u4e0e\u5e76\u53d1\u3001\u5e76\u53d1\u4e0e\u9ad8\u5e76\u53d1\u3001\u540c\u6b65\u4e0e\u5f02\u6b65\u3001\u963b\u585e\u4e0e\u975e\u963b\u585e\u4e4b\u95f4\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"\u6982\u5ff5\u4e0e\u5173\u7cfb"),"\uff0c\u9700\u8981\u8fdb\u4e00\u6b65\u7684\u7406\u89e3\u3002\u672c\u7bc7\u5b66\u4e60\u4e8e\u6155\u8bfe\u7f51\u609f\u7a7a\u8001\u5e08\u7684",(0,i.kt)("a",{parentName:"p",href:"https://www.imooc.com/course/introduction/id/1186"},"\u300aJava \u5e76\u53d1\u7f16\u7a0b\u7684\u57fa\u77f3\u300b")),(0,i.kt)("h2",{id:"\u6b63\u6587"},"\u6b63\u6587"),(0,i.kt)("h3",{id:"\u7ebf\u7a0b\u8fdb\u7a0b\u548c\u591a\u7ebf\u7a0b"},"\u7ebf\u7a0b\u3001\u8fdb\u7a0b\u548c\u591a\u7ebf\u7a0b"),(0,i.kt)("h5",{id:"\u8fdb\u7a0b"},"\u8fdb\u7a0b"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u6307\u7684\u662f\u7a0b\u5e8f\u7684\u4e00\u6b21\u6267\u884c\u3002\u5728\u7528\u6237\u4e0b\u8fbe",(0,i.kt)("inlineCode",{parentName:"li"},"\u8fd0\u884c\u7a0b\u5e8f"),"\u7684\u547d\u4ee4\u540e\uff0c\u5c31\u4f1a\u4ea7\u751f\u8fdb\u7a0b\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u8fdb\u7a0b\u5c31\u662f\u7a0b\u5e8f(\u8fd9\u91cc\u53ef\u4ee5\u7406\u89e3\u4e3a\u6211\u4eec\u7f16\u5199\u7684\u4ee3\u7801)\u7684",(0,i.kt)("inlineCode",{parentName:"li"},"\u771f\u6b63\u8fd0\u884c\u5b9e\u4f8b"),"\uff0c\u662f",(0,i.kt)("inlineCode",{parentName:"li"},"\u8d44\u6e90\u5206\u914d"),"\u7684\u57fa\u672c\u5355\u4f4d\u3002")),(0,i.kt)("h5",{id:"\u7ebf\u7a0b"},"\u7ebf\u7a0b"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u7ebf\u7a0b\u662f CPU \u7684\u57fa\u672c\u8c03\u5ea6\u5355\u4f4d\uff0c\u6bcf\u4e2a\u7ebf\u7a0b\u6267\u884c\u7684\u90fd\u662f",(0,i.kt)("inlineCode",{parentName:"li"},"\u8fdb\u7a0b\u4ee3\u7801\u7684\u67d0\u4e2a\u7247\u6bb5"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5728\u8fdb\u7a0b\u4e0a\u4e0b\u6587\u4e2d\u6267\u884c\u7684",(0,i.kt)("inlineCode",{parentName:"li"},"\u4e00\u7cfb\u5217\u6307\u4ee4"),"\u3002")),(0,i.kt)("h6",{id:"\u8fdb\u7a0b\u4e0e\u7ebf\u7a0b\u7684-\u8054\u7cfb"},"\u8fdb\u7a0b\u4e0e\u7ebf\u7a0b\u7684 ",(0,i.kt)("strong",{parentName:"h6"},(0,i.kt)("inlineCode",{parentName:"strong"},"\u8054\u7cfb"))),(0,i.kt)("p",null,"\u64cd\u4f5c\u7cfb\u7edf`\u5305"),(0,i.kt)("p",null,"\u542b",(0,i.kt)("inlineCode",{parentName:"p"},"\u591a\u4e2a\u8fdb\u7a0b\u7684\u5bb9\u5668\uff0c\u800c\u6bcf\u4e2a\u8fdb\u7a0b\u53c8\u90fd\u662f"),"\u5bb9\u7eb3`\u591a\u4e2a\u7ebf\u7a0b\u7684\u5bb9\u5668\u3002"),(0,i.kt)("h6",{id:"\u8fdb\u7a0b\u4e0e\u7ebf\u7a0b\u7684-\u5f02\u540c"},"\u8fdb\u7a0b\u4e0e\u7ebf\u7a0b\u7684 ",(0,i.kt)("strong",{parentName:"h6"},(0,i.kt)("inlineCode",{parentName:"strong"},"\u5f02\u540c"))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"\u76f8\u4f3c\u70b9"),"\uff1a\u751f\u547d\u5468\u671f"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"\u8d77\u6e90\u4e0d\u540c"),": \u8ba1\u7b97\u673a\u7cfb\u7edf\u5148\u6709\u8fdb\u7a0b\u540e\u6709\u7ebf\u7a0b\uff0c\u8d77\u521d\u53ea\u6709\u8fdb\u7a0b\uff0c\u6ca1\u6709\u7ebf\u7a0b\u7684\u6982\u5ff5\u3002\u56e0\u4e3a\u5fae\u5904\u7406\u5668\u7684\u7684\u5904\u7406\u901f\u5ea6\u8fdc\u8fdc\u9ad8\u4e8e\u5916\u8bbe\uff08\u952e\u76d8\u9f20\u6807\u7b49\u7b49\uff09\uff0c\u624d\u8bde\u751f\u4e86\u7ebf\u7a0b\uff0c\u7ebf\u7a0b\u7684\u8bde\u751f\u662f\u4e3a\u4e86\u63d0\u9ad8\u7a0b\u5e8f\u7684\u8fd0\u884c\u6548\u7387"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"\u6982\u5ff5\u4e0d\u540c"),": \u8fdb\u7a0b\u662f\u64cd\u4f5c\u7cfb\u7edf\u5206\u914d\u8d44\u6e90\u548c\u8c03\u5ea6\u7684\u57fa\u672c\u5355\u4f4d\uff0c\u7ebf\u7a0b\u662f cpu \u8fd0\u884c\u8c03\u5ea6\u7684\u57fa\u672c\u5355\u4f4d"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"\u5185\u5b58\u5171\u4eab\u65b9\u5f0f\u4e0d\u540c"),": \u901a\u5e38\u8fdb\u7a0b\u4e4b\u95f4\u5185\u5b58\u4e0d\u4f1a\u5171\u4eab\uff08\u6bd4\u5982\u6d4f\u89c8\u5668\u4e0d\u4f1a\u8bbf\u95ee\u89c6\u9891\u64ad\u653e\u8f6f\u4ef6\u7684\u5185\u5b58\uff09\uff0c\u901a\u5e38\u9700\u8981\u9ad8\u7ea7\u6280\u5de7 IDC \u624d\u80fd\u5b9e\u73b0\u8fdb\u7a0b\u95f4\u901a\u4fe1\u5b9e\u73b0\u5185\u5b58\u5171\u4eab\uff0c\u800c\u7ebf\u7a0b\u4e4b\u95f4\u7684\u5185\u5b58\u5171\u4eab\u5219\u6bd4\u8f83\u5bb9\u6613"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"\u62e5\u6709\u7684\u8d44\u6e90\u4e0d\u540c"),": \u7ebf\u7a0b\u672c\u8eab\u662f\u8fdb\u7a0b\u7684\u4e00\u90e8\u5206\uff0c\u6240\u4ee5\u6bcf\u4e2a\u7ebf\u7a0b\u62e5\u6709\u7684\u8d44\u6e90\u80af\u5b9a\u5c11\u4e8e\u8fdb\u7a0b\uff0c\u800c\u7ebf\u7a0b\u4e4b\u95f4\u5171\u6709\u7684\u5185\u5bb9\u4e3b\u8981\u662f\u4ee3\u7801\u7247\u6bb5\uff0c\u4e0d\u5171\u6709\u7684\u4e3b\u8981\u662f\u7ebf\u7a0b\u7684\u5806\u6808\uff08\u72ec\u7acb\u7684\u5185\u5b58\uff09"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"\u6570\u91cf\u4e0d\u540c"),": \u4e00\u4e2a\u8fdb\u7a0b\u91cc\u9762\u53ef\u4ee5\u6709\u5f88\u591a\u7ebf\u7a0b\uff0c\u4f46\u662f\u81f3\u5c11\u4f1a\u6709\u4e00\u4e2a\u7ebf\u7a0b"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"\u5f00\u9500\u4e0d\u540c"),": \u7ebf\u7a0b\u7684\u521b\u5efa\u548c\u7ec8\u6b62\u6bd4\u8fdb\u7a0b\u77ed\uff0c\u540c\u4e00\u4e2a\u8fdb\u7a0b\u5185\u90e8\u7684\u7ebf\u7a0b\u4e4b\u95f4\u7684\u5207\u6362\u6bd4\u8fdb\u7a0b\u4e4b\u95f4\u7684\u5207\u6362\u8981\u5feb\uff0c\u540c\u4e00\u4e2a\u8fdb\u7a0b\u7684\u5404\u4e2a\u7ebf\u7a0b\u4e4b\u95f4\u5171\u4eab\u5185\u5b58\u548c\u8d44\u6e90\u6587\u4ef6\uff0c\u53ef\u4ee5\u4e0d\u901a\u8fc7\u5185\u6838\u8fdb\u884c\u901a\u4fe1")),(0,i.kt)("h5",{id:"\u591a\u7ebf\u7a0b"},"\u591a\u7ebf\u7a0b"),(0,i.kt)("p",null,"\u5982\u679c\u4e00\u4e2a\u7a0b\u5e8f\u5141\u8bb8\u8fd0\u884c",(0,i.kt)("inlineCode",{parentName:"p"},"\u4e24\u4e2a\u6216\u4ee5\u4e0a\u7684\u7ebf\u7a0b"),"\uff0c\u90a3\u4e48\u5b83\u5c31\u662f\u591a\u7ebf\u7a0b\u7a0b\u5e8f\u3002\u591a\u7ebf\u7a0b\u662f\u6307\u5728\u5355\u4e2a\u7a0b\u5e8f\u4e2d\u8fd0\u884c\u591a\u4e2a\u7ebf\u7a0b\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u591a\u7ebf\u7a0b\u7684",(0,i.kt)("inlineCode",{parentName:"li"},"\u4f5c\u7528"),":")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u6700\u4e3b\u8981\u7684\u76ee\u7684\u5c31\u662f\u63d0\u9ad8 CPU \u5229\u7528\u7387(1.\u63d0\u9ad8\u5904\u7406\u901f\u5ea6 2.\u907f\u514d\u65e0\u6548\u7b49\u5f85 3.\u63d0\u9ad8\u7528\u6237\u4f53\u9a8c\u3001\u907f\u514d\u5361\u987f\u548c\u7f29\u77ed\u7b49\u5f85\u65f6\u95f4)"),(0,i.kt)("li",{parentName:"ol"},"\u4fbf\u4e8e\u7f16\u7a0b\u5efa\u6a21"),(0,i.kt)("li",{parentName:"ol"},"\u8ba1\u7b97\u673a\u6027\u80fd\u5b9a\u5f8b\uff1a\u6469\u5c14\u5b9a\u5f8b\u5931\u6548\uff0c\u963f\u59c6\u8fbe\u5c14\u5b9a\u5f8b\u767b\u4e0a\u821e\u53f0")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u591a\u7ebf\u7a0b\u7684",(0,i.kt)("inlineCode",{parentName:"li"},"\u5c40\u9650"),":")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u6027\u80fd\u95ee\u9898\uff1a\u4e0a\u4e0b\u6587\u5207\u6362\u5e26\u6765\u7684\u6d88\u8017"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"\u5f02\u6784"),"\u5316\u4efb\u52a1(\u4efb\u52a1\u7ed3\u6784\u4e0d\u4e00\u6837)\u5f88\u96be\u9ad8\u6548\u5e76\u884c"),(0,i.kt)("li",{parentName:"ol"},"\u5e26\u6765",(0,i.kt)("inlineCode",{parentName:"li"},"\u7ebf\u7a0b\u5b89\u5168"),"\u95ee\u9898\uff1a\u5305\u62ec\u6570\u636e\u5b89\u5168\u95ee\u9898(\u4f8b\u5982 i++\u603b\u6570\u4e0d\u4e00\u81f4)\u4ee5\u53ca\u7ebf\u7a0b\u5e26\u6765\u7684\u6d3b\u8dc3\u6027\u95ee\u9898(\u7ebf\u7a0b\u9965\u997f\u3001\u6b7b\u9501)\u3002")),(0,i.kt)("h3",{id:"\u5e76\u884c\u5e76\u53d1\u548c\u9ad8\u5e76\u53d1"},"\u5e76\u884c\u3001\u5e76\u53d1\u548c\u9ad8\u5e76\u53d1"),(0,i.kt)("h5",{id:"\u5e76\u884c"},"\u5e76\u884c"),(0,i.kt)("p",null,"\u771f\u6b63\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"\u540c\u65f6"),"\u8fd0\u884c---\u5728\u540c\u4e00\u65f6\u523b\uff0c\u6709",(0,i.kt)("inlineCode",{parentName:"p"},"\u591a\u4e2a"),"\u4efb\u52a1",(0,i.kt)("inlineCode",{parentName:"p"},"\u540c\u65f6"),"\u6267\u884c\u3002\u4f8b\u5982\uff0c\u5728\u591a\u6838\u5904\u7406\u5668\u4e0a\uff0c\u6709\u4e24\u4e2a\u7ebf\u7a0b\u540c\u65f6\u6267\u884c\u540c\u4e00\u6bb5\u4ee3\u7801\u3002\u5355\u6838\u5904\u7406\u5668\u662f\u65e0\u6cd5\u5b9e\u73b0\u5e76\u884c\u7684\uff0c\u56e0\u4e3a\u5355\u6838\u5904\u7406\u5668\u65e0\u6cd5\u5728\u540c\u4e00\u65f6\u523b\u6267\u884c\u591a\u4e2a\u4efb\u52a1\u3002"),(0,i.kt)("h5",{id:"\u5e76\u53d1"},"\u5e76\u53d1"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5f62\u5bb9",(0,i.kt)("inlineCode",{parentName:"li"},"\u591a\u4e2a\u4efb\u52a1"),"\u7684\u6267\u884c\u72b6\u6001")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4e24\u4e2a\u6216\u591a\u4e2a\u4efb\u52a1\u53ef\u4ee5\u5728\u91cd\u53e0\u7684\u65f6\u95f4\u6bb5\u5185\u542f\u52a8\uff0c\u8fd0\u884c\u548c\u5b8c\u6210"),(0,i.kt)("li",{parentName:"ul"},"\u5e76\u884c(\u4e24\u4e2a\u7ebf\u7a0b\u540c\u65f6\u6267\u884c)\u4e00\u5b9a\u662f\u5e76\u53d1"),(0,i.kt)("li",{parentName:"ul"},"\u5e76\u4e0d\u4e00\u5b9a\u610f\u5473\u7740\u5e76\u53d1\u4e00\u5b9a\u8981\u6c42\u662f\u5e76\u884c")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5bf9",(0,i.kt)("inlineCode",{parentName:"li"},"\u5e76\u53d1\u6027"),"\u7684\u7b80\u79f0")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4e0d\u540c\u7684\u90e8\u5206\u53ef\u4ee5\u65e0\u5e8f\u6216\u540c\u65f6\u6267\u884c\uff0c\u4e14\u4e0d\u5f71\u54cd\u6700\u7ec8\u7684\u6267\u884c\u7ed3\u679c"),(0,i.kt)("li",{parentName:"ul"},"\u5728\u4e0d\u540c\u6838\u5fc3\u6570\u7684\u8ba1\u7b97\u673a\u4e0a\u7684\u4e0d\u540c\u8868\u73b0"),(0,i.kt)("li",{parentName:"ul"},"\u6b64\u65f6\uff0c\u5e76\u884c\u548c\u5e76\u53d1\u7684\u6982\u5ff5\u5e76\u4e0d\u540c\u4e00\u7ef4\u5ea6\u4e0a")),(0,i.kt)("h5",{id:"\u9ad8\u5e76\u53d1"},"\u9ad8\u5e76\u53d1"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u540c\u65f6\u6709\u5f88\u591a\u4e2a\u8bf7\u6c42\u53d1\u9001\u7ed9\u670d\u52a1\u5668\u7cfb\u7edf\uff0c\u670d\u52a1\u5668\u80fd\u591f",(0,i.kt)("inlineCode",{parentName:"li"},"\u540c\u65f6\u5e76\u884c\u5904\u7406"),"\u5f88\u591a\u8bf7\u6c42\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u9ad8\u5e76\u53d1\u548c\u591a\u7ebf\u7a0b\u7684",(0,i.kt)("inlineCode",{parentName:"li"},"\u8054\u7cfb\u548c\u4e0d\u540c"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"\u9ad8\u5e76\u53d1"),"\u53ef\u4ee5\u8ba4\u4e3a\u662f\u4e00\u79cd",(0,i.kt)("inlineCode",{parentName:"li"},"\u72b6\u6001"),"(\u5927\u91cf\u7684\u8bf7\u6c42\u540c\u65f6\u5230\u8fbe\u6211\u4eec\u7684\u670d\u52a1\u5668\u6240\u5e26\u6765\u7684\u4e00\u79cd\u7ed3\u679c)\uff1b",(0,i.kt)("inlineCode",{parentName:"li"},"\u591a\u7ebf\u7a0b"),"\u662f\u4e00\u79cd\u7f16\u7a0b\u65b9\u5f0f\uff0c\u5b83\u662f\u4e00\u79cd",(0,i.kt)("inlineCode",{parentName:"li"},"\u89e3\u51b3\u65b9\u6848"),"\uff0c\u5b83\u6240\u89e3\u51b3\u7684\u662f\u6070\u6070\u662f\u9632\u6b62\u9ad8\u5e76\u53d1\u5e26\u6765\u7684\u7ebf\u7a0b\u5b89\u5168\u95ee\u9898\u6216\u8005\u662f\u6027\u80fd\u95ee\u9898\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u591a\u7ebf\u7a0b\u548c\u9ad8\u5e76\u53d1\u7684\u5173\u7cfb\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"\u5176\u4e2d\u4e00\u79cd\u91cd\u8981"),"\u7684\u89e3\u51b3\u65b9\u6848"),(0,i.kt)("li",{parentName:"ul"},"\u9ad8\u5e76\u53d1",(0,i.kt)("inlineCode",{parentName:"li"},"\u5e76\u4e0d\u610f\u5473"),"\u7740\u662f\u591a\u7ebf\u7a0b\uff1aRedis")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u9ad8\u5e76\u53d1",(0,i.kt)("inlineCode",{parentName:"li"},"\u6307\u6807"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"QPS(Queries Per Second) \u6bcf\u79d2\u67e5\u8be2\u6570(\u6bcf\u79d2\u949f\u7684\u8bf7\u6c42\u6570)"),(0,i.kt)("li",{parentName:"ul"},"\u5e26\u5bbd"),(0,i.kt)("li",{parentName:"ul"},"PV(Page View) \u7efc\u5408\u6d4f\u89c8\u91cf\uff0c\u6307\u7684\u662f\u4e00\u5929\u4e4b\u5185\u8bbf\u95ee\u91cf"),(0,i.kt)("li",{parentName:"ul"},"UV(Unique Visitor) \u4e00\u5929\u4e4b\u5185\u7528\u6237\u8bbf\u95ee\u6570\u91cf"),(0,i.kt)("li",{parentName:"ul"},"IP \u548c UV \u7684\u533a\u522b"),(0,i.kt)("li",{parentName:"ul"},"\u5e76\u53d1\u8fde\u63a5\u6570(The number of concurrent connections)"),(0,i.kt)("li",{parentName:"ul"},"\u670d\u52a1\u5668\u5e73\u5747\u8bf7\u6c42\u7b49\u5f85\u65f6\u95f4(Time per request:across all concurrent requests)")),(0,i.kt)("h3",{id:"\u540c\u6b65\u4e0e\u5f02\u6b65\u963b\u585e\u4e0e\u975e\u963b\u585e"},"\u540c\u6b65\u4e0e\u5f02\u6b65\u3001\u963b\u585e\u4e0e\u975e\u963b\u585e"),(0,i.kt)("p",null,"\u540c\u6b65\u4e0e\u5f02\u6b65\uff1a\u88ab\u8c03\u7528\u8005\u662f\u5426",(0,i.kt)("inlineCode",{parentName:"p"},"\u4e3b\u52a8\u544a\u8bc9"),"\u8c03\u7528\u8005\u7ed3\u679c\u3002\n\u963b\u585e\u4e0e\u975e\u963b\u585e\u5c31\u662f\u7a0b\u5e8f\u5728\u7b49\u5f85",(0,i.kt)("inlineCode",{parentName:"p"},"\u8c03\u7528\u7ed3\u679c"),"\uff08\u6d88\u606f\uff0c\u8fd4\u56de\u503c\uff09\u65f6\u7684\u72b6\u6001\u3002"),(0,i.kt)("h5",{id:"\u540c\u6b65"},"\u540c\u6b65"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5728\u53d1\u51fa\u4e00\u4e2a\u540c\u6b65\u8c03\u7528\u65f6\uff0c\u5728\u6ca1\u6709\u5f97\u5230\u7ed3\u679c\u4e4b\u524d\uff0c\u8be5\u8c03\u7528\u5c31\u4e0d\u8fd4\u56de\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u540c\u6b65\u8fd9\u91cc\u6307\u7684\u662f",(0,i.kt)("inlineCode",{parentName:"li"},"\u88ab\u8c03\u7528\u8005"),"(\u4e5f\u5c31\u662f\u670d\u52a1\u5668)\u7684\u884c\u4e3a\uff0c\u800c\u4e0d\u662f",(0,i.kt)("inlineCode",{parentName:"li"},"\u8bf7\u6c42\u65b9"),"\u7684\u884c\u4e3a\u3002\u5728\u6ca1\u6709\u5f97\u5230\u7ed3\u679c\u4e4b\u524d\uff0c\u670d\u52a1\u7aef\u5c31\u4e0d\u8fd4\u56de\u4efb\u4f55\u7ed3\u679c\u3002")),(0,i.kt)("h5",{id:"\u5f02\u6b65"},"\u5f02\u6b65"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5728\u53d1\u51fa\u4e00\u4e2a\u5f02\u6b65\u8c03\u7528\u540e\uff0c\u8c03\u7528\u8005\u4e0d\u4f1a\u7acb\u523b\u5f97\u5230\u7ed3\u679c\uff0c\u8be5\u8c03\u7528\u5c31\u8fd4\u56de\u4e86\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u8c03\u7528\u5728\u53d1\u51fa\u4e4b\u540e\uff0c\u670d\u52a1\u7aef\u4f1a\u7acb\u523b\u8fd4\u56de\uff0c\u544a\u8bc9",(0,i.kt)("inlineCode",{parentName:"li"},"\u8c03\u7528\u65b9"),"'\u6211\u6536\u5230\u4f60\u7684\u8bf7\u6c42\u4e86\uff0c\u6211\u4f1a\u5904\u7406\u7684'\u3002\u8fd9\u6837",(0,i.kt)("inlineCode",{parentName:"li"},"\u8c03\u7528\u65b9"),"\u77e5\u9053",(0,i.kt)("inlineCode",{parentName:"li"},"\u88ab\u8c03\u7528\u65b9"),"\u5df2\u63a5\u6536\u5230\u8bf7\u6c42\u4e86\uff0c\u5c31\u53ef\u4ee5\u53bb\u6267\u884c\u5176\u4ed6\u547d\u4ee4\u4e86\u3002")),(0,i.kt)("h5",{id:"\u963b\u585e"},"\u963b\u585e"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u963b\u585e\u8c03\u7528\u662f\u6307\u8c03\u7528\u7ed3\u679c\u8fd4\u56de\u4e4b\u524d\uff0c\u5f53\u524d\u7ebf\u7a0b\u4f1a\u88ab\u6302\u8d77\u3002\u8c03\u7528\u7ebf\u7a0b\u53ea\u6709\u5728\u5f97\u5230\u7ed3\u679c\u4e4b\u540e\u624d\u4f1a\u8fd4\u56de\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u6211\u662f\u8c03\u7528\u8005\uff0c\u6211\u8c03\u7528\u4e00\u4e2a\u4e1c\u897f\u4e4b\u540e\uff0c\u7ed3\u679c\u8fd4\u56de\u524d\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"\u6211\u4e0d\u80fd\u505a\u522b\u7684\u4e8b"),"\u3002")),(0,i.kt)("h5",{id:"\u975e\u963b\u585e"},"\u975e\u963b\u585e"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u975e\u963b\u585e\u8c03\u7528\u6307\u5728\u4e0d\u80fd\u7acb\u523b\u5f97\u5230\u7ed3\u679c\u4e4b\u524d\uff0c\u8be5\u8c03\u7528\u4e0d\u4f1a\u963b\u585e\u5f53\u524d\u7ebf\u7a0b\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u6211\u662f\u8c03\u7528\u8005\uff0c\u6211\u8c03\u7528\u4e00\u4e2a\u4e1c\u897f\u4e4b\u540e\uff0c\u7ed3\u679c\u8fd4\u56de\u524d\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"\u6211\u8fd8\u80fd\u505a\u522b\u7684\u4e8b"),"\u3002")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u963b\u585e\u4e0e\u975e\u963b\u585e\u7ad9\u5728\u7ebf\u7a0b\u72b6\u6001\u7684\u89d2\u5ea6"),(0,i.kt)("li",{parentName:"ul"},"\u963b\u585e\u4e0e\u975e\u963b\u585e\u7ad9\u5728\u7ebf\u7a0b\u53d1\u51fa\u8bf7\u6c42(\u901a\u5e38\u662f HTTP \u8bf7\u6c42)\u7684\u89d2\u5ea6")),(0,i.kt)("h5",{id:"\u8054\u7cfb"},"\u8054\u7cfb"),(0,i.kt)("p",null,"\u4e3e\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"\u70e7\u6c34\u58f6"),"\u7684\u4f8b\u5b50\u8fdb\u884c\u8bf4\u660e\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4e24\u79cd\u6c34\u58f6\uff1a")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u4e00\u79cd\u662f\u628a\u6c34\u70e7\u5f00\u4e86\u4e0d\u4f1a\u63d0\u9192\u7684\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u4e00\u79cd\u662f\u4f1a\u63d0\u9192\u53d1\u51fa\u545c\u545c\u58f0\u54cd\u7684\u3002")),(0,i.kt)("h6",{id:"\u540c\u6b65\u963b\u585e"},"\u540c\u6b65\u963b\u585e"),(0,i.kt)("p",null,"\u9009\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"\u4e0d\u4f1a\u63d0\u9192"),"\u7684\u6c34\u58f6\u8fdb\u884c\u70e7\u6c34\uff0c\u5728\u70e7\u6c34\u671f\u95f4\uff0c\u7531\u4e8e\u6211\u662f\u7b28\uff0c\u4e0d\u77e5\u9053\u6c34\u4ec0\u4e48\u65f6\u5019\u4f1a\u70e7\u597d\uff0c\u53ea\u597d",(0,i.kt)("inlineCode",{parentName:"p"},"\u5750\u5728\u6c34\u58f6\u524d"),"\u7b49\u5f85\uff0c\u8fd9\u6837\u5c31\u4e0d\u80fd\u53bb\u505a\u5176\u4ed6\u4e8b\u60c5\u3002\u4e00\u76f4\u5728\u6c34\u58f6\u524d\u76ef\u7740\uff0c\u76f4\u5230\u6c34\u58f6\u628a\u6c34\u70e7\u5f00\u62ff\u4e0b\u6765\u3002"),(0,i.kt)("h6",{id:"\u540c\u6b65\u975e\u963b\u585e"},"\u540c\u6b65\u975e\u963b\u585e"),(0,i.kt)("p",null,"\u9009\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"\u4e0d\u4f1a\u63d0\u9192"),"\u7684\u6c34\u58f6\u8fdb\u884c\u70e7\u6c34\uff0c\u5728\u70e7\u6c34\u671f\u95f4\uff0c\u6211\u5f88\u806a\u660e\uff0c\u867d\u7136\u4e0d\u77e5\u9053\u4ec0\u4e48\u65f6\u5019\u4f1a\u70e7\u597d\uff0c\u4f46\u662f\u6211\u80fd\u5728\u8fd9\u671f\u95f4\u53bb",(0,i.kt)("inlineCode",{parentName:"p"},"\u505a\u5176\u4ed6\u4e8b\u60c5"),"\uff0c\u53ea\u8981",(0,i.kt)("inlineCode",{parentName:"p"},"\u65f6\u4e0d\u65f6\u6765\u68c0\u67e5"),"\u4e00\u4e0b\u662f\u5426\u70e7\u597d\u4e86\u5c31\u597d\u4e86\u3002\u70e7\u597d\u62ff\u4e0b\u6765\u5c31\u597d\u4e86\u3002"),(0,i.kt)("h6",{id:"\u5f02\u6b65\u963b\u585e"},"\u5f02\u6b65\u963b\u585e"),(0,i.kt)("p",null,"\u9009\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"\u4f1a\u63d0\u9192"),"\u7684\u6c34\u58f6\u8fdb\u884c\u70e7\u6c34\uff0c\u5728\u70e7\u6c34\u671f\u95f4\uff0c\u7531\u4e8e\u6211\u6bd4\u8f83\u7b28\u548c\u8001\u5b9e\uff0c\u6211\u8fd8\u662f\u53ea\u80fd\u5750\u5728\u6c34\u58f6\u524d\uff0c\u6240\u4ee5\u4e5f\u4e0d\u80fd\u53bb\u505a\u5176\u4ed6\u4e8b\u60c5\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"\u76f4\u5230"),"\u6c34\u58f6\u70e7\u5f00\u53d1\u58f0\u63d0\u9192\u65f6\uff0c\u624d\u628a\u6c34\u58f6\u62ff\u4e0b\u6765\u3002"),(0,i.kt)("h6",{id:"\u5f02\u6b65\u975e\u963b\u585e"},"\u5f02\u6b65\u975e\u963b\u585e"),(0,i.kt)("p",null,"\u9009\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"\u4f1a\u63d0\u9192"),"\u7684\u6c34\u58f6\u8fdb\u884c\u70e7\u6c34\uff0c\u5728\u70e7\u6c34\u671f\u95f4\uff0c\u6211\u5f88\u806a\u660e\u77e5\u9053\u65f6\u95f4\u4e0d\u53ef\u6d6a\u8d39\uff0c\u6211\u53ef\u4ee5\u8dd1\u53bb",(0,i.kt)("inlineCode",{parentName:"p"},"\u505a\u5176\u4ed6\u4e8b\u60c5"),"\uff0c\u7b49\u5230\u6211\u542c\u5230\u6c34\u58f6\u70e7\u5f00",(0,i.kt)("inlineCode",{parentName:"p"},"\u53d1\u58f0\u63d0\u9192"),"\u65f6\uff0c\u6211\u624d\u8fc7\u53bb\u628a\u6c34\u58f6\u62ff\u4e0b\u6765\uff0c\u8fd9\u6837\u4e5f\u662f\u80fd\u5b8c\u6210\u70e7\u6c34\u4efb\u52a1\u7684\u3002"))}N.isMDXComponent=!0}}]);