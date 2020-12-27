import sqlite3
import random

conn = sqlite3.connect('schoolDb.db')


# data = c.execute("select * from classes")

def createTable():
    c = conn.cursor()
    c.execute('DROP TABLE IF EXISTS students;')
    c.execute('''CREATE TABLE students (
                    ID   INTEGER PRIMARY KEY,
                    姓名 TEXT,
                    性别  TEXT,
                    班级ID INTEGER,
                    语文成绩 INTEGER,
                    数学成绩 INTEGER
                );''')

# createTable()

lastNameList = ['赵','钱','孙','李','周','吴','郑','王']
firstNameList = ['一','二','三','四','五','六','七','八']

# '''INSERT INTO students(ID,姓名,性别,班级ID,语文成绩,数学成绩) VALUES ('%d','%s','%s','%d','%d','%d");''' % tuple(item)

def insertData():
    c = conn.cursor()
    i=1
    for lastName in lastNameList:
        for fisrtName in firstNameList:
            sql = '''INSERT INTO students(ID,姓名,性别,班级ID,语文成绩,数学成绩) VALUES ('%d','%s','%s','%d','%d','%d');''' % (i,lastName+fisrtName,'男' if random.random()>0.5 else '女',random.randint(1,2),random.randrange(60,100),random.randrange(50,100))
            i+=1
            # print(sql)
            c.execute(sql)    
    conn.commit()

# insertData()


def getAvg():
    c = conn.cursor()
    sql = '''select 班级名称,(avg(语文成绩)+avg(数学成绩))/2 as 平均成绩 from classes,students where classes.ID = students.班级ID group by 班级ID;'''
    data = c.execute(sql)
    conn.commit()

    for row in data:
        print(row)
# getAvg()


def getStudentGrade(lastName):
    c = conn.cursor()
    sql = '''select 姓名,语文成绩,数学成绩 from students where students.姓名 like '%s';''' % (lastName+"%")
    # print(sql)
    data = c.execute(sql)
    conn.commit()

    for row in data:
        # print(row)
        print("姓名：",row[0],"语文成绩：",row[1],"数学成绩：",row[2])
# getStudentGrade("赵")

def updateGrade(studentId,ChineseGrade,MathGrade):
    c = conn.cursor()
    sql = '''
    '''

# 输入一个id 如果不存在就添加 (姓名 成绩) 可以用询问
def addData():
    id = input("请输入要查找的id：")
    print(id)
    c = conn.cursor()

    sql = '''select * from students where ID = %s;
    ''' % id
    print(sql)
    data = c.execute(sql)
    conn.commit()

    if tuple(data):
        print("成功查到数据")
            for row in data:
                print(row)
    else:
        print("没有相应数据")
        name = input("请输入姓名：")
        ChineseGrade = input("请输入语文成绩：")
        MathGrade = input("请输入数学成绩：")
        

addData()