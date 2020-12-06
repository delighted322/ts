from turtle import *
import math
# pu()
# goto(10,10)
# pd()
# fd(50)
# lt(90)
# circle(50,90)
# lt(90)
# fd(50)

# pu()
# goto(-10,10)
# pd()
# lt(180)
# fd(50)
# lt(90)
# circle(50,90)
# lt(90)
# fd(50)

# pu()
# goto(-10,-10)
# rt(90)
# pd()
# fd(50)
# rt(90)
# circle(-50,90)
# rt(90)
# fd(50)

# pu()
# goto(10,-10)
# pd()
# fd(50)
# rt(90)
# circle(-50,90)
# rt(90)
# fd(50)


def splitCircle(ra,space,count,r1,g1,b1,r2,g2,b2):
    goto(0,0)
    lt(90)
    colormode(255)
    ir1 = r1
    ig1 = g1
    ib1 = b1
    ir2 = r2
    ig2 = g2
    ib2 = b2
    for i in range(0, count):
        print(r1,g1,b1)
        if (i == count - 1):
            r = r2
            g = g2
            b = b2
        fillcolor(r1,g1,b1)
        goto(0,0)
        pu()
        fd(space)
        # pd()
        lt(180/count)
        begin_fill()
        fd(ra)
        rt(90)
        circle(-ra,360/count)
        rt(90)
        fd(ra)
        end_fill()
        pu()
        rt(180)
        rt(180/count)
        r1 += round((ir2-ir1)/(count-1))
        g1 += round((ig2-ig1)/(count-1))
        b1 += round((ib2-ib1)/(count-1))




splitCircle(100,10,40,135,206,250,255,192,203)
done()
