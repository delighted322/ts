n, k = map(int,input().split())
A, B = 0, 0
aCount, bCount = 0, 0
for i in range(1,n+1):
    if (i % k == 0):
        A += i
        aCount += 1
    else:
        B+=i
        bCount += 1

print("%.1f %.1f" % (A / aCount, B / bCount))
