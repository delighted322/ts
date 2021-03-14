import fastapi
import databases
from fastapi.templating import Jinja2Templates

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
async def submitGrade(studentName:str,subjectId:int,grade:str = fastapi.Form(None)):
    # TODO: 有就更新 没有就新增
    query = '''
        UPDATE grade
        SET 成绩 = 60
        WHERE 学生ID = 9 AND 
        学科ID = 2;
    '''
    return{"studentName":studentName,"subjectId":subjectId,"grade":grade}

