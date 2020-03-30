import sys
print(sys.argv[1])
import pyttsx3
name=sys.argv[1]



# 模块初始化
engine = pyttsx3.init()
# 设置要播报的Unicode字符串
engine.say('感谢 '+name+' 大哥送的礼物')

# 等待语音播报完毕
engine.runAndWait()