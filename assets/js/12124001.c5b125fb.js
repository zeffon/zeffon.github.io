"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9953],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),m=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=m(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=m(n),u=l,k=p["".concat(i,".").concat(u)]||p[u]||c[u]||a;return n?r.createElement(k,o(o({ref:t},d),{},{components:n})):r.createElement(k,o({ref:t},d))}));function u(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:l,o[1]=s;for(var m=2;m<a;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},520:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return m},assets:function(){return d},toc:function(){return c},default:function(){return u}});var r=n(7462),l=n(3366),a=(n(7294),n(3905)),o=["components"],s={slug:"docker-install-mysql-and-redis",title:"Docker\u5b89\u88c5Mysql\u548cRedis",authors:"zeffon",tags:["docker","redis","mysql"],date:new Date("2019-11-21T00:00:00.000Z")},i=void 0,m={permalink:"/blog/docker-install-mysql-and-redis",editUrl:"https://github.com/zeffon/zeffon.github.io/blob/master/blog/2019/2019-11-21-docker-install-mysql-and-redis.md",source:"@site/blog/2019/2019-11-21-docker-install-mysql-and-redis.md",title:"Docker\u5b89\u88c5Mysql\u548cRedis",description:"Docker \u5b89\u88c5 Mysql \u548c Redis",date:"2019-11-21T00:00:00.000Z",formattedDate:"November 21, 2019",tags:[{label:"docker",permalink:"/blog/tags/docker"},{label:"redis",permalink:"/blog/tags/redis"},{label:"mysql",permalink:"/blog/tags/mysql"}],readingTime:4.085,truncated:!0,authors:[{name:"Zeffon Wu",title:"A web engineer",url:"https://github.com/zeffon",imageURL:"https://github.com/zeffon.png",key:"zeffon"}],prevItem:{title:"acme.sh\u514d\u8d39\u7533\u8bf7Let's Encrypt\u6cdb\u57df\u540d\u8bc1\u4e66",permalink:"/blog/acme.sh"},nextItem:{title:"Java \u5e76\u53d1\u7f16\u7a0b\u7684\u57fa\u77f3",permalink:"/blog/java-concurrent"}},d={authorsImageUrls:[void 0]},c=[{value:"Docker \u5b89\u88c5",id:"docker-\u5b89\u88c5",children:[]},{value:"\u5e94\u7528\u5b89\u88c5",id:"\u5e94\u7528\u5b89\u88c5",children:[{value:"\u5b89\u88c5 Mysql",id:"\u5b89\u88c5-mysql",children:[]},{value:"\u5b89\u88c5 redis",id:"\u5b89\u88c5-redis",children:[]}]}],p={toc:c};function u(e){var t=e.components,n=(0,l.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Docker \u5b89\u88c5 Mysql \u548c Redis"),(0,a.kt)("h2",{id:"docker-\u5b89\u88c5"},"Docker \u5b89\u88c5"),(0,a.kt)("p",null,"\u8bf7\u89c2\u770b\u4e4b\u524d\u7684\u535a\u5ba2\u5185\u5bb9 Docker \u5b89\u88c5\u6559\u7a0b"),(0,a.kt)("h2",{id:"\u5e94\u7528\u5b89\u88c5"},"\u5e94\u7528\u5b89\u88c5"),(0,a.kt)("h3",{id:"\u5b89\u88c5-mysql"},"\u5b89\u88c5 Mysql"),(0,a.kt)("h4",{id:"\u5b89\u88c5-mysql-57-\u7248\u672c"},"\u5b89\u88c5 mysql 5.7 \u7248\u672c"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u62c9\u53d6\u955c\u50cf")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ docker pull mysql:5.7\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u65b0\u5efa\u9700\u8981",(0,a.kt)("inlineCode",{parentName:"li"},"\u6302\u8f7d"),"\u6587\u4ef6\u5939")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ mkdir /docker-data/mysql/data\n$ mkdir /docker-data/mysql/conf.d\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5728",(0,a.kt)("inlineCode",{parentName:"li"},"conf.d"),"\u76ee\u5f55\u521b\u5efa my.cnf")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ vi my.cnf\n[mysqld]\nskip-grant-tables\n# skip-grant-tables\u4f5c\u4e3a\u542f\u52a8\u53c2\u6570\u7684\u4f5c\u7528\uff1aMYSQL\u670d\u52a1\u5668\u4e0d\u52a0\u8f7d\u6743\u9650\u5224\u65ad\uff0c\u4efb\u4f55\u7528\u6237\u90fd\u80fd\u8bbf\u95ee\u6570\u636e\u5e93\u3002\ndefault-time_zone = '+8:00'\n# \u8bbe\u7f6e\u5317\u4eac\u65f6\u533a\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u8fd0\u884c\u5e76\u6302\u8f7d\u5728\u672c\u673a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ docker run --name mysql5.7 -p 3306:3306 \\\n--restart=always --privileged=true \\\n-v /docker-data/mysql/data:/var/lib/mysql \\\n-v /docker-data/mysql/conf.d:/etc/mysql/conf.d \\\n-e MYSQL_ROOT_PASSWORD=123456 -d mysql:5.7\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4fee\u6539\u5bc6\u7801\u4e3a\u7a7a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ docker exec -it CONTAINER ID bash\n$ mysql -uroot -p\n# \u4e0d\u7528\u8f93\u5bc6\u7801\u76f4\u63a5\u56de\u8f66\uff0c\u8fdb\u5165mysql\u547d\u4ee4\nmysql> use mysql\nmysql> select user,authentication_string,host from user; # \u67e5\u770b\u8d26\u53f7\u3001\u5bc6\u7801\u3001\u53ef\u8fde\u63a5\u7684host\nmysql> update user set authentication_string='' where user='root';  #\u4fee\u6539\u5bc6\u7801\nmysql> flush privileges;  #\u5237\u65b0\u6743\u9650\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"> mysql> select user,authentication_string,host from user; # \u67e5\u770b\u8d26\u53f7\u3001\u5bc6\u7801\u3001\u53ef\u8fde\u63a5\u7684host\n> root\u9700\u8981\u6709\u4e24\u4e2ahost -- localhost\u3001% \u5e76\u4e14\u5bc6\u7801\u4e0d\u4e3a\u7a7a\uff0c\u6ca1\u6709 % \u7684\u8bdd\u65e0\u6cd5\u5916\u7f51\u8bbf\u95ee\n> mysql> CREATE USER 'root'@'%' IDENTIFIED BY '123456'; # \u6ca1\u6709\u7684\u8bdd\u8fdb\u884c\u65b0\u5efa\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6ce8\u91ca\u6389",(0,a.kt)("inlineCode",{parentName:"li"},"my.cnf"),"\u4e2d\uff0c\u6587\u4ef6\u4e2d\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"skip-grant-tables"),"\uff0c\u91cd\u542f",(0,a.kt)("inlineCode",{parentName:"li"},"mysql"),"\u670d\u52a1")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ docker ps\n$ docker stop CONTAINER ID\n$ docker start CONTAINER ID\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4fee\u6539 root \u5bc6\u7801")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"mysql> use mysql\nmysql> alter user 'root'@'localhost' IDENTIFIED BY '123456';\nmysql> alter user 'root'@'%' IDENTIFIED BY '123456';\nmysql> flush privileges;\n")),(0,a.kt)("h4",{id:"\u5b89\u88c5-mysql-8-\u7248\u672c"},"\u5b89\u88c5 mysql 8 \u7248\u672c"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"\u6b65\u9aa4\u4e0emysql 5.7\u7684\u6d41\u7a0b\u76f8\u4f3c"))),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u62c9\u53d6\u955c\u50cf")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ docker pull mysql:latest\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u65b0\u5efa\u9700\u8981",(0,a.kt)("inlineCode",{parentName:"li"},"\u6302\u8f7d"),"\u6587\u4ef6\u5939")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ mkdir /docker-data/mysql8/data\n$ mkdir /docker-data/mysql8/conf.d\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5728",(0,a.kt)("inlineCode",{parentName:"li"},"conf.d"),"\u76ee\u5f55\u521b\u5efa my.cnf")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ vi my.cnf\n[mysqld]\nskip-grant-tables\ndefault-time_zone = '+8:00'\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u8fd0\u884c\u5e76\u6302\u8f7d\u5728\u672c\u673a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ docker run --name mysql8 -p 3306:3306 \\\n-v /docker-data/mysql8/data:/var/lib/mysql \\\n-v /docker-data/mysql8/conf.d:/etc/mysql/conf.d \\\n-e MYSQL_ROOT_PASSWORD=123456 -d mysql:latest\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4fee\u6539\u5bc6\u7801\u4e3a\u7a7a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ docker exec -it CONTAINER ID bash\n$ mysql -uroot -p\n# \u4e0d\u7528\u8f93\u5bc6\u7801\u76f4\u63a5\u56de\u8f66\uff0c\u8fdb\u5165mysql\u547d\u4ee4\nmysql> use mysql\nmysql> select user,authentication_string,host from user; # \u67e5\u770b\u8d26\u53f7\u3001\u5bc6\u7801\u3001\u53ef\u8fde\u63a5\u7684host\nmysql> update user set authentication_string='' where user='root';  #\u4fee\u6539\u5bc6\u7801\nmysql> flush privileges;  #\u5237\u65b0\u6743\u9650\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6ce8\u91ca\u6389",(0,a.kt)("inlineCode",{parentName:"li"},"my.cnf"),"\u4e2d\uff0c\u6587\u4ef6\u4e2d\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"skip-grant-tables"),"\uff0c\u91cd\u542f",(0,a.kt)("inlineCode",{parentName:"li"},"mysql"),"\u670d\u52a1")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ docker ps\n$ docker stop CONTAINER ID\n$ docker start CONTAINER ID\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"> MYSQL 8.0\u5185\u65b0\u589e\u52a0`mysql_native_password`\u51fd\u6570\uff0c\u901a\u8fc7\u66f4\u6539\u8fd9\u4e2a\u51fd\u6570\u5bc6\u7801\u6765\u8fdb\u884c`\u8fdc\u7a0b\u8fde\u63a5`\u3002\n> mysql> ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY '123456';\n> \u6ca1\u6709 `root - %` \u6dfb\u52a0\u5373\u53ef\u3002\n> mysql> CREATE USER 'root'@'%' IDENTIFIED BY '123456';\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4fee\u6539 root \u5bc6\u7801")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"mysql> use mysql\nmysql> alter user 'root'@'localhost' IDENTIFIED BY '123456';\nmysql> ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY '123456';\nmysql> flush privileges;\n")),(0,a.kt)("h3",{id:"\u5b89\u88c5-redis"},"\u5b89\u88c5 redis"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u62c9\u53d6\u5b98\u65b9\u7684 redis \u955c\u50cf\u6307\u5b9a\u7248\u672c")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ docker pull redis:5.0.5\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4fee\u6539\u542f\u52a8\u9ed8\u8ba4\u914d\u7f6e\uff0c\u5b98\u65b9 ",(0,a.kt)("a",{parentName:"li",href:"http://download.redis.io/redis-stable/redis.conf"},"redis.conf")," \u914d\u7f6e\u6587\u4ef6\n",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"\u6ce8\u610f\u9700\u8981\u4fee\u6539\u56db\u4e2a\u5730\u65b9\uff1a")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"bind 127.0.0.1 #\u6ce8\u91ca\u6389\u8fd9\u90e8\u5206\uff0c\u7528\u6765\u9650\u5236redis\u53ea\u80fd\u672c\u5730\u8bbf\u95ee\nprotected-mode no #\u9ed8\u8ba4yes\u8868\u793a\u5f00\u542f\u4fdd\u62a4\u6a21\u5f0f\uff0c\u7528\u6765\u9650\u5236redis\u53ea\u80fd\u672c\u5730\u8bbf\u95ee\nappendonly yes #\u6301\u4e45\u5316\nrequirepass password #\u5bc6\u7801\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u65b0\u5efa\u6587\u4ef6\u5939\u7528\u4e8e",(0,a.kt)("inlineCode",{parentName:"li"},"redis"),"\u5916\u90e8\u6302\u8f7d")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ mkdir /docker-data/redis/data\n$ mkdir /docker-data/redis/conf\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u542f\u52a8 redis")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ docker run --name my-redis -d -p 6379:6379 \\\n--restart=always --privileged=true \\\n-v /docker-data/redis/conf/redis.conf:/etc/redis/redis.conf \\\n-v /docker-data/redis/data:/data \\\nredis:5.0.5 redis-server /etc/redis/redis.conf\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u67e5\u770b redis \u662f\u5426\u6b63\u5e38\u542f\u52a8\uff0c\u5982\u679c\u6ca1\u6709\u95ee\u9898\u5c31\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"li"},"\u8fdc\u7a0b"),"\u8fde\u63a5 redis")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ docker ps\n")))}u.isMDXComponent=!0}}]);