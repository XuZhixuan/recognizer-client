## 服务前端
服务前端利用 Vue.js 框架编写，后端代码中已内置编译好的前端代码。
### 项目目录
```
.  
├─ babel.config.js # 编译器配置  
├─ package.json # 依赖文件  
├─ vue.config.js # 项目开发配置  
├─ yarn.lock # 依赖版本锁文件  
│  
├─dist # 前端编译代码  
│  ├─ favicon.ico # 网站图标  
│  ├─ index.html # 网站入口文件  
│  ├─ nginx.example # 网站配置样例文件  
│  │  
│  ├─css # [已编译的]样式表文件  
│  │  └─ *.css  
│  │  
│  ├─img # [已编译的]图标文件  
│  │  └─ *.svg  
│  │  
│  └─js # [已编译的]JavaScript文件  
│     ├─ *.js  
│     └─ *.js.map  
│              
├─public # 项目入口文件  
│  ├─ favicon.ico # 网站图标  
│  └─ index.html # 项目入口文件  
│  
└─src # 项目代码  
    ├─ App.vue # 入口模块  
    ├─ main.js # 主逻辑模块
    │  
    ├─assets # 项目资产
    │  └─icons # 图标
    │     └─ *.svg
    │          
    ├─components # 主要组件  
    │  ├─layouts # 布局组件  
    │  │  ├─ Navbar.vue # 导航栏组件  
    │  │  └─ Status.vue # 状态栏组件  
    │  │      
    │  └─recognizer # 服务页面组件
    │     └─ Process.vue # 处理进程组件
    │          
    ├─plugins # 项目使用的插件  
    │  └─ bootstrap-vue.js
    │  
    ├─router # 前端路由配置  
    │  └─ index.js  
    │  
    ├─store # 前端中心化存储配置  
    │  └─ index.js  
    │  
    └─views # 前端页面  
       ├─ About.vue # 关于页  
       ├─ Home.vue # 主页  
       └─ Recognize.vue # 服务页  
```
### 项目配置
* 安装依赖 `yarn install` 或 `npm install`  
* 编译项目 `yarn build` 或 `npm build`  
