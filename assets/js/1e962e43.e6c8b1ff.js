"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6922],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(t),f=a,m=s["".concat(p,".").concat(f)]||s[f]||d[f]||i;return t?r.createElement(m,o(o({ref:n},u),{},{components:t})):r.createElement(m,o({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=s;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},91106:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},assets:function(){return u},toc:function(){return d},default:function(){return f}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],l={slug:"redis-cache-avalanche-penetration",title:"Redis\u7f13\u5b58\u96ea\u5d29\u548c\u7a7f\u900f",authors:"zeffon",tags:["redis"],date:new Date("2020-04-20T00:00:00.000Z")},p=void 0,c={permalink:"/blog/redis-cache-avalanche-penetration",editUrl:"https://github.com/zeffon/zeffon.github.io/blob/master/blog/2020/2020-04-20-redis-cache-avalanche-penetration.md",source:"@site/blog/2020/2020-04-20-redis-cache-avalanche-penetration.md",title:"Redis\u7f13\u5b58\u96ea\u5d29\u548c\u7a7f\u900f",description:"\u5728\u4f7f\u7528 redis \u4f5c\u4e3a\u7f13\u5b58\u5c42\u65f6\uff0c\u6709\u65f6\u5019\u4e0d\u597d\u7684\u7a0b\u5e8f\u8bbe\u8ba1\u4f1a\u5bfc\u81f4 Redis \u7f13\u5b58\u96ea\u5d29\u548c\u7a7f\u900f\u95ee\u9898\u3002",date:"2020-04-20T00:00:00.000Z",formattedDate:"April 20, 2020",tags:[{label:"redis",permalink:"/blog/tags/redis"}],readingTime:.365,truncated:!0,authors:[{name:"Zeffon Wu",title:"A web engineer",url:"https://github.com/zeffon",imageURL:"https://github.com/zeffon.png",key:"zeffon"}],prevItem:{title:"Nginx\u57fa\u672c\u8ba4\u77e5",permalink:"/blog/nginx-basic"},nextItem:{title:"Jpa\u8fd4\u56de\u81ea\u5b9a\u4e49\u5bf9\u8c61",permalink:"/blog/jpa-customize-entity"}},u={authorsImageUrls:[void 0]},d=[{value:"\u524d\u8a00",id:"\u524d\u8a00",children:[]},{value:"\u6b63\u6587",id:"\u6b63\u6587",children:[{value:"\u7f13\u5b58\u96ea\u5d29",id:"\u7f13\u5b58\u96ea\u5d29",children:[]},{value:"\u7f13\u5b58\u7a7f\u900f",id:"\u7f13\u5b58\u7a7f\u900f",children:[]},{value:"\u533a\u522b",id:"\u533a\u522b",children:[]}]}],s={toc:d};function f(e){var n=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,l,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5728\u4f7f\u7528 redis \u4f5c\u4e3a\u7f13\u5b58\u5c42\u65f6\uff0c\u6709\u65f6\u5019\u4e0d\u597d\u7684\u7a0b\u5e8f\u8bbe\u8ba1\u4f1a\u5bfc\u81f4 Redis \u7f13\u5b58\u96ea\u5d29\u548c\u7a7f\u900f\u95ee\u9898\u3002"),(0,i.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,i.kt)("h2",{id:"\u6b63\u6587"},"\u6b63\u6587"),(0,i.kt)("h3",{id:"\u7f13\u5b58\u96ea\u5d29"},"\u7f13\u5b58\u96ea\u5d29"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"**\u96ea\u5d29**")," \uff1aRedis \u4e2d\u6709\u5927\u91cf\u7684 key\uff0c\u4f1a\u8bbe\u7f6e\u8fc7\u671f\u65f6\u95f4\u3002\u5982\u679c\u8fc7\u671f\u65f6\u95f4\u6709\u592a\u591a\u91cd\u5408\u7684\uff0c\u90a3\u4e48\u5728\u67d0\u4e2a\u65f6\u95f4\u70b9\u4f1a\u6709\u5927\u91cf",(0,i.kt)("inlineCode",{parentName:"p"},"key\u5931\u6548\u4e86"),"\u6216\u662f\u7531\u4e8e",(0,i.kt)("inlineCode",{parentName:"p"},"Redis\u5b95\u673a"),"\u4e86\n\u6070\u597d\u8fd9\u65f6\u5019\u6709\u5f88\u5927\u5f88\u5927\u7684\u6d41\u91cf\u6d41\u5165\u8fdb\u6765\u3002\u90a3\u4e48\u8fd9\u4e2a\u65f6\u5019\u6240\u6709\u7684\u8bf7\u6c42\u4e0d\u4f1a\u518d",(0,i.kt)("inlineCode",{parentName:"p"},"\u7ecf\u8fc7Redis\u7f13\u5b58\u5c42"),"\uff0c\u800c\u662f\u90fd\u4f1a\u76f4\u63a5\u6253\u5728\u6570\u636e\u5e93\u4e0a\uff0c\u6570\u636e\u5e93\u53ef\u80fd\u4f1a\u5904\u7406\u4e0d\u8fc7\u6765\u5bfc\u81f4",(0,i.kt)("inlineCode",{parentName:"p"},"\u5b95\u673a\u5d29\u6e83"),"\u3002"),(0,i.kt)("p",null,"\u539f\u672c\u662f\u4f1a\u7ecf\u8fc7\u7f13\u51b2\u5c42\n",(0,i.kt)("img",{alt:"20-aualanche-01.png",src:t(29569).Z}),"\n\u7531\u4e8e\u7f13\u5b58\u5931\u6548\u6216\u8005\u5b95\u673a\n",(0,i.kt)("img",{alt:"20-aualanche-02.png",src:t(19373).Z}),"\n\u8bf7\u6c42\u76f4\u63a5\u8bbf\u95ee Mysql\n",(0,i.kt)("img",{alt:"20-aualanche-03.png",src:t(69647).Z})),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"**\u9884\u9632\u65b9\u6848**")," \uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u91c7\u7528 Key \u6c38\u4e0d\u8fc7\u671f\u673a\u5236"),(0,i.kt)("li",{parentName:"ol"},"\u91c7\u7528 key \u8fc7\u671f\u65f6\u95f4\u9519\u5f00(\u63a8\u8350)"),(0,i.kt)("li",{parentName:"ol"},"\u591a\u7f13\u5b58\u7ed3\u5408\u4f7f\u7528")),(0,i.kt)("h3",{id:"\u7f13\u5b58\u7a7f\u900f"},"\u7f13\u5b58\u7a7f\u900f"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"**\u7a7f\u900f**")," \uff1a \u63a5\u53d7\u4e00\u4e2a id\uff0c\u5148\u4ece redis \u67e5\u8be2\u6709\u6ca1\u6709\u5bf9\u5e94\u503c\uff0c\u6ca1\u6709\u518d\u4ece\u6570\u636e\u4e2d\u67e5\u8be2\uff0c\u67e5\u8be2\u7ed3\u679c\u8fdb\u884c\u5224\u65ad\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"\u6709\u6570\u636e"),"\u624d\u5c06\u5176\u5199\u8fdb redis \u91cc\u3002\u4e0b\u6b21\u518d\u67e5\u8be2\u5c31\u4e0d\u8981\u67e5\u8be2\u6570\u636e\u5e93\u4e86\uff0c\u800c redis \u8d77\u4e86\u4e00\u4e2a\u7f13\u5b58\u7684\u4f5c\u7528\u3002\u4f46\u662f\u8fd9\u79cd\u60c5\u51b5\u53ea\u9002\u5408",(0,i.kt)("inlineCode",{parentName:"p"},"id\u662f\u5b58\u5728\u6570\u636e\u5e93"),"\u3002\u5982\u679c\u7528\u6237\u4f20\u5165\u4e00\u4e2a\u975e\u6cd5\u3001\u6570\u636e\u5e93\u4e0d\u5b58\u5728\u7684 id\uff0c\u90a3\u4e48\u4e00\u76f4\u4f7f\u7528\u8be5 id \u8bf7\u6c42\u7684\u8bdd\uff0c\u7a0b\u5e8f\u5c31\u4f1a\u4e00\u76f4\u8bbf\u95ee\u6570\u636e\u5e93\uff0c\u8fd9\u6837\u65e0\u6cd5\u7f13\u5b58\u4e86\uff0c\u76f4\u63a5\u628a\u7f13\u5b58\u7a7f\u900f\u4e86\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"**\u5904\u7406\u65b9\u6848**")," \uff1a\u4e0d\u7ba1\u6570\u636e\u5e93\u67e5\u8be2\u7684\u7ed3\u679c\u6709\u6ca1\u6709\u6570\u636e\uff0c\u90fd\u5c06\u5176\u8fdb\u884c\u7f13\u5b58\u3002\u628a\u7a7a\u7684\u6570\u636e(\u7a7a\u5b57\u7b26\u4e32\u3001\u7a7a\u5bf9\u8c61\u3001\u7a7a\u6570\u7ec4\u3001\u7a7a\u5217\u8868)\u7f13\u5b58\u8d77\u6765\u3002\uff08\u5c31\u662f\u9488\u5bf9\u4e00\u4e2a\u4e0d\u5b58\u5728\u7684 key \u53bb\u4e3a\u5b83\u8bbe\u7f6e\u4e00\u4e2a\u7a7a\u503c\uff0c\u5373\u4f7f\u540e\u9762\u6211\u4eec\u53ef\u80fd\u4f1a\u4f7f\u7528\u8fd9\u4e2a\u4e0d\u5b58\u5728\u7684 key \u65f6\uff0cset \u65f6\u4e5f\u4f1a\u628a\u4e4b\u524d\u7684\u7a7a\u503c\u8986\u76d6\u7684\uff09"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"**\u5e03\u9686\u8fc7\u6ee4\u5668**")," \uff1a \u53ef\u4ee5\u8fc5\u901f\u5730\u5224\u65ad\u4e00\u4e2a\u5143\u7d20\u662f\u5426\u5728\u4e00\u4e2a\u96c6\u5408\u91cc\uff0c\u76f8\u5f53\u4e00\u79cd\u62e6\u622a\u5668\uff0c\u662f\u5728 redis \u524d\u9762\u8fdb\u884c\u62e6\u622a\u3002\u4ee5 HashMap \u7684 Key-Value \u7684\u5f62\u5f0f\u53ef\u4ee5\u5728 O(1) \u7684\u65f6\u95f4\u590d\u6742\u5ea6\u5185\u8fd4\u56de\u7ed3\u679c\uff0c\u6548\u7387\u5947\u9ad8\u3002\u4f46\u662f\u5b58\u50a8\u5bb9\u91cf\u5360\u6bd4\u9ad8\uff0c\u6570\u636e\u91cf\u592a\u591a\u65f6\u4f1a\u5360\u636e\u5185\u5b58\u5e76\u4e14\u6709 1%\u8bef\u5224\u7387\u7684\u7f3a\u70b9\u3002"),(0,i.kt)("h3",{id:"\u533a\u522b"},"\u533a\u522b"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"\u7f13\u5b58\u7a7f\u900f"),"\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"\u5355\u4e2akey"),"\u7684\u5927\u91cf\u8bf7\u6c42\u6253\u5728\u6570\u636e\u5e93\u4e0a\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"\u7f13\u5b58\u96ea\u5d29"),"\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"\u5927\u91cfkey"),"\u5931\u6548\u5bfc\u81f4\u5927\u91cf\u8bf7\u6c42\u76f4\u63a5\u6253\u5728\u6570\u636e\u5e93"))}f.isMDXComponent=!0},29569:function(e,n,t){n.Z=t.p+"assets/images/20-aualanche-01-f945064e9924e74d73eebad3daef2338.png"},19373:function(e,n,t){n.Z=t.p+"assets/images/20-aualanche-02-86aa75cd8ce98e3c0e082da05b0b1dab.png"},69647:function(e,n,t){n.Z=t.p+"assets/images/20-aualanche-03-9e73b5ab0e602fc2ff1cb2cd6ffdef62.png"}}]);