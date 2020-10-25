I = input()

X = ''
A = ''
B = ''
R = ''

O = ''
new = ''

for i in range(0,int(I)):
    N = input().split()
    if (len(N) == 3):
        X = N[0]
        A = N[1]
        B = N[2]
    else:
        A = N[0]
        B = N[1]

    if X == 'a':
        X = "+"
        R = str(int(A) + int(B))
    if X == 'b':
        X = "-"
        R = str(int(A) - int(B))
    if X == 'c':
        X = "*"
        R = str(int(A) * int(B))
    
    new = A + X + B + "=" + R
    O = O + new + '\n' + str(len(new)) + "\n"


print(O)