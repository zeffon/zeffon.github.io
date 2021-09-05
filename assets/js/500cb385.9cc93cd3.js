"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9680],{3905:function(t,n,e){e.d(n,{Zo:function(){return p},kt:function(){return b}});var a=e(7294);function i(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function c(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function r(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?c(Object(e),!0).forEach((function(n){i(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function l(t,n){if(null==t)return{};var e,a,i=function(t,n){if(null==t)return{};var e,a,i={},c=Object.keys(t);for(a=0;a<c.length;a++)e=c[a],n.indexOf(e)>=0||(i[e]=t[e]);return i}(t,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(a=0;a<c.length;a++)e=c[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(i[e]=t[e])}return i}var s=a.createContext({}),u=function(t){var n=a.useContext(s),e=n;return t&&(e="function"==typeof t?t(n):r(r({},n),t)),e},p=function(t){var n=u(t.components);return a.createElement(s.Provider,{value:n},t.children)},o={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(t,n){var e=t.components,i=t.mdxType,c=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),k=u(e),b=i,m=k["".concat(s,".").concat(b)]||k[b]||o[b]||c;return e?a.createElement(m,r(r({ref:n},p),{},{components:e})):a.createElement(m,r({ref:n},p))}));function b(t,n){var e=arguments,i=n&&n.mdxType;if("string"==typeof t||i){var c=e.length,r=new Array(c);r[0]=k;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=t,l.mdxType="string"==typeof t?t:i,r[1]=l;for(var u=2;u<c;u++)r[u]=e[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,e)}k.displayName="MDXCreateElement"},8055:function(t,n,e){e.r(n),e.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return p},toc:function(){return o},default:function(){return b}});var a=e(7462),i=e(3366),c=(e(7294),e(3905)),r=["components"],l={slug:"java-generic",title:"Java\u6cdb\u578b\u7684\u8fd0\u7528",authors:"zeffon",tags:["java"],date:new Date("2020-09-14T00:00:00.000Z")},s=void 0,u={permalink:"/blog/java-generic",editUrl:"https://github.com/facebook/zeffon.github.io/blog/blog/2020/2020-09-14-java-generic.md",source:"@site/blog/2020/2020-09-14-java-generic.md",title:"Java\u6cdb\u578b\u7684\u8fd0\u7528",description:"Java \u6cdb\u578b\uff08generics\uff09\u662f JDK 5 \u4e2d\u5f15\u5165\u7684\u4e00\u4e2a\u65b0\u7279\u6027, \u6cdb\u578b\u63d0\u4f9b\u4e86\u7f16\u8bd1\u65f6\u7c7b\u578b\u5b89\u5168\u68c0\u6d4b\u673a\u5236\uff0c\u8be5\u673a\u5236\u5141\u8bb8\u7a0b\u5e8f\u5458\u5728\u7f16\u8bd1\u65f6\u68c0\u6d4b\u5230\u975e\u6cd5\u7684\u7c7b\u578b\u3002\u6cdb\u578b\u7684\u672c\u8d28\u662f\u53c2\u6570\u5316\u7c7b\u578b\uff0c\u4e5f\u5c31\u662f\u8bf4\u6240\u64cd\u4f5c\u7684\u6570\u636e\u7c7b\u578b\u88ab\u6307\u5b9a\u4e3a\u4e00\u4e2a\u53c2\u6570\u3002",date:"2020-09-14T00:00:00.000Z",formattedDate:"September 14, 2020",tags:[{label:"java",permalink:"/blog/tags/java"}],readingTime:3.51,truncated:!0,authors:[{name:"Zeffon Wu",title:"A web engineer",url:"https://github.com/zeffon",imageURL:"https://github.com/zeffon.png",key:"zeffon"}],prevItem:{title:"Java\u4e2djson\u5b57\u7b26\u4e32\u4e0e\u5bf9\u8c61\u7684\u8f6c\u6362jackson",permalink:"/blog/java-string-object-transform-jackson"},nextItem:{title:"vscode\u6253\u5305\u548c\u5b89\u88c5vsix\u6269\u5c55\u5305",permalink:"/blog/vscode-package-and-install-vsix"}},p={authorsImageUrls:[void 0]},o=[{value:"\u524d\u8a00",id:"\u524d\u8a00",children:[]},{value:"\u6b63\u6587",id:"\u6b63\u6587",children:[{value:"StackInt \u7c7b",id:"stackint-\u7c7b",children:[]},{value:"StackObject \u7c7b",id:"stackobject-\u7c7b",children:[]},{value:"StackT \u7c7b",id:"stackt-\u7c7b",children:[]},{value:"\u6cdb\u578b\u9ad8\u7ea7\u5e94\u7528",id:"\u6cdb\u578b\u9ad8\u7ea7\u5e94\u7528",children:[]}]}],k={toc:o};function b(t){var n=t.components,e=(0,i.Z)(t,r);return(0,c.kt)("wrapper",(0,a.Z)({},k,e,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Java \u6cdb\u578b\uff08generics\uff09\u662f JDK 5 \u4e2d\u5f15\u5165\u7684\u4e00\u4e2a\u65b0\u7279\u6027, \u6cdb\u578b\u63d0\u4f9b\u4e86\u7f16\u8bd1\u65f6\u7c7b\u578b\u5b89\u5168\u68c0\u6d4b\u673a\u5236\uff0c\u8be5\u673a\u5236\u5141\u8bb8\u7a0b\u5e8f\u5458\u5728\u7f16\u8bd1\u65f6\u68c0\u6d4b\u5230\u975e\u6cd5\u7684\u7c7b\u578b\u3002",(0,c.kt)("strong",{parentName:"p"},"\u6cdb\u578b\u7684\u672c\u8d28\u662f\u53c2\u6570\u5316\u7c7b\u578b\uff0c\u4e5f\u5c31\u662f\u8bf4\u6240\u64cd\u4f5c\u7684\u6570\u636e\u7c7b\u578b\u88ab\u6307\u5b9a\u4e3a\u4e00\u4e2a\u53c2\u6570\u3002")),(0,c.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,c.kt)("p",null,"Java \u6cdb\u578b\uff08generics\uff09\u662f JDK 5 \u4e2d\u5f15\u5165\u7684\u4e00\u4e2a\u65b0\u7279\u6027, \u6cdb\u578b\u63d0\u4f9b\u4e86\u7f16\u8bd1\u65f6\u7c7b\u578b\u5b89\u5168\u68c0\u6d4b\u673a\u5236\uff0c\u8be5\u673a\u5236\u5141\u8bb8\u7a0b\u5e8f\u5458\u5728\u7f16\u8bd1\u65f6\u68c0\u6d4b\u5230\u975e\u6cd5\u7684\u7c7b\u578b\u3002",(0,c.kt)("strong",{parentName:"p"},"\u6cdb\u578b\u7684\u672c\u8d28\u662f\u53c2\u6570\u5316\u7c7b\u578b\uff0c\u4e5f\u5c31\u662f\u8bf4\u6240\u64cd\u4f5c\u7684\u6570\u636e\u7c7b\u578b\u88ab\u6307\u5b9a\u4e3a\u4e00\u4e2a\u53c2\u6570\u3002")),(0,c.kt)("p",null,"\u50cf Java\u3001C#\u8fd9\u7c7b\u9759\u6001\u7f16\u8bd1\u578b\u8bed\u8a00\u5728\u4f20\u9012\u53c2\u6570\u65f6\uff0c\u8981\u6c42\u53c2\u6570\u7684",(0,c.kt)("inlineCode",{parentName:"p"},"\u7c7b\u578b\u662f\u660e\u786e"),"\u7684\uff0c\u4e0d\u7136\u5219\u4f1a\u5728\u8bed\u6cd5\u68c0\u6d4b\u9636\u6bb5\u5c31\u4f1a\u7ed9\u51fa\u62a5\u9519\u63d0\u9192\u3002"),(0,c.kt)("p",null,"\u6cdb\u578b\u89e3\u51b3\u7684\u95ee\u9898\uff1a"),(0,c.kt)("ol",null,(0,c.kt)("li",{parentName:"ol"},"\u53c2\u6570\u4e0d\u5b89\u5168\u7684\u95ee\u9898(\u5f15\u5165\u6cdb\u578b\u4ee5\u540e\uff0c\u53ef\u4ee5\u5728\u7f16\u8bd1\u9636\u6bb5\u627e\u51fa\u4ee3\u7801\u95ee\u9898\uff0c\u800c\u4e0d\u7528\u5728\u8fd0\u884c\u9636\u6bb5\u624d\u53d1\u73b0 bug)"),(0,c.kt)("li",{parentName:"ol"},"\u89e3\u51b3\u91cd\u590d\u7f16\u7801\u7684\u95ee\u9898")),(0,c.kt)("h2",{id:"\u6b63\u6587"},"\u6b63\u6587"),(0,c.kt)("p",null,"\u4ee5\u6808\u4e3e\u4f8b\uff0c\u901a\u8fc7\u7b80\u5355\u6570\u636e\u7ed3\u6784\u6765\u5448\u73b0\u51fa\u8fd9\u5176\u4e2d\u7684\u4e0d\u8db3\u3002"),(0,c.kt)("h3",{id:"stackint-\u7c7b"},"StackInt \u7c7b"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"StackInt \u7c7b\u4e2d\uff0c\u6709 maxSize \u6808\u5bb9\u91cf\u3001items \u6808\u5b58\u50a8\u7684\u6570\u7ec4\u3001top \u6808\u5934\u6307\u9488(\u4ece\u96f6\u5f00\u59cb)")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-java"},'public class StackInt {\n    private int maxSize;\n    private int[] items;\n    private int top;\n    public StackInt(int maxSize) {\n        this.maxSize = maxSize;\n        this.items = new int[maxSize];\n        this.top = -1;\n    }\n\n    public boolean isFull() {\n        return this.top == this.maxSize - 1;\n    }\n\n    public boolean isNull() {\n        return this.top <= -1;\n    }\n\n    public boolean push(int value) {\n        if(this.isFull()) {\n            return false;\n        }\n        this.items[++this.top] = value;\n        return true;\n    }\n\n    public int pop() {\n        if(this.isNull()) {\n            throw new RuntimeException("\u5f53\u524d\u6808\u4e2d\u65e0\u6570\u636e");\n        }\n        int value = this.items[top];\n        --top;\n        return value;\n    }\n}\n')),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"\u8fdb\u884c\u7b80\u5355\u5730\u8c03\u7528\uff0c\u53d1\u73b0 int \u7c7b\u578b\u6ca1\u95ee\u9898\uff0c\u4f46\u662f\u5176\u5b83\u7c7b\u578b\u5982 String \u4f20\u53c2\u7684\u8bdd\u5c31\u4f1a\u62a5\u9519")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-java"},"public class Main {\n    public static void main(String[] args) {\n        StackInt stackInt = new StackInt(3);\n        stackInt.push(7);\n        stackInt.push(8);\n        int value1 = stackInt.pop();\n        int value2 = stackInt.pop();\n    }\n}\n")),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"StackInt \u592a\u5177\u4f53\u4e86\uff0c\u53ea\u80fd\u4fdd\u5b58 int \u7c7b\u578b\uff0c\u65e0\u6cd5\u4fdd\u5b58\u5176\u5b83\u7c7b\u578b\n\u5982\u679c\u60f3\u8981\u4fdd\u5b58\u5176\u5b83\u7c7b\u578b\uff0c\u90a3\u4e48\u9700\u8981\u518d\u5199\u4e00\u4e2a\u7c7b\u578b Stack \u7c7b\uff0c\u8fd9\u6837\u7684\u8bdd\uff0c\u5c31\u4f1a\u5bfc\u81f4\u91cd\u590d\u7f16\u7801\u7684\u95ee\u9898")),(0,c.kt)("h3",{id:"stackobject-\u7c7b"},"StackObject \u7c7b"),(0,c.kt)("p",null,"\u5982\u4e0a\u6240\u8ff0\uff0cStackInt \u53ea\u80fd\u4fdd\u5b58 int \u7c7b\u578b\uff0c\u65e0\u6cd5\u4fdd\u5b58\u5176\u5b83\u7c7b\u578b\uff0c\u4f46\u662f\u60f3\u8981 StackInt \u5b58\u50a8\u4efb\u610f\u7c7b\u578b\u7684\u6570\u636e\u8be5\u548b\u529e\uff1f\n\u5728\u4e00\u5207\u90fd\u662f\u5bf9\u8c61\u7684 Java \u4e2d\uff0c\u5bf9\u6b64\u6211\u4eec\u662f\u5426\u5229\u7528 Object \u6765\u89e3\u51b3\u8fd9\u4e00\u95ee\u9898\u5462\uff1f"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"\u5c06 StackInt \u6539\u9020\u6210 StackObject")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-java"},'public class StackObject {\n\n    private int maxSize;\n    private Object[] items;\n    private int top;\n\n    public StackObject(int maxSize) {\n        this.maxSize = maxSize;\n        this.items = new Object[maxSize];\n        this.top = -1;\n    }\n\n    public boolean isFull() {\n        return this.top == this.maxSize - 1;\n    }\n\n    public boolean isNull() {\n        return this.top <= -1;\n    }\n\n    public boolean push(int value) {\n        if(this.isFull()) {\n            return false;\n        }\n        this.items[++this.top] = value;\n        return true;\n    }\n\n    public Object pop() {\n        if(this.isNull()) {\n            throw new RuntimeException("\u5f53\u524d\u6808\u4e2d\u65e0\u6570\u636e");\n        }\n        Object value = this.items[top];\n        --top;\n        return value;\n    }\n}\n')),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"\u4f7f\u7528 Object + \u7c7b\u578b\u8f6c\u6362\uff0c\u770b\u4f3c\u5c31\u53ef\u4ee5\u4f20\u5165\u548c\u63a5\u6536\u4efb\u610f\u7c7b\u578b\u53c2\u6570")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-java"},'public class Main {\n    public static void main(String[] args) {\n        StackObject stackObject = new StackObject(3);\n        stackObject.push("abc");\n        stackObject.push("8");\n        Object value1 = (int) stackObject.pop();\n        Object value2 = (String) stackObject.pop();\n        int sum = (int) value1 + (int) value2; // \u7f16\u8bd1\u9636\u6bb5\u4e0d\u62a5\u9519\uff0c\u8fd0\u884c\u9636\u6bb5\u624d\u62a5\u9519\n    }\n}\n')),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"\u5b58\u5728\u7684\u5f0a\u7aef\uff1a")),(0,c.kt)("ol",null,(0,c.kt)("li",{parentName:"ol"},"\u88c5\u7bb1\u62c6\u7bb1\u635f\u8017\u6027\u80fd\n\u88c5\u7bb1\uff1a ",(0,c.kt)("inlineCode",{parentName:"li"},"\u503c\u7c7b\u578b"),"(int)\u7684\u6570\u636e\u8f6c\u6362\u6210",(0,c.kt)("inlineCode",{parentName:"li"},"\u5305\u88c5\u7c7b\u578b"),"(Object)\u7684\u6570\u636e\uff0c\u62c6\u7bb1\u53cd\u4e4b\u3002"),(0,c.kt)("li",{parentName:"ol"},"\u5199\u6cd5\u9ebb\u70e6\uff0c\u9700\u8981\u5f3a\u5236\u8f6c\u578b"),(0,c.kt)("li",{parentName:"ol"},"Object \u662f\u6240\u6709\u7684\u57fa\u7c7b\uff0c\u4f1a\u62b9\u9664\u5177\u4f53\u7c7b\u578b\u7684\u7279\u70b9\uff0cObject \u8868\u793a\u8d77\u6765\u592a\u6a21\u7cca\u4e86\u3002"),(0,c.kt)("li",{parentName:"ol"},"Object \u662f\u4e0d\u5b89\u5168\uff0c\u7531\u4e8e\u4f20\u53c2\u4e0d\u6b63\u786e\u4f1a\u5bfc\u81f4\u5728\u8fd0\u884c\u9636\u6bb5\u624d\u53d1\u73b0 bug\u3002")),(0,c.kt)("h3",{id:"stackt-\u7c7b"},"StackT \u7c7b"),(0,c.kt)("p",null,"StackT \u4f7f\u7528\u6cdb\u578b\u4f1a\u5b58\u5728\u4e00\u4e2a\u5927\u95ee\u9898\uff0c\u6cdb\u578b\u662f\u65e0\u6cd5\u76f4\u63a5\u5b9e\u4f8b\u5316\u7684\u3002"),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"\u6cdb\u578b\u5728\u7f16\u8bd1\u4e4b\u540e\u6cdb\u578b T \u5c31\u4f1a\u88ab\u64e6\u9664,\u800c\u5b9e\u4f8b\u5316\u64cd\u4f5c\u662f\u53d1\u751f\u5728\u8fd0\u884c\u9636\u6bb5\u8fdb\u884c\u7684\uff0c\u6240\u4ee5\u5728",(0,c.kt)("inlineCode",{parentName:"p"},"\u7a0b\u5e8f\u8fd0\u884c\u65f6"),"\u65e0\u6cd5\u8fdb\u884c\u5b9e\u4f8b\u5316\u64cd\u4f5c\uff0c\u6bd5\u7adf",(0,c.kt)("strong",{parentName:"p"},"\u6cdb\u578b\u76f8\u5173\u4fe1\u606f\u5df2\u4e22\u5931"),"\u3002\u6240\u4ee5 Java",(0,c.kt)("inlineCode",{parentName:"p"},"\u5f88\u96be"),"\u76f4\u63a5\u5b9e\u4f8b\u5316\u6216\u8005\u83b7\u53d6\u5f53\u524d\u6cdb\u578b\u771f\u5b9e\u7684\u7c7b\u578b\u3002\u800c Java \u7684\u5b9e\u4f8b\u5316\u5bf9\u8c61\u4e0d\u4e00\u5b9a\u9700\u8981\u901a\u8fc7",(0,c.kt)("inlineCode",{parentName:"p"},"new Object()"),"\u7684\u65b9\u5f0f, \u4e5f\u53ef\u4ee5\u901a\u8fc7",(0,c.kt)("inlineCode",{parentName:"p"},"\u7c7b\u7684\u5143\u7c7b"),"\u7684\u65b9\u5f0f\u6765\u52a8\u6001\u5b9e\u4f8b\u5316\u4e00\u4e2a\u5bf9\u8c61\u3002")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-java"},'/**\n * \u6cdb\u578b\u662f\u4e00\u79cd\u7c7b\u578b\u7684\u7ea6\u5b9a\u3002Object\u592a\u901a\u7528\u4e86\uff0c\u6240\u4ee5\u8bf4\u5931\u53bb\u7c7b\u578b\u7684\u7ea6\u675f\uff0c\u4f7f\u7528\u6cdb\u578b\u53ef\u4ee5\u5bf9\u7c7b\u578b\u8fdb\u884c\u7ea6\u675f\u3002\n * \u5728\u666e\u901a\u7c7b\u540e\u9762\u6dfb\u52a0<T>\uff0c\u76f8\u5f53\u5bf9\u7c7b\u578b\u7684\u7ea6\u5b9a\uff0c\u800cT\u76f8\u5f53\u662f\u4e00\u79cd\u7c7b\u578b\u3002\n * T\u662f\u4e0d\u786e\u5b9a\u662f\u4ec0\u4e48\u7c7b\u578b\u7684\uff0c\u662f\u7531\u8c03\u7528\u65b9\u53c2\u5165\u53c2\u6570\u65f6\u6765\u6307\u5b9a\u7684\n */\npublic class StackT<T> {\n\n    private int maxSize;\n    private T[] items;\n    private int top;\n\n    // \u5728\u6784\u9020\u51fd\u6570\u4f20\u5165\u5143\u7c7b\u6765\u52a8\u6001\u5730\u5b9e\u4f8b\u5316\u5bf9\u8c61\n    public StackT(int maxSize, Class<T> clazz) {\n        this.maxSize = maxSize;\n        this.items = this.createArray(clazz);\n        this.top = -1;\n    }\n\n    public boolean isFull() {\n        return this.top == this.maxSize - 1;\n    }\n\n    public boolean isNull() {\n        return this.top <= -1;\n    }\n\n    public boolean push(T value) {\n        if(this.isFull()) {\n            return false;\n        }\n        this.items[++this.top] = value;\n        return true;\n    }\n\n    public T pop() {\n        if(this.isNull()) {\n            throw new RuntimeException("\u5f53\u524d\u6808\u4e2d\u65e0\u6570\u636e");\n        }\n        T value = this.items[top];\n        --top;\n        return value;\n    }\n\n    private T[] createArray(Class<T> clazz) {\n        T[] array = (T[])Array.newInstance(clazz, this.maxSize);\n        return array;\n    }\n}\n')),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-java"},"public class Main {\n    public static void main(String[] args) {\n        // \u6cdb\u578b\u5728\u6307\u5b9a\u7c7b\u578b\u65f6\uff0c\u662f\u4e0d\u80fd\u7528int\u57fa\u672c\u7c7b\u578b\u6765\u6307\u5b9a\u7684\uff0c\u53ea\u80fd\u7528Integer\u5305\u88c5\u7c7b\u578b\u6765\u6307\u5b9a\n        // \u4f20\u5165\u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u7c7b\u7684\u5143\u7c7b\n        // \u63a5\u6536\u65f6\u4e5f\u8981\u7528\u6cdb\u578b\u6765\u6307\u5b9a\u7c7b\u578b\uff0c\u4e0d\u4f1a\u8ba9\u6cdb\u578b\u8f6c\u53d8\u6210Object\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u5728\u7f16\u8bd1\u9636\u6bb5\u5c31\u53ef\u4ee5\u53d1\u73b0\u62a5\u9519\u4e86\n        StackT<Integer> stackT = new StackT<Integer>(3, Integer.class);\n\n        stackT.push(7);\n        stackT.push(8);\n        int value1 = stackObject.pop();\n        int value2 = stackObject.pop();\n        int sum = value1 + value2;\n    }\n}\n")),(0,c.kt)("h3",{id:"\u6cdb\u578b\u9ad8\u7ea7\u5e94\u7528"},"\u6cdb\u578b\u9ad8\u7ea7\u5e94\u7528"),(0,c.kt)("h4",{id:"\u6cdb\u578b\u65b9\u6cd5"},"\u6cdb\u578b\u65b9\u6cd5"),(0,c.kt)("p",null,"\u6cdb\u578b\u7c7b\u662f\u5728\u666e\u901a\u7c7b\u540e\u9762\u52a0\u4e0a\uff0c\u800c\u6cdb\u578b\u65b9\u6cd5\u662f\u5728",(0,c.kt)("inlineCode",{parentName:"p"},"\u4fee\u9970\u7b26"),"\u5982 public \u540e\u9762\u52a0\u4e0a\u7a7a\u683c\u548c \uff08\u7c7b\u4e00\u822c\u662f\u7528 T \u5360\u4f4d\uff0c\u65b9\u6cd5\u5219\u7528 E\uff09"),(0,c.kt)("h4",{id:"\u6cdb\u578b\u4f20\u53c2"},"\u6cdb\u578b\u4f20\u53c2"),(0,c.kt)("p",null,"\u628a\u6cdb\u578b\u7c7b\u4f5c\u4e3a\u53c2\u6570\u8fdb\u884c\u4f20\u9012\u65f6\uff0c\u5982\u679c\u88ab\u8c03\u7528\u65b9\u4e0d\u6307\u5b9a\u6cdb\u578b\u7c7b\u578b\uff0c\u5219\u4f1a\u628a\u4f20\u8fdb\u6765\u7684\u6cdb\u578b\u8f6c\u6362\u6210 Object"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-java"},'public class Main {\n    public static void main(String[] args) {\n\n        StackT<Integer> stackT = new StackT<Integer>(3, Integer.class);\n        stackT.push(7);\n\n        StackT<String> stackT1 = new StackT<String>(3, String.class);\n        stackT1.push("abc");\n\n        test(stackT);\n        test(stackT1);\n    }\n    // \u53ef\u4ee5\u4f7f\u7528StackT\uff0c\u5219\u4f1a\u628astackT\u5f53\u4f5cObject\n    // \u5982\u679c\u4f7f\u7528StackT<Integer>\u6216\u8005StackT<String>\uff0c\u90a3\u4e48\u8fd9\u6837\u53ea\u80fd\u4f20\u9012\u7279\u70b9\u7c7b\u578b\n    public static void test(StackT stackT) {\n        System.out.println(stackT.pop());\n    }\n}\n')),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"\u5728\u6cdb\u578b StackT \u4f20\u53c2\u8fc7\u7a0b\u4e2d\uff0c\u53ef\u4ee5\u4f7f\u7528 StackT \u4f5c\u4e3a\u53c2\u6570\u63a5\u6536\uff0c\u4f46\u4f1a\u628a stackT \u5f53\u4f5c Object\uff0c\u5982\u679c\u4f7f\u7528 StackT \u6216\u8005 StackT\uff0c\u90a3\u4e48\u8fd9\u6837\u53ea\u80fd\u4f20\u9012\u7279\u70b9\u7c7b\u578b")),(0,c.kt)("h4",{id:"\u6cdb\u578b\u901a\u914d\u7b26"},"\u6cdb\u578b\u901a\u914d\u7b26"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"\u65e0\u8fb9\u754c\u901a\u914d\u7b26\nStackT<?> \u662f\u4f1a\u8f6c\u6210",(0,c.kt)("inlineCode",{parentName:"li"},"Object")),(0,c.kt)("li",{parentName:"ul"},"\u4e0a\u8fb9\u754c\u901a\u914d\u7b26\nStackT<? extends Number>")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-java"},'public class Main {\n    public static void main(String[] args) {\n\n        StackT<Integer> stackT = new StackT<Integer>(3, Integer.class);\n        stackT.push(7);\n\n        StackT<String> stackT1 = new StackT<String>(3, String.class);\n        stackT1.push("abc");\n\n        StackT<Double> stackT2 = new StackT<Double>(3, Double.class);\n        stackT1.push(1.01);\n\n        test(stackT);  // \u6210\u529f\n        test(stackT1); // stackT1\u662f\u5b57\u7b26\u4e32 \u4f1a\u62a5\u9519\n        test(stackT2); // \u6210\u529f\n    }\n    public static void test(StackT<? extends Number> stackT) { // \u4e0a\u8fb9\u754c\u901a\u914d\u7b26\n        System.out.println(stackT.pop());\n    }\n}\n')),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"\u4e0b\u8fb9\u754c\u901a\u914d\u7b26\nStackT<? super Integer>")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-java"},"public class Main {\n    public static void main(String[] args) {\n\n        StackT<Integer> stackT = new StackT<Integer>(3, Integer.class);\n        stackT.push(7);\n\n        StackT<Double> stackT1 = new StackT<Double>(3, Double.class);\n        stackT1.push(1.01);\n\n        StackT<Object> stackT2 = new StackT<Object>(3, Object.class);\n\n        test(stackT);  // stackT\u662fInteger\uff0c\u4f5c\u4e3aNumber\u7684\u4e0b\u7ea7\u662f\u4f1a\u62a5\u9519\u7684\n        test(stackT1); // stackT1\u662fDouble \u4f1a\u62a5\u9519\n        test(stackT2); // \u6210\u529f\n    }\n    // Object -> Number -> Integer\n    // \u4f1a\u9650\u5b9aNumber\u81ea\u5df1\u548c\u4e0a\u7ea7\u53ef\u4ee5\u88ab\u8bc6\u522b\uff0c\u5176\u5b83\u7684\u4e0d\u53ef\u4ee5\n    public static void test(StackT<? super Number> stackT) { // \u4e0b\u8fb9\u754c\u901a\u914d\u7b26\n        System.out.println(stackT.pop());\n    }\n}\n")))}b.isMDXComponent=!0}}]);