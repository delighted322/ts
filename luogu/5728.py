N = int(input())
S = []

for i in range (0, N):
    c,m,e = map(int,input().split())
    S.append([c,m,e])

out = 0

for i in range (0, len(S) - 1):
    for j in range (i + 1, len(S)):
        if (abs(S[i][0] - S[j][0]) >5):
            continue
        if (abs(S[i][1] - S[j][1]) >5):
            continue
        if (abs(S[i][2] - S[j][2]) >5):
            continue
        if (abs((S[i][0] + S[i][1] + S[i][2]) - (S[j][0] + S[j][1] + S[j][2])) >10):
            continue

        out += 1

print(out)