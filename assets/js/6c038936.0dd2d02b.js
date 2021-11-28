"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1922],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return g}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(t),g=i,m=u["".concat(p,".").concat(g)]||u[g]||d[g]||a;return t?r.createElement(m,o(o({ref:n},c),{},{components:t})):r.createElement(m,o({ref:n},c))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=u;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},61889:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},assets:function(){return c},toc:function(){return d},default:function(){return g}});var r=t(87462),i=t(63366),a=(t(67294),t(3905)),o=["components"],s={slug:"springboot-redis-keySpaceNotifyfication",title:"SpringBoot\u9879\u76ee\u4e2dRedis\u952e\u7a7a\u95f4\u901a\u77e5",authors:"zeffon",tags:["java","redis"],date:new Date("2020-07-22T00:00:00.000Z")},p=void 0,l={permalink:"/blog/springboot-redis-keySpaceNotifyfication",editUrl:"https://github.com/zeffon/zeffon.github.io/blob/master/blog/2020/2020-07-22-springboot-redis-keySpaceNotifyfication.md",source:"@site/blog/2020/2020-07-22-springboot-redis-keySpaceNotifyfication.md",title:"SpringBoot\u9879\u76ee\u4e2dRedis\u952e\u7a7a\u95f4\u901a\u77e5",description:"\u5f53 redis \u53d7\u5230\u67d0\u4e9b\u4e8b\u4ef6\u7684\u5f71\u54cd\uff0c\u6bd4\u5982\u952e\u88ab\u5220\u9664delete\u6216\u662f\u952e\u8fc7\u671fexpired\uff0credis \u4f1a\u53d1\u5e03\u4e00\u4e2a\u901a\u77e5\u3002\u800c\u6211\u4eec\u53ef\u4ee5\u501f\u52a9\u8fd9\u4e2a\u673a\u5236\u5b9e\u73b0\u4e00\u4e2a\u6d88\u606f\u961f\u5217\u3002",date:"2020-07-22T00:00:00.000Z",formattedDate:"July 22, 2020",tags:[{label:"java",permalink:"/blog/tags/java"},{label:"redis",permalink:"/blog/tags/redis"}],readingTime:5.255,truncated:!0,authors:[{name:"Zeffon Wu",title:"A web engineer",url:"https://github.com/zeffon",imageURL:"https://github.com/zeffon.png",key:"zeffon"}],prevItem:{title:"Vue\u5f15\u8fdbEcharts\u7684\u5173\u7cfb\u56fe",permalink:"/blog/vue-import-echarts-graph"},nextItem:{title:"SpringBoot\u9879\u76ee\u6784\u5efaRocketMQ",permalink:"/blog/springboot-bulid-rocketmq"}},c={authorsImageUrls:[void 0]},d=[{value:"\u524d\u6587",id:"\u524d\u6587",children:[]},{value:"\u6b63\u6587",id:"\u6b63\u6587",children:[{value:"\u5f00\u542f Redis \u952e\u7a7a\u95f4\u901a\u77e5",id:"\u5f00\u542f-redis-\u952e\u7a7a\u95f4\u901a\u77e5",children:[]},{value:"\u8fdb\u884c\u8ba2\u9605\u6d88\u606f",id:"\u8fdb\u884c\u8ba2\u9605\u6d88\u606f",children:[]},{value:"SpringBoot \u9879\u76ee\u5e94\u7528\u952e\u7a7a\u95f4\u901a\u77e5",id:"springboot-\u9879\u76ee\u5e94\u7528\u952e\u7a7a\u95f4\u901a\u77e5",children:[]}]}],u={toc:d};function g(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5f53 redis \u53d7\u5230\u67d0\u4e9b\u4e8b\u4ef6\u7684\u5f71\u54cd\uff0c\u6bd4\u5982",(0,a.kt)("inlineCode",{parentName:"p"},"\u952e\u88ab\u5220\u9664delete"),"\u6216\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"\u952e\u8fc7\u671fexpired"),"\uff0credis \u4f1a\u53d1\u5e03\u4e00\u4e2a\u901a\u77e5\u3002\u800c\u6211\u4eec\u53ef\u4ee5\u501f\u52a9\u8fd9\u4e2a\u673a\u5236\u5b9e\u73b0\u4e00\u4e2a",(0,a.kt)("strong",{parentName:"p"},"\u6d88\u606f\u961f\u5217"),"\u3002"),(0,a.kt)("h2",{id:"\u524d\u6587"},"\u524d\u6587"),(0,a.kt)("p",null,"\u5f88\u591a\u65f6\u5019\uff0c\u6211\u4eec\u7684\u9879\u76ee\u4e1a\u52a1\u4e2d\uff0c\u5f88\u591a\u4e1a\u52a1\u662f\u8981",(0,a.kt)("inlineCode",{parentName:"p"},"\u4e3b\u52a8\u89e6\u53d1"),"\u7684\u3002\u5f53\u8fd9\u79cd\u673a\u5236\u4e0d\u662f\u7531\u7528\u6237\u6216\u8005\u5f00\u53d1\u4eba\u5458\u6765\u89e6\u53d1\u7684\u8bdd\uff0c\u5c31\u9700\u8981\u7a0b\u5e8f\u6765\u5e2e\u52a9\u6211\u4eec\u6765\u89e6\u53d1\u4e86\u3002\n\u9996\u5148\uff0c\u5f88\u591a\u4eba\u60f3\u5230\u7684\u662f\u5b9a\u65f6\u5668\u3002\u901a\u8fc7\u5728\u7a0b\u5e8f\u8bbe\u7f6e\u5b9a\u65f6\u4efb\u52a1\u6765\u4e3b\u52a8\u89e6\u53d1\u67d0\u4e9b\u4e1a\u52a1\u4efb\u52a1\u7684\u6267\u884c\u3002\u5f53\u7136\uff0c\u8fd9\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u65b9\u6cd5\u3002\u53ef\u662f\u5374\u53ea\u9002\u5408",(0,a.kt)("strong",{parentName:"p"},"\u5355\u4f53\u5e94\u7528"),"\uff0c\u5e76\u4e14\u662f\u65e0\u6cd5\u4fdd\u969c\u4efb\u52a1\u51c6\u786e\u6267\u884c\u7684\u3002\u5b9a\u65f6\u4efb\u52a1\u53ea\u662f\u56fa\u5b9a\u4e86\u67d0\u4e00\u4e2a\u65f6\u95f4\u70b9\uff0c\u662f\u65e0\u6cd5\u9002\u5e94\u6211\u4eec\u591a\u6837\u7684\u65f6\u95f4\u5b9a\u65f6\u7684\u3002\u56e0\u6b64\u5f88\u591a\u4f01\u4e1a\u91c7\u7528\u4e86\u6d88\u606f\u4e2d\u95f4\u4ef6\uff08\u6bd4\u5982",(0,a.kt)("strong",{parentName:"p"},"RocketMQ"),"\uff09\u6765\u89e3\u51b3\u8fd9\u4e00\u95ee\u9898\u3002\n\u5176\u5b9e\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u9009\u62e9 Redis \u6765\u89e3\u51b3\u8fd9\u4e00\u95ee\u9898\u3002\u5229\u7528\u7684\u662f Redis \u7684\u952e\u7a7a\u95f4\u901a\u77e5\u529f\u80fd\u3002\u4ece\u4e25\u683c\u610f\u4e49\u4e0a\uff0cRedis \u8fd9\u79cd\u673a\u5236\u5e76\u4e0d\u5c5e\u4e8e",(0,a.kt)("strong",{parentName:"p"},"\u6d88\u606f\u961f\u5217"),"\uff0c\u5b83\u53ea\u662f\u5229\u7528\u4e86\u952e\u76f8\u5173\u7684\u4e8b\u4ef6\u6765\u89e6\u53d1\u4efb\u52a1\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Redis \u7684\u952e\u7a7a\u95f4\u901a\u77e5: \u5f53 redis \u53d7\u5230\u67d0\u4e9b\u4e8b\u4ef6\u7684\u5f71\u54cd\uff0c\u6bd4\u5982",(0,a.kt)("inlineCode",{parentName:"p"},"\u952e\u88ab\u5220\u9664delete"),"\u6216\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"\u952e\u8fc7\u671fexpired"),"\uff0credis \u4f1a\u53d1\u5e03\u4e00\u4e2a\u901a\u77e5\u3002")),(0,a.kt)("p",null,"redis \u952e\u7a7a\u95f4\u901a\u77e5\u662f\u4e00\u79cd\u53d1\u5e03/\u8ba2\u9605\u673a\u5236\uff0c\u6709\u4e24\u79cd\u7c7b\u578b\uff1a\n\u6bd4\u5982\u8fdb\u884c \u5220\u9664\u64cd\u4f5c del key-value \u4e2d\nkey-space \u8fd4\u56de\u7684\u662f\u64cd\u4f5c\u7684\u7c7b\u578b del\nkey-event \u8fd4\u56de\u7684\u662f\u4e8b\u4ef6\u4e2d\u7684 key \u503c"),(0,a.kt)("p",null,"\u64cd\u4f5c\u4e8b\u4ef6\u7c7b\u578b\u6709\u5220\u9664 del\u3001\u8fc7\u671f expired x \u8868\u793a\u3001\u5bf9\u5217\u8868\u64cd\u4f5c\u4e5f\u7b97 l \u8868\u793a\u3001\u5bf9\u96c6\u5408\u64cd\u4f5c\u4e5f\u7b97 s \u8868\u793a\n\u66f4\u591a\u7684\u5728 redis.conf \u4e2d\u67e5\u8be2"),(0,a.kt)("h2",{id:"\u6b63\u6587"},"\u6b63\u6587"),(0,a.kt)("h3",{id:"\u5f00\u542f-redis-\u952e\u7a7a\u95f4\u901a\u77e5"},"\u5f00\u542f Redis \u952e\u7a7a\u95f4\u901a\u77e5"),(0,a.kt)("p",null,"redis \u4e3a\u4e86\u63d0\u4f9b\u6027\u80fd\uff0c\u9ed8\u8ba4\u662f\u4e0d\u5f00\u542f redis \u952e\u7a7a\u95f4\u901a\u77e5\u529f\u80fd\u7684\n\u6240\u4ee5\u624b\u52a8\u5728\u914d\u7f6e\u6587\u4ef6 redis.conf \u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"**notify-keyspace-events Ex**")," \u6253\u5f00\u952e\u7a7a\u95f4\u901a\u77e5\u8fc7\u671f\u4e8b\u4ef6\nE \u8868\u793a key-event x \u8868\u793a\u8fc7 expired \u8fc7\u671f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-conf"},"notify-keyspace-events Ex\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5f00\u542f\u540e\u7531\u4e8e\u672a\u751f\u6548\uff0c\u9700\u8981\u91cd\u542f\u4e00\u4e0b redis\uff0c\u91cd\u542f\u540e\u4fbf\u5f00\u542f\u4e86\u952e\u7a7a\u95f4\u901a\u77e5\u529f\u80fd")),(0,a.kt)("h3",{id:"\u8fdb\u884c\u8ba2\u9605\u6d88\u606f"},"\u8fdb\u884c\u8ba2\u9605\u6d88\u606f"),(0,a.kt)("p",null,"\u5728 redis \u547d\u4ee4\u91cc\u4f7f\u7528\u547d\u4ee4\u8ba2\u9605\u76f8\u5173\u6d88\u606f\n\u6ce8\u610f redis \u662f\u5206\u6570\u636e\u5e93 0-15 \u7684\uff0c\u6ce8\u610f\u5230\u50a8\u5b58\u7684\u4f4d\u7f6e\n\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"select \u6570\u5b57"),"\u5207\u6362\uff0c\u9ed8\u8ba4\u662f 0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# \u8fdb\u5165\u672c\u5730redis\u547d\u4ee4\u884c\n$ redis-cli\n127.0.0.1:6379> psubscribe __keyevent@0__:expired\nReading message... (press Ctrl-C to quit)\n1) "psubscribe"\n2) "__keyevent@0__:expired"\n3) (integer) 1\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8fd9\u6837\u7684\u8bdd\u5df2\u5728 Redis \u5185\u5f00\u542f\u6d88\u606f\u8ba2\u9605\u4e86")),(0,a.kt)("p",null,"\u6253\u5f00\u5176\u5b83\u7684 redis \u547d\u4ee4\u884c\n\u8bbe\u7f6e\u4e00\u6761 key \u4e3a test\uff0cValue \u4e3a testValue\uff0c\u6709\u6548\u671f\u4e3a 30s \u7684\u6570\u636e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"127.0.0.1:6379> setex test 30  testValue\n")),(0,a.kt)("p",null,"\u5927\u6982 30s \u540e\uff0c\u5728\u4e4b\u524d\u7684 redis \u547d\u4ee4\u884c\u5c31\u4f1a\u6253\u5370\u51fa"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'127.0.0.1:6379> psubscribe __keyevent@0__:expired\nReading message... (press Ctrl-C to quit)\n1) "psubscribe"\n2) "__keyevent@0__:expired"\n3) (integer) 1\n4) "test"\n')),(0,a.kt)("h3",{id:"springboot-\u9879\u76ee\u5e94\u7528\u952e\u7a7a\u95f4\u901a\u77e5"},"SpringBoot \u9879\u76ee\u5e94\u7528\u952e\u7a7a\u95f4\u901a\u77e5"),(0,a.kt)("h4",{id:"\u914d\u7f6e\u6587\u4ef6\u8fdb\u884c\u914d\u7f6e-redis"},"\u914d\u7f6e\u6587\u4ef6\u8fdb\u884c\u914d\u7f6e redis"),(0,a.kt)("p",null,"\u6d88\u606f\u5c3d\u91cf\u522b\u4e0e\u5b9e\u9645\u6570\u636e\u5e93 0 \u51b2\u7a81\uff0c\u53ef\u4ee5\u653e\u5728\u5176\u5b83\u7684\u6570\u636e\u5e93\u4e2d"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"spring:\n  redis:\n    localhost: localhost\n    port: 6379\n    password:\n    database: 3\n    listen-pattern: psubscribe __keyevent@3__:expired\n")),(0,a.kt)("h4",{id:"\u5f15\u8fdb-redis-\u4f9d\u8d56"},"\u5f15\u8fdb Redis \u4f9d\u8d56"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-data-redis</artifactId>\n    </dependency>\n")),(0,a.kt)("h4",{id:"\u53d1\u5e03\u4e1a\u52a1\u6d88\u606f"},"\u53d1\u5e03\u4e1a\u52a1\u6d88\u606f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@RequestMapping("/redis")\n@RestController\npublic class RedisTest {\n    @Autowired\n    private StringRedisTemplate redistemplate;\n\n    @GetMapping("/send")\n    public void sendToRedis(String id) {\n        // \u8bbe\u7f6ekey\u4e3aid\uff0cvalue\u968f\u4fbf(\u56e0\u4e3a\u952e\u7a7a\u95f4\u901a\u77e5\u8fd4\u56de\u7684\u53ea\u6709key)\uff0c\u8fc7\u671f\u65f6\u95f430s\n        try {\n            redistemplate.opsForValue().set(id, "1", 30, TimeUnit.SECONDS);\n        } catch (Exception e) {\n            e.printStackTrace();\n        }\n    }\n}\n')),(0,a.kt)("h4",{id:"\u8ba2\u9605-redis-\u6d88\u606f"},"\u8ba2\u9605 redis \u6d88\u606f"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u8d1f\u8d23\u76d1\u542c redis \u952e\u7a7a\u95f4\u901a\u77e5\u7684\u6d88\u606f")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"import org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.data.redis.connection.Message;\nimport org.springframework.data.redis.connection.MessageListener;\nimport org.springframework.stereotype.Component;\n\n@Component\npublic class TopicMessageListener implements MessageListener {\n\n    @Override\n    public void onMessage(Message message, byte[] bytes) {\n        byte[] body = message.getBody();  // \u83b7\u53d6\u5230\u8fc7\u671f\u7684\u952e\n        byte[] channel = message.getChannel();  // \u83b7\u53d6\u5230\u76d1\u542c\u8ba2\u9605\u7684\u7c7b\u578b(psubscribe __keyevent@3__:expired)\n\n        String expiredKey = new String(body);\n        String topic = new String(channel);\n\n        // TODO\n        // \u83b7\u53d6\u5230\u952e\u7a7a\u95f4\u7684key\u4e4b\u540e\uff0c\u6839\u636e\u5b9e\u9645\u7684\u4e1a\u52a1\u8fdb\u884c\u76f8\u5173\u7684\u5904\u7406\n    }\n}\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u914d\u7f6e TopicMessageListener\uff0c\u4f7f\u5176\u751f\u6548")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import org.springframework.beans.factory.annotation.Value;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.data.redis.connection.RedisConnectionFactory;\nimport org.springframework.data.redis.listener.PatternTopic;\nimport org.springframework.data.redis.listener.RedisMessageListenerContainer;\nimport org.springframework.data.redis.listener.Topic;\n\n@Configuration\npublic class MessageListenerConfiguration {\n\n    @Value("${spring.redis.listen-pattern}")\n    public String pattern;\n\n    @Bean\n    public RedisMessageListenerContainer listenerContainer(RedisConnectionFactory redisConnection) {\n        RedisMessageListenerContainer container = new RedisMessageListenerContainer();\n        container.setConnectionFactory(redisConnection); // \u8bbe\u7f6e\u8fde\u63a5\u4fe1\u606f\n        Topic topic = new PatternTopic(this.pattern); // \u8bbe\u7f6e\u76d1\u542c\u4e3b\u9898\n\n        container.addMessageListener(new TopicMessageListener(), topic); // \u76d1\u542c\u5668\u548c\u76d1\u542c\u4e3b\u9898\u52a0\u5165\u5230\u76d1\u542c\u5bb9\u5668\u4e2d\n        return container; // \u5c06\u76d1\u542c\u5bb9\u5668\u52a0\u5165IoC\u5bb9\u5668\u4e2d\n    }\n}\n')))}g.isMDXComponent=!0}}]);