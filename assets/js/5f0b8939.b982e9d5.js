"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8176],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return g}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),p=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=p(e.components);return o.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(t),g=r,d=u["".concat(c,".").concat(g)]||u[g]||s[g]||a;return t?o.createElement(d,i(i({ref:n},m),{},{components:t})):o.createElement(d,i({ref:n},m))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1903:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return m},toc:function(){return s},default:function(){return g}});var o=t(7462),r=t(3366),a=(t(7294),t(3905)),i=["components"],l={slug:"nginx-conf-server-location",title:"nginx.conf \u4e2d server \u6a21\u5757 location",authors:"zeffon",tags:["nginx"],date:new Date("2020-05-11T00:00:00.000Z")},c=void 0,p={permalink:"/blog/nginx-conf-server-location",editUrl:"https://github.com/zeffon/zeffon.github.io/blob/master/blog/2020/2020-05-11-nginx-conf-server-location.md",source:"@site/blog/2020/2020-05-11-nginx-conf-server-location.md",title:"nginx.conf \u4e2d server \u6a21\u5757 location",description:"nginx.conf \u914d\u7f6e\u4e2d\uff0chttp \u6307\u4ee4\u5757\u4e2d\u7684 server \u6a21\u5757\u7684 location \u662f\u4e3b\u8981\u5339\u914d\u5ba2\u6237\u7aef\u53d1\u9001\u8fc7\u6765 url \u7684",date:"2020-05-11T00:00:00.000Z",formattedDate:"May 11, 2020",tags:[{label:"nginx",permalink:"/blog/tags/nginx"}],readingTime:1.065,truncated:!0,authors:[{name:"Zeffon Wu",title:"A web engineer",url:"https://github.com/zeffon",imageURL:"https://github.com/zeffon.png",key:"zeffon"}],prevItem:{title:"win10 \u6279\u91cf\u4fee\u6539\u6587\u4ef6\u540d",permalink:"/blog/win10-batch-modify-filename"},nextItem:{title:"nginx.conf \u914d\u7f6e\u6587\u4ef6",permalink:"/blog/nginx-configuration-file"}},m={authorsImageUrls:[void 0]},s=[{value:"nginx \u670d\u52a1\u5668\u5339\u914d",id:"nginx-\u670d\u52a1\u5668\u5339\u914d",children:[]},{value:"location \u5339\u914d\u89c4\u5219",id:"location-\u5339\u914d\u89c4\u5219",children:[]}],u={toc:s};function g(e){var n=e.components,t=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"nginx.conf \u914d\u7f6e\u4e2d\uff0chttp \u6307\u4ee4\u5757\u4e2d\u7684 server \u6a21\u5757\u7684 location \u662f\u4e3b\u8981\u5339\u914d\u5ba2\u6237\u7aef\u53d1\u9001\u8fc7\u6765 url \u7684"),(0,a.kt)("h2",{id:"nginx-\u670d\u52a1\u5668\u5339\u914d"},"nginx \u670d\u52a1\u5668\u5339\u914d"),(0,a.kt)("h4",{id:"\u5355\u4e2a-location"},"\u5355\u4e2a location"),(0,a.kt)("p",null,"\u5f53\u6211\u4eec\u8bbf\u95ee ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost:88")," \u5c06\u4f1a\u88ab\u8f6c\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"/home/html")," \u76ee\u5f55\u4e0b \u4e3b\u9875\u662f index.html\n\u4f8b\u5982\u6211\u4eec\u8bbf\u95ee ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost:88/img/a.png")," \u4f1a\u8bbf\u95ee\u5230\u670d\u52a1\u5668 ",(0,a.kt)("inlineCode",{parentName:"p"},"/home/nginx/img/a.png")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-conf"},"server {\n    listen 88;\n    server_name localhost;\n\n    location / {\n        root /home/nginx;\n        index index.html;\n    }\n}\n")),(0,a.kt)("h4",{id:"\u591a\u4e2a-location"},"\u591a\u4e2a location"),(0,a.kt)("p",null,"\u5982\u679c\u8bbf\u95ee ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost:88/img")," \u5339\u914d\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"img")," \u8fd9\u6837\u4f1a\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"/img")," \u62fc\u63a5\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"/home/demo")," \u7684\u540e\u9762\uff0c\u8fd9\u65f6\u5019\u5c31\u4f1a\u8bbf\u95ee\u5230\u670d\u52a1\u5668",(0,a.kt)("inlineCode",{parentName:"p"},"/home/demo/img"),"\u76ee\u5f55\u4e0b\n\u4f8b\u5982\u6211\u4eec\u8bbf\u95ee ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost:88/img/a.png")," \u4f1a\u8bbf\u95ee\u5230\u670d\u52a1\u5668 ",(0,a.kt)("inlineCode",{parentName:"p"},"/home/demo/img/a.png")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-conf"},"server {\n    listen 88;\n    server_name  localhost;\n\n    location / {\n        root   /home;\n        index   index.html;\n    }\n\n    location /img {\n        root   /home/demo;\n        index   index.html;\n    }\n}\n")),(0,a.kt)("p",null,"\u91c7\u7528\u522b\u540d alias\uff0c\u8fd9\u6837\u53ef\u4ee5\u81ea\u5b9a\u4e49 url \u4e0a\u7684\u53c2\u6570\n\u8bbf\u95ee ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost:88/demo/a.png")," \u5339\u914d ",(0,a.kt)("inlineCode",{parentName:"p"},"demo")," \u4f1a\u5c06 demo \u62fc\u63a5\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"/hemo")," \u540e\u9762\uff0c\u8bbf\u95ee\u5230\u670d\u52a1\u5668",(0,a.kt)("inlineCode",{parentName:"p"},"/home/demo/a.png"),"\n\u8bbf\u95ee ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost:88/static/a.png")," \u8bc6\u522b\u51fa\u522b\u540d alias \u4f1a\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"static")," \u66ff\u6362 ",(0,a.kt)("inlineCode",{parentName:"p"},"/home/demo"),"\uff0c\u4e5f\u8bbf\u95ee\u5230\u670d\u52a1\u5668",(0,a.kt)("inlineCode",{parentName:"p"},"/home/demo/a.png"),"\n\u6240\u4ee5",(0,a.kt)("inlineCode",{parentName:"p"},"localhost:88/demo/a.png")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost:88/static/a.png")," \u4e24\u8005\u53ef\u4ee5\u8fbe\u5230\u540c\u6837\u7684\u6548\u679c\uff0c\u4e5f\u53ef\u4ee5\u540c\u65f6\u4f7f\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-conf"},"server {\n    listen 88;\n    server_name  localhost;\n\n    location / {\n        root   /home;\n        index   index.html;\n    }\n\n    location /demo {\n        root   /home;\n        index   index.html;\n    }\n\n    location /static {\n        alias   /home/demo;\n        index   index.html;\n    }\n}\n")),(0,a.kt)("h2",{id:"location-\u5339\u914d\u89c4\u5219"},"location \u5339\u914d\u89c4\u5219"),(0,a.kt)("h4",{id:"1-\u7a7a\u683c-\u9ed8\u8ba4\u5339\u914d\u666e\u901a\u5339\u914d"},"1. \u7a7a\u683c \uff1a\u9ed8\u8ba4\u5339\u914d\uff0c\u666e\u901a\u5339\u914d"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"location / {\n  root /home;\n}\n")),(0,a.kt)("h4",{id:"2--\u7cbe\u786e\u5339\u914d"},"2. = \uff1a\u7cbe\u786e\u5339\u914d"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"location = /demo/img/a.png {\n    root /home;\n}\n")),(0,a.kt)("h4",{id:"3--\u5339\u914d\u6b63\u5219\u8868\u8fbe\u5f0f"},"3. ~","*"," \uff1a\u5339\u914d\u6b63\u5219\u8868\u8fbe\u5f0f"),(0,a.kt)("p",null,"\u4e0d\u533a\u5206\u5927\u5c0f\u5199\uff0c\u7b26\u5408\u56fe\u7247\u7684\u663e\u793a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"location ~* .(GIF|jpg|png|jpeg) {\n    root /home;\n}\n")),(0,a.kt)("h4",{id:"4--\u5339\u914d\u6b63\u5219\u8868\u8fbe\u5f0f"},"4. ~ \uff1a\u5339\u914d\u6b63\u5219\u8868\u8fbe\u5f0f"),(0,a.kt)("p",null,"\u533a\u5206\u5927\u5c0f\u5199\uff0cGIF \u5fc5\u987b\u5927\u5199\u624d\u80fd\u5339\u914d\u5230"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"location ~ .(GIF|jpg|png|jpeg) {\n    root /home;\n}\n")),(0,a.kt)("h4",{id:"5--\u4ee5\u67d0\u4e2a\u5b57\u7b26\u8def\u5f84\u5f00\u5934"},"5. ^~ \uff1a\u4ee5\u67d0\u4e2a\u5b57\u7b26\u8def\u5f84\u5f00\u5934"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"location ^~ /demo/img {\n    root /home;\n}\n")))}g.isMDXComponent=!0}}]);