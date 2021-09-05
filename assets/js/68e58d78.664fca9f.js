"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8266],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(n),k=a,d=m["".concat(c,".").concat(k)]||m[k]||u[k]||l;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2292:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return s},toc:function(){return u},default:function(){return k}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],i={slug:"how-apply-https",title:"\u514d\u8d39https\u901a\u914d\u7b26\u8bc1\u4e66\u7533\u8bf7\u4e0e\u914d\u7f6e",authors:"zeffon",tags:["linux","https"],date:new Date("2019-09-09T00:00:00.000Z")},c=void 0,p={permalink:"/blog/how-apply-https",editUrl:"https://github.com/facebook/zeffon.github.io/blog/blog/2019/2019-09-09-how-apply-https.md",source:"@site/blog/2019/2019-09-09-how-apply-https.md",title:"\u514d\u8d39https\u901a\u914d\u7b26\u8bc1\u4e66\u7533\u8bf7\u4e0e\u914d\u7f6e",description:"Certbot \u662f EFF \u52a0\u5bc6\u6574\u4e2a\u4e92\u8054\u7f51\u7684\u4e00\u90e8\u5206\u3002\u901a\u8fc7 Web \u8fdb\u884c\u5b89\u5168\u901a\u4fe1\u4f9d\u8d56\u4e8e HTTPS\uff0c\u8fd9\u9700\u8981\u4f7f\u7528\u6570\u5b57\u8bc1\u4e66\uff0c\u4ee5\u4fbf\u6d4f\u89c8\u5668\u9a8c\u8bc1 Web \u670d\u52a1\u5668\u7684\u8eab\u4efd\u3002",date:"2019-09-09T00:00:00.000Z",formattedDate:"September 9, 2019",tags:[{label:"linux",permalink:"/blog/tags/linux"},{label:"https",permalink:"/blog/tags/https"}],readingTime:3.045,truncated:!0,authors:[{name:"Zeffon Wu",title:"A web engineer",url:"https://github.com/zeffon",imageURL:"https://github.com/zeffon.png",key:"zeffon"}],prevItem:{title:"Linux\u642d\u5efaDocker\u73af\u5883",permalink:"/blog/linux-install-docker"},nextItem:{title:"AVL\u6811\u3001\u7ea2\u9ed1\u6811\u548c\u54c8\u5e0c\u8868",permalink:"/blog/avl-and-red\u2013black-tree"}},s={authorsImageUrls:[void 0]},u=[{value:"\u524d\u8a00",id:"\u524d\u8a00",children:[{value:"Let&#39;s Encrypt \u7b80\u4ecb",id:"lets-encrypt-\u7b80\u4ecb",children:[]},{value:"Certbot \u7b80\u4ecb",id:"certbot-\u7b80\u4ecb",children:[]}]},{value:"\u7533\u8bf7\u4e0e\u914d\u7f6e",id:"\u7533\u8bf7\u4e0e\u914d\u7f6e",children:[{value:"Certbot \u5b89\u88c5",id:"certbot-\u5b89\u88c5",children:[]},{value:"\u83b7\u53d6\u8bc1\u4e66",id:"\u83b7\u53d6\u8bc1\u4e66",children:[]},{value:"Nginx \u8bc1\u4e66\u914d\u7f6e",id:"nginx-\u8bc1\u4e66\u914d\u7f6e",children:[]},{value:"\u81ea\u52a8\u66f4\u65b0 SSL \u8bc1\u4e66",id:"\u81ea\u52a8\u66f4\u65b0-ssl-\u8bc1\u4e66",children:[]}]}],m={toc:u};function k(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Certbot \u662f EFF \u52a0\u5bc6\u6574\u4e2a\u4e92\u8054\u7f51\u7684\u4e00\u90e8\u5206\u3002\u901a\u8fc7 Web \u8fdb\u884c\u5b89\u5168\u901a\u4fe1\u4f9d\u8d56\u4e8e HTTPS\uff0c\u8fd9\u9700\u8981\u4f7f\u7528\u6570\u5b57\u8bc1\u4e66\uff0c\u4ee5\u4fbf\u6d4f\u89c8\u5668\u9a8c\u8bc1 Web \u670d\u52a1\u5668\u7684\u8eab\u4efd\u3002"),(0,l.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,l.kt)("p",null,"Certbot \u662f EFF \u52a0\u5bc6\u6574\u4e2a\u4e92\u8054\u7f51\u7684\u4e00\u90e8\u5206\u3002\u901a\u8fc7 Web \u8fdb\u884c\u5b89\u5168\u901a\u4fe1\u4f9d\u8d56\u4e8e HTTPS\uff0c\u8fd9\u9700\u8981\u4f7f\u7528\u6570\u5b57\u8bc1\u4e66\uff0c\u4ee5\u4fbf\u6d4f\u89c8\u5668\u9a8c\u8bc1 Web \u670d\u52a1\u5668\u7684\u8eab\u4efd\u3002"),(0,l.kt)("h3",{id:"lets-encrypt-\u7b80\u4ecb"},"Let's Encrypt \u7b80\u4ecb"),(0,l.kt)("p",null,"\u968f\u7740\u963f\u91cc\u514d\u8d39\u7684 HTTPS \u8fc7\u671f\u540e\uff0c\u4e0d\u5f97\u4e0d\u4f7f\u7528\u514d\u8d39\u4f7f\u7528 HTTPS\u3002\u6240\u4ee5\u5c31\u9700\u8981\u4ece\u8bc1\u4e66\u6388\u6743\u673a\u6784(\u4ee5\u4e0b\u7b80\u79f0 CA) \u5904\u83b7\u53d6\u4e00\u4e2a\u8bc1\u4e66\uff0cLet's Encrypt \u5c31\u662f\u4e00\u4e2a CA\u3002\u6211\u4eec\u53ef\u4ee5\u4ece Let's Encrypt \u83b7\u5f97\u7f51\u7ad9\u57df\u540d\u7684\u514d\u8d39\u7684\u8bc1\u4e66\u3002\u8fd9\u7bc7\u6587\u7ae0\u4e5f\u4e3b\u8981\u8bb2\u7684\u662f\u901a\u8fc7 Let's Encrypt + Nginx \u6765\u8ba9\u7f51\u7ad9\u5347\u7ea7\u5230 HTTPS\u3002"),(0,l.kt)("h3",{id:"certbot-\u7b80\u4ecb"},"Certbot \u7b80\u4ecb"),(0,l.kt)("p",null,"Certbot \u662f Let's Encrypt \u5b98\u65b9\u63a8\u8350\u7684\u83b7\u53d6\u8bc1\u4e66\u7684\u5ba2\u6237\u7aef\uff0c\u53ef\u4ee5\u5e2e\u6211\u4eec\u83b7\u53d6\u514d\u8d39\u7684 Let's Encrypt \u8bc1\u4e66\u3002Certbot \u662f EFF \u52a0\u5bc6\u6574\u4e2a\u4e92\u8054\u7f51\u7684\u4e00\u90e8\u5206\u3002\u901a\u8fc7 Web \u8fdb\u884c\u5b89\u5168\u901a\u4fe1\u4f9d\u8d56\u4e8e HTTPS\uff0c\u8fd9\u9700\u8981\u4f7f\u7528\u6570\u5b57\u8bc1\u4e66\uff0c\u4ee5\u4fbf\u6d4f\u89c8\u5668\u9a8c\u8bc1 Web \u670d\u52a1\u5668\u7684\u8eab\u4efd\u3002Certbot \u662f\u652f\u6301\u6240\u6709 Unix \u5185\u6838\u7684\u64cd\u4f5c\u7cfb\u7edf\u7684\u3002"),(0,l.kt)("h2",{id:"\u7533\u8bf7\u4e0e\u914d\u7f6e"},"\u7533\u8bf7\u4e0e\u914d\u7f6e"),(0,l.kt)("h3",{id:"certbot-\u5b89\u88c5"},"Certbot \u5b89\u88c5"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"Git")," \u4e0b\u8f7d ",(0,l.kt)("inlineCode",{parentName:"li"},"certbot"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ git clone https://github.com/certbot/certbot\n$ cd certbot\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"certbot-auto")," \u6216\u8005 ",(0,l.kt)("inlineCode",{parentName:"li"},"letsencrypt-auto"),"\u67e5\u770b\u547d\u4ee4\u53c2\u6570")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ ./certbot-auto --help\n\u6216\u8005\n$ ./letsencrypt-auto --help\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-s"},"obtain, install, and renew certificates:\n(default) run   Obtain & install a certificate in your current webserver\ncertonly        Obtain or renew a certificate, but do not install it\nrenew           Renew all previously obtained certificates that are near\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"expiry\n  enhance         Add security enhancements to your existing configuration\n  -d DOMAINS       Comma-separated list of domains to obtain a certificate for\n  --apache          Use the Apache plugin for authentication & installation\n  --standalone      Run a standalone webserver for authentication\n  --nginx           Use the Nginx plugin for authentication & installation\n  --webroot         Place files in a server's webroot folder for authentication\n  --manual          Obtain certificates interactively, or using shell script\n")),(0,l.kt)("p",null,"\u8fd9\u91cc\u53ea\u5bf9\u51e0\u4e2a\u91cd\u8981\u7684\u547d\u4ee4\u53c2\u6570\u8fdb\u884c\u8bf4\u660e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"run\uff1a\u83b7\u53d6\u5e76\u5b89\u88c5\u8bc1\u4e66\u5230\u5f53\u524d\u7684 Web \u670d\u52a1\u5668"),(0,l.kt)("li",{parentName:"ul"},"certonly\uff1a\u83b7\u53d6\u6216\u7eed\u671f\u8bc1\u4e66\uff0c\u4f46\u662f\u4e0d\u5b89\u88c5"),(0,l.kt)("li",{parentName:"ul"},"renew\uff1a\u5728\u8bc1\u4e66\u5feb\u8fc7\u671f\u65f6\uff0c\u7eed\u671f\u4e4b\u524d\u83b7\u53d6\u7684\u6240\u6709\u8bc1\u4e66"),(0,l.kt)("li",{parentName:"ul"},"-d DOMAINS\uff1a\u4e00\u4e2a\u8bc1\u4e66\u652f\u6301\u591a\u4e2a\u57df\u540d\uff0c\u7528\u9017\u53f7\u5206\u9694"),(0,l.kt)("li",{parentName:"ul"},"--apache\uff1a\u4f7f\u7528 Apache \u63d2\u4ef6\u6765\u8ba4\u8bc1\u548c\u5b89\u88c5\u8bc1\u4e66"),(0,l.kt)("li",{parentName:"ul"},"--standalone\uff1a\u8fd0\u884c\u72ec\u7acb\u7684 web server \u6765\u9a8c\u8bc1"),(0,l.kt)("li",{parentName:"ul"},"--nginx\uff1a\u4f7f\u7528 Nginx \u63d2\u4ef6\u6765\u8ba4\u8bc1\u548c\u5b89\u88c5\u8bc1\u4e66"),(0,l.kt)("li",{parentName:"ul"},"--webroot\uff1a\u5982\u679c\u76ee\u6807\u670d\u52a1\u5668\u5df2\u7ecf\u6709 web server \u8fd0\u884c\u4e14\u4e0d\u80fd\u5173\u95ed\uff0c\u53ef\u4ee5\u901a\u8fc7\u5f80\u670d\u52a1\u5668\u7684\u7f51\u7ad9\u6839\u76ee\u5f55\u653e\u7f6e\u6587\u4ef6\u7684\u65b9\u5f0f\u6765\u9a8c\u8bc1"),(0,l.kt)("li",{parentName:"ul"},"--manual\uff1a\u901a\u8fc7\u4ea4\u4e92\u5f0f\u65b9\u5f0f\uff0c\u6216 Shell \u811a\u672c\u624b\u52a8\u83b7\u53d6\u8bc1\u4e66")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5173\u4e8e\u57df\u540d\u9a8c\u8bc1\u548c\u8bc1\u4e66\u7684\u83b7\u53d6\u5b89\u88c5\uff0c\u4e0a\u9762\u63d0\u5230\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"5\u79cd"),"\u65b9\u5f0f\uff1a--apache, --standalone, --nginx, --webroot \u548c --manual\uff0c\u8bf7\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u9009\u62e9\u5176\u4e00\u3002\u8fd9\u91cc\u4f1a\u8bb2\u5e38\u7528 Nginx \u5b89\u88c5\u65b9\u5f0f\u3002")),(0,l.kt)("h3",{id:"\u83b7\u53d6\u8bc1\u4e66"},"\u83b7\u53d6\u8bc1\u4e66"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"certbot-auto")," \u6765\u83b7\u53d6\u8bc1\u4e66\u4f46\u4e0d\u5b89\u88c5")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'$ ./certbot-auto --email zeffonwu@gmail.com -d "*.thxycn.xin" -d "thxycn.xin" --manual --preferred-challenges dns-01 certonly --server https://acme-v02.api.letsencrypt.org/directory\n')),(0,l.kt)("p",null,"\u6ce8\u610f\u5c06\u4e0a\u9762\u7684\u90ae\u7bb1\u548c\u57df\u540d\u66ff\u6362\u6210\u81ea\u5df1\u7684\u3002\u9700\u8981\u4e24\u4e2a-d\uff1a\u7b2c\u4e00\u662f\u901a\u914d\u7b26\u57df\u540d\u914d\u7f6e\uff0c\u7b2c\u4e8c\u4e2a\u662f\u4e3b\u57df\u540d\u914d\u7f6e"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"\u6ce8\u610f"))),(0,l.kt)("ol",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ol"},"\u6267\u884c\u6b64\u547d\u4ee4\u5fc5\u987b\u4f7f\u7528 root \u7528\u6237\u83b7\u5f97\u6587\u4ef6\u5939\u7684\u6743\u9650"),(0,l.kt)("li",{parentName:"ol"},"\u57df\u540d\u80fd\u8bbf\u95ee\u5e76\u4e14\u6709\u7ed1\u5b9a\u7684\u516c\u7f51 IP"),(0,l.kt)("li",{parentName:"ol"},"\u5fc5\u987b\u5728\u6b64\u57df\u540d\u7ed1\u5b9a\u7684\u670d\u52a1\u5668\u4e0a\u8fd0\u884c"),(0,l.kt)("li",{parentName:"ol"},"\u4f1a\u4f7f\u7528 80 \u65ad\u7aef\u53e3\uff0c\u5982\u679c nginx \u76d1\u542c 80 \u7aef\u53e3\uff0c\u628a nginx \u5148\u5173\u6389"))),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u9700\u8981\u5728\u57df\u540d\u4e0a\u65b0\u6dfb\u52a0\u4e00\u6761\u89e3\u6790\u8bb0\u5f55(\u7531\u4e8e\u8bbe\u7f6e\u4e24\u4e2a\u57df\u540d\uff0c\u8fd9\u91cc\u89e3\u6790\u8bb0\u5f55\u503c\u4e5f\u8981\u5f04\u4e24\u6b21)\n(",(0,l.kt)("inlineCode",{parentName:"li"},"\u4e3b\u673a"),"\uff1a","_","acme-challenge ",(0,l.kt)("inlineCode",{parentName:"li"},"\u7c7b\u578b"),"\uff1aTXT ",(0,l.kt)("inlineCode",{parentName:"li"},"\u8bb0\u5f55\u503c"),"\uff1aL435P35DFHIBAOF34548QoqJHbD162748HUDF)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Please deploy a DNS TXT record under the name\n_acme-challenge.thxycn.xin with the following value:\n\nL435P35DFHIBAOF34548QoqJHbD162748HUDF\n\nBefore continuing, verify the record is deployed.\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"\u6ce8\u610f"),":")," \u7533\u8bf7\u901a\u914d\u7b26\u8bc1\u4e66\u662f\u8981\u7ecf\u8fc7 DNS \u8ba4\u8bc1\u7684\uff0c\u6309\u7167\u63d0\u793a\uff0c\u524d\u5f80\u57df\u540d\u540e\u53f0\u6dfb\u52a0\u5bf9\u5e94\u7684 DNS TXT \u8bb0\u5f55\u3002\u6dfb\u52a0\u4e4b\u540e\uff0c\u4e0d\u8981\u5fc3\u6025\u7740\u6309\u56de\u8f66\uff0c\u5148\u6267\u884c dig xxxx.xxx.com txt \u786e\u8ba4\u89e3\u6790\u8bb0\u5f55\u662f\u5426\u751f\u6548\uff0c\u751f\u6548\u4e4b\u540e\u518d\u56de\u53bb\u6309\u56de\u8f66\u786e\u8ba4")),(0,l.kt)("p",null,"dig \u547d\u4ee4\u5b89\u88c5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'$ yum install bind-utils\n$ dig _acme-challenge.thxycn.xin\n\u4e0b\u6587\u51fa\u73b0TXT\u7684\u503c\u5219\u53ef\u4ee5\n;; ANSWER SECTION:\n_acme-challenge.thxycn.xin. 600 IN      TXT     "Refivf35ferdfaypw7ZvfnmkbHDSD8433IGA"\n')),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"\u83b7\u53d6\u8bc1\u4e66\u51fa\u73b0\u5982\u4e0b\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"NOTES"),",\u8bf4\u660e\u8bc1\u4e66\u521b\u5efa\u6210\u529f\u4e86")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'IMPORTANT NOTES:\n- Congratulations! Your certificate and chain have been saved at:\n  /etc/letsencrypt/live/thxycn.xin/fullchain.pem\n  Your key file has been saved at:\n  /etc/letsencrypt/live/thxycn.xin/privkey.pem\n  Your cert will expire on 2019-11-30. To obtain a new or tweaked\n  version of this certificate in the future, simply run\n  letsencrypt-auto again. To non-interactively renew *all* of your\n  certificates, run "letsencrypt-auto renew"\n')),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"\u67e5\u770b\u8bc1\u4e66(\u8bc1\u4e66\u9ed8\u8ba4\u4fdd\u5b58\u5728",(0,l.kt)("inlineCode",{parentName:"li"},"/etc/letsencrypt/live/thxycn.xin"),")")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"README  cert.pem  chain.pem  fullchain.pem  privkey.pem\n")),(0,l.kt)("p",null,"\u800c Nginx \u914d\u7f6e\u8bc1\u4e66\u6211\u4eec\u9700\u8981\u7528\u5230\u7684\u8bc1\u4e66\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"fullchain.pem")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"privkey.pem"),"\u3002"),(0,l.kt)("h3",{id:"nginx-\u8bc1\u4e66\u914d\u7f6e"},"Nginx \u8bc1\u4e66\u914d\u7f6e"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u914d\u7f6e conf \u6587\u4ef6\uff08",(0,l.kt)("inlineCode",{parentName:"li"},"\u6ce8\u610f"),"\u66f4\u6362\u81ea\u5df1\u7684\u8bc1\u4e66\uff09")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"server {\n    listen 443;\n    server_name thxycn.xin;\n    ssl on;\n\n    ssl_certificate /etc/letsencrypt/live/thxycn.xin/fullchain.pem; # \u66ff\u6362\u81ea\u5df1\u7684\u8bc1\u4e66\n    ssl_certificate_key /etc/letsencrypt/live/thxycn.xin/privkey.pem; # \u66ff\u6362\u81ea\u5df1\u7684\u8bc1\u4e66\n    ssl_session_cache shared:SSL:1m;\n    ssl_session_timeout 5m;\n    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;\n    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;\n    ssl_prefer_server_ciphers on;\n\n    location / {\n        root   /usr/share/nginx/html;\n        index  index.html index.htm;\n    }\n\n    error_page   500 502 503 504  /50x.html;\n    location = /50x.html {\n        root   /usr/share/nginx/html;\n    }\n}\nserver {\n    listen 80;\n    server_name thxycn.xin;\n    rewrite ^/(.*) https://$server_name$request_uri? permanent;\n}\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u9a8c\u8bc1\u662f\u5426\u914d\u7f6e\u6210\u529f\n\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"https://thxycn.xin/index.html")," \u80fd\u8bbf\u95ee\u5230 Nginx \u7684\u6b22\u8fce\u9875\u9762\uff0c\u5219\u914d\u7f6e\u6210\u529f\u3002")),(0,l.kt)("h3",{id:"\u81ea\u52a8\u66f4\u65b0-ssl-\u8bc1\u4e66"},"\u81ea\u52a8\u66f4\u65b0 SSL \u8bc1\u4e66"),(0,l.kt)("p",null,"Let's Encrypt \u63d0\u4f9b\u7684\u8bc1\u4e66\u53ea\u6709 90 \u5929\u7684\u6709\u6548\u671f\uff0c\u6240\u4ee5\u6211\u4eec\u9700\u8981\u5199\u4e00\u4e2a\u811a\u672c\u5728\u8fc7\u671f\u524d\u5b9a\u65f6\u91cd\u65b0\u83b7\u53d6\u8bc1\u4e66\u3002\u5e76\u4e14\u8bc1\u4e66\u83b7\u53d6\u662f\u8981\u9891\u6b21\u9650\u5236\u7684--\u6bcf 7 \u5929 5 \u6b21\u3002(limit ~5 per 7 days)\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"certbot renew")," \u81ea\u52a8\u66f4\u65b0\u8bc1\u4e66")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ certbot-auto renew --manual # \u9700\u8981\u8fdb\u5165/usr/local/certbot\u76ee\u5f55\n\u6216\u8005\u53ef\u4ee5\u4f7f\u7528\u5f3a\u5236\u66f4\u65b0\n$ certbot-auto --force-renew\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u4f46\u662f\u5374\u62a5\u9519\u4e86\u3002\u539f\u56e0: \u91cd\u65b0\u66f4\u65b0\u8bc1\u4e66\u9700\u8981\u542f\u52a8 443 \u7aef\u53e3\uff0c\u800c\u8fd9\u4e2a\u7aef\u53e3\u88ab nginx \u5360\u7528\u7740\n\u89e3\u51b3\u65b9\u6cd5: \u5176\u5b9e\u5f88\u7b80\u5355\uff0c\u5c31\u662f\u5728\u6267\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"certbot renew --dry-run"),"\u547d\u4ee4\u524d\uff0c\u628a Nginx \u505c\u6b62 ",(0,l.kt)("inlineCode",{parentName:"p"},"systemctl stop nginx"),", \u6267\u884c\u6210\u529f\u540e\u5c31\u628a Nginx \u542f\u52a8 ",(0,l.kt)("inlineCode",{parentName:"p"},"systemctl start nginx"),"\u3002\u6240\u4ee5\u9700\u8981\u7528\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"--pre-hook"),"\uff08\u8fd9\u4e2a\u53c2\u6570\u8868\u793a\u6267\u884c\u66f4\u65b0\u64cd\u4f5c\u4e4b\u524d\u8981\u505a\u7684\u4e8b\u60c5\uff09,",(0,l.kt)("inlineCode",{parentName:"p"},"--post-hook"),"(\u8fd9\u4e2a\u53c2\u6570\u8868\u793a\u6267\u884c\u66f4\u65b0\u64cd\u4f5c\u5b8c\u6210\u540e\u8981\u505a\u7684\u4e8b\u60c5)")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5b9a\u65f6\u8bbe\u7f6e(\u6bcf 1 \u4e2a\u6708\uff0c\u51cc\u6668 10 \u5206\u6267\u884c)\n\u65b0\u5efa certbot-auto-renew-crontab.sh \u6587\u4ef6")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'$ mkdir crontab # \u4e0eusr\u540c\u7ea7\u4e0b\u65b0\u5efacrontab\u76ee\u5f55\n$ vi certbot-auto-renew-crontab.sh\n10 0 * 1 * /usr/local/certbot/certbot-auto --force-renew --pre-hook "systemctl stop nginx" --post-hook "systemctl start nginx" # --force-renew \u5f3a\u5236\u66f4\u65b0\n')),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"crontab")," \u6765\u542f\u52a8\u8fd9\u4e2a\u5b9a\u65f6\u4efb\u52a1")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ crontab certbot-auto-renew-crontab.sh\n")))}k.isMDXComponent=!0}}]);