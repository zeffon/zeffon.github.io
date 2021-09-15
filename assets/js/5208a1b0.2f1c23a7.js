"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4615],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return d}});var s=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,s,r=function(t,e){if(null==t)return{};var n,s,r={},l=Object.keys(t);for(s=0;s<l.length;s++)n=l[s],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(s=0;s<l.length;s++)n=l[s],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=s.createContext({}),m=function(t){var e=s.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=m(t.components);return s.createElement(o.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return s.createElement(s.Fragment,{},e)}},p=s.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,u=a(t,["components","mdxType","originalType","parentName"]),p=m(n),d=r,y=p["".concat(o,".").concat(d)]||p[d]||c[d]||l;return n?s.createElement(y,i(i({ref:e},u),{},{components:n})):s.createElement(y,i({ref:e},u))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=p;var a={};for(var o in e)hasOwnProperty.call(e,o)&&(a[o]=e[o]);a.originalType=t,a.mdxType="string"==typeof t?t:r,i[1]=a;for(var m=2;m<l;m++)i[m]=n[m];return s.createElement.apply(null,i)}return s.createElement.apply(null,n)}p.displayName="MDXCreateElement"},860:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return a},contentTitle:function(){return o},metadata:function(){return m},assets:function(){return u},toc:function(){return c},default:function(){return d}});var s=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],a={slug:"how-use-systemd",title:"Systemd\u7684\u4f7f\u7528",authors:"zeffon",tags:["linux"],date:new Date("2019-09-02T00:00:00.000Z")},o=void 0,m={permalink:"/blog/how-use-systemd",editUrl:"https://github.com/zeffon/zeffon.github.io/blob/master/blog/2019/2019-09-02-how-use-systemd.md",source:"@site/blog/2019/2019-09-02-how-use-systemd.md",title:"Systemd\u7684\u4f7f\u7528",description:"Systemd \u662f Linux \u7cfb\u7edf\u5de5\u5177\uff0c\u7528\u6765\u542f\u52a8\u5b88\u62a4\u8fdb\u7a0b\uff0c\u5df2\u6210\u4e3a\u5927\u591a\u6570\u53d1\u884c\u7248\u7684\u6807\u51c6\u914d\u7f6e\u3002",date:"2019-09-02T00:00:00.000Z",formattedDate:"September 2, 2019",tags:[{label:"linux",permalink:"/blog/tags/linux"}],readingTime:5,truncated:!0,authors:[{name:"Zeffon Wu",title:"A web engineer",url:"https://github.com/zeffon",imageURL:"https://github.com/zeffon.png",key:"zeffon"}],prevItem:{title:"\u96c6\u5408\u548c\u6620\u5c04",permalink:"/blog/set-and-map"},nextItem:{title:"flask\u9879\u76ee\u5728centos7\u90e8\u7f72\u6d41\u7a0b",permalink:"/blog/centos7-deploy-flask"}},u={authorsImageUrls:[void 0]},c=[{value:"\u524d\u8a00",id:"\u524d\u8a00",children:[{value:"Systemd \u6982\u8ff0",id:"systemd-\u6982\u8ff0",children:[]},{value:"Systemd \u4f18\u7f3a\u70b9",id:"systemd-\u4f18\u7f3a\u70b9",children:[]}]},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",children:[{value:"systemctl \u547d\u4ee4",id:"systemctl-\u547d\u4ee4",children:[]},{value:"\u670d\u52a1\u7684\u7ba1\u7406",id:"\u670d\u52a1\u7684\u7ba1\u7406",children:[]},{value:"Unit",id:"unit",children:[]}]},{value:"\u53c2\u8003\u6587\u732e",id:"\u53c2\u8003\u6587\u732e",children:[]}],p={toc:c};function d(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,s.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Systemd \u662f Linux \u7cfb\u7edf\u5de5\u5177\uff0c\u7528\u6765\u542f\u52a8\u5b88\u62a4\u8fdb\u7a0b\uff0c\u5df2\u6210\u4e3a\u5927\u591a\u6570\u53d1\u884c\u7248\u7684\u6807\u51c6\u914d\u7f6e\u3002\n\u8be5\u7bc7\u5b66\u4e60\u4e8e\u962e\u8001\u5e08\u7684",(0,l.kt)("a",{parentName:"p",href:"http://www.ruanyifeng.com/blog/2016/03/systemd-tutorial-commands.html"},"Systemd \u5165\u95e8\u6559\u7a0b\uff1a\u547d\u4ee4\u7bc7"),"\u548c\u4f59\u6cfd\u6960\u7684",(0,l.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/29217941"},"CentOS 7 Systemd \u5165\u95e8")),(0,l.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,l.kt)("p",null,"Systemd \u662f Linux \u7cfb\u7edf\u5de5\u5177\uff0c\u7528\u6765\u542f\u52a8\u5b88\u62a4\u8fdb\u7a0b\uff0c\u5df2\u6210\u4e3a\u5927\u591a\u6570\u53d1\u884c\u7248\u7684\u6807\u51c6\u914d\u7f6e\u3002\n\u8be5\u7bc7\u5b66\u4e60\u4e8e\u962e\u8001\u5e08\u7684",(0,l.kt)("a",{parentName:"p",href:"http://www.ruanyifeng.com/blog/2016/03/systemd-tutorial-commands.html"},"Systemd \u5165\u95e8\u6559\u7a0b\uff1a\u547d\u4ee4\u7bc7"),"\u548c\u4f59\u6cfd\u6960\u7684",(0,l.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/29217941"},"CentOS 7 Systemd \u5165\u95e8")),(0,l.kt)("h3",{id:"systemd-\u6982\u8ff0"},"Systemd \u6982\u8ff0"),(0,l.kt)("p",null,"Systemd \u5c31\u662f\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e9b\u95ee\u9898\u800c\u8bde\u751f\u7684\u3002\u5b83\u7684\u8bbe\u8ba1\u76ee\u6807\u662f\uff0c\u4e3a\u7cfb\u7edf\u7684\u542f\u52a8\u548c\u7ba1\u7406\u63d0\u4f9b\u4e00\u5957\u5b8c\u6574\u7684\u89e3\u51b3\u65b9\u6848\u3002\u6839\u636e Linux \u60ef\u4f8b\uff0c\u5b57\u6bcd d \u662f\u5b88\u62a4\u8fdb\u7a0b\uff08daemon\uff09\u7684\u7f29\u5199\u3002 Systemd \u8fd9\u4e2a\u540d\u5b57\u7684\u542b\u4e49\uff0c\u5c31\u662f\u5b83\u8981\u5b88\u62a4\u6574\u4e2a\u7cfb\u7edf\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ systemctl --version\nsystemd 219\n+PAM +AUDIT +SELINUX +IMA -APPARMOR +SMACK +SYSVINIT +UTMP +LIBCRYPTSETUP +GCRYPT +GNUTLS +ACL +XZ +LZ4 -SECCOMP +BLKID +ELFUTILS +KMOD +IDN\n")),(0,l.kt)("h3",{id:"systemd-\u4f18\u7f3a\u70b9"},"Systemd \u4f18\u7f3a\u70b9"),(0,l.kt)("p",null,"Systemd \u7684",(0,l.kt)("inlineCode",{parentName:"p"},"\u4f18\u70b9"),"\u662f\u529f\u80fd\u5f3a\u5927\uff0c\u4f7f\u7528\u65b9\u4fbf\uff0c\u800c",(0,l.kt)("inlineCode",{parentName:"p"},"\u7f3a\u70b9"),"\u662f\u4f53\u7cfb\u5e9e\u5927\uff0c\u975e\u5e38\u590d\u6742\u3002\u4e8b\u5b9e\u4e0a\uff0c\u73b0\u5728\u8fd8\u6709\u5f88\u591a\u4eba\u53cd\u5bf9\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"Systemd"),"\uff0c\u7406\u7531\u5c31\u662f\u5b83\u8fc7\u4e8e\u590d\u6742\uff0c\u4e0e\u64cd\u4f5c\u7cfb\u7edf\u7684\u5176\u4ed6\u90e8\u5206\u5f3a\u8026\u5408\uff0c\u8fdd\u53cd",(0,l.kt)("inlineCode",{parentName:"p"},"keep simple, keep stupid"),"\u7684 Unix \u54f2\u5b66\u3002"),(0,l.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,l.kt)("p",null,"Systemd \u5e76\u4e0d\u662f\u4e00\u4e2a\u547d\u4ee4\uff0c\u800c\u662f\u4e00\u7ec4\u547d\u4ee4\uff0c\u6d89\u53ca\u5230\u7cfb\u7edf\u7ba1\u7406\u7684\u65b9\u65b9\u9762\u9762\u3002"),(0,l.kt)("h3",{id:"systemctl-\u547d\u4ee4"},"systemctl \u547d\u4ee4"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"systemctl")," \u662f Systemd \u7684\u4e3b\u547d\u4ee4\uff0c\u7528\u4e8e\u7ba1\u7406\u7cfb\u7edf\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"# \u91cd\u542f\u7cfb\u7edf\n$ sudo systemctl reboot\n\n# \u5173\u95ed\u7cfb\u7edf\uff0c\u5207\u65ad\u7535\u6e90\n$ sudo systemctl poweroff\n\n# CPU\u505c\u6b62\u5de5\u4f5c\n$ sudo systemctl halt\n\n# \u6682\u505c\u7cfb\u7edf\n$ sudo systemctl suspend\n\n# \u8ba9\u7cfb\u7edf\u8fdb\u5165\u51ac\u7720\u72b6\u6001\n$ sudo systemctl hibernate\n\n# \u8ba9\u7cfb\u7edf\u8fdb\u5165\u4ea4\u4e92\u5f0f\u4f11\u7720\u72b6\u6001\n$ sudo systemctl hybrid-sleep\n\n# \u542f\u52a8\u8fdb\u5165\u6551\u63f4\u72b6\u6001\uff08\u5355\u7528\u6237\u72b6\u6001\uff09\n$ sudo systemctl rescue\n")),(0,l.kt)("h3",{id:"\u670d\u52a1\u7684\u7ba1\u7406"},"\u670d\u52a1\u7684\u7ba1\u7406"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"# \u542f\u52a8\u670d\u52a1\n$ systemctl start <\u670d\u52a1\u9879\u540d\u79f0>\n\n# \u505c\u6b62\u670d\u52a1\n$ systemctl stop <\u670d\u52a1\u9879\u540d\u79f0>\n\n# \u91cd\u542f\u670d\u52a1\n$ systemctl restart <\u670d\u52a1\u9879\u540d\u79f0>\n\n# \u91cd\u65b0\u8bfb\u53d6\u914d\u7f6e\u6587\u4ef6(\u5982\u679c\u8be5\u670d\u52a1\u4e0d\u80fd\u91cd\u542f\uff0c\u4f46\u53c8\u5fc5\u987b\u4f7f\u7528\u65b0\u7684\u914d\u7f6e\uff0c\u8fd9\u6761\u547d\u4ee4\u4f1a\u5f88\u6709\u7528)\n$ systemctl reload <\u670d\u52a1\u9879\u540d\u79f0>\n\n# \u4f7f\u670d\u52a1\u5f00\u673a\u81ea\u542f\u52a8\n$ systemctl enable <\u670d\u52a1\u9879\u540d\u79f0>\n\n# \u4f7f\u670d\u52a1\u4e0d\u8981\u5f00\u673a\u81ea\u542f\u52a8\n$ systemctl disable <\u670d\u52a1\u9879\u540d\u79f0>\n\n# \u7981\u7528\u670d\u52a1(\u8fd9\u53ef\u4ee5\u9632\u6b62\u670d\u52a1\u88ab\u5176\u4ed6\u670d\u52a1\u95f4\u63a5\u542f\u52a8\uff0c\u4e5f\u65e0\u6cd5\u901a\u8fc7 start \u6216 restart \u547d\u4ee4\u6765\u542f\u52a8\u670d\u52a1)\n$ systemctl mask <\u670d\u52a1\u9879\u540d\u79f0>\n\n# \u542f\u7528\u670d\u52a1(\u4ec5\u9488\u5bf9\u4e8e\u5df2\u7981\u7528\u7684\u670d\u52a1)\n$ systemctl unmask <\u670d\u52a1\u9879\u540d\u79f0>\n\n# \u91cd\u65b0\u8bfb\u53d6\u6240\u6709\u670d\u52a1\u9879(\u4fee\u6539\u3001\u6dfb\u52a0\u3001\u5220\u9664\u670d\u52a1\u9879\u4e4b\u540e\u9700\u8981\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4)\n$ systemctl daemon-reload\n")),(0,l.kt)("h3",{id:"unit"},"Unit"),(0,l.kt)("p",null,"Systemd \u53ef\u4ee5\u7ba1\u7406\u6240\u6709\u7cfb\u7edf\u8d44\u6e90\u3002\u4e0d\u540c\u7684\u8d44\u6e90\u7edf\u79f0\u4e3a Unit\uff08\u5355\u4f4d\uff09\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Unit \u4e00\u5171\u5206\u6210 12 \u79cd\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"Service unit\uff1a\u7cfb\u7edf\u670d\u52a1\nTarget unit\uff1a\u591a\u4e2a Unit \u6784\u6210\u7684\u4e00\u4e2a\u7ec4\nDevice Unit\uff1a\u786c\u4ef6\u8bbe\u5907\nMount Unit\uff1a\u6587\u4ef6\u7cfb\u7edf\u7684\u6302\u8f7d\u70b9\nAutomount Unit\uff1a\u81ea\u52a8\u6302\u8f7d\u70b9\nPath Unit\uff1a\u6587\u4ef6\u6216\u8def\u5f84\nScope Unit\uff1a\u4e0d\u662f\u7531 Systemd \u542f\u52a8\u7684\u5916\u90e8\u8fdb\u7a0b\nSlice Unit\uff1a\u8fdb\u7a0b\u7ec4\nSnapshot Unit\uff1aSystemd \u5feb\u7167\uff0c\u53ef\u4ee5\u5207\u56de\u67d0\u4e2a\u5feb\u7167\nSocket Unit\uff1a\u8fdb\u7a0b\u95f4\u901a\u4fe1\u7684 socket\nSwap Unit\uff1aswap \u6587\u4ef6\nTimer Unit\uff1a\u5b9a\u65f6\u5668\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"systemctl list-units"),"\u547d\u4ee4\u53ef\u4ee5\u67e5\u770b\u5f53\u524d\u7cfb\u7edf\u7684\u6240\u6709 Unit```sh")),(0,l.kt)("h1",{id:"\u5217\u51fa\u6b63\u5728\u8fd0\u884c\u7684-unit"},"\u5217\u51fa\u6b63\u5728\u8fd0\u884c\u7684 Unit"),(0,l.kt)("p",null,"$ systemctl list-units"),(0,l.kt)("h1",{id:"\u5217\u51fa\u6240\u6709-unit\u5305\u62ec\u6ca1\u6709\u627e\u5230\u914d\u7f6e\u6587\u4ef6\u7684\u6216\u8005\u542f\u52a8\u5931\u8d25\u7684"},"\u5217\u51fa\u6240\u6709 Unit\uff0c\u5305\u62ec\u6ca1\u6709\u627e\u5230\u914d\u7f6e\u6587\u4ef6\u7684\u6216\u8005\u542f\u52a8\u5931\u8d25\u7684"),(0,l.kt)("p",null,"$ systemctl list-units --all"),(0,l.kt)("h1",{id:"\u5217\u51fa\u6240\u6709\u6ca1\u6709\u8fd0\u884c\u7684-unit"},"\u5217\u51fa\u6240\u6709\u6ca1\u6709\u8fd0\u884c\u7684 Unit"),(0,l.kt)("p",null,"$ systemctl list-units --all --state=inactive"),(0,l.kt)("h1",{id:"\u5217\u51fa\u6240\u6709\u52a0\u8f7d\u5931\u8d25\u7684-unit"},"\u5217\u51fa\u6240\u6709\u52a0\u8f7d\u5931\u8d25\u7684 Unit"),(0,l.kt)("p",null,"$ systemctl list-units --failed"),(0,l.kt)("h1",{id:"\u5217\u51fa\u6240\u6709\u6b63\u5728\u8fd0\u884c\u7684\u7c7b\u578b\u4e3a-service-\u7684-unit"},"\u5217\u51fa\u6240\u6709\u6b63\u5728\u8fd0\u884c\u7684\u3001\u7c7b\u578b\u4e3a service \u7684 Unit"),(0,l.kt)("p",null,"$ systemctl list-units --type=service"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\n2. \u9664\u4e86 `status` \u547d\u4ee4\uff0c`systemctl` \u8fd8\u63d0\u4f9b\u4e86\u4e09\u4e2a\u67e5\u8be2\u72b6\u6001\u7684\u7b80\u5355\u65b9\u6cd5\uff0c\u4e3b\u8981\u4f9b\u811a\u672c\u5185\u90e8\u7684\u5224\u65ad\u8bed\u53e5\u4f7f\u7528\u3002```sh\n# \u663e\u793a\u67d0\u4e2a Unit \u662f\u5426\u6b63\u5728\u8fd0\u884c\n$ systemctl is-active application.service\n\n# \u663e\u793a\u67d0\u4e2a Unit \u662f\u5426\u5904\u4e8e\u542f\u52a8\u5931\u8d25\u72b6\u6001\n$ systemctl is-failed application.service\n\n# \u663e\u793a\u67d0\u4e2a Unit \u670d\u52a1\u662f\u5426\u5efa\u7acb\u4e86\u542f\u52a8\u94fe\u63a5\n$ systemctl is-enabled application.service\n")),(0,l.kt)("h2",{id:"\u53c2\u8003\u6587\u732e"},"\u53c2\u8003\u6587\u732e"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"http://www.ruanyifeng.com/blog/2016/03/systemd-tutorial-commands.html"},"Systemd \u5165\u95e8\u6559\u7a0b\uff1a\u547d\u4ee4\u7bc7")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://zhuanlan.zhihu.com/p/29217941"},"CentOS 7 Systemd \u5165\u95e8"))))}d.isMDXComponent=!0}}]);