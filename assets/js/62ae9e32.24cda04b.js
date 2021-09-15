"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6806],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3250:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},assets:function(){return u},toc:function(){return s},default:function(){return m}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={slug:"svn-basic",title:"SVN\u57fa\u672c\u4f7f\u7528",authors:"zeffon",tags:["notes"],date:new Date("2020-08-20T00:00:00.000Z")},p=void 0,c={permalink:"/blog/svn-basic",editUrl:"https://github.com/zeffon/zeffon.github.io/blob/master/blog/2020/2020-08-20-svn-basic.md",source:"@site/blog/2020/2020-08-20-svn-basic.md",title:"SVN\u57fa\u672c\u4f7f\u7528",description:"Subversion(SVN) \u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u7248\u672c\u63a7\u5236\u7cfb\u7d71\uff0c\u4e0e Git \u4e00\u6837\u662f\u4e00\u4e2a\u4ee3\u7801\u63a7\u5236\u7cfb\u7edf\u3002",date:"2020-08-20T00:00:00.000Z",formattedDate:"August 20, 2020",tags:[{label:"notes",permalink:"/blog/tags/notes"}],readingTime:5.985,truncated:!0,authors:[{name:"Zeffon Wu",title:"A web engineer",url:"https://github.com/zeffon",imageURL:"https://github.com/zeffon.png",key:"zeffon"}],prevItem:{title:"Ajax\u4e2dformdata\u4e0a\u4f20\u56fe\u7247",permalink:"/blog/ajax-formdata-object"},nextItem:{title:"Vue\u5f15\u8fdbEcharts\u7684\u5173\u7cfb\u56fe",permalink:"/blog/vue-import-echarts-graph"}},u={authorsImageUrls:[void 0]},s=[{value:"\u524d\u6587",id:"\u524d\u6587",children:[{value:"SVN \u76f8\u5173\u7684\u6982\u5ff5",id:"svn-\u76f8\u5173\u7684\u6982\u5ff5",children:[]},{value:"SVN \u7684\u4e3b\u8981\u529f\u80fd",id:"svn-\u7684\u4e3b\u8981\u529f\u80fd",children:[]}]},{value:"\u6b63\u6587",id:"\u6b63\u6587",children:[{value:"\u5b89\u88c5 SVN",id:"\u5b89\u88c5-svn",children:[]},{value:"vscode \u914d\u5408\u4f7f\u7528 SVN",id:"vscode-\u914d\u5408\u4f7f\u7528-svn",children:[]}]}],d={toc:s};function m(e){var t=e.components,l=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Subversion(SVN) \u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u7248\u672c\u63a7\u5236\u7cfb\u7d71\uff0c\u4e0e Git \u4e00\u6837\u662f\u4e00\u4e2a\u4ee3\u7801\u63a7\u5236\u7cfb\u7edf\u3002"),(0,i.kt)("h2",{id:"\u524d\u6587"},"\u524d\u6587"),(0,i.kt)("h3",{id:"svn-\u76f8\u5173\u7684\u6982\u5ff5"},"SVN \u76f8\u5173\u7684\u6982\u5ff5"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"repository",(0,i.kt)("inlineCode",{parentName:"li"},"\u6e90\u4ee3\u7801"),"\n\u6e90\u4ee3\u7801\u5e93\uff0c\u662f\u6e90\u4ee3\u7801\u7edf\u4e00\u5b58\u653e\u7684\u4f4d\u7f6e"),(0,i.kt)("li",{parentName:"ol"},"checkout",(0,i.kt)("inlineCode",{parentName:"li"},"\u62c9\u53d6"),"\n\u4ece repository \u4e2d checkout(\u76f8\u5f53\u4e8e Git \u7684 pull)\u6700\u65b0\u7684\u4ee3\u7801"),(0,i.kt)("li",{parentName:"ol"},"update",(0,i.kt)("inlineCode",{parentName:"li"},"\u66f4\u65b0"),"\n\u5f53\u4f60\u5df2\u7ecf checkout \u4e86\u4e00\u4efd\u6e90\u4ee3\u7801\uff0c\u53ef\u4ee5 update \u4e00\u4e0b\u4fdd\u6301\u672c\u673a\u4e0e Repository \u4e0a\u7684\u6e90\u4ee3\u7801\u540c\u6b65\u3002"),(0,i.kt)("li",{parentName:"ol"},"commit",(0,i.kt)("inlineCode",{parentName:"li"},"\u63d0\u4ea4"),"\n\u5f53\u4f60\u5df2\u7ecf\u4fee\u6539\u4e86\u4ee3\u7801\uff0c\u4f60\u5c31\u9700\u8981 commit \u5230 repository\u3002(\u6ce8\u610f\uff1a\u6bcf\u6b21 commit \u524d\u9700\u8981 update)")),(0,i.kt)("h3",{id:"svn-\u7684\u4e3b\u8981\u529f\u80fd"},"SVN \u7684\u4e3b\u8981\u529f\u80fd"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},'\u76ee\u5f55\u7248\u672c\u63a7\u5236\nCVS \u53ea\u80fd\u8ddf\u8e2a\u5355\u4e2a\u6587\u4ef6\u7684\u5386\u53f2, \u4e0d\u8fc7 Subversion \u5b9e\u4f5c\u4e86\u4e00\u4e2a "\u865a\u62df" \u7684\u7248\u672c\u63a7\u7ba1\u6587\u4ef6\u7cfb\u7edf, \u80fd\u591f\u4f9d\u65f6\u95f4\u8ddf\u8e2a\u6574\u4e2a\u76ee\u5f55\u7684\u53d8\u52a8\u3002 \u76ee\u5f55\u548c\u6587\u4ef6\u90fd\u80fd\u8fdb\u884c\u7248\u672c\u63a7\u5236\u3002'),(0,i.kt)("li",{parentName:"ol"},"\u771f\u5b9e\u7684\u7248\u672c\u5386\u53f2\n\u81ea\u4ece CVS \u9650\u5236\u4e86\u6587\u4ef6\u7684\u7248\u672c\u8bb0\u5f55\uff0cCVS \u5e76\u4e0d\u652f\u6301\u90a3\u4e9b\u53ef\u80fd\u53d1\u751f\u5728\u6587\u4ef6\u4e0a\uff0c\u4f46\u4f1a\u5f71\u54cd\u6240\u5728\u76ee\u5f55\u5185\u5bb9\u7684\u64cd\u4f5c\uff0c\u5982\u540c\u590d\u5236\u548c\u91cd\u547d\u540d\u3002\u9664\u6b64\u4e4b\u5916\uff0c\u5728 CVS \u91cc\u4f60\u4e0d\u80fd\u7528\u62e5\u6709\u540c\u6837\u540d\u5b57\u4f46\u662f\u6ca1\u6709\u7ee7\u627f\u8001\u7248\u672c\u5386\u53f2\u6216\u8005\u6839\u672c\u6ca1\u6709\u5173\u7cfb\u7684\u6587\u4ef6\u66ff\u6362\u4e00\u4e2a\u5df2\u7ecf\u7eb3\u5165\u7cfb\u7edf\u7684\u6587\u4ef6\u3002\u5728 Subversion \u4e2d\uff0c\u4f60\u53ef\u4ee5\u589e\u52a0\uff08add\uff09\u3001\u5220\u9664\uff08delete\uff09\u3001\u590d\u5236\uff08copy\uff09\u548c\u91cd\u547d\u540d\uff08rename\uff09\uff0c\u65e0\u8bba\u662f\u6587\u4ef6\u8fd8\u662f\u76ee\u5f55\u3002\u6240\u6709\u7684\u65b0\u52a0\u7684\u6587\u4ef6\u90fd\u4ece\u4e00\u4e2a\u65b0\u7684\u3001\u5e72\u51c0\u7684\u7248\u672c\u5f00\u59cb\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u81ea\u52a8\u63d0\u4ea4\n\u4e00\u4e2a\u63d0\u4ea4\u52a8\u4f5c\uff0c\u4e0d\u662f\u5168\u90e8\u66f4\u65b0\u5230\u4e86\u6863\u6848\u5e93\u4e2d\uff0c\u5c31\u662f\u4e0d\u5b8c\u5168\u66f4\u65b0\u3002\u8fd9\u5141\u8bb8\u5f00\u53d1\u4eba\u5458\u4ee5\u903b\u8f91\u533a\u95f4\u5efa\u7acb\u5e76\u63d0\u4ea4\u53d8\u52a8\uff0c\u4ee5\u9632\u6b62\u5f53\u90e8\u5206\u63d0\u4ea4\u6210\u529f\u65f6\u51fa\u73b0\u7684\u95ee\u9898\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u7eb3\u5165\u7248\u672c\u63a7\u7ba1\u7684\u5143\u6570\u636e\n\u6bcf\u4e00\u4e2a\u6587\u4ef6\u4e0e\u76ee\u5f55\u90fd\u9644\u6709\u4e00\u7d44\u5c5e\u6027\u5173\u952e\u5b57\u5e76\u548c\u5c5e\u6027\u503c\u76f8\u5173\u8054\u3002\u4f60\u53ef\u4ee5\u521b\u5efa, \u5e76\u5132\u5b58\u4efb\u4f55\u4f60\u60f3\u8981\u7684 Key/Value \u5bf9\u3002 \u5c5e\u6027\u662f\u968f\u7740\u65f6\u95f4\u6765\u4f5c\u7248\u672c\u63a7\u7ba1\u7684,\u5c31\u50cf\u6587\u4ef6\u5167\u5bb9\u4e00\u6837\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u9009\u62e9\u4e0d\u540c\u7684\u7f51\u7edc\u5c42\nSubversion \u6709\u62bd\u8c61\u7684\u6863\u6848\u5e93\u5b58\u53d6\u6982\u5ff5, \u53ef\u4ee5\u8ba9\u4eba\u5f88\u5bb9\u6613\u5730\u5b9e\u4f5c\u65b0\u7684\u7f51\u7edc\u673a\u5236\u3002 Subversion \u53ef\u4ee5\u4f5c\u4e3a\u4e00\u4e2a\u6269\u5c55\u6a21\u5757\u5d4c\u5165\u5230 Apache HTTP \u670d\u52a1\u5668\u4e2d\u3002\u8fd9\u4e2a\u4e3a Subversion \u63d0\u4f9b\u4e86\u975e\u5e38\u5148\u8fdb\u7684\u7a33\u5b9a\u6027\u548c\u534f\u540c\u5de5\u4f5c\u80fd\u529b\uff0c\u9664\u6b64\u4e4b\u5916\u8fd8\u63d0\u4f9b\u4e86\u8bb8\u591a\u91cd\u8981\u529f\u80fd: \u4e3e\u4f8b\u6765\u8bf4, \u6709\u8eab\u4efd\u8ba4\u8bc1, \u6388\u6743, \u5728\u7ebf\u538b\u7f29, \u4ee5\u53ca\u6587\u4ef6\u5e93\u6d4f\u89c8\u7b49\u7b49\u3002\u8fd8\u6709\u4e00\u4e2a\u8f7b\u91cf\u7ea7\u7684\u72ec\u7acb Subversion \u670d\u52a1\u5668\uff0c \u4f7f\u7528\u7684\u662f\u81ea\u5b9a\u4e49\u7684\u901a\u4fe1\u534f\u8bae, \u53ef\u4ee5\u5f88\u5bb9\u6613\u5730\u901a\u8fc7 ssh \u4ee5 tunnel \u65b9\u5f0f\u4f7f\u7528\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u4e00\u81f4\u7684\u6570\u636e\u5904\u7406\u65b9\u5f0f\nSubversion \u4f7f\u7528\u4e8c\u8fdb\u5236\u5dee\u5f02\u7b97\u6cd5\u6765\u5f02\u8868\u793a\u6587\u4ef6\u7684\u5dee\u5f02, \u5b83\u5bf9\u6587\u5b57(\u4eba\u7c7b\u53ef\u7406\u89e3\u7684)\u4e0e\u4e8c\u8fdb\u5236\u6587\u4ef6(\u4eba\u7c7b\u65e0\u6cd5\u7406\u89e3\u7684) \u4e24\u7c7b\u7684\u6587\u4ef6\u90fd\u4e00\u89c6\u540c\u4ec1\u3002 \u8fd9\u4e24\u7c7b\u7684\u6587\u4ef6\u90fd\u540c\u6837\u5730\u4ee5\u538b\u7f29\u5f62\u5f0f\u50a8\u5b58\u5728\u6863\u6848\u5e93\u4e2d, \u800c\u4e14\u6587\u4ef6\u5dee\u5f02\u662f\u4ee5\u4e24\u4e2a\u65b9\u5411\u5728\u7f51\u7edc\u4e0a\u4f20\u8f93\u7684\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u6709\u6548\u7684\u5206\u652f",(0,i.kt)("inlineCode",{parentName:"li"},"branch"),"\u4e0e\u6807\u7b7e",(0,i.kt)("inlineCode",{parentName:"li"},"tag"),"\n\u5728\u5206\u652f\u4e0e\u6807\u7b7e\u4e0a\u7684\u6d88\u8017\u5e76\u4e0d\u5fc5\u4e00\u5b9a\u8981\u4e0e\u9879\u76ee\u5927\u5c0f\u6210\u6b63\u6bd4\u3002 Subversion \u5efa\u7acb\u5206\u652f\u4e0e\u6807\u7b7e\u7684\u65b9\u6cd5, \u5c31\u53ea\u662f\u590d\u5236\u8be5\u9879\u76ee, \u4f7f\u7528\u7684\u65b9\u6cd5\u5c31\u7c7b\u4f3c\u4e8e\u786c\u8fde\u63a5\uff08hard-link\uff09\u3002 \u6240\u4ee5\u8fd9\u4e9b\u64cd\u4f5c\u53ea\u4f1a\u82b1\u8d39\u5f88\u5c0f, \u800c\u4e14\u662f\u56fa\u5b9a\u7684\u65f6\u95f4\u3002")),(0,i.kt)("h2",{id:"\u6b63\u6587"},"\u6b63\u6587"),(0,i.kt)("h3",{id:"\u5b89\u88c5-svn"},"\u5b89\u88c5 SVN"),(0,i.kt)("p",null,"\u5728\u7535\u8111\u672c\u673a\u4e2d\u9700\u8981\u5148\u5b89\u88c5",(0,i.kt)("inlineCode",{parentName:"p"},"VisualSVN-Server"),"\u670d\u52a1\u7684\u652f\u6301\uff0c\u5f88\u591a\u4eba\u91c7\u7528\u7684\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"TortoiseSVN"),"\u53ef\u89c6\u5316\u5de5\u5177\u6765\u8fdb\u884c\u4ee3\u7801\u7684\u66f4\u65b0\u3001\u63d0\u4ea4\u3001\u878d\u5408\u3001\u89e3\u51b3\u51b2\u7a81\u3002\u8fd9\u4e5f\u662f\u4e0d\u9519\u7684\u505a\u6cd5\u3002\n\u65b9\u6cd5\u4e0b\u8f7d\u76f8\u5173\u7684\u8f6f\u4ef6\u5b89\u88c5\u5373\u53ef"),(0,i.kt)("h3",{id:"vscode-\u914d\u5408\u4f7f\u7528-svn"},"vscode \u914d\u5408\u4f7f\u7528 SVN"),(0,i.kt)("p",null,"\u5728 vscode \u4e2d\u5229\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"Gitlens"),"\u6269\u5c55\u6765\u64cd\u4f5c\u548c\u67e5\u770b\u4ee3\u7801\u7248\u672c\u7684\u63a7\u5236\u662f\u5341\u5206\u76f4\u89c2\u9ad8\u6548\u7684\u3002\u56e0\u6b64\uff0c\u5728 vscode \u5229\u7528\u76f8\u5173\u7684\u6269\u5c55\u662f\u5426\u4e5f\u80fd\u505a\u5230\u5dee\u4e0d\u591a\u7684\u6548\u679c\u5462\uff1f\u7b54\u6848\u662f\u6709\u7684\u3002"),(0,i.kt)("h4",{id:"\u5b89\u88c5-svn-\u6269\u5c55"},"\u5b89\u88c5 SVN \u6269\u5c55"),(0,i.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5728\u6269\u5c55\u5546\u57ce\u5b89\u88c5\u4e00\u4e2a SVN \u6269\u5c55(\u4e0b\u8f7d\u91cf\u6700\u591a\u7684\u4e00\u4e2a)\u3002\u8fd9\u65f6\u5019\u63a7\u5236\u53f0\u8f93\u51fa\u4f1a\u663e\u793a",(0,i.kt)("inlineCode",{parentName:"p"},"Svn installation not found"),"\u3002"),(0,i.kt)("h4",{id:"\u5b89\u88c5-tortoisesvn"},"\u5b89\u88c5 TortoiseSVN"),(0,i.kt)("p",null,"\u8fd9\u4e2a\u62a5\u9519\u9700\u8981",(0,i.kt)("inlineCode",{parentName:"p"},"TortoiseSVN"),"\u7684\u652f\u6301\uff08\u53ef\u4ee5\u4e0d\u9700\u8981",(0,i.kt)("inlineCode",{parentName:"p"},"VisualSVN-Server"),"\uff0c\u56e0\u4e3a\u5b83\u662f SVN \u7684\u670d\u52a1\u5668\u7aef\uff0c\u672c\u5730\u662f\u53ef\u4ee5\u4e0d\u7528\u7684\uff09\uff0c\u4f46\u662f\u8fd9\u65f6\u5019\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"TortoiseSVN"),"\u7684\u9ed8\u8ba4\u5b89\u88c5\u662f\u4e0d\u52fe\u9009",(0,i.kt)("inlineCode",{parentName:"p"},"command line client tools"),"\uff0c\u6211\u4eec\u9700\u8981\u5c06\u5176\u9009\u4e0a\u3002\n",(0,i.kt)("img",{alt:"20-TortoiseSVN.png",src:n(1558).Z})),(0,i.kt)("h4",{id:"\u67e5\u770b\u63d0\u4ea4\u6587\u4ef6\u53d8\u66f4"},"\u67e5\u770b\u63d0\u4ea4\u6587\u4ef6\u53d8\u66f4"),(0,i.kt)("p",null,"\u5728 vscode \u4e2d\u7684\u5de6\u4fa7\u83dc\u5355\u680f\u4e2d\u4f1a\u6709",(0,i.kt)("inlineCode",{parentName:"p"},"S"),"\u7684\u6807\u5fd7\uff0c\u8fd9\u4e2a\u5c31\u662f SVN \u6269\u5c55\u5e94\u7528\u7684\u529f\u80fd\u5165\u53e3\u4e86\u3002\n\u5728\u8fd9\u91cc\u9762\u6709\u4e09\u4e2a\u4e3b\u8981\u4e3b\u8981\u529f\u80fd\uff1a\u4ed3\u5e93(REPOSITORIES)\u3001\u6587\u4ef6\u5386\u53f2(FILE HISTORY)\u3001\u5206\u652f\u6539\u53d8(BRANCH CHANGES)\n\u6211\u4eec\u53ef\u4ee5\u5728\u4ed3\u5e93",(0,i.kt)("inlineCode",{parentName:"p"},"REPOSITORIES"),"\u4e2d\uff0c\u67e5\u770b\u6bcf\u6b21\u63d0\u4ea4\u7684\u6587\u4ef6\u53d8\u66f4\uff0c\u8fd9\u6837\u66f4\u52a0\u76f4\u89c2\u3002"))}m.isMDXComponent=!0},1558:function(e,t,n){t.Z=n.p+"assets/images/20-TortoiseSVN-19d95a46a6302c2f3960ec3b340fdabd.png"}}]);