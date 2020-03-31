# 功能
实现虎牙直播平台的弹幕语音播报和礼物致谢
# 致谢
基于[huya-danmu](https://github.com/BacooTang/huya-danmu "With a Title")开发.
# 依赖环境
- anaconda3(python3.7)
- [node](https://nodejs.org/zh-cn/download/ "With a Title")
# 相关库安装
```
pip install pyttsx3
```

```
npm install huya-danmu --save
```

# 快速部署
- 修改app.js中roomid
- 启动服务
```
node app.js
```
- 关闭服务<br>
 关闭终端或者ctrl+d
 
 # 遇到错误
 
 在Windows部署初始化曾经经历过错误(本项目macOs下开发)，最后发现错误原因是python版本问题，python3.6.7下不能正常工作，请切换其他版本，python3.7.4经测试正常运行！
