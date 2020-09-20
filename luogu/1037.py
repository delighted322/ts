n, k  = map(int, input().split())
x  = [] # 转换前的数字
y = [] # 转换后的数字
l = [] # 记录一个数字总共可以变成多少个数字的二维数组


def ifExist(l,n):
    for i in range(len(l)):
        if l[i] == n:
            return True, i
    return False, -1

for i in range(0,k):
    a,b = map(int,input().split())
    x.append(a)
    y.append(b)

for i in range(0,len(x)):
    full = [y[i]]
    exist, index = ifExist(x,y[i])
    while exist:
        full.append(y[index])
        exist, index = ifExist(x,y[index])
    l.append(full)

count = 1
for i in range(len(x)):
    count *= len(l[i]) + 1

print(count)


