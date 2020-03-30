import sys
# 语音播报模块
import pyttsx3
print('参数1：'+sys.argv[1],'参数2：'+sys.argv[2])
name=sys.argv[1]
text=sys.argv[2]



# 模块初始化
engine = pyttsx3.init()
# 设置要播报的Unicode字符串
engine.say(name+'  说  '+text)

# 等待语音播报完毕
engine.runAndWait()
