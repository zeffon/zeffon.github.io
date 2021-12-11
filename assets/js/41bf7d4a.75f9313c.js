"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7473],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),p=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(t),d=r,g=s["".concat(c,".").concat(d)]||s[d]||m[d]||o;return t?a.createElement(g,l(l({ref:n},u),{},{components:t})):a.createElement(g,l({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=s;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},35008:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return u},toc:function(){return m},default:function(){return d}});var a=t(87462),r=t(63366),o=(t(67294),t(3905)),l=["components"],i={slug:"java-annotation",title:"Java \u6ce8\u89e3",authors:"zeffon",tags:["java"],date:new Date("2019-11-07T00:00:00.000Z")},c=void 0,p={permalink:"/blog/java-annotation",editUrl:"https://github.com/zeffon/zeffon.github.io/blob/master/blog/2019/2019-11-07-java-annotation.md",source:"@site/blog/2019/2019-11-07-java-annotation.md",title:"Java \u6ce8\u89e3",description:"Java \u6ce8\u89e3\u53c8\u79f0\u4e3a\u6807\u6ce8\uff0c\u662f Java \u63d0\u4f9b\u4e86\u4e00\u79cd\u539f\u7a0b\u5e8f\u4e2d\u7684\u5143\u7d20\u5173\u8054\u4efb\u4f55\u4fe1\u606f\u548c\u4efb\u4f55\u5143\u6570\u636e\u7684\u9014\u5f84\u548c\u65b9\u6cd5\u3002Java \u4e2d\u7684\u7c7b\u3001\u65b9\u6cd5\u3001\u53d8\u91cf\u3001\u53c2\u6570\u3001\u5305\u90fd\u53ef\u4ee5\u88ab\u6ce8\u89e3\u3002",date:"2019-11-07T00:00:00.000Z",formattedDate:"November 7, 2019",tags:[{label:"java",permalink:"/blog/tags/java"}],readingTime:1.895,truncated:!0,authors:[{name:"Zeffon Wu",title:"A web engineer",url:"https://github.com/zeffon",imageURL:"https://github.com/zeffon.png",key:"zeffon"}],prevItem:{title:"Java \u5e76\u53d1\u7f16\u7a0b\u7684\u57fa\u77f3",permalink:"/blog/java-concurrent"},nextItem:{title:"GROUP BY\u548cHAVING\u7684\u7528\u6cd5",permalink:"/blog/group-by-and-having"}},u={authorsImageUrls:[void 0]},m=[{value:"Java \u4e2d\u5e38\u89c1\u6ce8\u89e3",id:"java-\u4e2d\u5e38\u89c1\u6ce8\u89e3",children:[]},{value:"\u5e38\u89c1\u7b2c\u4e09\u65b9\u6ce8\u89e3",id:"\u5e38\u89c1\u7b2c\u4e09\u65b9\u6ce8\u89e3",children:[]},{value:"\u4f7f\u7528\u6ce8\u89e3\u7684\u8bed\u6cd5",id:"\u4f7f\u7528\u6ce8\u89e3\u7684\u8bed\u6cd5",children:[]}],s={toc:m};function d(e){var n=e.components,t=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Java \u6ce8\u89e3\u53c8\u79f0\u4e3a\u6807\u6ce8\uff0c\u662f Java \u63d0\u4f9b\u4e86\u4e00\u79cd\u539f\u7a0b\u5e8f\u4e2d\u7684\u5143\u7d20\u5173\u8054\u4efb\u4f55\u4fe1\u606f\u548c\u4efb\u4f55\u5143\u6570\u636e\u7684\u9014\u5f84\u548c\u65b9\u6cd5\u3002Java \u4e2d\u7684\u7c7b\u3001\u65b9\u6cd5\u3001\u53d8\u91cf\u3001\u53c2\u6570\u3001\u5305\u90fd\u53ef\u4ee5\u88ab\u6ce8\u89e3\u3002"),(0,o.kt)("h3",{id:"java-\u4e2d\u5e38\u89c1\u6ce8\u89e3"},"Java \u4e2d\u5e38\u89c1\u6ce8\u89e3"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"@interface \u6ce8\u89e3\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"1.\u8868\u793a\u5b9a\u4e49\u7684\u662f\u4e00\u4e2a\u6ce8\u89e3(\u4e0d\u662f\u7c7b\uff0c\u4e5f\u4e0d\u662f\u63a5\u53e3)\uff1b\n2.\u6210\u5458\u8981\u4ee5\u65e0\u53c2\u65e0\u5f02\u5e38\u7684\u65b9\u5f0f\u58f0\u660e\uff1b\n3.\u53ef\u4ee5\u7528default\u4e3a\u6210\u5458\u6307\u5b9a\u4e00\u4e2a\u9ed8\u8ba4\u503c\uff1b\n4.\u6210\u5458\u7c7b\u578b\u53d7\u9650\u5236\uff0c\u5408\u6cd5\u7684\u7c7b\u578b\u5305\u62ec\u539f\u59cb\u6570\u636e\u7c7b\u578b\u548cString(\u5e38\u7528),Class,Annotation,Enumeration\uff1b\n5.\u5982\u679c\u6ce8\u89e3\u53ea\u6709\u4e00\u4e2a\u6210\u5458\uff0c\u5219\u8be5\u6210\u5458\u540d\u5fc5\u987b\u4e3avalue()\uff0c\u5728\u4f7f\u7528\u65f6\u53ef\u5ffd\u7565\u6210\u5458\u540d\u548c\u8d4b\u503c\u53f7(=)\uff1b\n6.\u6ce8\u89e3\u7c7b\u53ef\u4ee5\u6ca1\u7528\u6210\u5458\uff0c\u6b64\u65f6\u8be5\u6ce8\u89e3\u88ab\u79f0\u4e3a\u201c\u6807\u8bc6\u6ce8\u89e3\u201d\uff1b\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5143\u6ce8\u89e3")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"@Target(ElementType.ANNOTATION_TYPE)  \u6ce8\u89e3\u7684\u4f5c\u7528\u57df\nTYPE //Class,interface  \u7c7b\u548c\u63a5\u53e3\nFIELD //Field  declaration \u5b57\u6bb5\u58f0\u660e\nMETHOD //Method  declaration \u65b9\u6cd5\u58f0\u660e\nPARAMETER //Formal  parameter  declaration \u53c2\u6570\u58f0\u660e\nCONSTRUCTOR //Constructor  declaration \u6784\u9020\u65b9\u6cd5\nLOCAL_VARIABLE //Local  variable  declaration \u5c40\u90e8\u53d8\u91cf\nANNOTATION_TYPE //Annotation  type  declaration \u6ce8\u89e3\u7c7b\u578b\u58f0\u660e\nPACKAGE //Packagedeclaration \u5305\u58f0\u660e\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"@Retention(RetentionPolicy.RUNTIME)  \u6ce8\u89e3\u7684\u751f\u547d\u5468\u671f\nSOURCE //Annotations are to be discarded by the compiler\n        //\u53ea\u5728\u6e90\u4ee3\u7801\u663e\u793a\uff0c\u7f16\u8bd1\u65f6\u4f1a\u653e\u5f03\nCLASS //Annotations are to be recorded in the class file by the compiler.\n        //But need not be retained by the VM at runtime. This is the default behavior.\n        //\u7f16\u8bd1\u65f6\u4f1a\u8bb0\u5f55\u5230class\u4e2d\uff0c\u8fd0\u884c\u65f6\u5ffd\u7565\nRUNTIME //Annotations are to be recorded in the class file by the compiler and retained\n        //by the VM at runtime, so they may be read reflectively.\n        //\u8fd0\u884c\u65f6\u5b58\u5728\uff0c\u53ef\u4ee5\u901a\u8fc7\u53cd\u5c04\u8bfb\u53d6\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"@Inherited\n//\u5141\u8bb8\u5b50\u7c7b\u7ee7\u627f\n@Documented\n@Retention(RetentionPolicy.RUNTIME)\n@Target(ElementType.ANNOTATION_TYPE)\npublic @interface Inherited {\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"@Documented\n//\u751f\u6210javadoc\u65f6\u4f1a\u5305\u542b\u6ce8\u89e3\u4fe1\u606f\n@Documented\n@Retention(RetentionPolicy.RUNTIME)\n@Target(ElementType.ANNOTATION_TYPE)\npublic @interface Documented {\n}\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"JDK \u4e2d\u81ea\u5e26\u6ce8\u89e3")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"@Override\n//\u4e00\u822c\u5728\u5b9e\u73b0\u4e86\u63a5\u53e3\u7684\u65b9\u6cd5\u4e0a\u6807\u8bc6\uff0c\u4f5c\u7528\u662f\u544a\u8bc9\u7f16\u8bd1\u5668\u8be5\u65b9\u6cd5\u662f\u63a5\u53e3\u7684\u65b9\u6cd5\u3002\u8be5\u65b9\u6cd5\u7684\u786e\u8986\u76d6\u6216\u5b9e\u73b0\u4e86\u5728\u8d85\u7c7b\u578b\u4e2d\u58f0\u660e\u7684\u65b9\u6cd5\u3002\n@Target(ElementType.METHOD)\n@Retention(RetentionPolicy.SOURCE)\npublic @interface Override {\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"@Deprecated\n//\u4e00\u822c\u5728\u63a5\u53e3\u4e2d\u7684\u65b9\u6cd5\u4e0a\u8fdb\u884c\u6807\u8bc6\uff0c\u4f5c\u7528\u662f\u8be5\u65b9\u6cd5\u8fc7\u65f6\u4e86\u3002\n@Documented\n@Retention(RetentionPolicy.RUNTIME)\n@Target(value={CONSTRUCTOR, FIELD, LOCAL_VARIABLE, METHOD, PACKAGE, PARAMETER, TYPE})\npublic @interface Deprecated {\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@Suppvisewarnings\n//\u5ffd\u89c6\u8b66\u544a\uff0c@SuppressWarnings("deprecation")\n@Target({TYPE, FIELD, METHOD, PARAMETER, CONSTRUCTOR, LOCAL_VARIABLE})\n@Retention(RetentionPolicy.SOURCE)\npublic @interface SuppressWarnings {\n    String[] value();\n}\n')),(0,o.kt)("h3",{id:"\u5e38\u89c1\u7b2c\u4e09\u65b9\u6ce8\u89e3"},"\u5e38\u89c1\u7b2c\u4e09\u65b9\u6ce8\u89e3"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"@Autowired"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"@Autowired\n//@Service\u53ef\u4ee5\u5bf9\u7c7b\u6210\u5458\u53d8\u91cf\u3001\u65b9\u6cd5\u53ca\u6784\u9020\u51fd\u6570\u8fdb\u884c\u6807\u6ce8\uff0c\u5b8c\u6210\u81ea\u52a8\u88c5\u914d\u7684\u5de5\u4f5c\u3002\n//\u901a\u8fc7@Autowired\u7684\u4f7f\u7528\u6765\u6d88\u9664set()\u3001get()\u65b9\u6cd5,\u4f7f\u5f97\u63a5\u53e3\u53ef\u4ee5\u88ab\u5bb9\u5668\u6ce8\u5165\n@Target({ElementType.CONSTRUCTOR, ElementType.METHOD, ElementType.PARAMETER, ElementType.FIELD, ElementType.ANNOTATION_TYPE})\n@Retention(RetentionPolicy.RUNTIME)\n@Documented\npublic @interface Autowired {\n    boolean required() default true;\n}\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"@Resource"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@Resource\n//@Resource\u7684\u4f5c\u7528\u76f8\u5f53\u4e8e@Autowired\n//\u53ea\u4e0d\u8fc7@Autowired\u6309byType\u81ea\u52a8\u6ce8\u5165\uff0c\u800c@Resource\u9ed8\u8ba4\u6309byName\u81ea\u52a8\u6ce8\u5165\n@Target({TYPE, FIELD, METHOD})\n@Retention(RUNTIME)\npublic @interface Resource {\n    String name() default "";\n    Class<?> type() default java.lang.Object.class;\n}\n//@Resource\u6709\u4e24\u4e2a\u5c5e\u6027\u662f\u6bd4\u8f83\u91cd\u8981\u7684\uff0c\u5206\u662fname\u548ctype\u3002\n//Spring\u5c06@Resource\u6ce8\u89e3\u7684name\u5c5e\u6027\u89e3\u6790\u4e3abean\u7684\u540d\u5b57\uff0c\u800ctype\u5c5e\u6027\u5219\u89e3\u6790\u4e3abean\u7684\u7c7b\u578b\u3002\n//\u6240\u4ee5\u5982\u679c\u4f7f\u7528name\u5c5e\u6027\uff0c\u5219\u4f7f\u7528byName\u7684\u81ea\u52a8\u6ce8\u5165\u7b56\u7565\uff0c\u800c\u4f7f\u7528type\u5c5e\u6027\u65f6\u5219\u4f7f\u7528byType\u81ea\u52a8\u6ce8\u5165\u7b56\u7565\u3002\n//\u5982\u679c\u65e2\u4e0d\u6307\u5b9aname\u4e5f\u4e0d\u6307\u5b9atype\u5c5e\u6027\uff0c\u8fd9\u65f6\u5c06\u901a\u8fc7\u53cd\u5c04\u673a\u5236\u4f7f\u7528byName\u81ea\u52a8\u6ce8\u5165\u7b56\u7565\u3002\n@Resource\u88c5\u914d\u987a\u5e8f\n//1. \u5982\u679c\u540c\u65f6\u6307\u5b9a\u4e86name\u548ctype\uff0c\u5219\u4eceSpring\u4e0a\u4e0b\u6587\u4e2d\u627e\u5230\u552f\u4e00\u5339\u914d\u7684bean\u8fdb\u884c\u88c5\u914d\uff0c\u627e\u4e0d\u5230\u5219\u629b\u51fa\u5f02\u5e38\n//2. \u5982\u679c\u6307\u5b9a\u4e86name\uff0c\u5219\u4ece\u4e0a\u4e0b\u6587\u4e2d\u67e5\u627e\u540d\u79f0\uff08id\uff09\u5339\u914d\u7684bean\u8fdb\u884c\u88c5\u914d\uff0c\u627e\u4e0d\u5230\u5219\u629b\u51fa\u5f02\u5e38\n//3. \u5982\u679c\u6307\u5b9a\u4e86type\uff0c\u5219\u4ece\u4e0a\u4e0b\u6587\u4e2d\u627e\u5230\u7c7b\u578b\u5339\u914d\u7684\u552f\u4e00bean\u8fdb\u884c\u88c5\u914d\uff0c\u627e\u4e0d\u5230\u6216\u8005\u627e\u5230\u591a\u4e2a\uff0c\u90fd\u4f1a\u629b\u51fa\u5f02\u5e38\n//4. \u5982\u679c\u65e2\u6ca1\u6709\u6307\u5b9aname\uff0c\u53c8\u6ca1\u6709\u6307\u5b9atype\uff0c\u5219\u81ea\u52a8\u6309\u7167byName\u65b9\u5f0f\u8fdb\u884c\u88c5\u914d\uff1b\n//   \u5982\u679c\u6ca1\u6709\u5339\u914d\uff0c\u5219\u56de\u9000\u4e3a\u4e00\u4e2a\u539f\u59cb\u7c7b\u578b\u8fdb\u884c\u5339\u914d\uff0c\u5982\u679c\u5339\u914d\u5219\u81ea\u52a8\u88c5\u914d\uff1b\n')),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"@Controller"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@Controller\n//\u7528\u4e8e\u6807\u6ce8\u63a7\u5236\u5c42\u7ec4\u4ef6\n@Target({ElementType.TYPE})\n@Retention(RetentionPolicy.RUNTIME)\n@Documented\n@Component\npublic @interface Controller {\n    @AliasFor(\n        annotation = Component.class\n    )\n    String value() default "";\n}\n')),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"@Service"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@Service\n//@Service\u7528\u4e8e\u6807\u6ce8\u4e1a\u52a1\u5c42\u7ec4\u4ef6\n@Target({ElementType.TYPE})\n@Retention(RetentionPolicy.RUNTIME)\n@Documented\n@Component\npublic @interface Service {\n    @AliasFor(\n        annotation = Component.class\n    )\n    String value() default "";\n}\n')),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"@Repository"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@Repository\n//\u7528\u4e8e\u6807\u6ce8\u6570\u636e\u8bbf\u95ee\u7ec4\u4ef6\n@Target({ElementType.TYPE})\n@Retention(RetentionPolicy.RUNTIME)\n@Documented\n@Component\npublic @interface Repository {\n    @AliasFor(\n        annotation = Component.class\n    )\n    String value() default "";\n}\n')),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"@Component"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@Component\n//\u6cdb\u6307\u7ec4\u4ef6\uff0c\u5f53\u7ec4\u4ef6\u4e0d\u597d\u5f52\u7c7b\u7684\u65f6\u5019\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e2a\u6ce8\u89e3\u8fdb\u884c\u6807\u6ce8\u3002\n@Target({ElementType.TYPE})\n@Retention(RetentionPolicy.RUNTIME)\n@Documented\n@Indexed\npublic @interface Component {\n    String value() default "";\n}\n')),(0,o.kt)("h3",{id:"\u4f7f\u7528\u6ce8\u89e3\u7684\u8bed\u6cd5"},"\u4f7f\u7528\u6ce8\u89e3\u7684\u8bed\u6cd5"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u4f8b\u5982\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@<\u6ce8\u89e3\u540d>(<\u6210\u5458\u540d1>=<\u6210\u5458\u503c1>, <\u6210\u5458\u540d2>=<\u6210\u5458\u503c2>, \u2026)\n@Description(desc="I am little bird", author="jermi", age=1)\npublic String bird(){\n    return "bird";\n}\n')))}d.isMDXComponent=!0}}]);