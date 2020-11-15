

Xb = int(input())
Yb = int(input())
Xc = int(input())
Yc = int(input())

L = []
for i in range(0,Xb+1):
    L.append([0]*(Yb+1))

for x in range (0,Xb+1):
    for y in range(0,Yb+1):
        if (x == 0 or y == 0):
            L[x][y] = 1
        else:
            L[x][y] = L[x][y-1] + L[x-1][y]


print(L)

