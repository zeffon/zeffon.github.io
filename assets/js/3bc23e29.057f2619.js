"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1541],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),f=r,g=m["".concat(i,".").concat(f)]||m[f]||u[f]||p;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,o=new Array(p);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<p;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},57392:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return s},assets:function(){return c},toc:function(){return u},default:function(){return f}});var a=n(87462),r=n(63366),p=(n(67294),n(3905)),o=["components"],l={slug:"js-array",title:"JS \u6570\u7ec4\u7684\u603b\u7ed3",authors:"zeffon",tags:["js"],date:"2021-12-17 10:28"},i=void 0,s={permalink:"/blog/js-array",editUrl:"https://github.com/zeffon/zeffon.github.io/blob/master/blog/2021/2021-12-17-js-array.md",source:"@site/blog/2021/2021-12-17-js-array.md",title:"JS \u6570\u7ec4\u7684\u603b\u7ed3",description:"\u5199\u4e00\u7bc7\u5173\u4e8e js \u6570\u7ec4\u76f8\u5173\u64cd\u4f5c\u7684\u603b\u7ed3\uff0c\u65b9\u4fbf\u540e\u7eed\u67e5\u9605\u3002",date:"2021-12-17T10:28:00.000Z",formattedDate:"December 17, 2021",tags:[{label:"js",permalink:"/blog/tags/js"}],readingTime:.78,truncated:!0,authors:[{name:"Zeffon Wu",title:"A web engineer",url:"https://github.com/zeffon",imageURL:"https://github.com/zeffon.png",key:"zeffon"}],prevItem:{title:"\u6587\u672c\u63a7\u5236\u663e\u793a\u65b9\u5f0f",permalink:"/blog/text-show"},nextItem:{title:"JS \u5bf9\u8c61\u7684\u64cd\u4f5c",permalink:"/blog/js-object"}},c={authorsImageUrls:[void 0]},u=[{value:"\u6570\u7ec4\u7684\u57fa\u672c\u64cd\u4f5c",id:"\u6570\u7ec4\u7684\u57fa\u672c\u64cd\u4f5c",children:[]},{value:"\u6570\u7ec4\u904d\u5386",id:"\u6570\u7ec4\u904d\u5386",children:[]}],m={toc:u};function f(e){var t=e.components,n=(0,r.Z)(e,o);return(0,p.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"\u5199\u4e00\u7bc7\u5173\u4e8e ",(0,p.kt)("strong",{parentName:"p"},"js")," \u6570\u7ec4\u76f8\u5173\u64cd\u4f5c\u7684\u603b\u7ed3\uff0c\u65b9\u4fbf\u540e\u7eed\u67e5\u9605\u3002"),(0,p.kt)("p",null,"\u6570\u7ec4\u662f\u4e00\u79cd\u7c7b\u5217\u8868\u5bf9\u8c61\uff0c\u5b83\u7684\u539f\u578b\u4e2d\u63d0\u4f9b\u4e86\u904d\u5386\u548c\u4fee\u6539\u5143\u7d20\u7684\u76f8\u5173\u64cd\u4f5c\u3002JavaScript \u6570\u7ec4\u7684\u957f\u5ea6\u548c\u5143\u7d20\u7c7b\u578b\u90fd\u662f\u975e\u56fa\u5b9a\u7684\u3002\u56e0\u4e3a\u6570\u7ec4\u7684\u957f\u5ea6\u53ef\u968f\u65f6\u6539\u53d8\uff0c\u5e76\u4e14\u5176\u6570\u636e\u5728\u5185\u5b58\u4e2d\u4e5f\u53ef\u4ee5\u4e0d\u8fde\u7eed\uff0c\u6240\u4ee5 JavaScript \u6570\u7ec4\u4e0d\u4e00\u5b9a\u662f\u5bc6\u96c6\u578b\u7684\uff0c\u8fd9\u53d6\u51b3\u4e8e\u5b83\u7684\u4f7f\u7528\u65b9\u5f0f\u3002\u66f4\u591a\u53ef\u4ee5\u5728",(0,p.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array"},"MDN"),"\u4e0a\u67e5\u9605\u3002"),(0,p.kt)("h2",{id:"\u6570\u7ec4\u7684\u57fa\u672c\u64cd\u4f5c"},"\u6570\u7ec4\u7684\u57fa\u672c\u64cd\u4f5c"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"\u521b\u5efa\u6570\u7ec4")),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-javascript"},'const fruits = ["Apple", "Banana"];\nconsole.log(fruits.length); // 2\n'))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"\u65b0\u589e\u5143\u7d20")),(0,p.kt)("p",{parentName:"li"},"push \u65b0\u589e\u5143\u7d20\u5230\u6570\u7ec4\u7684\u672b\u5c3e"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-javascript"},"const fruits = [\"Apple\", \"Banana\"];\nfruits.push(\"Orange\");\nconsole.log(fruits); // ['Apple', 'Banana', 'Orange']\n")),(0,p.kt)("p",{parentName:"li"},"unshift \u65b0\u589e\u5143\u7d20\u5230\u6570\u7ec4\u7684\u5934\u90e8"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-javascript"},"const fruits = [\"Apple\", \"Banana\"];\nfruits.unshift(\"Mango\");\nconsole.log(fruits); // ['Mango', 'Apple', 'Banana']\n"))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"\u67e5\u8be2\u5143\u7d20")),(0,p.kt)("p",{parentName:"li"},"\u901a\u8fc7\u7d22\u5f15\u8bbf\u95ee\u6570\u7ec4\u5143\u7d20"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-javascript"},'const fruits = ["Apple", "Banana"];\nlet apple = fruits[0];\nconsole.log(apple); // Apple\n')),(0,p.kt)("p",{parentName:"li"},"\u627e\u51fa\u67d0\u4e2a\u5143\u7d20\u5728\u6570\u7ec4\u4e2d\u7684\u7d22\u5f15"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-javascript"},'const fruits = ["Apple", "Banana"];\nfruits.push("Mango"); // [\'Apple\', \'Banana\', \'Mango\']["Apple", "Banana", "Mango"]\nlet pos = fruits.indexOf("Banana");\nconsole.log(pos); // 1\n'))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"\u4fee\u6539\u5143\u7d20")),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-javascript"},'const fruits = ["Apple", "Banana", "Mango"];\nfruits[0] = "Orange";\nconsole.log(fruits); // [\'Orange\', \'Banana\', \'Mango\']\n'))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"\u5220\u9664\u5143\u7d20")),(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"pop")," \u5220\u9664\u6570\u7ec4\u672b\u5c3e\u7684\u5143\u7d20"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-javascript"},'const fruits = ["Apple", "Banana", "Mango"];\nfruits.pop();\nconsole.log(fruits); // [\'Apple\', \'Banana\']\n')),(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"shift")," \u5220\u9664\u6570\u7ec4\u5934\u90e8\u5143\u7d20"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-javascript"},'const fruits = ["Apple", "Banana", "Mango"];\nfruits.shift();\nconsole.log(fruits); // [\'Banana\', \'Mango\']\n')))),(0,p.kt)("h2",{id:"\u6570\u7ec4\u904d\u5386"},"\u6570\u7ec4\u904d\u5386"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"js")," \u6570\u7ec4\u7684\u7d22\u5f15\u662f\u4ece 0 \u5f00\u59cb\u7684\uff0c\u7b2c\u4e00\u4e2a\u5143\u7d20\u7684\u7d22\u5f15\u4e3a 0\uff0c\u6700\u540e\u4e00\u4e2a\u5143\u7d20\u7684\u7d22\u5f15\u7b49\u4e8e\u8be5\u6570\u7ec4\u7684 \u957f\u5ea6 length \u51cf 1\u3002\u5982\u679c\u6307\u5b9a\u7684\u7d22\u5f15\u662f\u4e00\u4e2a\u65e0\u6548\u503c\uff0c",(0,p.kt)("strong",{parentName:"p"},"js")," \u6570\u7ec4\u5e76\u4e0d\u4f1a\u62a5\u9519\uff0c\u800c\u662f\u4f1a\u8fd4\u56de ",(0,p.kt)("strong",{parentName:"p"},"undefined"),"\u3002"))}f.isMDXComponent=!0}}]);