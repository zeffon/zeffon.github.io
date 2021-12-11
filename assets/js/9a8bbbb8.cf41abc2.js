"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9736],{3905:function(t,e,r){r.d(e,{Zo:function(){return s},kt:function(){return g}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var u=n.createContext({}),p=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},s=function(t){var e=p(t.components);return n.createElement(u.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,u=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),m=p(r),g=a,k=m["".concat(u,".").concat(g)]||m[g]||c[g]||o;return r?n.createElement(k,l(l({ref:e},s),{},{components:r})):n.createElement(k,l({ref:e},s))}));function g(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},30745:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return p},assets:function(){return s},toc:function(){return c},default:function(){return g}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),l=["components"],i={slug:"browser-storage",title:"\u6d4f\u89c8\u5668\u7f13\u5b58\u7684\u5dee\u5f02",authors:"zeffon",tags:["notes"],date:"2021-10-15 10:08"},u=void 0,p={permalink:"/blog/browser-storage",editUrl:"https://github.com/zeffon/zeffon.github.io/blob/master/blog/2021/2021-10-15-browser-storage.md",source:"@site/blog/2021/2021-10-15-browser-storage.md",title:"\u6d4f\u89c8\u5668\u7f13\u5b58\u7684\u5dee\u5f02",description:"\u5e73\u65f6\u5728\u5f00\u53d1Web\u9875\u9762\u7684\u65f6\u5019\uff0c\u501f\u52a9\u4e8e\u6d4f\u89c8\u5668\u7684\u7f13\u5b58\u6765\u50a8\u5b58\u6570\u636e\u662f\u5f88\u5e38\u89c1\u7684\u3002\u4f46\u662f\uff0c\u6d4f\u89c8\u5668\u7f13\u5b58\u6709\u4e09\u79cd\uff0c\u5206\u522b\u662f Cookie\uff0cLocal Storage\uff0cSession Storage\u3002\u4e09\u8005\u662f\u6709\u6240\u533a\u522b\u7684\uff0c\u6240\u4ee5\u6211\u4eec\u9700\u8981\u5bf9\u8fd9\u4e09\u8005\u6709\u6df1\u523b\u7684\u8ba4\u8bc6\u3002\u8fd9\u6837\u5728\u5f00\u53d1\u7684\u65f6\u5019\u624d\u80fd\u6b63\u786e\u5730\u9009\u62e9\u6211\u4eec\u9700\u8981\u7684\u7f13\u5b58\u7c7b\u578b\u3002",date:"2021-10-15T10:08:00.000Z",formattedDate:"October 15, 2021",tags:[{label:"notes",permalink:"/blog/tags/notes"}],readingTime:.52,truncated:!0,authors:[{name:"Zeffon Wu",title:"A web engineer",url:"https://github.com/zeffon",imageURL:"https://github.com/zeffon.png",key:"zeffon"}],prevItem:{title:"GitHub Actions\u7684\u5e94\u7528",permalink:"/blog/github-action"},nextItem:{title:"CSS \u4e66\u5199\u89c4\u8303",permalink:"/blog/css-standard"}},s={authorsImageUrls:[void 0]},c=[{value:"\u5bf9\u6bd4",id:"\u5bf9\u6bd4",children:[]},{value:"API",id:"api",children:[{value:"Cookie",id:"cookie",children:[]},{value:"Local Storage",id:"local-storage",children:[]},{value:"Session Storage",id:"session-storage",children:[]}]}],m={toc:c};function g(t){var e=t.components,r=(0,a.Z)(t,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5e73\u65f6\u5728\u5f00\u53d1Web\u9875\u9762\u7684\u65f6\u5019\uff0c\u501f\u52a9\u4e8e\u6d4f\u89c8\u5668\u7684\u7f13\u5b58\u6765\u50a8\u5b58\u6570\u636e\u662f\u5f88\u5e38\u89c1\u7684\u3002\u4f46\u662f\uff0c\u6d4f\u89c8\u5668\u7f13\u5b58\u6709\u4e09\u79cd\uff0c\u5206\u522b\u662f ",(0,o.kt)("strong",{parentName:"p"},"Cookie"),"\uff0c",(0,o.kt)("strong",{parentName:"p"},"Local Storage"),"\uff0c",(0,o.kt)("strong",{parentName:"p"},"Session Storage"),"\u3002\u4e09\u8005\u662f\u6709\u6240\u533a\u522b\u7684\uff0c\u6240\u4ee5\u6211\u4eec\u9700\u8981\u5bf9\u8fd9\u4e09\u8005\u6709\u6df1\u523b\u7684\u8ba4\u8bc6\u3002\u8fd9\u6837\u5728\u5f00\u53d1\u7684\u65f6\u5019\u624d\u80fd\u6b63\u786e\u5730\u9009\u62e9\u6211\u4eec\u9700\u8981\u7684\u7f13\u5b58\u7c7b\u578b\u3002"),(0,o.kt)("h2",{id:"\u5bf9\u6bd4"},"\u5bf9\u6bd4"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u7279\u6027"),(0,o.kt)("th",{parentName:"tr",align:null},"Cookie"),(0,o.kt)("th",{parentName:"tr",align:null},"Local Storage"),(0,o.kt)("th",{parentName:"tr",align:null},"Session Storage"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u751f\u547d\u5468\u671f"),(0,o.kt)("td",{parentName:"tr",align:null},"\u4e00\u822c\u6709\u670d\u52a1\u5668\u751f\u6210\u7684\u6570\u503c\uff0c\u53ef\u8bbe\u7f6e\u5931\u6548\u65f6\u95f4\u3002\u5728\u6d4f\u89c8\u5668\u751f\u6210\u7684Cookie\uff0c\u5728\u6d4f\u89c8\u5668\u7684\u5173\u95ed\u4f1a\u88ab\u6e05\u9664\u3002"),(0,o.kt)("td",{parentName:"tr",align:null},"\u8be5\u7f13\u5b58\u503c\u4e0d\u4f1a\u8fc7\u671f\uff0c\u53ea\u80fd\u624b\u52a8\u6e05\u9664\u3002"),(0,o.kt)("td",{parentName:"tr",align:null},"\u8be5\u7f13\u5b58\u503c\u53ea\u6709\u5728\u5f53\u524d\u7684\u4f1a\u8bdd\u4e0b\u5b58\u5728\uff0c\u5173\u95ed\u9875\u9762\u6216\u8005\u6d4f\u89c8\u5668\u4f1a\u88ab\u6e05\u9664\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5927\u5c0f"),(0,o.kt)("td",{parentName:"tr",align:null},"4k\u5de6\u53f3"),(0,o.kt)("td",{parentName:"tr",align:null},"\u4e00\u822c\u4e3a5MB"),(0,o.kt)("td",{parentName:"tr",align:null},"\u4e00\u822c\u4e3a5MB")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u4e0e\u670d\u52a1\u7aef\u901a\u4fe1"),(0,o.kt)("td",{parentName:"tr",align:null},"\u6bcf\u6b21\u8bf7\u6c42\u90fd\u4f1a\u643a\u5e26\u5728HTTP"),(0,o.kt)("td",{parentName:"tr",align:null},"\u53ea\u5b58\u5728\u6d4f\u89c8\u5668,\u4e0d\u53c2\u4e0e\u670d\u52a1\u7aef\u901a\u4fe1"),(0,o.kt)("td",{parentName:"tr",align:null},"\u53ea\u5b58\u5728\u6d4f\u89c8\u5668,\u4e0d\u53c2\u4e0e\u670d\u52a1\u7aef\u901a\u4fe1")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u573a\u666f"),(0,o.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u91cf\u5c0f, \u4fdd\u5b58\u5468\u671f\u77ed\u7684\u6570\u636e\u3002\u6bd4\u5982token\u503c"),(0,o.kt)("td",{parentName:"tr",align:null},"\u8be5\u6570\u636e\u53ea\u80fd\u624b\u52a8\u6e05\u9664 , \u6240\u4ee5\u4e0d\u8981\u4fdd\u5b58\u6bd4\u8f83\u91cd\u8981\u7684\u6570\u636e\u3002\u9002\u5408\u7f13\u5b58\u4e00\u4e9b\u516c\u5f00\u6570\u636e\u3002"),(0,o.kt)("td",{parentName:"tr",align:null},"\u76f8\u6bd4Cookie\u7684\u7f13\u5b58\u7a7a\u95f4\u6bd4\u8f83\u5927 , \u4e5f\u7f13\u5b58\u4e00\u4e9b\u4fdd\u5b58\u5468\u671f\u77ed\u7684\u6570\u636e , \u6bd4\u5982\u7f16\u8f91\u8868\u5355\u65f6\u6570\u636e\u3002")))),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("h3",{id:"cookie"},"Cookie"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u539f\u751f\u7684API\u5e76\u4e0d\u53cb\u597d,\u517c\u5bb9\u6027\u4e5f\u5dee"),(0,o.kt)("li",{parentName:"ul"},"\u63a8\u8350\u7b2c\u4e09\u65b9API ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/js-cookie/js-cookie"},"js-cookie"))),(0,o.kt)("h3",{id:"local-storage"},"Local Storage"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528\u539f\u751fAPI ",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage"},"Window.localStorage")," "),(0,o.kt)("li",{parentName:"ul"},"\u4e5f\u53ef\u4ee5\u4f7f\u7528\u7b2c\u4e09\u65b9API (\u66f4\u591a\u7c7b\u578b\u5b58\u50a8)",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/RobinCK/vue-ls"},"vue-ls")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ustbhuangyi/storage"},"storage "))))),(0,o.kt)("h3",{id:"session-storage"},"Session Storage"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528\u539f\u751fAPI ",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Window/sessionStorage"},"Window.sessionStorage")),(0,o.kt)("li",{parentName:"ul"},"\u4e5f\u53ef\u4ee5\u4f7f\u7528\u7b2c\u4e09\u65b9API",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ustbhuangyi/storage"},"storage "),"(\u66f4\u591a\u7c7b\u578b\u5b58\u50a8)")))))}g.isMDXComponent=!0}}]);