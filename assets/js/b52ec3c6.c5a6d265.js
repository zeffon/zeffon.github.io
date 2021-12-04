"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8898],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return t?r.createElement(k,o(o({ref:n},s),{},{components:t})):r.createElement(k,o({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},44354:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return u},assets:function(){return s},toc:function(){return c},default:function(){return m}});var r=t(87462),a=t(63366),l=(t(67294),t(3905)),o=["components"],i={slug:"docker-build-maven",title:"Docker\u642d\u5efaMaven\u79c1\u670d",authors:"zeffon",tags:["docker"],date:new Date("2019-11-01T00:00:00.000Z")},p=void 0,u={permalink:"/blog/docker-build-maven",editUrl:"https://github.com/zeffon/zeffon.github.io/blob/master/blog/2019/2019-11-01-docker-build-maven.md",source:"@site/blog/2019/2019-11-01-docker-build-maven.md",title:"Docker\u642d\u5efaMaven\u79c1\u670d",description:"\u79c1\u670d\u662f\u67b6\u8bbe\u5728\u5c40\u57df\u7f51\u7684\u4e00\u79cd\u7279\u6b8a\u7684\u8fdc\u7a0b\u4ed3\u5e93\uff0c\u76ee\u7684\u662f\u4ee3\u7406\u8fdc\u7a0b\u4ed3\u5e93\u53ca\u90e8\u7f72\u7b2c\u4e09\u65b9\u6784\u4ef6\u3002",date:"2019-11-01T00:00:00.000Z",formattedDate:"November 1, 2019",tags:[{label:"docker",permalink:"/blog/tags/docker"}],readingTime:.91,truncated:!0,authors:[{name:"Zeffon Wu",title:"A web engineer",url:"https://github.com/zeffon",imageURL:"https://github.com/zeffon.png",key:"zeffon"}],prevItem:{title:"\u642d\u5efaGitLab\u79c1\u670d",permalink:"/blog/docker-gitlab-gitlab"},nextItem:{title:"\u6784\u5efa\u5206\u5e03\u5f0f\u914d\u7f6e\u4e2d\u5fc3\u963f\u6ce2\u7f57",permalink:"/blog/how-build-apollo"}},s={authorsImageUrls:[void 0]},c=[{value:"\u524d\u8a00",id:"\u524d\u8a00",children:[]},{value:"\u6d41\u7a0b",id:"\u6d41\u7a0b",children:[{value:"\u4e0b\u8f7d&amp;&amp;\u542f\u52a8",id:"\u4e0b\u8f7d\u542f\u52a8",children:[]},{value:"\u767b\u9646",id:"\u767b\u9646",children:[]},{value:"\u521b\u5efa Maven \u79c1\u670d\u4ed3\u5e93",id:"\u521b\u5efa-maven-\u79c1\u670d\u4ed3\u5e93",children:[]}]},{value:"\u53c2\u8003\u6587\u732e",id:"\u53c2\u8003\u6587\u732e",children:[]}],d={toc:c};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u79c1\u670d\u662f\u67b6\u8bbe\u5728\u5c40\u57df\u7f51\u7684\u4e00\u79cd\u7279\u6b8a\u7684\u8fdc\u7a0b\u4ed3\u5e93\uff0c\u76ee\u7684\u662f\u4ee3\u7406\u8fdc\u7a0b\u4ed3\u5e93\u53ca\u90e8\u7f72\u7b2c\u4e09\u65b9\u6784\u4ef6\u3002"),(0,l.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,l.kt)("p",null,"\u79c1\u670d\u662f\u67b6\u8bbe\u5728\u5c40\u57df\u7f51\u7684\u4e00\u79cd\u7279\u6b8a\u7684\u8fdc\u7a0b\u4ed3\u5e93\uff0c\u76ee\u7684\u662f\u4ee3\u7406\u8fdc\u7a0b\u4ed3\u5e93\u53ca\u90e8\u7f72\u7b2c\u4e09\u65b9\u6784\u4ef6\u3002\nMaven \u79c1\u670d\u5e94\u7528\u573a\u666f \uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u7f13\u5b58\u4f01\u4e1a\u7ea7 jar"),(0,l.kt)("li",{parentName:"ol"},"\u5fae\u670d\u52a1\u5f00\u53d1\u4e2d\uff0c\u5b9e\u73b0\u5bf9\u5fae\u670d\u52a1\u63a5\u53e3\u5b9e\u73b0\u53d1\u5e03\u4e0e\u8c03\u7528\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u6b63\u5e38\u5728\u5fae\u670d\u52a1\u5f00\u53d1\u4e2d\uff0c\u4e0d\u4f1a\u76f4\u63a5\u5f15\u5165\u5230\u5176\u4ed6\u63a5\u53e3\u6e90\u7801\u9879\u76ee\u3002\u5f15\u5165\u63a5\u53e3 jar \u5305\u8fdb\u884c\u8c03\u7528\u3002")),(0,l.kt)("h2",{id:"\u6d41\u7a0b"},"\u6d41\u7a0b"),(0,l.kt)("h3",{id:"\u4e0b\u8f7d\u542f\u52a8"},"\u4e0b\u8f7d&&\u542f\u52a8"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Docker \u62c9\u53d6\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"li"},"nexus3"),"\u7684\u955c\u50cf")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ docker pull sonatype/nexus3\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5c06\u5bb9\u5668\u5185\u90e8",(0,l.kt)("inlineCode",{parentName:"li"},"/var/nexus-data"),"\u6302\u8f7d\u5230\u4e3b\u673a",(0,l.kt)("inlineCode",{parentName:"li"},"/root/nexus-data"),"\u76ee\u5f55")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ docker run -d -p 8081:8081 --name nexus -v /root/nexus-data:/var/nexus-data --restart=always sonatype/nexus3\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5173\u95ed\u9632\u706b\u5899\uff0c\u6839\u636e",(0,l.kt)("inlineCode",{parentName:"li"},"\u670d\u52a1\u5668ip"),"\u8bbf\u95ee ",(0,l.kt)("a",{parentName:"li",href:"http://ip:8081"},"http://ip:8081"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ systemctl stop firewalld.service\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Maven \u79c1\u670d",(0,l.kt)("inlineCode",{parentName:"p"},"\u542f\u52a8\u5bb9\u5668"),"\u7a0d\u5fae\u6bd4\u8f83\u6162\uff0c\u7b49\u5f85 1 \u5206\u949f\u5373\u53ef\u3002")),(0,l.kt)("h3",{id:"\u767b\u9646"},"\u767b\u9646"),(0,l.kt)("p",null,"\u4f7f\u7528\u9ed8\u8ba4\u8d26\u53f7\u5bc6\u7801 admin admin123 \u767b\u9646\u65f6\uff0c\u53d1\u73b0\u767b\u9646\u4e0d\u4e86\u3002\u8fd9\u662f\u66f4\u6539\u8fd9\u79cd admin123",(0,l.kt)("inlineCode",{parentName:"p"},"\u56fa\u5b9a\u5bc6\u7801"),"\u767b\u9646\u65b9\u5f0f\u3002\u9700\u8981\u8fdb\u5165\u5bb9\u5668\u91cc\u9762\u5bfb\u627e\u5bc6\u7801\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u67e5\u770b\u8fdb\u884c\u7684\u5bb9\u5668\uff0c\u5e76\u8fdb\u5165\u5bb9\u5668")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ docker ps\nCONTAINER ID      IMAGE\n9c9b18024931      sonatype/nexus3\n$ docker exec -it 9c9b18024931 bash\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u67e5\u770b\u5bc6\u7801(",(0,l.kt)("inlineCode",{parentName:"li"},"bash-4.4$"),"\u524d\u9762\u7684\u5b57\u7b26\u4e32\u5373\u662f",(0,l.kt)("inlineCode",{parentName:"li"},"\u5bc6\u7801"),")")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"bash-4.4$ cat /nexus-data/admin.password\n3rhu2s4g-34d5-34d5-fs9d-we2fh8242wh3bash-4.4$\n#\u9000\u51fa\u5bb9\u5668\u7528 exit \u547d\u4ee4\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5728\u767b\u9646\u754c\u9762\u8fdb\u884c\u767b\u9646\uff0c\u518d\u6839\u636e\u63d0\u793a\u91cd\u7f6e\u5bc6\u7801\u5373\u53ef")),(0,l.kt)("h3",{id:"\u521b\u5efa-maven-\u79c1\u670d\u4ed3\u5e93"},"\u521b\u5efa Maven \u79c1\u670d\u4ed3\u5e93"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u521b\u5efa\u79c1\u670d\u4ed3\u5e93\n\u521b\u5efa\u4ed3\u5e93\uff0c\u70b9\u51fb",(0,l.kt)("inlineCode",{parentName:"li"},"Create repository"),",\u7136\u540e\u9009\u62e9",(0,l.kt)("inlineCode",{parentName:"li"},"maven2(hosted)"),"\u7136\u540e\u8f93\u5165\u4ed3\u5e93\u540d\u79f0",(0,l.kt)("inlineCode",{parentName:"li"},"\uff08test-release\uff09"),"\u3002\u5728",(0,l.kt)("inlineCode",{parentName:"li"},"version policy"),"\u4e2d\u9009\u62e9\u8fd9\u4e2a\u4ed3\u5e93\u7684\u7c7b\u578b\uff0c\u8fd9\u91cc\u9009\u62e9",(0,l.kt)("inlineCode",{parentName:"li"},"release"),",\u5728",(0,l.kt)("inlineCode",{parentName:"li"},"Deployment policy"),"\u4e2d\u9009\u62e9",(0,l.kt)("inlineCode",{parentName:"li"},"Allow redeploy"),"\uff08\u8fd9\u4e2a\u5f88\u91cd\u8981\uff09."),(0,l.kt)("li",{parentName:"ol"},"\u521b\u5efa\u79c1\u670d\u8d26\u53f7\n\u70b9\u51fb\u5de6\u4fa7\u83dc\u5355\u680f\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"Users"),"\u83dc\u5355\uff0c\u7136\u540e\u70b9\u51fb",(0,l.kt)("inlineCode",{parentName:"li"},"Create local user"),".\u6211\u8fd9\u91cc\u521b\u5efa\u4e86\u4e00\u4e2a\u7528\u6237\uff0c\u8d26\u53f7\u5bc6\u7801\u90fd\u662f\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"testUser"),(0,l.kt)("inlineCode",{parentName:"li"},"testUser-release")),(0,l.kt)("li",{parentName:"ol"},"\u4fee\u6539\u672c\u5730 settings.xml```xml",(0,l.kt)("servers",null,(0,l.kt)("server",null,(0,l.kt)("id",null,"testUser"),(0,l.kt)("username",null,"testUser"),(0,l.kt)("password",null,"testUser"))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\n4. \u521b\u5efa\u4e00\u4e2aMaven\u5de5\u7a0b\n\n\n\n> **`\u6ce8\u610f`** \u9650\u5b9a\u7248\u672c\u4e00\u5b9a\u4e3aRELEASE,\u56e0\u4e3a\u4e0a\u4f20\u7684\u5bf9\u5e94\u4ed3\u5e93\u7684\u5b58\u50a8\u7c7b\u578b\u4e3a`RELEASE`\n\n\n\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"    \x3c!--\u6307\u5b9a\u4ed3\u5e93\u5730\u5740 --\x3e\n    <distributionManagement>\n        <repository>\n            \x3c!--\u6b64\u540d\u79f0\u8981\u548c.m2/settings.xml\u4e2d\u8bbe\u7f6e\u7684ID\u4e00\u81f4 --\x3e\n            <id>testUser</id>\n            <url>http://192.168.162.22:8081/repository/testUser-release/</url>\n        </repository>\n    </distributionManagement>\n\n    <build>\n        <plugins>\n            \x3c!--\u53d1\u5e03\u4ee3\u7801Jar\u63d2\u4ef6 --\x3e\n            <plugin>\n                <groupId>org.apache.maven.plugins</groupId>\n                <artifactId>maven-deploy-plugin</artifactId>\n                <version>2.7</version>\n            </plugin>\n            \x3c!--\u53d1\u5e03\u6e90\u7801\u63d2\u4ef6 --\x3e\n            <plugin>\n                <groupId>org.apache.maven.plugins</groupId>\n                <artifactId>maven-source-plugin</artifactId>\n                <version>2.2.1</version>\n                <executions>\n                    <execution>\n                        <phase>package</phase>\n                        <goals>\n                            <goal>jar</goal>\n                        </goals>\n                    </execution>\n                </executions>\n            </plugin>\n        </plugins>\n    </build>\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\n\n1. \u53d1\u5e03`jar\u5305`\u5230Maven\u79c1\u670d\n\n\n\n```sh\n$ mvn deploy\n")),(0,l.kt)("h2",{id:"\u53c2\u8003\u6587\u732e"},"\u53c2\u8003\u6587\u732e"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/sonatype/nexus3/"},"Nexus3 Docker")))}m.isMDXComponent=!0}}]);