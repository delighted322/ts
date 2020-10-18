word = input().lower()
s = input().lower()

S = []
w = ""
for i in range(0,len(s)):
    if s[i] == " ":
        if len(w) > 0:
            S.append(w)
            S.append(" ")
            w = ""
        else:
            S.append(" ")
        
    else:
        w = w + s[i]
S.append(w)

count = 0
exlen = 0
exist = -1
first = -1

for i in range(0,len(S)):
    if (S[i] == word):
        count += 1
        if exist == -1:
            first = exlen
    exlen += len(S[i])
             

if first == -1:
    print(-1)
else:
    print(count,first)
    