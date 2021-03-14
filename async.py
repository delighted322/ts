import asyncio

async def f1():
    print('1111')
    await asyncio.sleep(1)
    print('2222')

async def f2():
    print('3333')
    await asyncio.sleep(0.5)
    print('4444')

async def f3():
    for i in range(10000):
        print('1111')
        print('2222')
        print('3333')  # 1 2 3这个过程不会被打断 到了下面一句sleep的时候才会切换协程  
        await asyncio.sleep(0.5)

async def f4():
    for i in range(10000):
        print('4444')
        print('5555')
        await asyncio.sleep(0.5)

async def main():
    # await f1()
    # await f1()
    await asyncio.gather(f1(),f2())

asyncio.run(main())