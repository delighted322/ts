import fastapi
import databases
from fastapi.templating import Jinja2Templates
from fastapi.responses import RedirectResponse

# uvicorn index:app --reload    启动命令

app = fastapi.FastAPI()
databases = databases.Database("sqlite:///../sql/schoolDb.db")
templates = Jinja2Templates(directory="templates")


@app.get("/", response_class=fastapi.responses.HTMLResponse)
async def root(request: fastapi.Request):
    query = "select 班级名称,学科ID,姓名,成绩 from grade,students,classes where grade.学生ID = students.ID and grade.学科ID = 2 and classes.ID = students.班级ID"
    rows = await databases.fetch_all(query=query)
    return templates.TemplateResponse("index.html", {
        "request": request,
        "scores": rows
    })
    # return {"message":"hello world"}


@app.get("/math", response_class=fastapi.responses.HTMLResponse)
async def math(request: fastapi.Request):
    query = '''
                SELECT students.ID AS 学生ID,
                    students.姓名,
                    g.成绩 AS 数学成绩
                FROM students
                    LEFT JOIN
                    (
                        SELECT *
                            FROM grade
                            WHERE grade.学科ID = 2
                    )
                    AS g ON students.ID = g.学生ID;
    '''
    rows = await databases.fetch_all(query=query)
    return templates.TemplateResponse("math.html", {
        "request": request,
        "data": rows
    })


@app.get("/editGrade", response_class=fastapi.responses.HTMLResponse)
async def editGrade(request: fastapi.Request, studentId: int,studentName:str, subjectId: int, grade: float = None):
    # query = '''
    #             SELECT students.ID AS 学生ID,
    #                 students.姓名,
    #                 g.成绩 AS 数学成绩
    #             FROM students
    #                 LEFT JOIN
    #                 (
    #                     SELECT *
    #                         FROM grade
    #                         WHERE grade.学科ID = 2
    #                 )
    #                 AS g ON students.ID = g.学生ID;
    # '''
    # rows = await databases.fetch_all(query = query)
    return templates.TemplateResponse("editGrade.html", {
        "request": request,
        "data": {
            "studentId": studentId,
            "studentName":studentName,
            "subjectId": subjectId,
            "grade": grade,
        }
    })

@app.post("/editGrade")
async def submitGrade(studentId:int,studentName:str,subjectId:int,grade:str = fastapi.Form(None)):
    update = 'UPDATE grade SET 成绩 = ' + str(grade) + ' WHERE 学生ID =' +  str(studentId) + ' AND 学科ID = ' + str(subjectId) + ';'
    rows = await databases.execute(query = update)
    print('--------------')
    print(rows)
    if (rows == 0):
        insert = 'INSERT INTO grade (学生ID,学科ID,成绩) VALUES (' + str(studentId) + ',' + str(subjectId) + ',' + str(grade) + ');'
        rows = await databases.execute(query = insert)
    # TODO: 跳转显示成绩单的页面
    return RedirectResponse("/editGrade")
    # return{"studentId":studentId,"studentName":studentName,"subjectId":subjectId,"grade":grade}

