# 面向对象
# 封装 （归类    把不想要外面看到的藏起来）
# 继承 类子类 （可以复用父类的方法    父类可以留方法让子类去完成  子类可以扮演成父类）
# 多态 （接口 只看你有没有这个能力 不用管你是谁 定义自己的比较器 ）   —— 面向对象的本质

class Rectangle:
    def __init__(self,a,b):
        self.a = a
        self.b = b

    def c(self):
        return 2*(self.a+self.b)
    
    def s(self):
        return self.a * self.b


r = Rectangle(10,20)
# print(r.c(),r.s())


class Animal:
    def __init__(self):
        pass

    def name(self):
        return None
    
    def talk(self):
        return None

    def __repr__(self):   #定义print()的返回值
        return ("我是一只 %s 我说话时会%s" % (self.name(),self.talk()))

class Cat(Animal):
    def __init__(self):
        super().__init__()

    def name(self):
        return "猫"

    def talk(self):
        return "喵喵喵"

class Dog(Animal):
    def __init__(self):
        super().__init__()

    def name(self):
        return "狗"
    
    def talk(self):
        return "汪汪汪"

c = Cat()
print(c)
d = Dog()
print(d)
