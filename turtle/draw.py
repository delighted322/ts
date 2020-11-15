from turtle import *


while True:
    I = input().split()
    if len(I) == 1:
        pencolor(I[0])
    if len(I) == 2:
        goto(int(I[0]),int(I[1]))
