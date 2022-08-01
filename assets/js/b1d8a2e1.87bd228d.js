"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4464],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(t),d=o,g=m["".concat(s,".").concat(d)]||m[d]||l[d]||a;return t?r.createElement(g,c(c({ref:n},p),{},{components:t})):r.createElement(g,c({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=t[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},64495:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return c},default:function(){return l},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return u}});var r=t(83117),o=(t(67294),t(3905));const a={slug:"springboot-bulid-rocketmq",title:"SpringBoot\u9879\u76ee\u6784\u5efaRocketMQ",authors:"zeffon",tags:["java","mq"],date:new Date("2020-07-11T00:00:00.000Z")},c=void 0,i={permalink:"/blog/springboot-bulid-rocketmq",editUrl:"https://github.com/zeffon/zeffon.github.io/blob/master/blog/2020/2020-07-11-springboot-bulid-rocketmq.md",source:"@site/blog/2020/2020-07-11-springboot-bulid-rocketmq.md",title:"SpringBoot\u9879\u76ee\u6784\u5efaRocketMQ",description:"\u5728 SpringBoot \u9879\u76ee\u4e2d\u5982\u4f55\u6784\u5efa RocketMQ \u8fdb\u884c\u901a\u4fe1",date:"2020-07-11T00:00:00.000Z",formattedDate:"July 11, 2020",tags:[{label:"java",permalink:"/blog/tags/java"},{label:"mq",permalink:"/blog/tags/mq"}],readingTime:3.53,hasTruncateMarker:!0,authors:[{name:"Zeffon Wu",title:"A web engineer",url:"https://github.com/zeffon",imageURL:"https://github.com/zeffon.png",key:"zeffon"}],frontMatter:{slug:"springboot-bulid-rocketmq",title:"SpringBoot\u9879\u76ee\u6784\u5efaRocketMQ",authors:"zeffon",tags:["java","mq"],date:"2020-07-11T00:00:00.000Z"},prevItem:{title:"SpringBoot\u9879\u76ee\u4e2dRedis\u952e\u7a7a\u95f4\u901a\u77e5",permalink:"/blog/springboot-redis-keySpaceNotifyfication"},nextItem:{title:"Linux \u5b89\u88c5 RocketMQ",permalink:"/blog/linux-install-rocketmq"}},s={authorsImageUrls:[void 0]},u=[{value:"\u6b63\u6587",id:"\u6b63\u6587",level:2},{value:"\u5f15\u8fdb\u4f9d\u8d56\u8fdb\u884c\u76f8\u5173\u914d\u7f6e",id:"\u5f15\u8fdb\u4f9d\u8d56\u8fdb\u884c\u76f8\u5173\u914d\u7f6e",level:3},{value:"\u751f\u4ea7\u8005\u5b9e\u4f8b\u5316",id:"\u751f\u4ea7\u8005\u5b9e\u4f8b\u5316",level:3},{value:"\u751f\u4ea7\u8005\u53d1\u9001\u6d88\u606f",id:"\u751f\u4ea7\u8005\u53d1\u9001\u6d88\u606f",level:3},{value:"\u6d88\u8d39\u8005\u76d1\u542c",id:"\u6d88\u8d39\u8005\u76d1\u542c",level:3}],p={toc:u};function l(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5728 SpringBoot \u9879\u76ee\u4e2d\u5982\u4f55\u6784\u5efa RocketMQ \u8fdb\u884c\u901a\u4fe1"),(0,o.kt)("h2",{id:"\u6b63\u6587"},"\u6b63\u6587"),(0,o.kt)("p",null,"\u5b98\u65b9\u63d0\u4f9b\u7684",(0,o.kt)("a",{parentName:"p",href:"http://rocketmq.apache.org/docs/schedule-example/"},"\u7b80\u5355\u6848\u4f8b")),(0,o.kt)("h3",{id:"\u5f15\u8fdb\u4f9d\u8d56\u8fdb\u884c\u76f8\u5173\u914d\u7f6e"},"\u5f15\u8fdb\u4f9d\u8d56\u8fdb\u884c\u76f8\u5173\u914d\u7f6e"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5728",(0,o.kt)("a",{parentName:"li",href:"https://mvnrepository.com/artifact/org.apache.rocketmq/rocketmq-client"},"maven \u4e2d\u592e\u4ed3\u5e93"),"\u4e2d\u627e\u5230\u9002\u5408\u7248\u672c\uff0c\u5c06\u5176\u5f15\u8fdb SpringBoot \u9879\u76ee\u7684 POM \u6587\u4ef6\u4e2d")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- https://mvnrepository.com/artifact/org.apache.rocketmq/rocketmq-client --\x3e\n<dependency>\n    <groupId>org.apache.rocketmq</groupId>\n    <artifactId>rocketmq-client</artifactId>\n    <version>4.7.1</version>\n</dependency>\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"\u5728\u914d\u7f6e\u6587\u4ef6\u8fdb\u884c\u914d\u7f6e")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"rocketmq:\n  consumer:\n    consumer-group: consumerGroup\n  producer:\n    producer-group: producerGroup\n  namesrv-addr: 127.0.0.1:9876\n")),(0,o.kt)("h3",{id:"\u751f\u4ea7\u8005\u5b9e\u4f8b\u5316"},"\u751f\u4ea7\u8005\u5b9e\u4f8b\u5316"),(0,o.kt)("p",null,"\u672c\u6765 ProducerSchedule \u5b9e\u4f8b\u5316\u540e\u5c31\u8fdb\u884c DefaultMQProducer \u5b9e\u4f8b\u5316\n\u4f46\u662f\u6784\u9020\u51fd\u6570\u672a\u5b8c\u6210\u521d\u59cb\u5316\u65f6\uff0c\u65e0\u6cd5\u6ce8\u5165\u5176\u5b83\u7c7b\u7684\u4f9d\u8d56\n\u56e0\u4e3a\u53ea\u6709\u5f53\u5b83(\u6570\u7ec4\u7c7b)\u521d\u59cb\u5316\u5b8c\u6210\u65f6\uff0c\u624d\u53ef\u4ee5\u6ce8\u5165\u5176\u5b83\u7c7b(\u5bf9\u8c61\u7c7b)\u7684\u4f9d\u8d56\n\u6240\u4ee5\u65e0\u6cd5\u5728\u6784\u9020\u51fd\u6570\u4e2d\u76f4\u63a5\u5b9e\u4f8b\u5316 DefaultMQProducer\n\u53ef\u4ee5\u91c7\u7528\u666e\u901a\u65b9\u6cd5+",(0,o.kt)("inlineCode",{parentName:"p"},"@PostConstruct"),"\u6765\u5b9e\u4f8b\u5316 DefaultMQProducer"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"**\u6267\u884c\u7684\u5148\u540e Construct -> @Autowired -> @PostConstruct**"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import org.apache.rocketmq.client.exception.MQBrokerException;\nimport org.apache.rocketmq.client.exception.MQClientException;\nimport org.apache.rocketmq.client.producer.DefaultMQProducer;\nimport org.apache.rocketmq.client.producer.SendResult;\nimport org.apache.rocketmq.common.message.Message;\nimport org.apache.rocketmq.remoting.exception.RemotingException;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.beans.factory.annotation.Value;\nimport org.springframework.stereotype.Component;\n\nimport javax.annotation.PostConstruct;\n@Component\npublic class ProducerSchedule {\n\n    private DefaultMQProducer producer;\n\n    @Value("${rocketmq.producer.producer-group}")\n    private String producerGroup;\n\n    @Value("${rocketmq.namesrv-addr}")\n    private String namesrvAddr;\n\n    public ProducerSchedule() {\n        // \u672c\u6765ProducerSchedule\u5b9e\u4f8b\u5316\u540e\u5c31\u8fdb\u884cDefaultMQProducer\u5b9e\u4f8b\u5316\n        // \u4f46\u662f\u6784\u9020\u51fd\u6570\u672a\u5b8c\u6210\u521d\u59cb\u5316\u65f6\uff0c\u65e0\u6cd5\u6ce8\u5165\u5176\u5b83\u7c7b\u7684\u4f9d\u8d56\n        // \u56e0\u4e3a\u53ea\u6709\u5f53\u5b83(\u6570\u7ec4\u7c7b)\u521d\u59cb\u5316\u5b8c\u6210\u65f6\uff0c\u624d\u53ef\u4ee5\u6ce8\u5165\u5176\u5b83\u7c7b(\u5bf9\u8c61\u7c7b)\u7684\u4f9d\u8d56\n        // \u6240\u4ee5\u65e0\u6cd5\u5728\u6784\u9020\u51fd\u6570\u4e2d\u76f4\u63a5\u5b9e\u4f8b\u5316DefaultMQProducer\n        // \u53ef\u4ee5\u91c7\u7528\u666e\u901a\u65b9\u6cd5+@PostConstruct\u6765\u5b9e\u4f8b\u5316DefaultMQProducer\n    }\n\n    @PostConstruct\n    public void defaultMQProducer() {\n        if (this.producer == null) {\n            this.producer = new DefaultMQProducer(this.producerGroup);\n            this.producer.setNamesrvAddr(this.namesrvAddr);\n        }\n        try {\n            this.producer.start();\n            System.out.println("---producer start---");\n        } catch (MQClientException e) {\n            e.printStackTrace();\n        }\n    }\n\n    // \u53d1\u9001\u6d88\u606f\u65b9\u6cd5\n    public String send(String topic, String messageText) throws Exception {\n        Message message = new Message(topic, messageText.getBytes());\n        // messageDelayLevel=1s 5s 10s 30s 1m 2m 3m 4m 5m 6m 7m 8m 9m 10m 20m 30m 1h 2h\n        // \u5b9a\u65f6\u63a8\u9001\u65f6\u95f4\u8bbe\u7f6e\uff0c\u5982messageDelayLevel\u8bbe\u7f6e\u4e3a4\u7684\u8bdd\u5219\u8868\u793a30\u5206\u949f\u540e\u5ef6\u8fdf\u89e6\u53d1\n        message.setDelayTimeLevel(4);\n        // \u63a5\u53d7\u53d1\u9001\u7ed3\u679c\n        SendResult result = this.producer.send(message);\n        return result.getMsgId();\n    }\n}\n')),(0,o.kt)("h3",{id:"\u751f\u4ea7\u8005\u53d1\u9001\u6d88\u606f"},"\u751f\u4ea7\u8005\u53d1\u9001\u6d88\u606f"),(0,o.kt)("p",null,"\u5728\u67d0\u4e9b\u5df2\u52a0\u5165 IOC \u5bb9\u5668\u7684\u7c7b\u4e2d\u8fdb\u884c\u8c03\u7528 ProducerSchedule \u4e2d\u7684 send \u65b9\u6cd5\u8fdb\u884c\u53d1\u9001\u6d88\u606f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@RequestMapping("/topic")\n@RestController\npublic class TopicTest {\n    @Autowired\n    private ProducerSchedule producerSchedule;\n\n    @GetMapping("/send")\n    pubilc void sendMessageToMQ() throws Exception {\n        producerSchedule.send("TopicTest", "This is a message"); // \u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u4e3b\u9898\uff0c\u7b2c\u4e8c\u4e2a\u662f\u6d88\u606f\n    }\n}\n')),(0,o.kt)("h3",{id:"\u6d88\u8d39\u8005\u76d1\u542c"},"\u6d88\u8d39\u8005\u76d1\u542c"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"**CommandLineRunner\u63a5\u53e3\u7528\u4e8e\u5e94\u7528\u7a0b\u5e8f\u542f\u52a8\u65f6\uff0c\u521d\u59cb\u5316\u4e00\u4e9b\u8d44\u6e90\u53ea\u4f1a\u6267\u884c\u4e00\u6b21**"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import org.apache.rocketmq.client.consumer.DefaultMQPushConsumer;\nimport org.apache.rocketmq.client.consumer.listener.ConsumeConcurrentlyStatus;\nimport org.apache.rocketmq.client.consumer.listener.MessageListenerConcurrently;\nimport org.apache.rocketmq.client.exception.MQClientException;\nimport org.apache.rocketmq.common.message.Message;\nimport org.springframework.beans.factory.annotation.Value;\nimport org.springframework.boot.CommandLineRunner;\n\n@Component\n// CommandLineRunner\u63a5\u53e3\u7528\u4e8e\u5e94\u7528\u7a0b\u5e8f\u542f\u52a8\u65f6\uff0c\u521d\u59cb\u5316\u4e00\u4e9b\u8d44\u6e90\u53ea\u4f1a\u6267\u884c\u4e00\u6b21\npublic class ConsumerSchedule implements CommandLineRunner {\n\n    @Value("${rocketmq.consumer.consumer-group}")\n    private String consumerGroup;\n\n    @Value("${rocketmq.namesrv-addr}")\n    private String namesrvAddr;\n\n    public void messageListener() throws MQClientException {\n        DefaultMQPushConsumer consumer = new DefaultMQPushConsumer(consumerGroup);\n\n        consumer.setNamesrvAddr(namesrvAddr);\n        consumer.subscribe("TopicTest", "*"); // \u76d1\u542c\u4e3b\u9898\u7684\u6240\u6709\u6d88\u606f\n        consumer.setConsumeMessageBatchMaxSize(1); // \u4e00\u6b21\u6d88\u8d39\u51e0\u6761\u6d88\u606f\n        // \u6ce8\u518c\u6d88\u606f\u76d1\u542c(\u533f\u540d\u7c7b\u7684\u5199\u6cd5)\n        consumer.registerMessageListener((MessageListenerConcurrently) (messages, context) -> {\n            for (Message message : messages) {\n                System.out.println("\u6d88\u606f\uff1a" + new String(message.getBody()));\n            }\n            return ConsumeConcurrentlyStatus.CONSUME_SUCCESS;\n        });\n        consumer.start();\n    }\n\n    @Override\n    public void run(String... args) throws Exception {\n        this.messageListener();\n    }\n}\n')))}l.isMDXComponent=!0}}]);