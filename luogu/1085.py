l = [0,0,0,0,0,0,0]
exist = False
for r in range(1,8):
    s = map(int, input().split())
    school, afterSchool = s
    if school + afterSchool > 8:
        l[r-1] = school + afterSchool
        exist = True
max = 0
if exist:
    for i in range(0,len(l)):
        if (l[i] > l[max]):
            max = int(i)
    print(int(max)+1)   
else:
    print(0) 