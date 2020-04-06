# react-record

### 介绍
react 集成常用组件

#### 命令
eject命令 执行后不可逆转
react-scripts为create-react-app的一个核心包 集成一些脚本和工具默认配置
eject命令执行后会将封装其中的配置全部反编译到当前项目 可进行自定义配置

#### 路由
react-router router核心 Router Route Switch等 但无dom操作 路由跳转相关操作
react-router-dom 提供了BrowserRouter Route Link等 可通过dom操作触发事件控制路由

react-router-dom包含react-router依赖 只需安装后者

#### 分割代码
Loadable 自动分割代码 懒加载
普通应用打包会把所有代码打包成单一文件(如所有js压缩为一个文件) 严重延迟网页首次加载时间
Loadable可实现自动分割代码 在需要的时动态加载 在加载时可设置加载动画组件

在package.json中添加`"homepage": ".",` 打包后端静态文件会设为'./'

#### 跨域
package.json中添加`"proxy": "https://pv.sohu.com"`
axios使用`axios.get('cityjson')`访问`https://pv.sohu.com/cityjson`

修改webpack配置
1. eject命令暴露配置文件 直接修改webpack配置
2. react-app-rewired 项目根目录创建config-overrides.js
    覆写webpack配置(需修改package.json中react-scripts为react-app-rewired)

#### 多环境配置文件`.env`
`.env`定义变量时 前缀为`REACT_APP_` 否则会被忽略
start时加载`.env.development` build时加载`.env.production`
如需在start时加载`.env.production`或其它指定配置 可使用dotenv插件指定额外配置`dotenv -e .env.xxxx`
