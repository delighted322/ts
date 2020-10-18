n = int(input())
arr = [int(x) for x in input().split()]

count = 1
left = 0
right = 0
max = 0

for i in range(1,len(arr)):
    if (arr[i] == arr[i-1] + 1):
        count += 1
        right += 1
    else:
        if (count > max):
            max = count
        count = 1
        left = i
        right = i

print(max)