m, t, s = map(int, input().split())
print(m, t, s)
if (t == 0):
    n = m
elif (s % t == 0):
    n = s / t
else:
    n = s // t + 1

print(m - n)
