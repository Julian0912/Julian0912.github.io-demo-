>注：“***”表示此解释可能为错或不重要

例1：
```python
name = "FMY"  # 等号左右有空格***；单双引号都可
print("My name is",name)  # 逗号分隔要输出的不同变量
```

例2：
```python
NAME = "FMY"  # 变量名全大写时表示此为常量，原则上不可更改
```

例3：
```python
# -*- coding:utf-8 -*-  # 在代码开头声明使用utf-8字符库；python3以上不需要声明，默认使用utf-8
```

例4：
```python
#blahblah  # 单行注释，注释内容为blahblah
'''
blahblah
blah
'''  # 用三个单或双引号进行多行注释，引号内的多行为注释内容
```

例5：
```python
msg = '''
I am FMY
from OUC
'''  # 用三个单或双引号将多行信息赋给变量
```

例6：
```python
username = input("username:")  # 用户交互程序，把用户输入的信息赋给变量
```

例7：
```python
name = input("name:")
age = input("age:")
job = input("job:")
info = '''
---info of %s---
name:%s
age:%s
job:%s
''' % (name,name,age,job)
print(info)  # 将输入信息格式化输出；%是占位符***，可以在赋值引号内引用变量；“s”指“string”即字符串，意思是%引用的变量必须为字符串；除此之外还有%d、%f，分别为“整数”、“浮点(小数)”
```

例8：
```python
age = input("age:")
print(type(age))  # 输出变量类型；默认所有输入的信息皆为字符串类型，“19”也是字符串
```

例9：
```python
age = int(input("age:"))  # 强制将变量转换为整数类型；“int”指“integer”即整型
```

例10：
```python
age = int(input("age:"))
print(type(str(age)))  # 在输出时显示变量为字符串类型
```

例11：
```python
name = input("name:")
age = input("age:")
job = input("job:")
info2 = '''
---info of {a}---
name:{a}
age:{b}
job:{c}
''' .format(a=name,b=age,c=job)
print(info2)  # 格式化输出的另一种形式
```

例12：
```python
name = input("name:")
age = input("age:")
job = input("job:")
info3 = '''
---info of {0}---
name:{0}
age:{1}
job:{2}
''' .format(name,age,job)
print(info3)  # 格式化输出的另一种形式
```

例13：
```python
import getpass
username = input("username:")
password = getpass.getpass("password:")
print(username,password)  # 将输入信息非可视化；PyCharm下无法测试，运行窗口下可测试
```

例14：
```python
Username = "fmy"
Password = "abc123"
username = input("username:")
password = input("password:")
if Username == username and Password == password:
    print("Welcome!")
else:
    print("Invalid username or password!")  # if和else行末要有冒号，其下行会自动缩进且必须缩进；“==”即等于
```

例15：
```python
Age = 19
age = int(input("age:"))
if Age == age:
    print("You got it!")
elif Age > age:
    print("Older!")
else:
    print("Younger!")  # “elif”指“else if”即再次判断
```

例16：
```python
Age = 19
while True:
    age = int(input("age:"))
    if Age == age:
        print("You got it!")
        break
    elif Age > age:
        print("Older!")
    else:
        print("Younger!")  # while循环，“True”必须大写，“break”用于结束总循环，执行循环外后面的代码；“continue”用于结束本次循环，直接开始下次循环而不执行循环内后面的代码；“pass”表示占位，即如果符合条件，则跳过此位执行后面的代码，用于防止报错
```

例17：
```python
Age = 19
count = 0
while True:
    if count ==3:
        break
    age = int(input("age:"))
    if Age == age:
        print("You got it!")
        break
    elif Age > age:
        print("Older!")
    else:
        print("Younger!")
    count +=1  # 给循环加3次限制；“count +=1”指“count = count + 1”
```

例18：
```python
Age = 19
count = 0
while count <3:
    age = int(input("age:"))
    if Age == age:
        print("You got it!")
        break
    elif Age > age:
        print("Older!")
    else:
        print("Younger!")
    count +=1
else:
    print("You have tried too many times!")  # 上例的优化代码；while条件成立，执行以下代码，不成立执行else以下代码
```

例19：
```python
Age = 19
count = 0
while count <3:
    age = int(input("age:"))
    if Age == age:
        print("You got it!")
        break
    elif Age > age:
        print("Older!")
    else:
        print("Younger!")
    count +=1
    if count ==3:
        ask = input("Do you wanna have 3 times more?--:")
        if ask != "no":
            count = 0  # 询问是否需要再来3次；“!=”即不等于；若符合if条件则执行以下代码，若不符合则跳过if以下代码
```

例20：
```python
Age = 19
for i in range(3):
    age = int(input("age:"))
    if Age == age:
        print("You got it!")
        break
    elif Age > age:
        print("Older!")
    else:
        print("Younger!")
else:
    print("You have tried too many times!")  # for循环，“range(3)”表示循环3次；循环正常结束，执行else以下代码，不正常结束(如遇到“break”)则不执行
```

例21：
```python
for a in range(0,9,3):
    print("loop",a)  # 简单for循环，“0,9,3”表示从0到9每循环一次加3，遇9直接结束循环，不输出
```

例22：
```python
names = ["FMY","FZH","XD","LYX"]  # 列表赋值
print(names[0])  # 输出列表第一个值(下标为0)
print(names[1:3])  # 切片；输出列表第二到第三个值，即输出下标为1和2的值，不输出下标为3的值
print(names[-1])  # 输出列表最后一个值；列表下标从左往右为0,1,2...从右往左为-1,-2,-3...
print(names[-2:])  # 输出列表倒数两个值
print(names[:2])  # 输出列表前两个值
```

例23：
```python
names = ["FMY","FZH","XD","LYX"]
names.append("ZYQ")  # 在列表中追加一个值，放在列表最后
names.insert(1,"XBT")  # 将“XBT”放在下标1位置，后面的值依次后退一位
names[2] = "SMQ"  # 将列表下标2位置换值
```

例24：
```python
names = ["FMY","FZH","XD","LYX"]
names.remove("XD")  # 删除列表某个特定值
del names[1]  # 删除下标1位置的值
names.pop(1)  # 删除下标1位置的值；若括号内不填值，则默认删除列表最后一个值
```

例25：
```python
names = ["FMY","FZH","XD","LYX"]
print(names.index("FZH"))  # 输出“FZH”在列表的位置
print(names[names.index("FZH")])  # 输出“FZH”
```

例26：
```python
names = ["FMY","FZH","XD","WP","LYX","WP"]
print(names.count("WP"))  # 输出“WP”的数量
names.clear()  # 清空列表
names.reverse()  # 颠倒列表值的顺序
```

例27：
```python
names = ["FMY","FZH","XD","LYX"]
names.sort()   # 列表值排序；按特殊符号、数字、大写字母、小写字母的顺序排序
names2 = ["SMQ","SY","ZJX","MLY"]
names.extend(names2)  # 将列表names2合并到names中
del names2      # 删除变量
```

例28：
```python
names = ["FMY","FZH","XD","LYX"]
names2 = names.copy()  # 将names的值复制一份赋给names2；此复制为“浅复制”，若列表中含嵌套列表，在内存中列表中的嵌套列表位置实际上是一个地址，指向嵌套列表在内存中真正的位置，所以当“浅复制”含嵌套列表的列表时，嵌套列表真正的值未被复制，而只是复制了一份嵌套列表的地址
```

例29：
```python
names = ["FMY","FZH",["SMQ","SY","ZJX","MLY"],"XD","LYX"]  # 列表内嵌套列表
names[2][1] = "WP"      # 修改嵌套列表内的值
```

例30：
```python
import copy
names = ["FMY","FZH",["SMQ","SY","ZJX","MLY"],"XD","LYX"]
names2 = copy.copy(names)  # 浅复制
names3 = copy.deepcopy(names)  # 深复制，连同嵌套列表一起复制
```

例31：
```python
names = ["FMY","FZH",["SMQ","SY","ZJX","MLY"],"XD","LYX"]
for i in names:
    print(i)  # 单独输出列表的每一个值
```

例32：
```python
names = ["FMY","FZH","SMQ","SY","ZJX","MLY","XD","LYX"]
print(names[0:6:3])  # 在列表下标0,1,2,3,4,5中隔2位输出一个值
```

例33：
```python
names = ("FMY","FZH","XD","LYX")  # 元组赋值；元组又叫只读列表，只有count和index两个功能
```

例34：
```python
names = ["FMY","FZH","XD","LYX"]
for i in enumerate(names):
    print(i)  # 将列表编号后输出；编号从0开始
```

例35：
```python
num = input("Number:")  # 此处变量不能强制转整型
if num.isdigit():  # 判断值“num”是否为(字符串形式的)整数，若是，执行以下代码，若非，执行else以下代码
    num = int(num)
else:
    print("Non-numeric value!")
```

例36：
```python
print("Hello \033[31;1mWorld\033[0m")  # 输出信息变色；“World”变为红色；32表示绿色；\033[32;1m???\033[0m
```

例37：
```python
name = "my name is fmy"
print(name.capitalize())  # 强制将字符串转换为首字母大写其它小写的形式
print(name.count("m"))  # 统计字符串中“m”的数量
print(name.center(50,"-"))  # 输出50个字符，将赋值信息放在中间，其余用“-”补上
print(name.ljust(50,"-"))  # 输出50个字符，将赋值信息放在前面，后面用“-”补上
print(name.rjust(50,"-"))  # 输出50个字符，将赋值信息放在后面，前面用“-”补上
print(name.endswith("my"))  # 判断赋值信息是否以“my”结尾
print(name.find("n"))  # 输出“n”位置的下标(此时为3)；此方法可用于字符串切片，用法与列表切片相同
```

例38：
```python
msg = "My name is {name} and I am {age} old."
print(msg.format(name="fmy",age=19))  # 格式化输出
```

例39：
```python
print("ab123".isalnum())  # 判断信息中是否只有英文和数字；全英、全数、英加数皆为True
print("abc".isalpha())  # 判断信息中是否只含英文
print("123".isdecimal())  # 判断信息是否是十进制数***
print("name".isidentifier())  # 判断信息是否为合法的变量名
print("abC".islower())  # 判断信息中的英文是否全为小写(可以含其他字符)       
print("abC".isupper())  # 判断信息中的英文是否全为大写(可以含其他字符)
print(",".join(["a","b","3","4"]))  # 将列表转换为字符串；“,”为不同值的分隔方法，可换为“+”等
print("1+2+3+4".split("+"))  # 将字符串转换为列表；默认按空格分隔，若特殊注明，则按注明方式分隔
print("   \nmy name is fmy\n   ".strip())  # 去除信息中开头和结尾的空格和换行；“\n”即换行# 其它相关语法自行琢磨
```

例40：
```python
p = str.maketrans("abcdef","123456")  # 定义一个翻译规则
print("about a cd".translate(p))  # 引用翻译规则对信息进行翻译
```

例41：
```python
info = {
"50901":"FMY",
"50902":"XD",
"50903":"FZH",
"50904":"LYX"
}  # 字典赋值
print(info)  # 输出字典信息；无序；冒号前为key，后为对应信息
print(info["50901"])  # 按key查找对应信息并输出，若不存在则报错
print(info.get("50901"))  # 按key查找对应信息并输出，若不存在则输出None
info["50903"] = "fzh"  # 原字典中存在该key，则修改其信息
info["51001"] = "MLY"  # 原字典中不存在该key，则添加其信息
print("51002" in info)  # 判断该key是否存在于该字典，存在输出True，不存在输出False
del info["50904"]  # 删除字典中对应信息
info.pop("50902")  # 删除字典中对应信息
info.popitem()  # 删除字典中随机一个信息
```

例42：
```python
info = {
"50901":"FMY",
"50902":"XD",
"50903":"FZH",
"50904":"LYX"
}
print(info.values())  # 输出所有信息
print(info.keys())      # 输出所有keys
info2 = {
"51001":"MLY",
"50902":"xd",
"50903":"fzh",
"51004":"ZJX"
}
info.update(info2)  # 将info2中的信息合并到info中，若有相同的key则按info2更新，若无则添加到info中
info.setdefault("key","value")  # 字典添加键值对
print(info.item())  # 将字典以列表形式输出，每个key与其对应的信息组成一个元组
```

例43：
```python
d = dict.fromkeys([1,2,3],"test")      # 创建初始化字典，“1,2,3”为字典的keys，“test”为每个key所对应的信息；同样，每个key只对应信息的地址，真正的信息被存在另一个地方且只有一份
```

例44：
```python
info = {
"50901":"FMY",
"50902":"XD",
"50903":"FZH",
"50904":"LYX"
}
for i in info:
    print(i,info[i])  # 字典循环；较高效
for k,v in info.items():
    print(k,v)      # 需要将字典先转换为列表，较低效
```

例45：
```python
list1 = set([1,2,3,4,"a","b"])  # 创建集合；集合内的元素是无序的、唯一的
list2 = set([3,4,5,6,"c"])
list3 = list1.intersection(list2)  # 取list1和list2的交集并赋给list3
list3 = list1 & list2  # 同上
list4 = list1.union(list2)  # 取list1和list2的并集并赋给list4
list4 = list1 | list2  # 同上
print(list1.difference(list2))  # 去除list1中两个集合的交集部分然后输出；差集
print(list1 - list2)  # 同上
print(list1.issubset(list2))  # 判断list1是否为list2的子集
print(list1.issuperset(list2))  # 判断list1是否为list2的父集
print(list1.symmetric_difference(list2))  # 在并集中去除交集部分然后输出；对称差集
print(list1 ^ list2)  # 同上
print(list1.isdisjoint(list2))  # 判断两个集合的交集是否为空集，若为空则返回True
```

例46：
```python
list = set([1,2,3,4])
list.add(5)  # 添加一个集合元素
list.update([6,7,8])  # 添加多个集合元素
list.remove(1)  # 删除一个集合元素# 其它相关语法自行琢磨
```

例47：
```python
f = open("file","r",encoding="utf-8")  # 打开文件“file”，指定只读模式("r")，不可写
data = f.read()  # 读取文件内容并赋值给“data”
f2 = open("file2","w",encoding="utf-8")  # 创建文件“file2”，指定只写模式("w")，不可读；若已存在该文件则覆盖内容
f2.write("blahblah")  # 写文件；会覆盖原文件内容
f3 = open("file3","a",encoding="utf-8")  # 创建或打开文件“file3”，指定追加模式("a")，不可读，写入文件时不会覆盖原内容
f4 = open("file4","r+",encoding="utf-8")  # 打开文件“file4”，指定读写模式，可读可追加，追加时只追加到文件最后
f5 = open("file5","w+",encoding="utf-8")  # 打开文件“file5”，指定写读模式，可写可追加，追加时只追加到文件最后
f6 = open("file6","rb")  # 打开一个以二进制编码的文件，只读模式；只写为“wb”，只追加为“ab”
file_name.close()  # 打开文件进行相关操作后要关闭文件
```

例48：
```python
f = open("file.txt","r")
for i in range(5):
    print(f.readline())  # 读取一行，循环五次，即读五行；每一行都有下标，从0开始
f.close()
```

例49：
```python
f = open("file.txt","r")
for index,line in enumerate(f.readlines()):  # 此方法只适应于读小文件，因为每一行都会存在内存里，极占内存；不推荐用
    if 3 < index < 8:
        print(line.strip())  # 输出第四到八行，去除每行末的“\n”
f.close()
```

例50：
```python
f = open("file.txt","r")
count = 0
for i in f:  # f内内容每读取一行就会覆盖前一行，故内存中只有一行
    if 4 < count <9:
        print(i.strip())
        count +=1
        continue
    count += 1
f.close()
```

例51：
```python
f = open("file.txt","r")
print(f.tell())  # 输出此时光标的位置，按字符个数记位
f.seek(0)  # 调整光标位置；此时回到0位置；因为读取文件时光标移动到最后时不会返回，故如果不调整光标位置，则文件不能被再次读取
f.truncate(30)  # 从文件开头截断30个字符保留，其余删除；与光标位置无关
f.close()
```

例52：
```python
import sys
sys.stdout.write("aaaaaaa")
sys.stdout.write("bbbbbbb")   # 标准输出；两个信息间不会换行，若用“print”则会自动换行
```

例53：
```python
import sys,time
for i in range(50):
    sys.stdout.write("#")
    sys.stdout.flush()  # 强制刷新，阻止写入内容写入缓冲区而使其直接写入硬盘；若非，则需等缓冲区满后一并写入硬盘
    time.sleep(0.1)  # 降低输出速度
```

例54：
```python
f = open("file.txt","r",encoding="GBK")
f2 = open("file2.txt","w",encoding="GBK")
for line in f:
    if "困难算什么东西" in line:
        line = line.replace("困难算什么东西","Difficulties are shit")
    f2.write(line)
f.close()
f2.close()  # 修改原文件指定位置，并写入新文件保存；若文件较小，可以把文件写入内存，修改后再写回文件
```

例55：
```python
with open("file","r") as f,\
         open("file2","r") as f2:  # 同时打开多个文件，且末尾无需写关闭文件代码
    print(f.readline())
```

例56：
```python
s = "你好"  # Python3以上默认用Unicode编码字符串，所以此字符串只能被编码成“GBK”或“UTF-8”或其它
s_gbk = s.encode("gbk")  # s_gbk为GBK编码的字符串
s_utf8 = s.encode("utf-8")  # s_utf8为UTF-8编码的字符串
gbk_to_utf8 = s_gbk.decode("gbk").encode("utf-8")  # 先把s_gbk解码成用Unicode编码的字符串再编码成用UTF-8编码的字符串，故“s_utf8”和“gbk_to_utf8”等同；Unicode也称作UTF-16；decode("原来的编码方式")，encode("要转成的编码方式")
```

例57：
```python
import time
time_format = "%Y-%m-%d %X"  # 规定时间显示方式，Y-年，m-月，d-日，X-时分秒
for i in range(5):
    time_current = time.strftime(time_format)
    print(time_current)
    time.sleep(1)  # 一秒输出一次
```

例58：
```python
def test(x,y,z):  # 定义一个函数，函数名为test()，形式参数为x,y,z
    """pass"""  # 函数解释说明，可无
    print(x,y,z)  # 函数内部命令
    return 0  # 返回值；可以用于判断函数执行情况
test(1,2,4)  # 调用函数，并赋值，1,2,4为实际参数，实际参数必须与形式参数一一对应
test(y=2,x=1,z=4)  # 强行赋值，与形参顺序无关；此与上一行代码结果相同
test(1,z=4,y=2)  # 关键参数(y=2/z=4)只能放在位置参数(1)后面
```

例59：
```python
def test(x,y=2):  # 定义函数时，给“y”赋了一个默认值“2”，此时“y”为默认参数
    """pass"""
    print(x,y)
    return 0
test(1,3)  # 调用函数时默认参数的值可修改覆盖；类比安装软件时的默认安装路径，存在但可修改
```

例60：
```python
def test(*args):  # “*”后是一个自定义变量名
    """pass"""
    print(args)
    return 0
test(1,2,3,4,5)  # 将五个实参以元组形式赋给“args”
test(*[1,2,3,4,5])  # 功能与上行代码相同；当实参个数不确定时，可以把形参定义为一个参数组，即“*args”
```

例61：
```python
def test(**kwargs):  # “**”后是一个自定义变量名
    """pass"""
    print(kwargs)
    return 0
test(name="FMY",age=19,prof="student")  # 可以将n个信息以字典形式赋给“kwargs”；参数组与各类参数混用时要放在各类参数后面
```

例62：
```python
def change(na):
    print("before change",na)
    na = "FMY"  # 变量“na”为局部变量，只在函数内定义并生效，不能在函数外被引用
    print("after change",na)
    return 0
name = "fmy"
change(name)
print(name)  # 变量“name”不会被改变
```

例63：
```python
def change(na):
    global school  # 声明“school”为全局变量才可在函数内被引用，若不声明则默认为局部变量，需要赋值
    print("before change",na,school)
    na = "FMY"
    school = "OUC"
    print("after change",na,school)
    return 0
name = "fmy"
school = "FH"  # 变量“school”是全局变量，可以在函数内外被引用
change(name)
print(name,school)  # 变量“school”被改了；尽量不要在函数内改全局变量
```

例64：
```python
names = ["fmy","XD","FZH"]
def func():
    names[0] = "FMY"
    print("before:",names)
    return 0
func()
print("after:",names)  # 列表、字典和集合作为全局变量时可以在函数内被改变
```

例65：
```python
def calc(n):
    print(n)
    if int(n/2) == 0:
        return 0
    return calc(int(n/2))  # 在函数内部调用本函数；递归
calc(10)
```

例66：
```python
msg = '''
{"FH":"FMY",
"YZ":"LJS",
"SY":"WJH"}
'''
print(msg)  # “msg”为字典格式的多行字符串
dic = eval(msg)  # 将“msg”转换成字典并赋值给“dic”；“eval()”也可以将列表形式的字符串转换成列表
print(dic)
print(dic["FH"])
```

例67：
```python
calc = lambda x:x+3  # 定义匿名函数，并赋给变量“calc”；“x+3”处可写一切三元运算
print(calc(3))  # 输出“6”
```

例68：
```python
import time
def timer(func):  # 装饰器；本质即函数
    def deco():  # 嵌套函数
        start_time = time.time()  # 记录开始时间
        func()
        stop_time = time.time()      # 记录结束时间
        print("the run time of func is %s" % (stop_time-start_time))
    return deco  # 将嵌套函数返回
@timer  # 调用装饰器；写在被装饰的函数上边，相当于“test = timer(test)”，即将timer()的返回值deco赋给test，此时test储存的是deco()的内存地址，下面运行test()时，实际运行的是deco()，且func=test；因为下边运行test()时，实际运行了deco()，test()并没有运行，故需要在嵌套函数内写一个func()来让test()正常运行，因为func=test
def test():
    time.sleep(1)
    print("in the test")
test()
```

例69：
```python
import time
def timer(func):
    def deco(*args,**kwargs):  # 不定参数，应对多个被装饰函数不同变量个数的问题
        start_time = time.time()
        func(*args,**kwargs)
        stop_time = time.time()
        print("the run time of func is %s" % (stop_time-start_time))
    return deco
@timer
def test():
    time.sleep(1)
    print("in the test")
@timer
def test2(name):
    time.sleep(1)
    print("the name of test2 is",name)
test()
test2("FMY")  # @timer(timer_type="one or something")带参数的相关功能见网址或视频
```

例70：
```python
names = []
if names:  # 如果列表至少有一个元素，则执行if以下代码，若列表为空，则执行else以下代码；while语句同
    print("True")
else:
    print("False")
```

例71：
```python
n = 5 % 3  # “%”为求模运算符，运算结果为两数相除所得的余数
print(n)  # n=2
m = 2 ** 3  # “**”为乘方
print(m)  # m=8
```

例72：
```python
import json
nums = [1,4,9,37,8,0,6]
with open("number","w") as f:
    json.dump(nums,f)  # 将列表储存在文件“number”中
```

例73：
```python
import json
with open("number","r") as f:
    nums = json.load(f)  # 将以列表/字典形式储存数据的文件转成列表/字典赋值给“nums”# 另外参考pickle
    print(nums)
```

例74：
```python
list = [a*2 for a in range(10)]  # 在你访问这个列表前其中的每个元素都已经存在
print(list)  # 输出一个列表
```

例75：
```python
list = (a*2 for a in range(10))  # 在你访问这个列表前其中的元素并不存在，而只存在一个列表生成器
print(list)  # 输出列表生成器的地址
g = list.__next__()  # 获取生成器生成的下一个值；生成器只保留当前值，且只能一步一步往后取值，不能返回，不能跨步，故很少用“__next__()”方法
```

例76：
```python
def fib(max):
    n, a, b = 0, 0, 1
    while n < max:
        yield b  # 只要有“yield”存在，这就是一个生成器，而非函数；“yield”会使线程跳出函数
        a, b = b, a + b  # &
        n = n + 1
    return "No number next!"  # 当生成器生成至最后一个数时，若还要求输出下一个数，则会报错，显示return信息
f = fib(10)
print(f.__next__())  # 输出1
print(f.__next__())  # 输出1
print(f.__next__())  # 输出2
# &处代码相当于：
t = (b, a+b)
a = t[0]
b = t[1]
```

例77：
```python
def consumer(name):
    print("%s 准备吃包子啦!" %name)
    while True:
       baozi = yield  # 程序执行到此会跳出函数
       print("[%s]包子来了,被[%s]吃了!" %(baozi,name))
c = consumer("FMY")
c.__next__()
b1 = "白菜馅"
c.send(b1)  # “send”将程序调回“baozi = yield”步骤，同时赋值给“baozi”；只赋值一次# 具体其它见test4\e生成器并行线程.py
# 迭代器见“Python之路，Day4”
```


例78：
```python
import os
print(os.path.abspath(__file__))      # 输出当前文件的绝对路径
print(os.path.dirname(os.path.abspath(__file__)))      # 输出当前文件的绝对路径，但去掉当前文件
```

例79：
```python
import os,sys
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
sys.path.append(BASE_DIR)  # 把BASE_DIR所代指的路径添加到文件搜索列表中，以便导入存在于不同目录下的模块
from xx import xx1  # 从调回的目录下调用文件
xx2.func()  # 调用文件下的函数或其它
```

例80：
```python
import module_test1, module_test2  # 调用多个模块中间用逗号分隔
from module_test import name, age, race  # 导入模块中的多个变量
from module_test import *  # 导入模块中的所有变量# 已放弃使用
from module_test import greeting as gt  # 给模块中的变量起一个别名，避免与调用模块的文件中的变量重名
import package_test  # 导入模块包的本质是导入了模块包里面的__init__.py文件
```

例81：
```python
import time
print(time.time())  # 输出当前时间戳格式的时间，指从1970年元旦到当前的时间差(单位秒)
print(time.localtime())  # 输出当前元组格式的时间(含九种元素)；括号填时间戳格式的时间，可以将时间戳格式的时间转化为元组格式的时间
print(time.gmtime())  # 输出当前UTC时间(世界标准时间，即本初子午线时间)；括号填时间戳格式的时间
tuple = time.localtime()
print(time.mktime(tuple))  # 输出时间戳格式的时间；括号填元组格式的时间
tup = time.localtime(12312312312)
print(time.strftime("%Y-%m-%d %H:%M:%S %z %a %A",tup))  # 将“tup”代表的元组格式的时间转化为自定义格式的时间；%H当前小时，%M当前分钟，%S当前秒，%z当前时区，%a当前星期缩写，%A当前星期全称；其它见图片知识点
print(time.strptime("2018-08-11 14:03:00","%Y-%m-%d %H:%M:%S"))  # 将自定义格式的时间转化为元组格式的时间
print(time.asctime(tup))  # 将元组格式的时间转化为自定义格式的时间；括号填元组格式的时间，若无，则以自定义格式输出当前时间
print(time.ctime(12312123))  # 将时间戳格式的时间转化为自定义格式的时间；括号填时间戳格式的时间，若无，则以自定义格式输出当前时间
import datatime  # 相关操作见图片知识点
```


例82：
```python
import random  # 相关操作见图片知识点
```

例83：
```python
import os  # 相关操作见图片知识点
```

例84：
```python
import shutil
f = open("test1","r",encoding="utf-8")
f2 = open("test2","w",encoding="utf-8")
shutil.copyfileobj(f,f2)  # 复制文件内容test1到test2
f.close()
f2.close()
shutil.copyfile("test1","test3")  # 直接复制，不需要打开文件# 其余方法(复制权限、状态信息、目录等)见http:# www.cnblogs.com/wupeiqi/articles/4963027.html
```

例85：
```python
import zipfile  # tar文件的处理见上方网址
z = zipfile.ZipFile("zipfile.zip","r")  # 解压文件
z.extract("file_name")  # 解压“file_name”
z.extractall()  # 全部解压
z.close()
z = zipfile.ZipFile("zipfile.zip","w")  # 创建压缩文件，若已存在，则清空原文件
z.write("file_name")  # 将“file_name”压缩进文件
z.close()
```

例86：
```python
import shelve
_list = ["karl","19","student"]
info = {"name":"liz","sex":"woman","age":13}
msg = "They are friends."
d = shelve.open("shelve_t")
d["list"] = _list  # 将Python数据类型(此为Python列表)存储到“shelve_t”文件里，其key为“list”
d["info"] = info
d["msg"] = msg
d.close()
d_ = shelve.open("shelve_t")
print(d_.get("list"))  # 用“get”方法通过key获取信息并转换为Python数据类型(此为Python列表)# 
print(d_.get("info"))
print(d_.get("msg"))
d_.close()
```

例87：
```python
import xml  # 相关操作见/test5下的相关文件
```

例88：
```python
import configparser  # 相关操作见/test5下的相关文件以及“Python之路，Day5”# 其它模块同见
```

例89：
```python
import re  # 正则表达式相关操作见图片知识点以及/test5下的相关文件
```

例90：
```python
class Dog(object):  # 类是一个通用的原型
    legs = 4  # “legs”是一个类变量，存在类内存里；类变量是大多数实例共用的属性，只创建一次，节省内存，个别实例可以自行修改，修改原理为在实例中创建一个同名实例变量，创建方法为dog1.legs = 3
    def __init__(self,na,ty):  # “self”即实例(对象)；__init__主要为储存一些初始化属性，即self.name等
        '''__init__为构造函数'''
        self.name = na  # “name”是类的一个属性；“na”是一个实例变量，存在实例内存里
        self.type = ty
    def sayhi(self):  # 类的方法也有“self”是因为可以在这些方法中调用一些初始属性以及确定使用方法的特定对象(实例)
        print("hi,i'm {a}".format(a=self.name))
dog1 = Dog("jack","A")  # 把一个类变成一个具体对象的过程叫实例化；相当于Dog(dog1,"jack","A")
print(dog1.name)
dog1.sayhi()  # 相当于Dog.sayhi(dog1)
print(dog1.legs)  # 实例可以引用类变量；引用变量顺序为先从实例变量(如name,type)中找，再从类变量中找(如legs)
```

例91：
```python
class Animal(object):
    def __init__(self,na,ty):
        self.name = na
        self.type = ty
    def sayhi(self):
        print("hi,i'm {a}".format(a=self.name))
dog = Animal("jack","A")
dog.bark = "{a}: wang wang wang".format(a=dog.name)  # 实例可扩展属性；类包含一些对象所具有的一些相同属性，而对于特定对象(即实例)，特定属性可以被添加；此处即给“dog”实例添加(创建)了一个实例变量“bark”
print(dog.bark)
```

例92：
```python
class Animal(object):
    def __init__(self,na,ty):
        self.name = na
        self.type = ty
    def sayhi(self):
        print("hi,i'm {a}".format(a=self.name))
    def __del__(self):  # 此为析构函数，主要在变量被释放或销毁时自动执行一些扫尾工作
        print("{a} is deadly dead".format(a=self.name))
dog = Animal("jack","A")
dog.sayhi()
del dog  # 主动销毁变量；如程序结束为被动销毁
```

例93：
```python
class Animal(object):
    def __init__(self,na,ty,ha_cut):
        self.name = na
        self.type = ty
        self.__hair_cut = ha_cut  # “__hair_cut”是一个私有属性，即“hair_cut”前加了两个“_”，仅允许类内部访问或修改
    def show_info(self):
        print("name:{0} type:{1} hair_cut:{2}".format(self.name,
                                                      self.type,
                                                      self.__hair_cut))  # 访问私有属性“__hair_cut”
    def change_hair(self):
        self.__hair_cut = "kind 2"  # 修改私有属性“__hair_cut”
    def __heart(self):  # “__heart”是一个私有方法，禁止外部访问
        print("{a}'s heart stops beating".format(a=self.name))
    def __del__(self):
        Animal.__heart()  # 调用私有方法
        print("{a} is deadly dead".format(a=self.name))
dog = Animal("jack","A","kind 1")
```

例94：
```python
class Humans(object):
    def __init__(self,name,age):
        self.name = name
        self.age = age
        print("%s is a human..." % self.name)
    def eat(self):
        print("%s is eating..." % self.name)
class Men(Humans):  # 子类括号内为父类名称
    def __init__(self,name,age,skin):  # 若子类在继承了父类初始属性后，还要添加特有属性，则需重置__init__方法
        #Humans.__init__(self,name,age)  # 初级添加父类属性的方法，若有多个父类，需添加多次
        super(Men, self).__init__(name,age)  # 高级添加父类属性的方法，即使有多个父类，也只需添加一次
        self.skin = skin
    def hair(self):
        print("%s has hair..." % self.name)
m1 = Men("Jack",20,"white")
```

例95：
```python
class Humans(object):
    def __init__(self,name,age):  # 此方法不被调用
        self.name = name
        self.age = age
        print("%s is a human..." % self.name)  # 此段不会输出
    def eat(self):
        print("%s is eating..." % self.name)
class Feelings(object):
    def __init__(self,many):
        self.many = many
        print("Humans has %s feelings..." % self.many)
class Men(Feelings,Humans):  # Humans类有__init__方法，Feelings类也有，但同名方法只走一个，按顺序来
    def hair(self):
        print("%s has hair..." % self.name)
m1 = Men("5")  # 此处只能输入一个值，对应“many”
```

例96：
```python
class A(object):
    def __init__(self):
        print("A")
class B(A):
    def __init__(self):
        print("B")
class C(A):
    def __init__(self):
        print("C")
class D(B,C):
    def __init__(self):
        print("D")
d = D()  # 对于多个__init__方法，查找顺序为B、C、A(广度优先)，若找到，则执行，并忽略后面的
```

例97：
```python
class Animal(object):
    def __init__(self, name):
        self.name = name
    @staticmethod  # 静态方法，将被装饰的函数变成一个单纯的、本身跟类已经没有关系了的函数(类中的函数叫方法)，函数内不能再通过self调用其它方法中的变量，函数内self也不再起作用，类外只能通过类名调用该函数
    def animal_talk(obj):
        obj.talk()
class Cat(Animal):
    def talk(self):
        print('%s: 喵喵喵!' % self.name)
class Dog(Animal):
    def talk(self):
        print('%s: 汪！汪！汪！' % self.name)
c = Cat('jack')
d = Dog('john')
Animal.animal_talk(c)
Animal.animal_talk(d)  # 多态的主要作用为实现 一种接口，多种实现
```

例98：
```python
class Animal(object):
    def __init__(self,name,type):
        self.name = name
        self.type = type
    def eat(self):
        print("%s is eating..." % self.name)
class Polyphagia(object):
    def eat_meat(self):
        print("eating meat...")
    def eat_grass(self):
        print("eating grass...")
class Dog(Animal):  # Dog类继承了Animal类
    def __init__(self,name,type,sex):
        super(Dog, self).__init__(name,type)
        self.sex = sex
        self.polyphagia = Polyphagia()  # 此处相当于Dog类继承了Polyphagia类；此方法为组合，可实现多继承
    def bark(self):
        print("%s is barking..." % self.name)
dog = Dog("Jack","A","male")
dog.polyphagia.eat_meat()  # 通过Dog类实例化的dog变量可以用polyphagia属性间接调用Polyphagia类中的方法
dog.eat()  # dog变量可以直接调用父类中的方法
```

例99：
```python
class Animal(object):
    class_name = "Animal"
    def __init__(self,name,type):
        self.name = name
        self.type = type
    @classmethod  # 类方法，被装饰的方法只能调用类变量，不能调用实例变量，如name,type
    def flesh(cls):
        print("%s has flesh" % cls.class_name)
ani = Animal("Jack","A")
ani.flesh()
```

例100：
```python
class Animal(object):
    def __init__(self,name,type):
        self.name = name
        self.type = type
    @property  # 属性方法，将方法变成一个静态属性(实例变量name等即为静态属性，方法为动态属性)
    def flesh(self):
        print("%s has flesh" % self.name)
        return None
ani = Animal("Jack","A")
ani.flesh  # 不需加括号即可调用，此处flesh作用类似于name,type
```

例101：
```python
class Animal(object):
    def __init__(self,name,type):
        self.name = name
        self.type = type
        self.__state = "normal"
    @property
    def flesh(self):
        print("%s has a %s flesh" % (self.name,self.__state))
        return None
    @flesh.setter
    def flesh(self,state):  # 原则上要求方法名相同；只能填一个value
        self.__state = state
    @flesh.deleter  # 该方法存在才能执行类外的del命令
    def flesh(self):
        del self.__state  # 删除命令存不存在并没关系，类外的del只是触发了该方法
ani = Animal("Jack","A")
ani.flesh = "healthy"  # 静态属性赋值，“healthy”被赋给state
ani.flesh
del ani.flesh  # 删除(通过属性方法转化的)静态属性，实际触发flesh.deleter下的方法，并执行其命令
```

例102：
```python
class Animal(object):
    """describe all animals"""
    def __init__(self,name,type):
        self.name = name
        self.type = type
    def eat(self):
        print("%s is eating..." % self.name)
print(Animal.__doc__)  # 输出类的描述信息# 其它方法见Python之路，Day7
```

例103：
```python
class Dictionary(object):
    def __init__(self):
        self.data = {}  # 创建一个字典
    def __setitem__(self, key, value):
        self.data.setdefault(key,value)
    def __getitem__(self, item):  # 此处“item”即“key”
        return self.data[item]
    def __delitem__(self, key):
        self.data.pop(key)
    def __str__(self):
        return str(self.data)
dic = Dictionary()
dic["name"] = "karl"  # 触发__setitem__方法，添加了一个键值对
print(dic["name"])  # 触发__getitem__方法，返回对应的value信息
del dic["name"]  # 触发__delitem__方法，删除对应键值对# 详细见/test7相关文件
print(dic)  # 触发__str__方法，返回字典
```

例104：
```python
def talk(self):
    print("%s is %s years old." % (self.name,self.age))
def __init__(self,name,age):
    self.name = name
    self.age = age
Foo = type("Foo",(object,),{"talk":talk,"__init__":__init__})  # type里依次为“类名”、“基类”(注意写法)、“方法”
f = Foo("Karl",19)
f.talk()  # 类本质也是对象，是通过type类创建的；此为类的特殊创建方式
```

例105：
```python
class Animal(object):
    def __init__(self,name,type):  # 实例实际通过__new__方法创建；实例属性通过__init__方法构造
        self.name = name
        self.type = type
        print("running __init__...")
    def __new__(cls, *args, **kwargs):  # 一般创建类时不需要写__new__方法，因为其本身自带
        print("running __new__...")  # 此步相当于重构__new__方法
        return object.__new__(cls)  # 因为创建类的程序不会写，所以直接继承基类的方法，否则实例无法创建
ani = Animal("jack","dog")  # 先“running __new__...”，后“running __init__...”
```

例106：
```python
class Dog(object):
    def __init__(self,name):
        self.name = name
    def eat(self,food):
        print("%s is eating %s." % (self.name,food))
dog = Dog("Jack")
order = input("Expected order")
if hasattr(dog,order):  # hasattr(object,str_name)，判断实例对象object中是否有str_name字符串所对应的方法或属性
    fun = getattr(dog,order)  # getattr(object,str_name)，根据字符串获取实例对象中对应的方法或属性并赋值给fun
    if type(fun) is str:
        print(fun)  # 如果是属性，直接打印，此处为“Jack”
    else:
        fun("meat")  # 如果是方法，则fun实际是一个内存地址，可调用fun
else:
    setattr(dog,order,None)  # setattr(x,"y",v)-->x.y = v，“v”是“None”、字符串、列表或字典等，则添加一个属性
    attr = getattr(dog,order)
    print(attr)
```


例107：
```python
class Dog(object):
    def __init__(self,name):
        self.name = name
    def eat(self,food):
        print("%s is eating %s." % (self.name,food))
def bark(self):  # bark是一个函数，跟Dog类没啥关系
    print("%s is barking..." % self.name)
dog = Dog("Jack")
order = input("Expected order")
if not hasattr(dog,order):  # 如果不存在该属性或方法
    setattr(dog,order,bark)  # 添加一个方法；此处是写死的，不论用户输入啥，都执行bark函数，方法名不同而已
    attr = getattr(dog,order)  # 获取该新添加的方法
    attr(dog)  # 调用该方法，需把实例手动传给该方法
```

例108：
```python
lis = []
dic = {}
try:  # 其余相关语法见http:# www.cnblogs.com/wupeiqi/articles/5017742.html
    print(lis[1])
    print(dic["name"])
    open("inexistent_file")
except IndexError as ie:  # “ie”、“ke”和“e”都是对应的异常信息
    print("Wrong:",ie)
except KeyError as ke:
    print("without this key:",ke)
except Exception as e:  # 抓住几乎所有错误；当前面的错误都没抓到时，执行此程序
    print("unknown wrong:",e)
else:  # 当主程序没出任何错时，执行此程序
    print("everything is cool")
finally:  # 不管主程序有没有出错，都执行此程序
    print("whether there is an error or not")
```

例109：
```python
class KarlError(Exception):  # 自定义异常，注意基类
    def __init__(self,msg):
        self.message = msg
    def __str__(self):
        return self.message
try:
    print("connecting...")
    #some judgements...
    raise KarlError("database unconnected!")  # 如果一系列程序后，出现自定义的异常，则触发该异常
except KarlError as kae:
    print(kae)
```

例110：
```python
# 服务器端
import socket
server = socket.socket()  # 确定传输协议
server.bind(("localhost",1220))  # 绑定端口
print("I'm waiting a call...")
server.listen()  # 开始监听消息
conn, addr = server.accept()  # 等待接受消息；若没有收到消息，则一直卡在这，收到消息会返回两个值，“连接线路”赋值给“conn”，“端口值”赋值给“addr”
print("A call comes in...")
data = conn.recv(1024)  # 通过线路接受到最多1024字节(1KB)的信息，并赋值给“data”
print("Message:",data)
conn.send(data.upper())  # 应答；将信息转为大写后，通过线路发送回客户端
server.close()
# ---------------------------------  # socket实现ssh、ftp以及多客户端同时在线，见/test8相关文件
# 客户端
import socket
client = socket.socket()  # 确定传输协议
client.connect(("localhost",1220))  # 连接端口
client.send(b"hello world!")  # 发送信息；只能传输bytes类型；若发送中文-->client.send("你好".encode("utf-8"))
data = client.recv(1024)
print(data)  # 若接受的是中文-->print(data.decode())
client.close()
```


例111：
```python
import paramiko  # paramiko模块见/test9相关文件
```

例112：
```python
import threading,time
def fun(n):
    print("in the fun",n)
    time.sleep(2)
t1 = threading.Thread(target=fun,args=("t1",))  # 注意加逗号，因为参数默认为元组形式
t2 = threading.Thread(target=fun,args=("t2",))
t1.start()
t2.start()  # 总共费时2秒
# fun("t1")
# fun("t2")  # 总共费时4秒
```

例113：
```python
import threading,time
class MyThread(threading.Thread):
    def __init__(self,n):
        super(MyThread,self).__init__()
        self.n = n
    def run(self):  # 此处必须写run
        print("running",self.n)
        time.sleep(2)
t1 = MyThread("t1")
t2 = MyThread("t2")
t1.start()
t2.start()
```

例114：
```python
import threading,time
def fun(n):
    print("in the fun-",n)
    time.sleep(2)
    print("function done-",n)
t_objs = []
sta_time = time.time()
for i in range(50):
    t = threading.Thread(target=fun,args=("%s" % i,))
    t.start()
    t_objs.append(t)  # 储存每一个线程，以便对应调用join函数
for t in t_objs:
    t.join()  # 强制等待该线程(只是t对应的那一个线程，循环列表得以使五十个线程都强制等待)执行完，再执行主线程；下方的print函数即主线程，若没有join函数，则主线程与其他五十个子线程一起执行(并行)
print("all threads have finished".center(50,"-"))  # 列表、时间、for循环和print函数都是主线程，五十个fun为子线程
print("cost:",time.time() - sta_time)
```

例115：
```python
import threading,time
def fun(n):
    print("in the fun-",n)
    time.sleep(2)
    print("function done-",n)  # 此处不会打印
sta_time = time.time()
for i in range(50):
    t = threading.Thread(target=fun,args=("%s" % i,))
    t.start()
    t.setDaemon(True)  # 将每个子线程改成守护线程，程序会等待所有非守护线程执行完毕后关闭程序，但不会等守护线程；任何线程都可以创建子线程，但创建后该线程和子线程便再没有任何关系，两者并行，互不干涉；守护线程为主线程服务，一旦主线程消失，守护线程也消失
print("all threads have finished".center(50,"-"))
print("cost:",time.time()-sta_time)
```

例116：
```python
import threading,time
def run(n):
    lock.acquire()  # 执行一个子线程时，获取一把线程锁，这时其他线程都不能再执行run函数
    global num
    print("in the run-",n)
    num +=1
    lock.release()  # 当前线程执行完后释放线程锁，其他线程才能执行run函数；此即相当于各线程串行，为避免表现出来，应使锁内程序耗时尽量短，不要拖延，
lock = threading.Lock()  # 添加一个线程锁
num=0
t_objs = []
for i in range(50):
    t=threading.Thread(target=run,args=("t%s"%i,))
    t.start()
    t_objs.append(t)
for t in t_objs:
    t.join()
print("all threads have finished".center(50,"-"))
print("num:",num)
```

例117：
```python
import threading, time
def run(n):
    semaphore.acquire()
    time.sleep(1)
    print("run the thread: %s\n" % n)
    semaphore.release()
semaphore = threading.BoundedSemaphore(5)  # 最多允许5个线程同时运行
for i in range(20):
    t = threading.Thread(target=run, args=(i,))
    t.start()
while threading.active_count() != 1:  # 等待所有子线程执行完后再执行主线程，即print函数；只剩一个线程即所有子线程都已执行完，只剩主线程
    pass  # print threading.active_count()
else:
    print("----all threads done---")
```

例118：
```python
import threading,time
event = threading.Event()  # 设置一个事件
def light_change():
    count = 1
    while True:
        if count <= 10:
            event.set()  # 设置标志位，即绿灯10秒
            print("\033[42;1mgreen light\033[0m",count)
        elif 10 < count <= 15:
            event.clear()  # 清空标志位，即红灯5秒
            print("\033[41;1mred light\033[0m",count)
        else:
            count = 0
        time.sleep(1)
        count += 1
def cars(name):
    while True:
        if event.is_set():  # 如果检测到有标志位
            print("[%s] is running..." % name)
            time.sleep(1)  # 给车减速，方便观察
        else:
            print("[%s] sees the red light and waits..." % name)
            event.wait()  # 将循环卡住，直到检测到有标志位再继续
            print("[%s] sees the green light on and start going..." % name)
light = threading.Thread(target=light_change)
light.start()
car1 = threading.Thread(target=cars,args=("Tesla",))
car1.start()
```

例119：
```python
import queue  # 队列即一个容器，储存一堆数据，不同于列表的是，从队列里取出数据后，队列里该数据便不再存在
q = queue.Queue(maxsize=2)  # 先入先出队列；最大值可设，不设时无最大值
q.put(1)
q.put("F")
q.put(2)  # 单线程下数据没有被取出，所以该处线程会卡住
# q.put(2,block=False)  # 默认block为True，改为False后若队列已满则会报错
# q.put(2,timeout=1)  # 若队列已满则1秒后报错
print(q.get())  # 先取1
print(q.get())  # 再取“F”
print(q.get())  # 单线程下数据没有被添加，所以该处线程会卡住
# print(q.get(block=False))  # 默认block为True，改为False后若队列为空则会报错
# print(q.get(timeout=1))  # 若队列为空则1秒后报错
```

例120：
```python
import queue
q = queue.LifoQueue(maxsize=3)  # lifo=last in first out，后入先出队列
q.put(1)
q.put("F")
q.put(2)
print(q.get())  # 打印2
print(q.get())  # 打印“F”
print(q.get())  # 打印1
```

例121：
```python
import queue
q = queue.PriorityQueue(maxsize=3)  # 优先级队列
# q.put((14,"W"))  # 以元组形式传入，输出时按每组第一个元素排序，必须全为数字或全为字母(不区分大小写)
# q.put((2,"F"))
# q.put((3,"K"))
q.put(("W",14))
q.put(("F",2))
q.put(("K",3))
print(q.get())
print(q.get())
print(q.get())
```

例122：
```python
import multiprocessing,threading
def th_run(nu):
    print("it's thread-%s" % nu)
def pr_run(name,n):
    print("hello ",name)
    t = threading.Thread(target=th_run,args=(n,))  # 每个进程起一个线程
    t.start()
if __name__ == "__main__":  # 貌似必须有这个东西
    for i in range(10):
        p = multiprocessing.Process(target=pr_run,args=("karl-%s" % i,i))  # 起十个进程
        p.start()
```

例123：
```python
import multiprocessing
def f(qq):
    qq.put([42,"F",None])
if __name__ == "__main__":
    q = multiprocessing.Queue()  # 与线程队列不是一回事，同一进程下的多个线程可以内存共享，即能共享线程队列内的数据；此为进程队列，一般各进程之间资源不能共享，当主进程创建了一个子进程并将进程队列传进去时，实际上是在子进程中克隆了一个进程队列，当该队列有数据传进去时，有中间翻译程序将数据序列化(pickle)暂时储存后又反序列化传给主进程的进程队列，所以宏观上看好像两个进程共享了一个队列，实则有两个队列；准确的说，线程队列实现的是线程之间的数据共享，进程队列实现的只是进程之间的数据传输
    p = multiprocessing.Process(target=f,args=(q,))
    p.start()
    print(q.get())
```

例124：
```python
import multiprocessing
def co(conn):
    conn.send([21,"F",True])  # 子进程发送消息(c23)
    print("from conn2:",conn.recv())  # 子进程收消息(c42)
    conn.close()
if __name__ == "__main__":
    conn1,conn2 = multiprocessing.Pipe()  # Pipe会返回两个值，两个值是平等的，相当于管道的两头
    p = multiprocessing.Process(target=co,args=(conn1,))
    p.start()
    conn2.send("hello conn1")  # 主进程发消息(c42)
    print(conn2.recv())  # 主进程接收消息(c23)，实现数据传输；发多少次就收多少次，发多收少则收不着，发少收多则卡住
```

例125：
```python
import multiprocessing,os
def f(d,l,i):
    d["pid%s"%i] = os.getpid()  # os.getpid()即获取进程id，os.getppid()即获取父进程id
    l.append(os.getpid())
    print(l)
if __name__ == "__main__":
    manager = multiprocessing.Manager()
    d = manager.dict()   # 创建字典；若要实现进程间数据共享，必须这样创建，而不是d={}
    l = manager.list()  # 用此方法创建的 list, dict, Namespace, Lock, RLock, Semaphore, BoundedSemaphore, Condition, Event, Barrier, Queue, Value和Array等可以实现进程间数据共享
    p_list = []
    for i in range(10):
        p = multiprocessing.Process(target=f,args=(d,l,i))
        p.start()
        p_list.append(p)
    for p in p_list:
        p.join()  # 使所有子进程执行完毕后再执行主进程
    print("line".center(50,"-"))
    print(d)
    print(l)
```

例126：
```python
from multiprocessing import Process, Lock
def f(l, i):
    l.acquire()
    print('hello world', i)
    l.release()
if __name__ == '__main__':
    lock = Lock()  # 进程锁，因为所有进程使用一个显示屏，为使其有需打印，对其加锁(#实际没看出效果)
    for num in range(10):
        Process(target=f, args=(lock, num)).start()
```

例127：
```python
import multiprocessing,os,time
def f(i):
    time.sleep(1)
    print("in the process-%s" % i,os.getpid())
    return os.getpid()
def bar(arg):
    print("---exec%s done--" % arg,"exec by",os.getpid())  # 回调函数由主进程启动，可提高效率
if __name__ == "__main__":
    pool = multiprocessing.Pool(3)  # 进程池中只允许同时有三个进程运行，其它进程被挂起
    for i in range(10):
        # p = pool.apply(func=f,args=(i,))  # 进程串行
        # p = pool.apply_async(func=f,args=(i,))  # 进程并行(3个一组)
        p = pool.apply_async(func=f,args=(i,),callback=bar)  # 回调函数，func函数执行完后返回结果给callback函数
    print("the main process-",os.getpid())
    print("end line".center(50,"-"))
    pool.close()
    pool.join()  # 不知道为什么，貌似join函数要在close函数后边
```

例128：
```python
import greenlet
def t1():
    print("A")
    gr2.switch()  # 转到协程2
    print("B")
    gr2.switch()  # 再转回协程2
def t2():
    print("C")
    gr1.switch()  # 转回协程1
    print("D")
gr1 = greenlet.greenlet(t1)  # 创建一个协程对象，手动转协程
gr2 = greenlet.greenlet(t2)
gr1.switch()  # 转到协程1
```

例129：
```python
import gevent
def func1():
    print("0-first in func1")
    gevent.sleep(2)  # 模拟IO操作(input和output，即输入和输出)，耗时2秒
    print("3-second in func2")
def func2():
    print("1-first in func2")
    gevent.sleep(1)
    print("2-second in func2")
gevent.joinall([  # 遇IO操作自动切换协程，使总费时2秒
    gevent.spawn(func1),
    gevent.spawn(func2),
])
```



