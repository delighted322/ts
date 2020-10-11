m, t, s = map(int, input().split())
if (t == 0):
    n = m
elif (s % t == 0):
    n = int(s // t)
else:
    n = int(s // t) + 1

print(m - n)
