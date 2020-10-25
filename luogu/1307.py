N = input()

S = []
for i in range (0,len(N)):
    S.append(N[i])

O = ''

if S[0] == "-":
    for i in range (len(N)-1,0,-1):
        O = O + N[i]
    
    for i in range(0,len(O)):
        if O[1] == 0
    O = "-" + O

else:
    for i in range (len(N)-2,-1,-1):
        O = O + N[i]



print(O)