"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6423],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),g=a,f=m["".concat(l,".").concat(g)]||m[g]||u[g]||o;return n?r.createElement(f,p(p({ref:t},c),{},{components:n})):r.createElement(f,p({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var s=2;s<o;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},15199:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},assets:function(){return c},toc:function(){return u},default:function(){return g}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),p=["components"],i={slug:"get-param-array",title:"GET\u8bf7\u6c42\u5982\u4f55\u4f20\u9012\u6570\u7ec4\u53c2\u6570",authors:"zeffon",tags:["js"],date:"2021-12-31 10:33"},l=void 0,s={permalink:"/blog/get-param-array",editUrl:"https://github.com/zeffon/zeffon.github.io/blob/master/blog/2021/2021-12-31-get-param-array.md",source:"@site/blog/2021/2021-12-31-get-param-array.md",title:"GET\u8bf7\u6c42\u5982\u4f55\u4f20\u9012\u6570\u7ec4\u53c2\u6570",description:"\u5728\u5e73\u65f6\u5f00\u53d1\u4e2d\uff0cHTTP \u4e2d GET \u8bf7\u6c42\u53c2\u6570\u4f20\u9012\u7684\u4ea4\u4e92\u662f\u5f88\u7b80\u5355\u7684\uff0c\u65e0\u975e\u5c31\u662f\u5728 URL \u8bbe\u7f6e\u53c2\u6570\u6216\u8005 URL \u540e\u52a0\u4e0a\u53c2\u6570\u7684\u5f62\u5f0f\u3002\u4f46\u6709\u65f6\u6211\u4eec\u4f1a\u9762\u5bf9 GET \u8bf7\u6c42\u4f20\u9012\u6570\u7ec4\u53c2\u6570\u7684\u5f62\u5f0f\uff0c\u90a3\u4e48\u53c8\u8be5\u5982\u4f55\u9762\u5bf9\u5462\uff1f",date:"2021-12-31T10:33:00.000Z",formattedDate:"December 31, 2021",tags:[{label:"js",permalink:"/blog/tags/js"}],readingTime:.975,truncated:!0,authors:[{name:"Zeffon Wu",title:"A web engineer",url:"https://github.com/zeffon",imageURL:"https://github.com/zeffon.png",key:"zeffon"}],prevItem:{title:"Vite \u7684\u4ecb\u7ecd",permalink:"/blog/vite"},nextItem:{title:"\u6587\u672c\u63a7\u5236\u663e\u793a\u65b9\u5f0f",permalink:"/blog/text-show"}},c={authorsImageUrls:[void 0]},u=[{value:"\u5e38\u89c4\u8bf7\u6c42\u65b9\u5f0f",id:"\u5e38\u89c4\u8bf7\u6c42\u65b9\u5f0f",children:[]},{value:"\u4e0d\u5bfb\u5e38\u8bf7\u6c42\u65b9\u5f0f",id:"\u4e0d\u5bfb\u5e38\u8bf7\u6c42\u65b9\u5f0f",children:[]},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",children:[{value:"\u5355\u72ec\u5904\u7406",id:"\u5355\u72ec\u5904\u7406",children:[]},{value:"<strong>axios</strong> \u5904\u7406",id:"axios-\u5904\u7406",children:[]}]}],m={toc:u};function g(e){var t=e.components,n=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5728\u5e73\u65f6\u5f00\u53d1\u4e2d\uff0cHTTP \u4e2d GET \u8bf7\u6c42\u53c2\u6570\u4f20\u9012\u7684\u4ea4\u4e92\u662f\u5f88\u7b80\u5355\u7684\uff0c\u65e0\u975e\u5c31\u662f\u5728 URL \u8bbe\u7f6e\u53c2\u6570\u6216\u8005 URL \u540e\u52a0\u4e0a\u53c2\u6570\u7684\u5f62\u5f0f\u3002\u4f46\u6709\u65f6\u6211\u4eec\u4f1a\u9762\u5bf9 GET \u8bf7\u6c42\u4f20\u9012\u6570\u7ec4\u53c2\u6570\u7684\u5f62\u5f0f\uff0c\u90a3\u4e48\u53c8\u8be5\u5982\u4f55\u9762\u5bf9\u5462\uff1f"),(0,o.kt)("h2",{id:"\u5e38\u89c4\u8bf7\u6c42\u65b9\u5f0f"},"\u5e38\u89c4\u8bf7\u6c42\u65b9\u5f0f"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u53c2\u6570\u4f5c\u4e3a URL \u7684\u4e00\u90e8\u5206\u8fdb\u884c\u94fe\u63a5\u8df3\u8f6c"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"`https://www.yuque.com/zeffon/blog/${name}`;\n")),(0,o.kt)("p",{parentName:"li"},"\u5176\u4e2d\u7684 name \u4e3a\u53d8\u91cf\uff0c\u76f4\u63a5\u5c06 URL \u6784\u9020\u6210\u4e00\u4e2a\u94fe\u63a5")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u53c2\u6570\u4f5c\u4e3a URL \u540e\u7684\u53c2\u6570\u5f62\u5f0f\uff0c\u4ee5\u95ee\u597d ? \u9694\u5f00\uff0c\u591a\u4e2a\u4ee5 & \u5207\u5206\u3002"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"https://www.yuque.com/zeffon/blog/toc?tempStore=1\n")),(0,o.kt)("p",{parentName:"li"},"\u5176\u4e2d\u7684 tempStore \u5c31\u662f GET \u8bf7\u6c42\u4f20\u9012\u7684\u53c2\u6570"))),(0,o.kt)("p",null,"\u4ee5\u4e0a\u5c31\u662f GET \u8bf7\u6c42\u4e2d\u5f88\u5e38\u89c1\u7684\u8bf7\u6c42\u65b9\u5f0f\uff0c\u90a3\u4e48 GET \u662f\u5426\u4e5f\u53ef\u4ee5\u4f20\u9012 body \u7684\u53c2\u6570\u5f62\u5f0f\u5417\uff1f\u7b54\u6848\u662f\u53ef\u4ee5\u7684\uff0c\u4f46\u662f GET \u8bf7\u6c42\u4f20\u9012 body \u7c7b\u578b\u7684\u53c2\u6570\u4e0d\u7b26\u5408 RestFul \u7684\u98ce\u683c\uff0c\u6240\u4ee5\u5927\u5bb6\u5f88\u5c11\u5728 GET \u8bf7\u6c42\u4e2d\u4f7f\u7528\u8fd9\u79cd\u590d\u6742\u65b9\u5f0f\u4f20\u9012\u3002"),(0,o.kt)("h2",{id:"\u4e0d\u5bfb\u5e38\u8bf7\u6c42\u65b9\u5f0f"},"\u4e0d\u5bfb\u5e38\u8bf7\u6c42\u65b9\u5f0f"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5176\u5b9e GET \u8bf7\u6c42\u4f20\u9012\u6570\u7ec4\u4e5f\u662f\u5f88\u7b80\u5355\u7684\uff0c\u4e00\u822c\u524d\u7aef\u5c06\u6570\u7ec4\u53c2\u6570\u62fc\u63a5\u6210\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u518d\u7531\u540e\u7aef\u63a5\u6536\u5904\u7406\u6210\u6570\u7ec4\u3002"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"https://www.yuque.com/zeffon/blog?tags=1,2,3\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u4f46\u662f\u6709\u65f6\u5019\u4e8b\u4e0e\u613f\u8fdd\uff0c\u524d\u7aef\u5c31\u9700\u8981\u4f20\u9012\u8fd9\u79cd\u6570\u7ec4\u65b9\u5f0f\uff0c\u7ed3\u6784\uff1a"),(0,o.kt)("p",{parentName:"li"},"\u53c2\u6570 tags\uff0c\u53c2\u6570\u503c\uff1a","[1, 2, 3]"),(0,o.kt)("p",{parentName:"li"},"\u5982\u679c\u6211\u4eec\u4f7f\u7528\u5728 URL \u540e\u7684\u53c2\u6570\u5f62\u5f0f\u7684\u8bdd\uff0c\u89e3\u6790\u540e\u7684 URL \u4e3a\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"https://www.yuque.com/zeffon/blog?tags[]=1&tags[]=2&tags[]=3\n")),(0,o.kt)("p",{parentName:"li"},"\u5f88\u660e\u663e\uff0c\u8fd9\u79cd\u53c2\u6570\u5f62\u5f0f\u7ed9\u540e\u7aef\u89e3\u6790\u4e0d\u5230\u5bf9\u5e94\u7684\u53c2\u6570\u503c\u7684\uff0c\u540e\u7aef\u80fd\u89e3\u6790\u7684\u65b9\u5f0f\u662f\u8fd9\u79cd\u7684\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"https://www.yuque.com/zeffon/blog?tags=1,2,3\n")),(0,o.kt)("p",{parentName:"li"},"\u6216\u8005"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"https://www.yuque.com/zeffon/blog?tags=1&tags=2&tags=3\n")))),(0,o.kt)("h2",{id:"\u89e3\u51b3\u65b9\u6848"},"\u89e3\u51b3\u65b9\u6848"),(0,o.kt)("h3",{id:"\u5355\u72ec\u5904\u7406"},"\u5355\u72ec\u5904\u7406"),(0,o.kt)("p",null,"\u5355\u72ec\u5904\u7406\u6bd4\u8f83\u7b80\u5355\uff0c\u5c31\u662f\u5728\u53c2\u6570\u4f20\u9012\u7684\u65f6\u5019\uff0c\u989d\u5916\u7684\u5904\u7406\u53c2\u6570\u5f62\u5f0f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"axios\n  .get(\"https://www.yuque.com/zeffon/blog\",{\n    params: {\n      tags\uff1athis.tags\n    },\n    paramsSerializer: function(params) {\n      const tags = params.keys.join(',');\n      return `tags=${tags}`;\n    }\n  }).then((res) => {\n});\n")),(0,o.kt)("p",null,"\u6216\u8005"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"axios\n  .get(\"https://www.yuque.com/zeffon/blog\",{\n    params: {\n      tags\uff1athis.tags\n    },\n    paramsSerializer: function(params) {\n      const tags = params.tags.map(_=>`tags=${_}`).join('&');\n      return `${tags}`;\n    }\n  }).then((res) => {\n});\n")),(0,o.kt)("p",null,"\u663e\u7136\uff0c\u8fd9\u79cd\u65b9\u5f0f\u5904\u7406\u53c2\u6570\u7684\u8bdd\uff0c\u6bcf\u4e00\u6b21\u9047\u5230\u8fd9\u79cd\u53c2\u6570\u90fd\u8981\u989d\u5916\u5904\u7406\uff0c\u6240\u4ee5\u662f\u5426\u6709\u4e2a\u5168\u5c40\u5904\u7406\u7684\u65b9\u6cd5\u3002"),(0,o.kt)("h3",{id:"axios-\u5904\u7406"},(0,o.kt)("strong",{parentName:"h3"},"axios")," \u5904\u7406"),(0,o.kt)("p",null,"axios \u5904\u7406\u53ef\u4ee5\u5728\u6846\u67b6\u4e0a\u5168\u5c40\u5904\u7406\uff08\u8fd9\u6837\u5c31\u9700\u8981\u81ea\u5df1\u914d\u7f6e axios\uff09"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"axios.interceptors.request.use((config) => {\n if (config.method === 'get') {\n   config.paramsSerializer = function (params) {\n     return qs.stringify(params, { arrayFormat: 'indices', allowDots: true })\n   }\n }\n}\n")),(0,o.kt)("p",null,"\u6216\u8005"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"axios.interceptors.request.use((config) => {\n if (config.method === 'get') {\n   config.paramsSerializer = function (params) {\n     return qs.stringify(params, { arrayFormat: 'repeat' })\n   }\n }\n}\n")))}g.isMDXComponent=!0}}]);