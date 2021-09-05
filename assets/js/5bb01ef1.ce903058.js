"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1330],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return f}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),m=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=m(t.components);return a.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),c=m(n),f=r,s=c["".concat(p,".").concat(f)]||c[f]||d[f]||o;return n?a.createElement(s,l(l({ref:e},u),{},{components:n})):a.createElement(s,l({ref:e},u))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,l[1]=i;for(var m=2;m<o;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1365:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return m},assets:function(){return u},toc:function(){return d},default:function(){return f}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=["components"],i={slug:"ajax-formdata-object",title:"Ajax\u4e2dformdata\u4e0a\u4f20\u56fe\u7247",authors:"zeffon",tags:["js"],date:new Date("2020-09-01T00:00:00.000Z")},p=void 0,m={permalink:"/blog/ajax-formdata-object",editUrl:"https://github.com/zeffon/zeffon.github.io/blob/master/blog/2020/2020-09-01-ajax-formdata-object.md",source:"@site/blog/2020/2020-09-01-ajax-formdata-object.md",title:"Ajax\u4e2dformdata\u4e0a\u4f20\u56fe\u7247",description:"FormData \u5bf9\u8c61\u7528\u4ee5\u5c06\u6570\u636e\u7f16\u8bd1\u6210\u952e\u503c\u5bf9\uff0c\u4ee5\u4fbf\u7528XMLHttpRequest\u6765\u53d1\u9001\u6570\u636e\u3002\u5176\u4e3b\u8981\u7528\u4e8e\u53d1\u9001\u8868\u5355\u6570\u636e\uff0c\u4f46\u4ea6\u53ef\u7528\u4e8e\u53d1\u9001\u5e26\u952e\u6570\u636e(keyed data)\uff0c\u800c\u72ec\u7acb\u4e8e\u8868\u5355\u4f7f\u7528\u3002\u5982\u679c\u8868\u5355 enctype \u5c5e\u6027\u8bbe\u4e3amultipart/form-data\uff0c\u5219\u4f1a\u4f7f\u7528\u8868\u5355\u7684submit()\u65b9\u6cd5\u6765\u53d1\u9001\u6570\u636e\uff0c\u4ece\u800c\uff0c\u53d1\u9001\u6570\u636e\u5177\u6709\u540c\u6837\u5f62\u5f0f\u3002",date:"2020-09-01T00:00:00.000Z",formattedDate:"September 1, 2020",tags:[{label:"js",permalink:"/blog/tags/js"}],readingTime:.82,truncated:!0,authors:[{name:"Zeffon Wu",title:"A web engineer",url:"https://github.com/zeffon",imageURL:"https://github.com/zeffon.png",key:"zeffon"}],prevItem:{title:"vscode\u6253\u5305\u548c\u5b89\u88c5vsix\u6269\u5c55\u5305",permalink:"/blog/vscode-package-and-install-vsix"},nextItem:{title:"SVN\u57fa\u672c\u4f7f\u7528",permalink:"/blog/svn-basic"}},u={authorsImageUrls:[void 0]},d=[{value:"\u524d\u8a00",id:"\u524d\u8a00",children:[]},{value:"\u6b63\u6587",id:"\u6b63\u6587",children:[{value:"\u8868\u5355\u63d0\u4ea4",id:"\u8868\u5355\u63d0\u4ea4",children:[]},{value:"Formdata \u5bf9\u8c61",id:"formdata-\u5bf9\u8c61",children:[]},{value:"\u670d\u52a1\u7aef\u63a5\u6536",id:"\u670d\u52a1\u7aef\u63a5\u6536",children:[]}]}],c={toc:d};function f(t){var e=t.components,n=(0,r.Z)(t,l);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"FormData \u5bf9\u8c61\u7528\u4ee5\u5c06\u6570\u636e\u7f16\u8bd1\u6210",(0,o.kt)("strong",{parentName:"p"},"\u952e\u503c\u5bf9"),"\uff0c\u4ee5\u4fbf\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest"),"\u6765\u53d1\u9001\u6570\u636e\u3002\u5176\u4e3b\u8981\u7528\u4e8e\u53d1\u9001\u8868\u5355\u6570\u636e\uff0c\u4f46\u4ea6\u53ef\u7528\u4e8e\u53d1\u9001\u5e26\u952e\u6570\u636e(keyed data)\uff0c\u800c\u72ec\u7acb\u4e8e\u8868\u5355\u4f7f\u7528\u3002\u5982\u679c\u8868\u5355 enctype \u5c5e\u6027\u8bbe\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"multipart/form-data"),"\uff0c\u5219\u4f1a\u4f7f\u7528\u8868\u5355\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"submit()"),"\u65b9\u6cd5\u6765\u53d1\u9001\u6570\u636e\uff0c\u4ece\u800c\uff0c\u53d1\u9001\u6570\u636e\u5177\u6709",(0,o.kt)("strong",{parentName:"p"},"\u540c\u6837\u5f62\u5f0f"),"\u3002"),(0,o.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,o.kt)("p",null,"FormData \u5bf9\u8c61\u7528\u4ee5\u5c06\u6570\u636e\u7f16\u8bd1\u6210",(0,o.kt)("strong",{parentName:"p"},"\u952e\u503c\u5bf9"),"\uff0c\u4ee5\u4fbf\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest"),"\u6765\u53d1\u9001\u6570\u636e\u3002\u5176\u4e3b\u8981\u7528\u4e8e\u53d1\u9001\u8868\u5355\u6570\u636e\uff0c\u4f46\u4ea6\u53ef\u7528\u4e8e\u53d1\u9001\u5e26\u952e\u6570\u636e(keyed data)\uff0c\u800c\u72ec\u7acb\u4e8e\u8868\u5355\u4f7f\u7528\u3002\u5982\u679c\u8868\u5355 enctype \u5c5e\u6027\u8bbe\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"multipart/form-data"),"\uff0c\u5219\u4f1a\u4f7f\u7528\u8868\u5355\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"submit()"),"\u65b9\u6cd5\u6765\u53d1\u9001\u6570\u636e\uff0c\u4ece\u800c\uff0c\u53d1\u9001\u6570\u636e\u5177\u6709",(0,o.kt)("strong",{parentName:"p"},"\u540c\u6837\u5f62\u5f0f"),"\u3002"),(0,o.kt)("p",null,"FormData \u5bf9\u8c61\u7684\u5b57\u6bb5\u7c7b\u578b\u53ef\u4ee5\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"String"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"Blob"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"File"),"\u3002\u5982\u679c\u5b83\u7684\u5b57\u6bb5\u7c7b\u578b\u4e0d\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"Blob"),"\u4e5f\u4e0d\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"File"),"\uff0c\u5219\u4f1a\u88ab\u8f6c\u6362\u6210",(0,o.kt)("strong",{parentName:"p"},"\u5b57\u7b26\u4e32\u7c7b"),"\u3002\u6bd4\u8d77\u666e\u901a\u7684 AJAX,\u4f7f\u7528 FormData \u7684\u6700\u5927\u4f18\u70b9\u662f\u53ef\u4ee5\u5f02\u6b65\u4e0a\u4f20\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"\u4e8c\u8fdb\u5236\u6587\u4ef6"),"."),(0,o.kt)("h2",{id:"\u6b63\u6587"},"\u6b63\u6587"),(0,o.kt)("h3",{id:"\u8868\u5355\u63d0\u4ea4"},"\u8868\u5355\u63d0\u4ea4"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<form enctype="multipart/form-data" id="form" method="post">\n  <div>\u6807\u9898\uff1a<input type="text" id="title" name="title" /></div>\n  <div>\n    \u9009\u62e9\u7167\u7247\uff1a<input\n      type="file"\n      id="photofile"\n      name="photofile"\n      value="\u9009\u62e9\u7167\u7247"\n      style="width:100%;border-radius:2px;background:rgba(0,0,0,0.2);color:#fff;"\n    />\n  </div>\n  <div>\n    <input\n      type="submit"\n      value="\u4e0a\u4f20"\n      name="btn"\n      id="btn"\n      class="btn"\n      style="width:100%;background:rgba(0,0,0,0.4);color:#fff;"\n    />\n  </div>\n</form>\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Form \u7684 enctype \u5c5e\u6027:"),"\nenctype \u8fd9\u4e2a\u5c5e\u6027\u7ba1\u7406\u7684\u662f\u8868\u5355\u7684 MIME \u7f16\u7801\uff0c\u5b83\u4e00\u5171\u6709\u4e09\u4e2a\u5c5e\u6027\uff1a"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u503c"),(0,o.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"application/x-www-form-urlencoded"),(0,o.kt)("td",{parentName:"tr",align:null},"\u5728\u53d1\u9001\u524d\u7f16\u7801\u6240\u6709\u5b57\u7b26\uff08\u9ed8\u8ba4\uff09")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"multipart/form-data"),(0,o.kt)("td",{parentName:"tr",align:null},"\u4e0d\u5bf9\u5b57\u7b26\u7f16\u7801\uff0c\u7528\u6765\u5236\u5b9a\u4f20\u8f93\u6570\u636e\u7684\u7279\u6b8a\u7c7b\u578b\uff0c\u53ef\u56fe\u7247\u3001\u6587\u4ef6\u7c7b\u578b")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"text/plain"),(0,o.kt)("td",{parentName:"tr",align:null},"\u7eaf\u6587\u672c\u4f20\u8f93")))),(0,o.kt)("h3",{id:"formdata-\u5bf9\u8c61"},"Formdata \u5bf9\u8c61"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u521b\u5efa\u4e00\u4e2a FormData \u5bf9\u8c61\u5b9e\u4f8b\uff0c\u5411\u5b9e\u4f8b\u5316\u5bf9\u8c61\u4e2d\u6dfb\u52a0\u6587\u4ef6\u5b57\u6bb5")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'let formData = new FormData(); // \u521b\u5efa\u5bf9\u8c61\u5b9e\u4f8b\nlet title = document.getElementById("title");\nlet photo = document.getElementById("photofile"); // \u83b7\u53d6HTML\u7684input\u4e0a\u6587\u4ef6\nformData.append("title", title);\nformData.append("photo", photo.files[0]); // \u5c06\u6587\u4ef6\u6dfb\u52a0\u5230formdata\u5bf9\u8c61\u4e2d\n// \u6216\u8005\u6839\u636eform\u6807\u7b7e\u83b7\u53d6form\u6807\u7b7e\u5185\u7684\u53c2\u6570\nlet formData = new FormData(document.getElementById("form"));\n')),(0,o.kt)("h3",{id:"\u670d\u52a1\u7aef\u63a5\u6536"},"\u670d\u52a1\u7aef\u63a5\u6536"),(0,o.kt)("p",null,"Java \u6765\u63a5\u53d7\u6bd4\u8f83\u5bb9\u6613\u5904\u7406\uff0c\u53ea\u9700\u5c06 request \u53c2\u6570\u8fdb\u884c\u76f8\u5bf9\u5e94\u7684\u5f3a\u5236\u7c7b\u578b\u53d6\u503c\uff0c\u5373\u53ef\u62ff\u5230 Ajax \u4f20\u8fc7\u6765\u5bf9\u5e94\u7684\u53c2\u6570\u503c\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@PostMapping("postPhoto")\npublic Map<String, String> postPhoto(HttpServletRequest request) {\n    MultipartHttpServletRequest params = ((MultipartHttpServletRequest) request); // \u5f3a\u5236\u7c7b\u578b\u8f6c\u6362\n    MultipartFile file = params.getFile("photofile"); // \u83b7\u53d6\u5230\u4e8c\u8fdb\u5236\u56fe\u7247\uff0c\u4e5f\u53ef\u4ee5getFiles()\u83b7\u53d6\u5230\u6570\u7ec4\u56fe\u7247\n    // \u82e5\u662fAjax\u4f20\u8fc7\u6765\u4e0d\u4ec5\u6709\u56fe\u7247\u8fd8\u6709\u666e\u901a\u53c2\u6570\uff0c\u6bd4\u5982\u6807\u9898title\u65f6, \u53ef\u901a\u8fc7\u5982\u4e0b\u83b7\u53d6\n    String title = params.getParameter("title");\n}\n')))}f.isMDXComponent=!0}}]);