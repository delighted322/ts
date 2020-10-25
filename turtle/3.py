import turtle as t

t.shapetransform(10)
t.fillcolor("red")
t.begin_fill()
for i in [100,100,100,100]:
    t.forward(i)
    t.rt(90)
t.end_fill()
t.done()
