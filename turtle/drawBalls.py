from turtle import *

red = int(input())
green = int(input())
blue = int(input())

S = []
S.append(["red",red])
S.append(["green",green])
S.append(["blue",blue])

for j in range(0,len(S)-1):
    for i in range(0,len(S)-1):
        if S[i][1] < S[i+1][1]:
             S[i],S[i+1] = S[i+1],S[i]

def drawBalls(count,color):
    pd()
    fillcolor(color)
    for i in range(0,count):    
        begin_fill()
        circle(50)
        end_fill()
        pu()
        fd(100)
        pd()

    pu()

drawBalls(S[0][1],S[0][0])
goto(0,-150)
drawBalls(S[1][1],S[1][0])
goto(0,-300)
drawBalls(S[2][1],S[2][0])





