n = int(input())

total = 0

if (n <= 150):
    total = 0.4463 * n
elif (n <= 400):
    total = 0.4463 * 150 + 0.4663 * (n - 150)
else:
    total = 0.4463 * 150 + 0.4663 * (400 - 150) + 0.5663 * (n - 400)


print('%.1f' % total)