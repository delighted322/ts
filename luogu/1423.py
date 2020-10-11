x = float(input())

i = 0
l = 0
p = 2

while l < x:
    l = l + p
    p = 0.98 * p
    i = i + 1

print(i)