

# 如何启动本项目
本项目仅限用于2020年浙江大学暑期学校课程项目模板。
1. 使用git命令，将本项目同步到本地：

   `git clone https://github.com/WuJiang5521/ZJU_SummerSchool_ProjectTemplate.git`
   
2. 在项目文件夹内，使用git命令，修改remote到你们小组的仓库：

   将原来的远程仓库重命名：`git remote rename origin template-origin`
   
   添加你的远程仓库地址：`git remote add origin your_remote_url`
   
   添加文件修改：`git add .`
   
   提交文件修改：`git commit -m "Initial Commit"`
   
   上传：`git push -u origin master`
   
3. 在项目文件夹内，使用npm运行项目：

   安装所有依赖库：`npm install`
   
   运行项目：`npm start`
   
   如果能正常运行，你应该可以看到浏览器中出现四个区域，每个区域有一个数字0和一个按钮。
   点击任意按钮都可以使四个数字加一。
   
# 本项目目前已安装的库

1. Material UI
   组件库
1. clsx
   拼接类名
1. papaparse
   解析.csv文件

## 下载相应的库
   
1. 下载相应的库
* `npm i XXX --save`
echarts-for-react
// ui 库 内含组件 可以看
<a url = 'https://v4.mui.com/zh/components/tables/'>相关文档</a><br/>
@material-ui/core
clsx<br/>**更新后仍需要**
@material-ui/data-grid   
react-virtualized

* `npm install XXX`
echarts
使用命令下载缺少的库

1. 如果 `@material-ui/core 安装error` 出现版本冲突
`npm config set legacy-peer-deps true`
`npm i`

1. 可能的冲突（暂未发生
`node.js`版本:使用nvm进行版本控制
# 如何使用
之后可能会发生文件架构的改动
现在基本上：
* src:
  * `components`中有五个主要的组件，分别表示相应的视图
  这五个`js`文件通过传输相应的函数到`app.js`中整合到一起，最终在`app.js`中使用函数组件（其他用法与普通react基本相同）
  可分别编辑,之后其头部可能引入echarts相关的库.<br/>在图中 `*` 处引用，也可以放置其他所需（但可能会引起排版不便
  * `data`计划用于操作数据集
