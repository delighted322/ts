N = input()

O = [0,1]
S = []
num = ''


for i in range(0,len(N)):
    if N[i] != '+' and N[i] != "-":
        num = num + N[i]
    else:
        if num == '':
            S.append("0/1")
        else:
            S.append(num)
        S.append(N[i])
        num = ''

S.append(num)
print(S)

R = ''
for i in range (0,len(S)):
    if S[i] == '+':
        R = '+'
    elif S[i] == '-':
        R = '-'
    else:
        m = S[i].split('/')
        A = m[0]
        B = m[1]
        O[1] = O[1] * int(B)
        if R == '+':
            O[0] = int(O[0]) * int(B) + int(A) * int(O[1])
        if R == '-':
            O[0] = int(O[0]) * int(B) - int(A) * int(O[1])

def simple(a,b):
    x = 1
    for i in range(2,min(a,b)+1):
        



print(O)
