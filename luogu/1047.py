l, m = map(int, input().split())
li = [1] * (l + 1)


for i in range(0,m):
    u, v = map(int,input().split())
    for j in range(u,v+1):
        li[j] = 0

count = 0
for i in li:
    if (int(li[i]) == 1):
        print(i,"----")
        count+=1
print(count)
print(li)

# r.sort(key = lambda x: x[0]) # lambda 在行内定义函数 输入x 返回x[0] => 用x的第一项来排序