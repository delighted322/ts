a,n,m,x = map(int,input().split())

upList = [[0,0]]
downList = [[0,0]]
countList = [[0,0]]

upList.append([1,0])
downList.append([0,0])
countList.append([1,0])

upList.append([0,1])
downList.append([0,1])
countList.append([1,0])



def add(m,n):
    return [m[0]+n[0],m[1]+n[1]]

def minus(m,n):
    return [m[0]-n[0],m[1]-n[1]]

for i in range(3,n):
    upList.append(add(upList[i-1],upList[i-2]))
    downList.append(upList[i-1])
    countList.append(countList[i-1]+upList[i]-downList[i])


print(upList,downList,countList)