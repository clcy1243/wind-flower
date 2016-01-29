# wind-flower
蒲公英网站项目
###蒲公英是什么：
是一个捐助山区贫困儿童上学读书的公益组织。目前成员主要分布在上海及成都。活动方式是成员与山区教师直接联系，掌握资料后与其他成员分享，大家自愿捐助。每年会组织一次回访，详情可以看网站，也可以加入微信群。
###为什么要做这个项目：
目前网站是由创始人之一东拼西凑出来的，全静态，每次更新都需要手写大量html。工作量巨大，维护困难。且设计过时。
###项目性质：
纯公益，所有代码开源，所有参与者网站署名。
###需求：
第一步：
写一个后台管理系统，方便蒲公英成员日后的更新维护。
前台页面改为使用模版渲染+ajax的方式。
第二步：
改善前台页面设计，部分页面需要针对移动端做优化，供微信公众号使用。
###技术路线（暂定）：
管理后台前端：vue.js
后端框架：tornado（python）
###工期要求：
无 大家有时间就弄点就好。
###组长
前端：will
后端：thinker

###前端
前端采用 vue 框架
使用 vue-router 插件
加载 bootstrap 样式

需要 npm 及 webpack 支持
开发时修改package.json 中 IP 为监控的 IP
运行 npm run dev 指令以实时监控改变

目前前端由 [vue-hackernews](https://github.com/vuejs/vue-hackernews "vue-hackernews") 修改而来，此项目提供了良好的路由控制及数据绑定实例

[vue-router](http://vuejs.github.io/vue-router/zh-cn/index.html "vue-router") 此插件提供路由支持，wiki 中有高级用法


####前端构想
一个公用的 header 和 sidebar(nav)
view 部分由前端路由控制变化(利用 vue 的模块化开发)
目录部分目前未细分，拟定以模块为单位进行区分