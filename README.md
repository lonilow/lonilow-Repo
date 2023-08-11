# 一些相关事项
   本项目是**2023年大数据可视化短学期课程**某小组的可视化分析系统，部分架构直接使用了`2020年浙江大学暑期学校课程项目模板`，仓库如下：`https://github.com/WuJiang5521/ZJU_SummerSchool_ProjectTemplate.git`
   我们的GIT仓库：
   注：main分支是原模板，master分支为我们的项目
   `https://github.com/lonilow/lonilow-Repo.git`
# 小组分工
**第17小组**
* **周益涛**：主要负责CSS样式与系统整体主题设计
* **翟子豪**：主要负责视图及交互部分
* **梁文杰**：主要负责辅助视图与架构设计
# 文件架构方面
* **src:  `React` 应用源码存放的目录**
  * `components`中有五个主要的组件，分别表示相应的视图
  这五个`js`文件通过传输相应的函数到`app.js`中整合到一起，最终在`app.js`中使用函数组件（其他用法与普通react基本相同）
      * `AssistView`以列表形式展示输入的数据，可以实现数据的筛选，通过选择框是否选中，选中元素将在右侧显示一个视图
      * `ControlView`控制`DetailView`的部分要素，可通过`选择X轴`和`选择图形类型`来交互
      * `DetailView`详细视图，包含所有数据的一个图表
      * `OverView`概览视图1，该视图的数据由`AssistView`选择传入
      * `OverView2`概览试图2
      * `ReadFiles`实现数据读取
  
  * `store`为原模板用于操作数据集的文件,但本项目由于种种原因并未使用这一store
  * `App.js` `App.css` App 应用component的父组件
  * `index.js`React的入口
* **public: 开发应用时浏览器会读取的文件**
    * `movies.csv`存放最初版数据
    * `moviedata.csv`存放清洗过后的数据
    * `movie.ico`为网页所用图标
    * `index.html `此文件夹中最重要的文件，可以修改一些网页相关的东西
    * `picture`存放修饰相关图片

* **`package.json`** 包含了 `Node.is/npm` 为了建立该应用程序所管理着的文件信息

# 代码的配置与运行
## 基本步骤
1. `git clone https://github.com/lonilow/lonilow-Repo.git`克隆项目或解压压缩包到本地
2. `npm install`在项目文件夹打开终端，下载相关库
3. `npm start`启动项目

## 本项目目前已安装的库
可在`package.json`中查看具体版本
1. `Material UI`
   组件库
2. `clsx`
   拼接类名
3. `papaparse`
   解析.csv文件

### 下载相应的库
    TIP: 这些库的应用都可以看相关的官方文档
* **`npm i XXX --save`**
`echarts-for-react`
// ui 库 内含组件 可以看
<a url = 'https://v4.mui.com/zh/components/tables/'>相关文档</a>
`@material-ui/core`
`clsx`
`@material-ui/data-grid `  
`react-virtualized`
<br/>
* **`npm install XXX`**
`echarts`
使用命令下载缺少的库

## 可能的问题
1. 如果 `@material-ui/core 安装error` 出现**版本冲突**
`npm config set legacy-peer-deps true`
`npm i`

2. **可能的冲突**
`node.js`版本:需要使用`16.20.1`或相近版本，使用nvm进行版本控制/直接降级，详细可看网上教程
3. **git同步问题**<br/>如果pull下来之后报错文件名称问题，可以修改`OverView`文件名称