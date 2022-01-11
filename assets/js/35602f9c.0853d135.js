"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9400],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return y}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),y=a,g=m["".concat(l,".").concat(y)]||m[y]||u[y]||i;return n?r.createElement(g,p(p({ref:t},c),{},{components:n})):r.createElement(g,p({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var s=2;s<i;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6731:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},assets:function(){return c},toc:function(){return u},default:function(){return y}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),p=["components"],o={slug:"typescriot-utility",title:"TypeScript \u4e2d Utility Types \u7684\u5e94\u7528",authors:"zeffon",tags:["ts"],date:"2021-09-10 10:00"},l=void 0,s={permalink:"/blog/typescriot-utility",editUrl:"https://github.com/zeffon/zeffon.github.io/blob/master/blog/2021/2021-09-10-typescriot-utility.md",source:"@site/blog/2021/2021-09-10-typescriot-utility.md",title:"TypeScript \u4e2d Utility Types \u7684\u5e94\u7528",description:"\u4e00\u6587\u4ecb\u7ecd TypeScript\u4e2d Utility \u5e38\u89c1\u7684\u7c7b\u578b\u4f7f\u7528\u3002",date:"2021-09-10T10:00:00.000Z",formattedDate:"September 10, 2021",tags:[{label:"ts",permalink:"/blog/tags/ts"}],readingTime:1.58,truncated:!0,authors:[{name:"Zeffon Wu",title:"A web engineer",url:"https://github.com/zeffon",imageURL:"https://github.com/zeffon.png",key:"zeffon"}],prevItem:{title:"\u6301\u7eed\u96c6\u6210\u3001\u6301\u7eed\u4ea4\u4ed8\u548c\u6301\u7eed\u90e8\u7f72",permalink:"/blog/ci-and-cd"},nextItem:{title:"img \u5143\u7d20\u56fe\u7247\u95ee\u9898",permalink:"/blog/img-element"}},c={authorsImageUrls:[void 0]},u=[{value:"interface \u63a5\u53e3",id:"interface-\u63a5\u53e3",children:[]},{value:"\u7c7b\u578b\u522b\u540d",id:"\u7c7b\u578b\u522b\u540d",children:[]},{value:"\u5e38\u7528 Utility Types",id:"\u5e38\u7528-utility-types",children:[{value:"Partial \u6e90\u7801\u89e3\u6790",id:"partial-\u6e90\u7801\u89e3\u6790",children:[]},{value:"Pick \u6e90\u7801\u89e3\u6790",id:"pick-\u6e90\u7801\u89e3\u6790",children:[]},{value:"Omit \u6e90\u7801\u89e3\u6790",id:"omit-\u6e90\u7801\u89e3\u6790",children:[]}]}],m={toc:u};function y(e){var t=e.components,n=(0,a.Z)(e,p);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u4e00\u6587\u4ecb\u7ecd ",(0,i.kt)("inlineCode",{parentName:"p"},"TypeScript"),"\u4e2d ",(0,i.kt)("strong",{parentName:"p"},"Utility")," \u5e38\u89c1\u7684\u7c7b\u578b\u4f7f\u7528\u3002"),(0,i.kt)("h2",{id:"interface-\u63a5\u53e3"},"interface \u63a5\u53e3"),(0,i.kt)("p",null,"\u5728\u4f7f\u7528 ",(0,i.kt)("strong",{parentName:"p"},"TypeScript"),"\u6cdb\u578b\u7684\u65f6\u5019\uff0c\u5f88\u591a\u65f6\u5019\u6211\u4eec\u5927\u591a\u4f7f\u7528\u91c7\u7528 ",(0,i.kt)("strong",{parentName:"p"},"interface"),"\u63a5\u53e3\u5f62\u5f0f\u7684\u7c7b\u578b\u3002\u5b83\u80fd\u4f7f\u7528 ",(0,i.kt)("strong",{parentName:"p"},"implements")," \u548c ",(0,i.kt)("strong",{parentName:"p"},"extends"),"\uff0c\u4f7f\u7528\u8d77\u6765\u662f\u5341\u5206\u65b9\u4fbf\u7684\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"interface Person {\n  name: string;\n  age: number;\n  height: number;\n  weight: number;\n  birthday: string;\n}\n")),(0,i.kt)("p",null,"\u800c\u4f7f\u7528\u8fd9\u79cd ",(0,i.kt)("strong",{parentName:"p"},"interface")," \u5f62\u5f0f\u5927\u591a\u65f6\u5019\u662f\u53c2\u6570\u56fa\u5b9a\u60c5\u51b5\u4f7f\u7528\u7684\u3002\u4f46\u662f\uff0c\u6709\u65f6\u5019\u6211\u4eec\u5728\u8fd0\u7528\u7c7b\u578b\u65f6\uff0c\u662f\u4e0d\u9700\u8981\u5176\u4ed6\u7684\u7c7b\u578b\u3002\u6bd4\u5982\u4e0d\u9700\u8981 ",(0,i.kt)("strong",{parentName:"p"},"age")," \u7c7b\u578b\uff0c\u867d\u7136\u6211\u4eec\u53ef\u4ee5\u5c06\u5176\u8bbe\u7f6e\u4e3a\u53ef\u9009\u7c7b\u578b\uff0c\u4f46\u662f ",(0,i.kt)("strong",{parentName:"p"},"Person")," \u5728\u4fee\u9970\u5176\u4ed6\u53d8\u91cf\u53ef\u80fd\u662f\u5fc5\u9009\uff0c\u90a3\u4e48\u8fd9\u6837\u4e5f\u662f\u4e0d\u80fd\u5f88\u51c6\u786e\u5730\u8868\u8fbe\u3002\n\u8fd8\u6709\uff0c\u5982\u679c\u6211\u4eec\u4f7f\u7528\u7684 ",(0,i.kt)("strong",{parentName:"p"},"Person interface"),"\u63a5\u53e3\u4e0d\u662f\u81ea\u5df1\u5b9a\u4e49\u7684\uff0c\u800c\u662f\u5176\u4ed6\u7ec4\u4ef6\u7684 ",(0,i.kt)("strong",{parentName:"p"},"interface")," \u63a5\u53e3\u3002\u90a3\u4e48\u6211\u4eec\u80af\u5b9a\u662f\u4e0d\u80fd\u4fb5\u5165\u5f0f\u5730\u53bb\u4fee\u6539 ",(0,i.kt)("strong",{parentName:"p"},"age"),"\u4e3a\u53ef\u9009\u6216\u8005\u662f\u5220\u9664\u6389\u3002\u8fd9\u6837\u7684\u8bdd\uff0c\u5c31\u8bf4\u660e\u51fa ",(0,i.kt)("strong",{parentName:"p"},"interface")," \u63a5\u53e3\u5728\u4e00\u5b9a\u662f\u4e0a\u8fd8\u662f\u6709\u4e9b\u4e0d\u7075\u6d3b\u3002\u8fd9\u65f6\u5019\uff0c",(0,i.kt)("strong",{parentName:"p"},"\u65b0\u5efa")," \u4e00\u4e2a\u4f7f\u7528",(0,i.kt)("strong",{parentName:"p"},"\u7c7b\u578b\u522b\u540d"),"\u4fee\u9970\u7b80\u5355\u7684",(0,i.kt)("strong",{parentName:"p"},"\u5bf9\u8c61"),"\u6765\u4ee3\u66ff ",(0,i.kt)("strong",{parentName:"p"},"Person")," \u63a5\u53e3\u3002"),(0,i.kt)("h2",{id:"\u7c7b\u578b\u522b\u540d"},"\u7c7b\u578b\u522b\u540d"),(0,i.kt)("p",null,"\u7c7b\u578b\u522b\u540d\u5728\u672c\u8d28\u4e0a\u8ddf ",(0,i.kt)("strong",{parentName:"p"},"interface")," \u63a5\u53e3\u5f88\u76f8\u4f3c\uff0c\u90fd\u662f\u5bf9\u53d8\u91cf\u8fdb\u884c\u4fee\u9970\u3002",(0,i.kt)("strong",{parentName:"p"},"TypeScript")," \u63d0\u4f9b\u4e86\u4e3a\u7c7b\u578b\u6ce8\u89e3\u8bbe\u7f6e\u522b\u540d\u7684\u4fbf\u6377\u8bed\u6cd5\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("strong",{parentName:"p"},"type \u53d8\u91cf\u540d = \u7c7b\u578b")," \u6765\u521b\u5efa\u522b\u540d\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"type StrOrNum = string | number;\ntype Title = string | { title: string };\ntype NumArr = [number, number];\ntype Callback = (data: string) => void;\n")),(0,i.kt)("p",null,"\u4ee5\u4e0a\u662f\u7c7b\u578b\u522b\u540d\u7684\u7b80\u5355\u8fd0\u7528\uff0c\u770b\u4e0a\u53bb\u4f3c\u4e4e\u5e76\u6ca1\u6709\u6bd4 ",(0,i.kt)("strong",{parentName:"p"},"interface")," \u597d\u7528\u3002\u4f46\u662f \u7c7b\u578b\u522b\u540d\u53ef\u4ee5\u642d\u914d",(0,i.kt)("strong",{parentName:"p"},"\u8054\u5408\u7c7b\u578b"),"\u548c",(0,i.kt)("strong",{parentName:"p"},"\u4ea4\u53c9\u7c7b\u578b"),"\u8fdb\u884c\u5e94\u7528\u3002\u6bd4\u5982\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"interface Person {\n    name: string\n  age: number\n  ...\n}\n// \u6bd4\u5982\u6211\u4eec\u9700\u8981\u77e5\u9053\u5c0f\u660e\u7684\u59d3\u540d\u548c\u5e74\u9f84\uff0c\u4e0d\u592a\u786e\u8ba4\u5176\u4ed6\u5c5e\u6027\u65f6\n// \u5c31\u53ef\u4ee5\u501f\u52a9 Partial\u5c06Person\u7684\u5c5e\u6027\u53d8\u4e3a\u53ef\u9009\uff0c\u5199\u4e0a\u9664\u4e86name\u548cage\u7684\u5c5e\u6027\u4e5f\u4e0d\u4f1a\u62a5\u9519\nconst UnknownPerson: Partial<Person> = {\n  name: 'xiaoming',\n  age: 18\n}\n\n// \u5982\u679c\u6211\u4eec\u53ea\u9700\u8981\u5c0f\u660e\u7684\u59d3\u540d\uff0c\u5176\u4ed6\u5c5e\u6027\u90fd\u4e0d\u9700\u8981\uff0c\u52a0\u4e0a\u5176\u4ed6\u5c5e\u6027\u4f1a\u62a5\u9519\nconst OnlyNamePerson: Pick<Person, 'name'> = {\n  name: 'xiaoming'\n}\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"utility type")," \u7684\u7528\u6cd5\uff1a \u7528\u6cdb\u578b\u7ed9\u5b83\u4f20\u5165\u4e00\u4e2a\u5176\u5b83\u7c7b\u578b\uff0c\u7136\u540e",(0,i.kt)("strong",{parentName:"p"}," utility type "),"\u5bf9\u8fd9\u4e2a\u7c7b\u578b\u8fdb\u884c\u67d0\u79cd\u64cd\u4f5c")),(0,i.kt)("h2",{id:"\u5e38\u7528-utility-types"},"\u5e38\u7528 Utility Types"),(0,i.kt)("h3",{id:"partial-\u6e90\u7801\u89e3\u6790"},"Partial \u6e90\u7801\u89e3\u6790"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Partial")," \u4f5c\u7528\u662f: \u5c06\u7c7b\u578b\u5b9a\u4e49\u7684\u6240\u6709\u5c5e\u6027\u90fd\u4fee\u6539\u4e3a\u53ef\u9009\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'type Partial<T> = {\n  [P in keyof T]?: T[P];\n};\n// T \u662f\u6211\u4eec\u4f20\u5165\u7684\u7c7b\u578b\n// {[P in keyof T]?: T[P];} \u662f\u8fd4\u56de\u540e\u7684\u7c7b\u578b\n// [P in keyof T] \u5c31\u662f\u904d\u5386\u4f20\u5165\u7c7b\u578b\u7684\u6240\u6709key\uff0c\u800c T[P] \u5f53\u7136\u662f\u503cvalue(\u4e5f\u5c31\u662fstring\u3001number...)\n// \u52a0\u4e0a\u4e86?: [P in keyof T]?: T[P] \u8fd9\u6837\u610f\u5473\u7740\u8fd4\u56de\u51fa\u53bb\u7684\u5c5e\u6027\u90fd\u662f\u53ef\u9009\u7684\n\n// \u4f8b\u5b50\n// keyof\u64cd\u4f5c\u7b26\u4f5c\u7528\uff1a \u5c06\u4fee\u9970\u7684\u7c7b\u578b\u7684key\u5168\u90e8\u53d6\u51fa\u6765\uff0c\u8054\u5408\u5728\u4e00\u8d77\u7ec4\u6210\u65b0\u7684\u7c7b\u578b\ntype Person = {\n  name: string;\n  age: number;\n};\ntype PersonKeys = keyof Person;\n// PersonKeys \u7684\u7c7b\u578b\u5c31\u662f "name" | "age"\n')),(0,i.kt)("h3",{id:"pick-\u6e90\u7801\u89e3\u6790"},"Pick \u6e90\u7801\u89e3\u6790"),(0,i.kt)("p",null,"\u4ece\u7c7b\u578b\u5b9a\u4e49\u7684\u5c5e\u6027 T \u4e2d\uff0c\u9009\u53d6\u6307\u5b9a\u4e00\u7ec4\u5c5e\u6027 K\uff0c\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u7c7b\u578b\u5b9a\u4e49\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"type Pick<T, K extends keyof T> = {\n    [P in K]: T[P];\n}\n// \u4f20\u5165\u4e24\u4e2a\u53c2\u6570\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570K \u5fc5\u987b\u662f\u7b2c\u4e00\u4e2a\u53c2\u6570T\u7684\u5b50\u96c6\n// [P in K] \u5c31\u662f\u904d\u5386\u7b2c\u4e8c\u53c2\u6570K\u4e2d\u7c7b\u578b\u7684key\uff0c T[P] \u53d6\u5230\u5bf9\u5e94\u7684value\n\n// \u4f8b\u5b50\ntype Person = {\n    name: string\n  age: number\n  ...\n}\ntype PersonOnlyName = Pick<Person, 'name'> // PersonOnlyName\u53ea\u5269\u4e0bname\u7c7b\u578b\n")),(0,i.kt)("h3",{id:"omit-\u6e90\u7801\u89e3\u6790"},"Omit \u6e90\u7801\u89e3\u6790"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Omit")," \u4f5c\u7528\u662f: \u4ece\u7c7b\u578b\u5b9a\u4e49\u7684\u5c5e\u6027 T \u4e2d\uff0c\u5220\u9664\u6307\u5b9a\u7684\u5c5e\u6027\uff08\u53ef\u7528 | \u6765\u8fde\u63a5\u591a\u4e2a\u9700\u8981\u5220\u9664\u7684\u5c5e\u6027\uff09"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;\n\ntype Exclude<T, U> = T extends U ? never : T;\n// \u8fd9\u4e24\u4e2a\u53c2\u6570T\u3001U\u63a5\u6536\u7684\u662f\u8054\u5408\u7c7b\u578b\uff0c\u4e24\u8005\u4f1a\u8fdb\u884c\u6bd4\u8f83\uff0c\u5982\u679c\u662f\u53c2\u6570T\u7684\u7c7b\u578b\u4e2d\u542b\u6709\u53c2\u6570U\u7684\u7c7b\u578b\uff0c\u5219never\u6389\n// \u8fbe\u5230\u5220\u9664\u7c7b\u578b\u7684\u6548\u679c\uff0c\u5982\u679c\u6ca1\u6709\u5219\u8fd4\u56deT\u5269\u4e0b\u7684\u8054\u5408\u7c7b\u578b\n\n// \u4f8b\u5b50\ntype PersonKeys = keyof Person;\ntype Age = Exclude<PersonKeys, "name">; // \u5c06\u7c7b\u578bkey\u4e2d\u8fc7\u6ee4\u6389name\u7c7b\u578b\uff0c\u53ea\u5269\u4e0bage\u7c7b\u578b\n\n// Omit \u64cd\u4f5c\u7684\u662f\u952e\u503c\u5bf9\uff0cExclude\u64cd\u4f5c\u7684\u662f\u8054\u5408\u7c7b\u578b\n')))}y.isMDXComponent=!0}}]);