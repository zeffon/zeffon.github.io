"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4631],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,b=p["".concat(c,".").concat(m)]||p[m]||f[m]||a;return n?r.createElement(b,l(l({ref:t},s),{},{components:n})):r.createElement(b,l({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},91429:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},assets:function(){return s},toc:function(){return f},default:function(){return m}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),l=["components"],i={slug:"centos7-deploy-flask",title:"flask\u9879\u76ee\u5728centos7\u90e8\u7f72\u6d41\u7a0b",authors:"zeffon",tags:["flask"],date:new Date("2019-09-01T00:00:00.000Z")},c=void 0,u={permalink:"/blog/centos7-deploy-flask",editUrl:"https://github.com/zeffon/zeffon.github.io/blob/master/blog/2019/2019-09-01-centos7-deploy-flask.md",source:"@site/blog/2019/2019-09-01-centos7-deploy-flask.md",title:"flask\u9879\u76ee\u5728centos7\u90e8\u7f72\u6d41\u7a0b",description:"Flask \u662f\u4e00\u4e2a web \u6846\u67b6\uff0c\u800c\u975e web server\uff0c\u76f4\u63a5\u7528 Flask \u62c9\u8d77\u7684 web \u670d\u52a1\u4ec5\u9650\u4e8e\u5f00\u53d1\u73af\u5883\u4f7f\u7528\uff0c\u751f\u4ea7\u73af\u5883\u4e0d\u591f\u7a33\u5b9a\uff0c\u4e5f\u65e0\u6cd5\u627f\u53d7\u5927\u91cf\u8bf7\u6c42\u7684\u5e76\u53d1\u3002\u57fa\u4e8e Flask \u5f00\u53d1 API \u9879\u76ee\u662f\uff0c\u90e8\u7f72\u65f6\u7528 uwsgi \u548c Nginx\uff0c\u662f\u4e00\u4e2a\u5f88\u597d\u7684\u9009\u62e9\u3002",date:"2019-09-01T00:00:00.000Z",formattedDate:"September 1, 2019",tags:[{label:"flask",permalink:"/blog/tags/flask"}],readingTime:3.585,truncated:!0,authors:[{name:"Zeffon Wu",title:"A web engineer",url:"https://github.com/zeffon",imageURL:"https://github.com/zeffon.png",key:"zeffon"}],prevItem:{title:"Systemd\u7684\u4f7f\u7528",permalink:"/blog/how-use-systemd"},nextItem:{title:"\u975e\u7ebf\u6027\u7ed3\u6784 - \u6811",permalink:"/blog/no-structure-tree"}},s={authorsImageUrls:[void 0]},f=[],p={toc:f};function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Flask \u662f\u4e00\u4e2a web \u6846\u67b6\uff0c\u800c\u975e web server\uff0c\u76f4\u63a5\u7528 Flask \u62c9\u8d77\u7684 web \u670d\u52a1\u4ec5\u9650\u4e8e\u5f00\u53d1\u73af\u5883\u4f7f\u7528\uff0c\u751f\u4ea7\u73af\u5883\u4e0d\u591f\u7a33\u5b9a\uff0c\u4e5f\u65e0\u6cd5\u627f\u53d7\u5927\u91cf\u8bf7\u6c42\u7684\u5e76\u53d1\u3002\u57fa\u4e8e Flask \u5f00\u53d1 API \u9879\u76ee\u662f\uff0c\u90e8\u7f72\u65f6\u7528 uwsgi \u548c Nginx\uff0c\u662f\u4e00\u4e2a\u5f88\u597d\u7684\u9009\u62e9\u3002"))}m.isMDXComponent=!0}}]);