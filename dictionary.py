print(chr(97))
print(int(ord("a")))
d = {}
# for i in range(0,26):
#     d[chr(ord("a")+i)] = 0
# print(d)

d = {chr(ord("a")+x):0 for x in range(26)}

str = "bvjhbviquliurliuur"

for i in range(0,len(str)):
    if (d.__contains__(str[i])):
        d[str[i]]+=1
    else:
        d[str[i]] = 1
print(d)

str = "monsday"
d2 = {"sun":0,"mon":1,"tues":2,"wed":3,"thurs":4,"fri":5,"satur":6}
if (d2.__contains__(str[:3])):
    print(d2[str[:3]])
else:
    print("输入错误")