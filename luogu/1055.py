a = str(input())
str  = a.split("-")
str2 = [str[0],str[1],str[2]]
count = 0
index = 1

for s in str2:
    for a in range( len(s)):
        count += int(s[a]) * index
        index += 1

result = count % 11

if result == 10:
    if (str[3] == "X"):
        print("Right")
    else:
        print("%s-%s-%s-%s" % (str[0],str[1],str[2],"X"))
else:
    if (int(str[3]) == result):
        print("Right")
    else:
        print("%s-%s-%s-%d" % (str[0],str[1],str[2],result))