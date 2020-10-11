x1, y1 = map(float,input().split())
x2, y2 = map(float,input().split())
x3, y3 = map(float,input().split())


c += ((x1 - x2) ** 2 + (y1 - y2) ** 2) ** 0.5

c += ((x1 - x3) ** 2 + (y1 - y3) ** 2) ** 0.5

c += ((x2 - x3) ** 2 + (y2 - y3) ** 2) ** 0.5

print('%.2f' % c)