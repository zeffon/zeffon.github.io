"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3722],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return g}});var r=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(t),g=l,f=m["".concat(c,".").concat(g)]||m[g]||s[g]||a;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function g(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,o=new Array(a);o[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<a;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9932:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return u},toc:function(){return s},default:function(){return g}});var r=t(87462),l=t(63366),a=(t(67294),t(3905)),o=["components"],i={slug:"nginx-configuration-file",title:"nginx.conf \u914d\u7f6e\u6587\u4ef6",authors:"zeffon",tags:["nginx"],date:new Date("2020-05-04T00:00:00.000Z")},c=void 0,p={permalink:"/blog/nginx-configuration-file",editUrl:"https://github.com/zeffon/zeffon.github.io/blob/master/blog/2020/2020-05-04-nginx-configuration-file.md",source:"@site/blog/2020/2020-05-04-nginx-configuration-file.md",title:"nginx.conf \u914d\u7f6e\u6587\u4ef6",description:"Nginx \u7684\u6838\u5fc3\u914d\u7f6e\u6587\u4ef6 nginx.conf \u7684\u914d\u7f6e\u7ed3\u6784\u548c\u6307\u4ee4\u8bed\u6cd5",date:"2020-05-04T00:00:00.000Z",formattedDate:"May 4, 2020",tags:[{label:"nginx",permalink:"/blog/tags/nginx"}],readingTime:3.98,truncated:!0,authors:[{name:"Zeffon Wu",title:"A web engineer",url:"https://github.com/zeffon",imageURL:"https://github.com/zeffon.png",key:"zeffon"}],prevItem:{title:"nginx.conf \u4e2d server \u6a21\u5757 location",permalink:"/blog/nginx-conf-server-location"},nextItem:{title:"Nginx\u57fa\u672c\u8ba4\u77e5",permalink:"/blog/nginx-basic"}},u={authorsImageUrls:[void 0]},s=[{value:"\u524d\u6587",id:"\u524d\u6587",children:[]},{value:"\u6b63\u6587",id:"\u6b63\u6587",children:[{value:"main \u5168\u5c40\u914d\u7f6e",id:"main-\u5168\u5c40\u914d\u7f6e",children:[]},{value:"events \u5de5\u4f5c\u6a21\u5f0f\u914d\u7f6e",id:"events-\u5de5\u4f5c\u6a21\u5f0f\u914d\u7f6e",children:[]},{value:"http \u6307\u4ee4\u5757\u914d\u7f6e",id:"http-\u6307\u4ee4\u5757\u914d\u7f6e",children:[]},{value:"server \u6a21\u5757\u914d\u7f6e",id:"server-\u6a21\u5757\u914d\u7f6e",children:[]}]}],m={toc:s};function g(e){var n=e.components,i=(0,l.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Nginx \u7684\u6838\u5fc3\u914d\u7f6e\u6587\u4ef6 nginx.conf \u7684\u914d\u7f6e\u7ed3\u6784\u548c\u6307\u4ee4\u8bed\u6cd5"),(0,a.kt)("h2",{id:"\u524d\u6587"},"\u524d\u6587"),(0,a.kt)("p",null,"\u60f3\u8981\u4f7f\u7528\u597d Nginx\uff0c\u7ed5\u4e0d\u5f00\u5176\u6838\u5fc3\u914d\u7f6e\u6587\u4ef6\u7684\u719f\u7ec3\u638c\u63e1\uff0c\u4ee5\u4e0b\u4e3b\u8981\u662f nginx.conf \u7684\u914d\u7f6e\u7ed3\u6784\u548c\u76f8\u5173\u7684\u6307\u4ee4\u8bed\u6cd5\n",(0,a.kt)("img",{alt:"04-01-nginx.conf.png",src:t(62198).Z})),(0,a.kt)("h2",{id:"\u6b63\u6587"},"\u6b63\u6587"),(0,a.kt)("h3",{id:"main-\u5168\u5c40\u914d\u7f6e"},"main \u5168\u5c40\u914d\u7f6e"),(0,a.kt)("p",null,"main \u914d\u7f6e\u5f71\u54cd nginx \u5168\u5c40\u7684\u6307\u4ee4\u3002\n\u4e00\u822c\u6709\u8fd0\u884c nginx \u670d\u52a1\u5668\u7684\u7528\u6237\u7ec4\u3001\u5141\u8bb8\u8fd0\u884c\u7684\u5de5\u4f5c\u8fdb\u884c\u6570 worker process\u3001nginx \u8fdb\u7a0b pid \u5b58\u653e\u8def\u5f84\u3001\u65e5\u5fd7\u5b58\u653e\u8def\u5f84\uff0c\u914d\u7f6e\u6587\u4ef6\u5f15\u5165\u7b49\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u8bbe\u7f6e work \u8fdb\u7a0b\u7684\u7528\u6237\uff0c\u6307\u7684\u662f linux \u4e2d\u7684\u7528\u6237\uff0c\u4f1a\u6d89\u53ca\u5230 nginx \u64cd\u4f5c\u76ee\u5f55\u6216\u6587\u4ef6\u7684\u4e00\u4e9b\u6743\u9650\uff0c\u9ed8\u8ba4\u662f",(0,a.kt)("inlineCode",{parentName:"li"},"nobody"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"user root\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"work \u5de5\u4f5c\u8fdb\u7a0b\u6570\u8bbe\u7f6e\uff0c\u4e00\u822c\u6765\u8bf4 CPU \u6709\u51e0\u4e2a\uff0c\u5c31\u8bbe\u7f6e\u51e0\u4e2a\uff0c\u6216\u8005\u8bbe\u7f6e N-1 \u4e5f\u53ef\u4ee5")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"worker_processes 1;\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u8bbe\u7f6e nginx \u8fdb\u7a0b pid")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pid logs/nginx.pid\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"nginx \u65e5\u5fd7\u7ea7\u522b(\u7ea7\u522b\u4ece\u5de6\u5230\u53f3\u8d8a\u6765\u8d8a\u5927)\ndebug -> info -> notice -> warn -> error -> crit -> alert -> emerg"),(0,a.kt)("li",{parentName:"ol"},"nginx \u65e5\u5fd7\u5b58\u653e\u8def\u5f84\u8bbe\u7f6e")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"error_log  logs/error.log;\n")),(0,a.kt)("h3",{id:"events-\u5de5\u4f5c\u6a21\u5f0f\u914d\u7f6e"},"events \u5de5\u4f5c\u6a21\u5f0f\u914d\u7f6e"),(0,a.kt)("p",null,"\u914d\u7f6e\u5f71\u54cd nginx \u670d\u52a1\u5668\u6216\u4e0e\u7528\u6237\u7684\u7f51\u7edc\u8fde\u63a5\u3002\n\u6709\u6bcf\u4e2a\u5de5\u4f5c\u8fdb\u7a0b\u7684\u6700\u5927\u8fde\u63a5\u6570\uff0c\u9009\u53d6\u54ea\u79cd\u4e8b\u4ef6\u9a71\u52a8\u6a21\u578b\u5904\u7406\u8fde\u63a5\u8bf7\u6c42\uff0c\u662f\u5426\u5141\u8bb8\u540c\u65f6\u63a5\u53d7\u591a\u4e2a\u7f51\u8def\u8fde\u63a5\uff0c\u5f00\u542f\u591a\u4e2a\u7f51\u7edc\u8fde\u63a5\u5e8f\u5217\u5316\u7b49\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-conf"},"events {\n    # \u9ed8\u8ba4\u4f7f\u7528epoll\uff08\u591a\u8def\u590d\u7528\uff09\n    use epoll;\n    # \u6bcf\u4e2awork\u5de5\u4f5c\u8fdb\u884c\u5141\u8bb8\u8fde\u63a5\u7684\u5ba2\u6237\u7aef\u6700\u5927\u8fde\u63a5\u6570\n    worker_connections 10240;\n}\n")),(0,a.kt)("h3",{id:"http-\u6307\u4ee4\u5757\u914d\u7f6e"},"http \u6307\u4ee4\u5757\u914d\u7f6e"),(0,a.kt)("p",null,"http \u662f\u6307\u4ee4\u5757\uff0c\u9488\u5bf9 http \u7f51\u7edc\u4f20\u8f93\u7684\u4e00\u4e9b\u6307\u4ee4\u914d\u7f6e\n\u5728 http \u6a21\u5757\u4e2d\u53ef\u4ee5\u5d4c\u5957\u591a\u4e2a server\uff0c\u914d\u7f6e\u76f8\u5173\u4ee3\u7406\u3001\u8bbe\u7f6e\u7f13\u5b58\u3001\u81ea\u5b9a\u4e49\u65e5\u5fd7\uff08\u65e5\u5fd7\u5207\u5272\uff09\u7b49\u7edd\u5927\u591a\u6570\u529f\u80fd\u548c\u7b2c\u4e09\u65b9\u6a21\u5757\u7684\u914d\u7f6e\u3002\n\u5982\u5916\u90e8\u914d\u7f6e\u6587\u4ef6\u5f15\u5165\u3001\u65e5\u5fd7\u81ea\u5b9a\u4e49\u3001\u662f\u5426\u4f7f\u7528 sendfile \u4f20\u8f93\u6587\u4ef6\u3001\u8fde\u63a5\u8d85\u65f6\u65f6\u95f4\u3001gzip \u538b\u7f29\u7b49\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5f15\u5165\u5916\u90e8\u914d\u7f6e\u6587\u4ef6\uff0c\u63d0\u9ad8\u53ef\u8bfb\u6027\uff0c\u907f\u514d\u5355\u4e2a\u6587\u4ef6\u914d\u7f6e\u8fc7\u5927")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"include /usr/local/nginx/conf/vhosts/*.conf;\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u81ea\u5b9a\u4e49\u65e5\u5fd7\n|\u53c2\u6570\u540d|\u53c2\u6570\u610f\u4e49|\n| :----: | :----: |\n|",(0,a.kt)("img",{parentName:"li",src:"https://g.yuque.com/gr/latex?romote_addr%7C%E5%AE%A2%E6%88%B7%E7%AB%AFip%7C%0A%7C#card=math&code=romote_addr%7C%E5%AE%A2%E6%88%B7%E7%AB%AFip%7C%0A%7C&id=sDli3",alt:null}),'romote_user|\u8fdc\u7a0b\u5ba2\u6237\u7aef\u7528\u6237\u540d\uff0c\u4e00\u822c\u4e3a"-"|\n|',(0,a.kt)("img",{parentName:"li",src:"https://g.yuque.com/gr/latex?time_local%7C%E6%97%B6%E9%97%B4%E4%B8%8E%E6%97%B6%E5%8C%BA%7C%0A%7C#card=math&code=time_local%7C%E6%97%B6%E9%97%B4%E4%B8%8E%E6%97%B6%E5%8C%BA%7C%0A%7C&id=efPHL",alt:null}),"request|\u8bf7\u6c42 url \u4e0e method|\n|",(0,a.kt)("img",{parentName:"li",src:"https://g.yuque.com/gr/latex?status%7C%E5%93%8D%E5%BA%94%E7%8A%B6%E6%80%81%E7%A0%81%7C%0A%7C#card=math&code=status%7C%E5%93%8D%E5%BA%94%E7%8A%B6%E6%80%81%E7%A0%81%7C%0A%7C&id=V240c",alt:null}),"body_bytes_send|\u54cd\u5e94\u5ba2\u6237\u7aef\u5185\u5bb9\u5b57\u8282\u6570|\n|",(0,a.kt)("img",{parentName:"li",src:"https://g.yuque.com/gr/latex?http_referer%7C%E8%AE%B0%E5%BD%95%E7%94%A8%E6%88%B7%E4%BB%8E%E5%93%AA%E4%B8%AA%E9%93%BE%E6%8E%A5%E8%B7%B3%E8%BD%AC%E8%BF%87%E6%9D%A5%E7%9A%84%7C%0A%7C#card=math&code=http_referer%7C%E8%AE%B0%E5%BD%95%E7%94%A8%E6%88%B7%E4%BB%8E%E5%93%AA%E4%B8%AA%E9%93%BE%E6%8E%A5%E8%B7%B3%E8%BD%AC%E8%BF%87%E6%9D%A5%E7%9A%84%7C%0A%7C&id=K5CAh",alt:null}),"http_user_agent|\u7528\u6237\u6240\u4f7f\u7528\u7684\u4ee3\u7406\uff0c\u4e00\u822c\u90fd\u662f\u6d4f\u89c8\u5668|\n|$http_x_forwarded_for|\u901a\u8fc7\u4ee3\u7406\u670d\u52a1\u5668\u6765\u8bb0\u5f55\u5ba2\u6237\u7aef\u7684 ip|"),(0,a.kt)("li",{parentName:"ol"},"sendfile \u4f7f\u7528\u9ad8\u6548\u6587\u4ef6\u4f20\u8f93\uff0c\u63d0\u5347\u4f20\u8f93\u6027\u80fd\u3002\u542f\u7528\u540e\u624d\u80fd\u4f7f\u7528 tcp_nopush,\u662f\u6307\u5f53\u6570\u636e\u8868\u7d2f\u8ba1\u4e00\u5b9a\u5927\u5c0f\u624d\u53d1\u9001\uff0c\u63d0\u9ad8\u6548\u7387")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-conf"},"sendfile      on;\ntcp_nopush    on;\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"keepalive_timeout \u8bbe\u7f6e\u5ba2\u6237\u7aef\u4e0e\u670d\u52a1\u7aef\u8bf7\u6c42\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u4fdd\u8bc1\u5ba2\u6237\u7aef\u591a\u6b21\u8bf7\u6c42\u7684\u65f6\u5019\u4e0d\u4f1a\u91cd\u590d\u5efa\u7acb\u65b0\u7684\u8fde\u63a5\uff0c\u8282\u7ea6\u8d44\u6e90\u635f\u8017")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-conf"},"keepalive_timeout 65;\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"gzip \u542f\u7528\u538b\u7f29\uff0chtml/js/css \u7b49\u9759\u6001\u8d44\u6e90\u538b\u7f29\u540e\u4f20\u8f93\u4f1a\u66f4\u5feb")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"gzip on;\n")),(0,a.kt)("h3",{id:"server-\u6a21\u5757\u914d\u7f6e"},"server \u6a21\u5757\u914d\u7f6e"),(0,a.kt)("h4",{id:"location-\u8def\u7531\u89c4\u5219"},"location \u8def\u7531\u89c4\u5219"),(0,a.kt)("p",null,"server \u53ef\u4ee5\u5728 http \u6307\u4ee4\u5757\u4e2d\u8bbe\u7f6e\u591a\u4e2a\u865a\u62df\u4e3b\u673a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"listen \u76d1\u542c\u7aef\u53e3"),(0,a.kt)("li",{parentName:"ul"},"server_name localhost\u3001ip\u3001\u57df\u540d"),(0,a.kt)("li",{parentName:"ul"},"location \u8bf7\u6c42\u8def\u7531\u6620\u5c04\u3001\u5339\u914d\u62e6\u622a"),(0,a.kt)("li",{parentName:"ul"},"root \u8bf7\u6c42\u4f4d\u7f6e"),(0,a.kt)("li",{parentName:"ul"},"index \u9996\u9875\u8bbe\u7f6e")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-conf"},"server {\n    listen 8080;\n    server_name localhost;\n\n    location / {\n        root html;\n        index index.html index.htm;\n    }\n}\n")),(0,a.kt)("h4",{id:"upstream-\u96c6\u7fa4-\u5185\u7f51\u670d\u52a1\u5668"},"upstream \u96c6\u7fa4 \u5185\u7f51\u670d\u52a1\u5668"))}g.isMDXComponent=!0},62198:function(e,n,t){n.Z=t.p+"assets/images/04-01-nginx.conf-81b99f4b9e75f41e8703ef7f5a881743.png"}}]);