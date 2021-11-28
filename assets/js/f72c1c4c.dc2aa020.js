"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2174],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return y}});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=l.createContext({}),m=function(e){var t=l.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=m(e.components);return l.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=m(n),y=r,d=c["".concat(i,".").concat(y)]||c[y]||p[y]||a;return n?l.createElement(d,o(o({ref:t},u),{},{components:n})):l.createElement(d,o({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var m=2;m<a;m++)o[m]=n[m];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}c.displayName="MDXCreateElement"},36127:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return m},assets:function(){return u},toc:function(){return p},default:function(){return y}});var l=n(87462),r=n(63366),a=(n(67294),n(3905)),o=["components"],s={slug:"centos7-install-mysql",title:"CentOS7\u5b89\u88c5mysql",authors:"zeffon",tags:["database"],date:new Date("2020-03-07T00:00:00.000Z")},i=void 0,m={permalink:"/blog/centos7-install-mysql",editUrl:"https://github.com/zeffon/zeffon.github.io/blob/master/blog/2020/2020-03-07-centos7-install-mysql.md",source:"@site/blog/2020/2020-03-07-centos7-install-mysql.md",title:"CentOS7\u5b89\u88c5mysql",description:"\u6700\u8fd1\u5728\u817e\u8baf\u4e91\u65b0\u5f04\u4e86\u4e00\u53f0\u4e91\u670d\u52a1\u5668(CentOS 7)\uff0c\u8bb0\u5f55\u5728\u4e0a\u9762\u666e\u901a\u5b89\u88c5 Mysql \u670d\u52a1\u7684\u8fc7\u7a0b\u3002",date:"2020-03-07T00:00:00.000Z",formattedDate:"March 7, 2020",tags:[{label:"database",permalink:"/blog/tags/database"}],readingTime:2.91,truncated:!0,authors:[{name:"Zeffon Wu",title:"A web engineer",url:"https://github.com/zeffon",imageURL:"https://github.com/zeffon.png",key:"zeffon"}],prevItem:{title:"CentOS7\u5b89\u88c5mariaDB",permalink:"/blog/centos7-install-mariadb"},nextItem:{title:"Java JPA \u65b9\u6cd5\u547d\u540d\u89c4\u5219",permalink:"/blog/spring-data-jpa-method-naming-rules"}},u={authorsImageUrls:[void 0]},p=[{value:"\u524d\u8a00",id:"\u524d\u8a00",children:[]},{value:"\u6b63\u6587",id:"\u6b63\u6587",children:[{value:"\u6dfb\u52a0 MySQL Yum \u5b58\u50a8\u5e93",id:"\u6dfb\u52a0-mysql-yum-\u5b58\u50a8\u5e93",children:[]},{value:"\u5b89\u88c5 yum \u53d1\u884c\u5305",id:"\u5b89\u88c5-yum-\u53d1\u884c\u5305",children:[]},{value:"\u5b89\u88c5 MySQL",id:"\u5b89\u88c5-mysql",children:[]},{value:"\u542f\u52a8 MySQL",id:"\u542f\u52a8-mysql",children:[]},{value:"\u4fee\u6539\u5bc6\u7801",id:"\u4fee\u6539\u5bc6\u7801",children:[]},{value:"\u8fdc\u7a0b ip \u767b\u5f55",id:"\u8fdc\u7a0b-ip-\u767b\u5f55",children:[]}]},{value:"\u6587\u732e\u53c2\u8003",id:"\u6587\u732e\u53c2\u8003",children:[]}],c={toc:p};function y(e){var t=e.components,s=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,l.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6700\u8fd1\u5728\u817e\u8baf\u4e91\u65b0\u5f04\u4e86\u4e00\u53f0\u4e91\u670d\u52a1\u5668(CentOS 7)\uff0c\u8bb0\u5f55\u5728\u4e0a\u9762\u666e\u901a\u5b89\u88c5 Mysql \u670d\u52a1\u7684\u8fc7\u7a0b\u3002"),(0,a.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,a.kt)("p",null,"\u6700\u8fd1\u5728\u817e\u8baf\u4e91\u65b0\u5f04\u4e86\u4e00\u53f0\u4e91\u670d\u52a1\u5668(CentOS 7)\uff0c\u8bb0\u5f55\u5728\u4e0a\u9762\u666e\u901a\u5b89\u88c5 Mysql \u670d\u52a1\u7684\u8fc7\u7a0b\u3002\n\u672c\u6559\u7a0b\u9002\u5408\u5728 CentOS 7 \u4e0a\u5b89\u88c5 mysql5.7 \u4ee5\u4e0a\u7684\u7248\u672c\uff0c\u5982\u679c\u9700\u8981\u5b89\u88c5 Mysql5.6 \u4ee5\u4e0b\u7248\u672c\u53ef\u4ee5\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/mysql-yum-repo-quick-guide/en/"},"\u5b98\u7f51\u6559\u7a0b"),"\n\u5728\u4e4b\u524d\u535a\u5ba2\u4e2d\u6709\u8bb0\u5f55\u4f7f\u7528 docker \u7684\u5b89\u88c5\u6559\u7a0b",(0,a.kt)("a",{parentName:"p",href:"https://www.yuque.com/zeffon/blog/cvudeh"},"Docker \u5b89\u88c5 Mysql \u548c Redis")),(0,a.kt)("h2",{id:"\u6b63\u6587"},"\u6b63\u6587"),(0,a.kt)("h3",{id:"\u6dfb\u52a0-mysql-yum-\u5b58\u50a8\u5e93"},"\u6dfb\u52a0 MySQL Yum \u5b58\u50a8\u5e93"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u7b2c\u4e00\u79cd\u65b9\u6cd5\uff1a\u5728",(0,a.kt)("inlineCode",{parentName:"li"},"MySQL")," ",(0,a.kt)("a",{parentName:"li",href:"https://dev.mysql.com/downloads/repo/yum/"},"Yum \u5b58\u50a8\u5e93"),"\u9009\u62e9\u5e76\u4e0b\u8f7d\u9002\u7528\u4e8e\u4f60\u5e73\u53f0\u7684\u53d1\u884c\u5305")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"07-01-yum-list.png",src:n(79131).Z})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u7b2c\u4e8c\u79cd\u65b9\u6cd5\uff1a\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"li"},"wget"),"\u76f4\u63a5\u4e0b\u8f7d\u6307\u5b9a\u7248\u672c(\u8fd9\u91cc\u6307\u5b9a\u4e0b\u8f7d 5.7 \u7248\u672c)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ wget http://repo.mysql.com/mysql57-community-release-el7-10.noarch.rpm\n")),(0,a.kt)("h3",{id:"\u5b89\u88c5-yum-\u53d1\u884c\u5305"},"\u5b89\u88c5 yum \u53d1\u884c\u5305"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88c5\u4e0b\u8f7d\u7684\u53d1\u884c\u5305\uff0c\u5e76\u66ff\u6362",(0,a.kt)("inlineCode",{parentName:"li"},"platform-and-version-specific-package-name"),"\u4e3a\u4e0b\u8f7d\u7684\u5305\u7684\u540d\u79f0")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ rpm -Uvh platform-and-version-specific-package-name.rpm\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4f8b\u5982\uff0c\u8fd9\u91cc\u4e0b\u8f7d\u7684\u53d1\u884c\u5305\u662f",(0,a.kt)("inlineCode",{parentName:"li"},"mysql57-community-release-el7-10.noarch.rpm"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ rpm -Uvh mysql57-community-release-el7-10.noarch.rpm\n")),(0,a.kt)("h3",{id:"\u5b89\u88c5-mysql"},"\u5b89\u88c5 MySQL"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88c5 MySQL(\u5b89\u88c5\u8fc7\u7a0b\u6bd4\u8f83\u4e45\uff0c\u9700\u8981\u6162\u6162\u7b49\u5f85)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ yum install mysql-community-server\n")),(0,a.kt)("h3",{id:"\u542f\u52a8-mysql"},"\u542f\u52a8 MySQL"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u547d\u4ee4\u542f\u52a8 Mysql")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ systemctl start mysqld.service\n\u6216\u8005\n$ service mysqld start\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u68c0\u67e5\u662f\u5426\u6210\u529f\u542f\u52a8")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ systemctl status mysqld.service\n\u6216\u8005\n$ service mysqld status\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u63a7\u5236\u53f0\u8f93\u51fa\u5982\u4e0b\u9762\u56fe\u7247\u4e00\u6837\uff0c\u5219\u542f\u52a8\u6210\u529f")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("img",{alt:"07-02-mysql-status.png",src:n(76845).Z}))),(0,a.kt)("h3",{id:"\u4fee\u6539\u5bc6\u7801"},"\u4fee\u6539\u5bc6\u7801"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u9ed8\u8ba4\u521b\u5efa 'root'@'localhost' \u4e00\u4e2a\u8d85\u7ea7\u7528\u6237\u5e10\u6237\u3002\u8bbe\u7f6e\u8d85\u7ea7\u7528\u6237\u7684\u5bc6\u7801\u5e76\u5c06\u5176\u5b58\u50a8\u5728\u9519\u8bef\u65e5\u5fd7\u6587\u4ef6\u4e2d\u3002\u8981\u663e\u793a\u5b83\uff0c\u8bf7\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ grep 'temporary password' /var/log/mysqld.log\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u901a\u8fc7\u4f7f\u7528\u751f\u6210\u7684\u4e34\u65f6\u5bc6\u7801\u767b\u5f55\u5e76\u5c3d\u5feb\u4e3a\u8d85\u7ea7\u7528\u6237\u5e10\u6237\u8bbe\u7f6e\u81ea\u5b9a\u4e49\u5bc6\u7801\uff0c\u4ee5\u66f4\u6539 root \u5bc6\u7801\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ mysql -uroot -p\n$ ALTER USER 'root'@'localhost' IDENTIFIED BY 'yourPassword!';\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"MySQL \u7684 validate_password \u63d2\u4ef6\u9ed8\u8ba4\u5b89\u88c5\u3002\u8fd9\u5c06\u8981\u6c42\u5bc6\u7801\u81f3\u5c11\u5305\u542b\u4e00\u4e2a\u5927\u5199\u5b57\u6bcd\uff0c\u4e00\u4e2a\u5c0f\u5199\u5b57\u6bcd\uff0c\u4e00\u4f4d\u6570\u5b57\u548c\u4e00\u4e2a\u7279\u6b8a\u5b57\u7b26\uff0c\u5e76\u4e14\u5bc6\u7801\u603b\u957f\u5ea6\u81f3\u5c11\u4e3a 8 \u4e2a\u5b57\u7b26\u3002")),(0,a.kt)("h3",{id:"\u8fdc\u7a0b-ip-\u767b\u5f55"},"\u8fdc\u7a0b ip \u767b\u5f55"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u9700\u8981\u5c06 localhost \u6539\u4e3a%,\u8ba9\u5916\u7f51\u80fd\u8bbf\u95ee")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'yourPassword' WITH GRANT OPTION;\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5237\u65b0\u6743\u9650")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ FLUSH  PRIVILEGES;\n")),(0,a.kt)("h2",{id:"\u6587\u732e\u53c2\u8003"},"\u6587\u732e\u53c2\u8003"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/mysql-yum-repo-quick-guide/en/"},"\u4f7f\u7528 MySQL Yum \u5b58\u50a8\u5e93\u7684\u5feb\u901f\u6307\u5357")))}y.isMDXComponent=!0},79131:function(e,t,n){t.Z=n.p+"assets/images/07-01-yum-list-384a2360a2e1f95f758f348fa9caa728.png"},76845:function(e,t,n){t.Z=n.p+"assets/images/07-02-mysql-status-adc443201b745df4eb19b3e4b0c499ef.png"}}]);