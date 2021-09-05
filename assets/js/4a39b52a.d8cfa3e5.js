"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7775],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(t),m=r,g=c["".concat(p,".").concat(m)]||c[m]||u[m]||l;return t?a.createElement(g,i(i({ref:n},d),{},{components:t})):a.createElement(g,i({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=c;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},8006:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},assets:function(){return d},toc:function(){return u},default:function(){return m}});var a=t(7462),r=t(3366),l=(t(7294),t(3905)),i=["components"],o={slug:"java-annotation-validator",title:"Java \u6ce8\u89e3\u68c0\u9a8c\u5668",authors:"zeffon",tags:["java"],date:new Date("2020-04-06T00:00:00.000Z")},p=void 0,s={permalink:"/blog/java-annotation-validator",editUrl:"https://github.com/facebook/zeffon.github.io/blog/blog/2020/2020-04-06-java-annotation-validator.md",source:"@site/blog/2020/2020-04-06-java-annotation-validator.md",title:"Java \u6ce8\u89e3\u68c0\u9a8c\u5668",description:"\u5e73\u65f6\u5728\u5199\u53c2\u6570\u6821\u9a8c\u53ef\u80fd\u5927\u591a\u4f1a\u5728 service \u5c42\u4f7f\u7528 if \u8bed\u53e5\u7684\u65b9\u5f0f\u6765\u5224\u65ad\uff0c\u5176\u5b9e\u6211\u4eec\u53ef\u4ee5\u5f88\u4f18\u96c5\u7684\u4f7f\u7528\u53c2\u6570\u6821\u9a8c--\u6ce8\u89e3\u68c0\u9a8c\u5668",date:"2020-04-06T00:00:00.000Z",formattedDate:"April 6, 2020",tags:[{label:"java",permalink:"/blog/tags/java"}],readingTime:2.325,truncated:!0,authors:[{name:"Zeffon Wu",title:"A web engineer",url:"https://github.com/zeffon",imageURL:"https://github.com/zeffon.png",key:"zeffon"}],prevItem:{title:"Jpa\u8fd4\u56de\u81ea\u5b9a\u4e49\u5bf9\u8c61",permalink:"/blog/jpa-customize-entity"},nextItem:{title:"Java JPA \u539f\u751fSQL\u548cJPQL",permalink:"/blog/java-jpa-jpql-and-native-sql"}},d={authorsImageUrls:[void 0]},u=[{value:"\u524d\u8a00",id:"\u524d\u8a00",children:[]},{value:"\u6b63\u6587",id:"\u6b63\u6587",children:[{value:"JSR-303",id:"jsr-303",children:[]},{value:"\u7b80\u5355\u5b57\u6bb5\u6821\u9a8c",id:"\u7b80\u5355\u5b57\u6bb5\u6821\u9a8c",children:[]},{value:"Body \u6821\u9a8c",id:"body-\u6821\u9a8c",children:[]},{value:"\u7ea7\u8054\u6821\u9a8c",id:"\u7ea7\u8054\u6821\u9a8c",children:[]},{value:"\u81ea\u5b9a\u4e49\u6821\u9a8c\u6ce8\u89e3",id:"\u81ea\u5b9a\u4e49\u6821\u9a8c\u6ce8\u89e3",children:[]},{value:"\u76f8\u5173\u5f02\u5e38",id:"\u76f8\u5173\u5f02\u5e38",children:[]}]}],c={toc:u};function m(e){var n=e.components,t=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u5e73\u65f6\u5728\u5199\u53c2\u6570\u6821\u9a8c\u53ef\u80fd\u5927\u591a\u4f1a\u5728 service \u5c42\u4f7f\u7528 if \u8bed\u53e5\u7684\u65b9\u5f0f\u6765\u5224\u65ad\uff0c\u5176\u5b9e\u6211\u4eec\u53ef\u4ee5\u5f88\u4f18\u96c5\u7684\u4f7f\u7528\u53c2\u6570\u6821\u9a8c--\u6ce8\u89e3\u68c0\u9a8c\u5668"),(0,l.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,l.kt)("p",null,"\u5e73\u65f6\u5728\u5199\u53c2\u6570\u6821\u9a8c\u53ef\u80fd\u5927\u591a\u4f1a\u5728 service \u5c42\u4f7f\u7528 if \u8bed\u53e5\u7684\u65b9\u5f0f\u6765\u5224\u65ad\uff0c\u5176\u5b9e\u6211\u4eec\u53ef\u4ee5\u5f88\u4f18\u96c5\u7684\u4f7f\u7528\u53c2\u6570\u6821\u9a8c--\u6ce8\u89e3\u68c0\u9a8c\u5668\u3002\n\u6ce8\u89e3\u9a8c\u8bc1\u5668\u662f\u901a\u8fc7\u6ce8\u89e3\u7684\u65b9\u5f0f\u7ed9\u4e00\u4e9b\u5b57\u6bb5\u3001\u65b9\u6cd5\u3001\u7c7b\u52a0\u4e0a\u4e86\u6ce8\u89e3\uff0c\u4e0d\u540c\u7684\u6ce8\u89e3\u6709\u7740\u4e0d\u540c\u7684\u6821\u9a8c\uff0c\u8fd9\u6837\u80fd\u5e2e\u52a9\u6211\u4eec\u66f4\u4f18\u96c5\u7684\u5199\u51fa\u4ee3\u7801\u6765\uff0c\u53ef\u8bfb\u6027\u4e5f\u662f\u4e0d\u9519\u3002"),(0,l.kt)("h2",{id:"\u6b63\u6587"},"\u6b63\u6587"),(0,l.kt)("h3",{id:"jsr-303"},"JSR-303"),(0,l.kt)("p",null,"JSR-303 \u63d0\u4f9b\u4e00\u4e2a\u9a8c\u8bc1\u6807\u51c6 Validation\uff0c\u6211\u4eec\u4f1a\u5e38\u5e38\u4f7f\u7528\u5230\u7684\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"@Min"),"\u548c",(0,l.kt)("inlineCode",{parentName:"li"},"@Max")," \u6700\u5c0f\u548c\u6700\u5927\u6570\u9650\u5236"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"@Positive")," \u6574\u6570\u6821\u9a8c"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"@NotBlank")," \u6821\u9a8c\u5b57\u7b26\u4e32\u975e\u7a7a\uff0c\u957f\u5ea6\u5927\u4e8e 0"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"@Email")," \u90ae\u7bb1\u6821\u9a8c"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"@Range")," \u8303\u56f4\u6821\u9a8c"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"@Lenght")," \u957f\u5ea6\u6821\u9a8c"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"@NotNull")," \u4e0d\u4e3a\u7a7a\u68c0\u9a8c"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"@Future")," \u5fc5\u987b\u662f\u5c06\u6765\u65e5\u671f\u6821\u9a8c\n... ...")),(0,l.kt)("h3",{id:"\u7b80\u5355\u5b57\u6bb5\u6821\u9a8c"},"\u7b80\u5355\u5b57\u6bb5\u6821\u9a8c"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"JSR-303"),"\u7684\u6ce8\u89e3\u7528\u5728\u7b80\u5355\u5b57\u6bb5\u4e0a\uff0c\u5982\u8981\u6c42 id \u4e3a\u6574\u6570\uff0c\u6700\u5927\u4e0d\u53ef\u8d85\u8fc7 10"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@RestController\n@RequestMapping("/hello")\npublic class Hello() {\n    @GetMapping("")\n    public void hello(@Positive @Max(value=10, message="\u4e0d\u7528\u8d85\u8fc710\u54af") Integer id) {\n        System.out.println(id);\n    }\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4f46\u662f\u8fd9\u6837\u662f\u4e0d\u80fd\u5f00\u542f\u9a8c\u8bc1\u7684\uff0c\u6211\u4eec\u9700\u8981\u7684\u7c7b\u4e0a\u52a0\u4e0a\u6ce8\u89e3"),(0,l.kt)("inlineCode",{parentName:"p"},"**@Validated**"),(0,l.kt)("strong",{parentName:"p"},"\u624d\u80fd\u4f7f\u6ce8\u89e3\u9a8c\u8bc1\u751f\u6548\u3002"),"\uff08\u8fd8\u53ef\u4ee5\u81ea\u5b9a\u4e49\u9519\u8bef\u6d88\u606f\uff09"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@RestController\n@RequestMapping("/hello")\n@Validated // \u8fd9\u91cc\u52a0\u4e0a @Validated\npublic class Hello() {\n    @GetMapping("")\n    public void hello(@Positive @Max(value=10, message="\u4e0d\u7528\u8d85\u8fc710\u54af") Integer id) {\n        System.out.println(id);\n    }\n}\n')),(0,l.kt)("h3",{id:"body-\u6821\u9a8c"},"Body \u6821\u9a8c"),(0,l.kt)("p",null,"\u6709\u65f6\u5019\u6211\u4eec\u9700\u8981\u6821\u9a8c body \u91cc\u9762\u7684\u53c2\u6570\u6821\u9a8c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@RestController\n@RequestMapping("/hello")\n@Validated\npublic class Hello {\n    @PostMapping("")\n    public void say(@RequestBody Person person) {\n        System.out.println(person.age);\n    }\n}\n\n@Getter\n@Setter\npubilc class Person {\n    @Lenght(min=2, max=10, message="\u522b\u8d85\u51fa\u8303\u56f4")\n    private String name;\n\n    private Integer age;\n}\n')),(0,l.kt)("p",null,"\u8fd9\u65f6\u5019\u8fd8\u662f\u4e0d\u80fd\u6821\u9a8c body \u91cc\u9762\u7684\u53c2\u6570\uff0c\u539f\u56e0\u662f\u6821\u9a8c\u6ca1\u6709\u751f\u6548\u3002\u7c7b\u4e0a\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"@Validated"),"\u662f\u7ed9\u8be5\u7c7b\u4e0b\u5b57\u6bb5\u5f00\u542f\u6821\u9a8c\u7684\uff0c\u800c\u6211\u4eec\u8981\u6821\u9a8c\u7684 age \u662f\u5728 Person \u7c7b\u4e0b\uff0c\u90a3\u6211\u4eec\u9700\u8981\u8dd1\u5230 Person \u7c7b\u6253\u4e0a\u6ce8\u89e3\u5417\uff1f\u5e76\u4e0d\u9700\u8981, \u53ea\u9700\u8981\u5728\u5bf9\u5e94\u4f20\u5165\u53c2\u6570\u6253\u4e0a\u5c31\u884c\u4e86"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@RestController\n@RequestMapping("/hello")\n@Validated\npublic class Hello {\n    @PostMapping("")\n    public void say(@RequestBody @Validated Person person) { // \u8fd9\u91cc\u52a0\u4e0a @Validated\n        System.out.println(person.age);\n    }\n}\n')),(0,l.kt)("h3",{id:"\u7ea7\u8054\u6821\u9a8c"},"\u7ea7\u8054\u6821\u9a8c"),(0,l.kt)("p",null,"\u6709\u65f6\u5019\u4f20\u5165\u7684 body \u5bf9\u8c61\u53c8\u5305\u542b\u4e86\u5bf9\u8c61\uff0c\u90a3\u8fd9\u65f6\u5019\u53c8\u5982\u4f55\u6821\u9a8c\u5462\uff1f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@RestController\n@RequestMapping("/hello")\n@Validated\npublic class Hello {\n    @PostMapping("")\n    public void say(@RequestBody Person person) {\n        System.out.println(person.age);\n    }\n}\n\n@Getter\n@Setter\npubilc class Person {\n    @Lenght(min=2, max=10, message="\u522b\u8d85\u51fa\u8303\u56f4")\n    private String name;\n\n    private Integer age;\n\n    private Car car;\n}\n\n@Getter\n@Setter\npubilc class Car {\n    @Lenght(min=2, max=10, message="\u522b\u8d85\u51fa\u8303\u56f4")\n    private String name;\n}\n')),(0,l.kt)("p",null,"\u90a3\u663e\u7136\u5bf9 Car \u7c7b\u7684 name \u6821\u9a8c\u662f\u6ca1\u6709\u6210\u529f\uff0c\u5176\u6ca1\u6709\u751f\u6548\u3002\u9700\u8981\u5728 Person \u7c7b\u4e0b car \u5b57\u6bb5\u4e0a\u6253\u4e0a",(0,l.kt)("inlineCode",{parentName:"p"},"@Valid")," ",(0,l.kt)("strong",{parentName:"p"},"\u6807\u5fd7\u7ea7\u8054\u68c0\u9a8c")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@Getter\n@Setter\npubilc class Person {\n    @Lenght(min=2, max=10, message="\u522b\u8d85\u51fa\u8303\u56f4")\n    private String name;\n\n    private Integer age;\n    @Valid // \u8fd9\u91cc\u52a0\u4e0a @Valid\n    private Car car;\n}\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},"@Validated"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"@Valid"),"\n\u8fd9\u4e24\u4e2a\u90fd\u662f\u53ef\u4ee5\u7528\u6765\u6821\u9a8c\u7684\uff0c\u4f7f\u7528\u7684\u573a\u666f\u548c\u529f\u80fd\u4e0a\u6709\u70b9\u533a\u522b\uff0c\u4f46\u662f\u603b\u4f53\u4e0a\u662f\u5dee\u4e0d\u591a\u7684\uff0c\u4e24\u8005\u90fd\u53ef\u4ee5\u7528\u6765\u5f00\u542f\u6821\u9a8c\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"@Valid"),"\u662f Java \u63d0\u4f9b\u7684\u4e00\u79cd\u6807\u51c6\uff0c\u800c",(0,l.kt)("inlineCode",{parentName:"p"},"@Validated"),"\u662f Spring \u5bf9",(0,l.kt)("inlineCode",{parentName:"p"},"@Valid"),"\u7684\u6269\u5c55\uff0c\u6240\u4ee5\u8bf4\u4e24\u8005\u662f\u5f88\u76f8\u4f3c\u7684\u3002\u4e00\u822c\u4f1a\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"@Validated"),"\u6765\u5f00\u542f\u9a8c\u8bc1\uff0c\u800c",(0,l.kt)("inlineCode",{parentName:"p"},"@Valid"),"\u5219\u7528\u5728\u7ea7\u8054\u68c0\u9a8c\u4e0a")),(0,l.kt)("h3",{id:"\u81ea\u5b9a\u4e49\u6821\u9a8c\u6ce8\u89e3"},"\u81ea\u5b9a\u4e49\u6821\u9a8c\u6ce8\u89e3"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u7f16\u5199\u6ce8\u89e3\u7c7b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@Documented // \u6ce8\u89e3\u91cc\u7684\u6ce8\u91ca\u52a0\u5165\u6587\u6863\n@Retention(RetentionPolicy.RUNTIME) // \u6ce8\u89e3\u4fdd\u7559\u5230\u8fd0\u884c\u9636\u6bb5\n@Target({ElementType.TYPE, ElementType.FIELD}) // \u76ee\u6807\u4f7f\u7528\u7c7b\u4e0a\u548c\u65b9\u6cd5\u4e0a\n@Constraint(validatedBy = PasswordValidator.class) // \u5173\u8054\u903b\u8f91\u7c7b\uff0c\u7f16\u5199\u5177\u4f53\u903b\u8f91\u5224\u65ad\uff08\u6ca1\u6709\u6307\u5b9a\u7684\u8bdd\u4f1a\u62a5HV000030\u9519\uff09\npublic @interface PasswordEqual {\n\n    int min() default 4;\n\n    int max() default 6;\n\n    String message() default "password are not equal";\n\n    Class<?>[] groups() default {};\n\n    Class<? extends Payload>[] payload() default {};\n}\n')),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u5173\u8054\u6ce8\u89e3\u7c7b(\u5177\u4f53\u5224\u65ad\u903b\u8f91)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * \u9700\u8981\u5b9e\u73b0ConstraintValidator\u5e76\u9700\u8981\u4e24\u4e2a\u53c2\u6570\n * \u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u6307\u5b9a\u6ce8\u89e3\u7c7b \u7b2c\u4e8c\u4e2a\u53c2\u6570\uff1a\u81ea\u5b9a\u4e49\u6ce8\u89e3\u4fee\u9970\u7684\u76ee\u6807\u7684\u7c7b\u578b\n * \u9700\u8981\u8986\u76d6\u4e24\u4e2a\u65b9\u6cd5initialize()\u548cisValid()\n */\npublic class PasswordValidator implements ConstraintValidator<PasswordEqual, PersonDTO> {\n    private int min;\n    private int max;\n\n    @Override\n    public void initialize(PasswordEqual constrainAnnotation) {\n        this.min = constrainAnnotation.min();\n        this.max = constrainAnnotation.max();\n    }\n\n    @Override\n    public boolean isValid(PersonDTO personDTO, ConstraintValidatorContext constraintValidatorContext) {\n        String password1 = personDTO.getPassword1();\n        String password2 = personDTO.getPassword2();\n        boolean match = password1.equals(password2);\n        return match;\n    }\n}\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u5728\u9700\u8981\u6821\u9a8c\u7684\u7c7b\u4e0a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"@Builder\n@Getter\n@PasswordEqual(min=1) // \u8fd9\u91cc\u4f7f\u7528\npublic class PersonDTO {\n\n    private String password1;\n    private String password2;\n}\n")),(0,l.kt)("h3",{id:"\u76f8\u5173\u5f02\u5e38"},"\u76f8\u5173\u5f02\u5e38"),(0,l.kt)("h4",{id:"hv000030"},"HV000030"),(0,l.kt)("p",null,"HV000030: No validator could be found for type\n\u539f\u56e0\u662f\u6ce8\u89e3\u7c7b PasswordEqual \u6ca1\u6709\u4e0e\u5173\u8054\u7c7b PasswordValidator\uff0c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"@Constraint(validatedBy = PasswordValidator.class)\n")),(0,l.kt)("h4",{id:"hv000028"},"HV000028"),(0,l.kt)("p",null,"HV000028: Unexpected exception during isValid call\n\u539f\u56e0\u662f PasswordValidator \u7684\u65b9\u6cd5 isValid \u51fa\u73b0\u5f02\u5e38\u4e86\uff0c\u5177\u4f53\u62a5\u9519\u9700\u8981\u6253\u65ad\u70b9\u5206\u6790\u5373\u53ef\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"    @Override\n    public boolean isValid(PersonDTO personDTO, ConstraintValidatorContext constraintValidatorContext) {\n        String password1 = personDTO.getPassword1();\n        String password2 = personDTO.getPassword2();\n        boolean match = password1.equals(password2);\n        return match;\n    }\n")))}m.isMDXComponent=!0}}]);