"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[717],{3905:function(e,r,n){n.d(r,{Zo:function(){return c},kt:function(){return f}});var t=n(67294);function l(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){l(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function u(e,r){if(null==e)return{};var n,t,l=function(e,r){if(null==e)return{};var n,t,l={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(l[n]=e[n]);return l}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=t.createContext({}),s=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},c=function(e){var r=s(e.components);return t.createElement(i.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(n),f=l,m=d["".concat(i,".").concat(f)]||d[f]||p[f]||a;return n?t.createElement(m,o(o({ref:r},c),{},{components:n})):t.createElement(m,o({ref:r},c))}));function f(e,r){var n=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=d;var u={};for(var i in r)hasOwnProperty.call(r,i)&&(u[i]=r[i]);u.originalType=e,u.mdxType="string"==typeof e?e:l,o[1]=u;for(var s=2;s<a;s++)o[s]=n[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},23294:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return u},contentTitle:function(){return i},metadata:function(){return s},assets:function(){return c},toc:function(){return p},default:function(){return f}});var t=n(87462),l=n(63366),a=(n(67294),n(3905)),o=["components"],u={slug:"binary-tree-traversal",title:"\u4e8c\u53c9\u6811\u7684\u904d\u5386\u65b9\u5f0f",authors:"zeffon",tags:["structure"],date:new Date("2020-01-01T00:00:00.000Z")},i=void 0,s={permalink:"/blog/binary-tree-traversal",editUrl:"https://github.com/zeffon/zeffon.github.io/blob/master/blog/2020/2020-01-01-binary-tree-traversal.md",source:"@site/blog/2020/2020-01-01-binary-tree-traversal.md",title:"\u4e8c\u53c9\u6811\u7684\u904d\u5386\u65b9\u5f0f",description:"\u4e3b\u8981\u603b\u7ed3\u4e00\u4e0b\u4e8c\u53c9\u6811\u7684\u904d\u5386\u65b9\u5f0f\u53ca\u5176\u9012\u5f52\u548c\u975e\u9012\u5f52\u7684\u5b9e\u73b0",date:"2020-01-01T00:00:00.000Z",formattedDate:"January 1, 2020",tags:[{label:"structure",permalink:"/blog/tags/structure"}],readingTime:3.31,truncated:!0,authors:[{name:"Zeffon Wu",title:"A web engineer",url:"https://github.com/zeffon",imageURL:"https://github.com/zeffon.png",key:"zeffon"}],prevItem:{title:"\u5b9e\u73b0\u4e8c\u53c9\u5806-\u6700\u5927\u5806",permalink:"/blog/binary-heap"},nextItem:{title:"Java \u63a7\u5236\u53cd\u8f6c(IoC)\u548c\u4f9d\u8d56\u6ce8\u5165(DI)",permalink:"/blog/java-ioc-di"}},c={authorsImageUrls:[void 0]},p=[{value:"\u524d\u8a00",id:"\u524d\u8a00",children:[]},{value:"\u6b63\u6587",id:"\u6b63\u6587",children:[{value:"\u524d\u5e8f\u904d\u5386",id:"\u524d\u5e8f\u904d\u5386",children:[]},{value:"\u4e2d\u5e8f\u904d\u5386",id:"\u4e2d\u5e8f\u904d\u5386",children:[]},{value:"\u540e\u5e8f\u904d\u5386",id:"\u540e\u5e8f\u904d\u5386",children:[]},{value:"\u5c42\u6b21\u904d\u5386",id:"\u5c42\u6b21\u904d\u5386",children:[]}]}],d={toc:p};function f(e){var r=e.components,n=(0,l.Z)(e,o);return(0,a.kt)("wrapper",(0,t.Z)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4e3b\u8981\u603b\u7ed3\u4e00\u4e0b\u4e8c\u53c9\u6811\u7684\u904d\u5386\u65b9\u5f0f\u53ca\u5176\u9012\u5f52\u548c\u975e\u9012\u5f52\u7684\u5b9e\u73b0"),(0,a.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4eca\u5929\u662f 2020 \u5e74\u7684\u7b2c\u4e00\u5929\uff0c\u5e0c\u671b\u5728\u65b0\u7684\u4e00\u5e74\u6709\u6240\u6536\u83b7..."),(0,a.kt)("li",{parentName:"ul"},"\u4e3b\u8981\u603b\u7ed3\u4e00\u4e0b\u4e8c\u53c9\u6811\u7684\u904d\u5386\u65b9\u5f0f\u53ca\u5176\u9012\u5f52\u548c\u975e\u9012\u5f52\u7684\u5b9e\u73b0")),(0,a.kt)("h2",{id:"\u6b63\u6587"},"\u6b63\u6587"),(0,a.kt)("h3",{id:"\u524d\u5e8f\u904d\u5386"},"\u524d\u5e8f\u904d\u5386"),(0,a.kt)("p",null,"LeetCode-",(0,a.kt)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/binary-tree-preorder-traversal/"},"144.\u4e8c\u53c9\u6811\u524d\u5e8f\u904d\u5386")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9012\u5f52\u5b9e\u73b0")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public List<Integer> preorderTraversal(TreeNode root) {\n        List<Integer> res = new ArrayList<>();\n        helper(root, res);\n        return res;\n    }\n\n    public void helper(TreeNode root, List<Integer> res) {\n        if (root != null) {\n            res.add(root.val);\n            if (root.left != null) {\n                helper(root.left, res);\n            }\n            if (root.right != null) {\n                helper(root.right, res);\n            }\n        }\n    }\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u975e\u9012\u5f52\u5b9e\u73b0")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public List<Integer> preorderTraversal(TreeNode root) {\n        ArrayList<Integer> res = new ArrayList<>();\n        if(root == null) {\n            return res;\n        }\n        Stack<TreeNode> stack = new Stack<>();\n        stack.push(root);\n        while(!stack.isEmpty()){\n            TreeNode cur = stack.pop();\n            res.add(cur.val);\n\n            if(cur.left != null)\n                stack.push(cur.left);\n            if(cur.right != null)\n                stack.push(cur.right);\n        }\n        return res;\n    }\n}\n")),(0,a.kt)("h3",{id:"\u4e2d\u5e8f\u904d\u5386"},"\u4e2d\u5e8f\u904d\u5386"),(0,a.kt)("p",null,"LeetCode-",(0,a.kt)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/binary-tree-inorder-traversal/"},"94. \u4e8c\u53c9\u6811\u7684\u4e2d\u5e8f\u904d\u5386")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9012\u5f52\u5b9e\u73b0")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public List<Integer> inorderTraversal(TreeNode root) {\n        List<Integer> res = new ArrayList<>();\n        helper(root, res);\n        return res;\n    }\n\n    public void helper(TreeNode root, List<Integer> res) {\n        if (root != null) {\n            if (root.left != null) {\n                helper(root.left, res);\n            }\n            res.add(root.val);\n            if (root.right != null) {\n                helper(root.right, res);\n            }\n        }\n    }\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u975e\u9012\u5f52\u5b9e\u73b0")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public List<Integer> inorderTraversal(TreeNode root) {\n        ArrayList<Integer> res = new ArrayList<>();\n        if(root == null) {\n            return res;\n        }\n\n        Stack<TreeNode> stack = new Stack<>();\n        TreeNode cur = root;\n        while(cur != null || !stack.isEmpty()) {\n            if(cur != null) {\n                stack.push(cur);\n                cur = cur.left;\n            } else {\n                cur = stack.pop();\n                res.add(cur.val);\n                cur = cur.right;\n            }\n        }\n        return res;\n    }\n}\n")),(0,a.kt)("h3",{id:"\u540e\u5e8f\u904d\u5386"},"\u540e\u5e8f\u904d\u5386"),(0,a.kt)("p",null,"LeetCode-",(0,a.kt)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/binary-tree-postorder-traversal/"},"145.\u4e8c\u53c9\u6811\u540e\u5e8f\u904d\u5386")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9012\u5f52\u5b9e\u73b0")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public List<Integer> postorderTraversal(TreeNode root) {\n        List<Integer> res = new ArrayList<>();\n        helper(root, res);\n        return res;\n    }\n\n    public void helper(TreeNode root, List<Integer> res) {\n        if (root != null) {\n            if (root.left != null) {\n                helper(root.left, res);\n            }\n            if (root.right != null) {\n                helper(root.right, res);\n            }\n            res.add(root.val);\n        }\n    }\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u975e\u9012\u5f52\u5b9e\u73b0")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public List<Integer> postorderTraversal(TreeNode root) {\n        ArrayList<Integer> res = new ArrayList<>();\n        if(root == null) {\n            return res;\n        }\n\n        Stack<TreeNode> stack = new Stack<>();\n        TreeNode pre = null;\n        TreeNode cur = root;\n        while(cur != null || !stack.isEmpty()) {\n            if(cur != null) {\n                stack.push(cur);\n                cur = cur.left;\n            } else {\n                cur = stack.pop();\n                if(cur.right == null || pre == cur.right){\n                    res.add(cur.val);\n                    pre = cur;\n                    cur = null;\n                } else {\n                    stack.push(cur);\n                    cur = cur.right;\n                }\n            }\n        }\n        return res;\n    }\n}\n")),(0,a.kt)("h3",{id:"\u5c42\u6b21\u904d\u5386"},"\u5c42\u6b21\u904d\u5386"),(0,a.kt)("p",null,"LeetCode-",(0,a.kt)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/binary-tree-level-order-traversal/"},"102.\u4e8c\u53c9\u6811\u7684\u5c42\u6b21\u904d\u5386")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9012\u5f52\u5b9e\u73b0")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    List<List<Integer>> levels = new ArrayList<List<Integer>>();\n\n    public List<List<Integer>> levelOrder(TreeNode root) {\n        if (root == null) {\n            return levels;\n        }\n        helper(root, 0);\n        return levels;\n    }\n\n    public void helper(TreeNode node, int level) {\n        if (levels.size() == level)\n            levels.add(new ArrayList<Integer>());\n\n         levels.get(level).add(node.val);\n\n         if (node.left != null)\n            helper(node.left, level + 1);\n         if (node.right != null)\n            helper(node.right, level + 1);\n    }\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u975e\u9012\u5f52\u5b9e\u73b0")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public List<List<Integer>> levelOrder(TreeNode root) {\n\n        ArrayList<List<Integer>> res = new ArrayList<>();\n        if(root == null)\n            return res;\n\n        Queue<TreeNode> queue = new LinkedList<>();\n        queue.add(root);\n        int levelNum = 1;\n\n        while(!queue.isEmpty()){\n            int newLevelNum = 0;\n            ArrayList<Integer> level = new ArrayList<>();\n            for(int i = 0; i < levelNum; i ++){\n                TreeNode node = queue.remove();\n                level.add(node.val);\n\n                if(node.left != null){\n                    queue.add(node.left);\n                    newLevelNum ++;\n                }\n                if(node.right != null){\n                    queue.add(node.right);\n                    newLevelNum ++;\n                }\n            }\n            res.add(level);\n            levelNum = newLevelNum;\n        }\n        return res;\n    }\n}\n")))}f.isMDXComponent=!0}}]);