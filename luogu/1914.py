n = int(input())
str = input()

# print(ord(str))  # a => 97
# print(chr(97))   # 97 => a

out = ''

for i in range (0 ,len(str)):
    x = ord(str[i]) + n
    if (x > 122):
        x -= 26
    out += chr(x)

print(out)