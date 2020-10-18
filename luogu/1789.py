n,m,k = map(int,input().split())

fP = []
for i in range(0,m):
    fP.append([int(x)-1 for x in input().split()])

sP = []
for j in range(0,k):
    sP.append([int(x)-1 for x in input().split()])

N = []
for i in range(0,n):
    N.append([])
    for j in range(0,n):
        N[i].append(0)

def isValid(x,y):
    if ((x < n and y < n)and(x >= 0 and y >= 0)):
        return True
    return False


for f in fP:
    N[f[0]][f[1]] = 1
    for x in range(f[0]-2,f[0]+3):
        if isValid(x,f[1]):
            N[x][f[1]] = 1
    for y in range(f[1]-2,f[1]+3):
        if isValid(f[0],y):
            N[f[0]][y] = 1
    if isValid(f[0]-1,f[1]+1):
        N[f[0]-1][f[1]+1] = 1
    if isValid(f[0]+1,f[1]+1):
        N[f[0]+1][f[1]+1] = 1
    if isValid(f[0]-1,f[1]+1):
        N[f[0]-1][f[1]-1] = 1
    if isValid(f[0]+1,f[1]-1):
        N[f[0]+1][f[1]-1] = 1
    

for s in sP:
    for x in range(s[0]-2,s[0]+3):
        for y in range(s[1]-2,s[1]+3):
            if isValid(x,y):
                N[x][y] = 1

count = 0
for x in N:
    for j in x:
        if (j == 0):
            count += 1
print(N)
print(count)