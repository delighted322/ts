import fastapi
import databases
from fastapi.templating import Jinja2Templates

# uvicorn index:app --reload    启动命令

app =fastapi.FastAPI()
databases = databases.Database("sqlite:///../sql/schoolDb.db")
templates = Jinja2Templates(directory="templates")
@app.get("/",response_class=fastapi.responses.HTMLResponse)
async def root(request:fastapi.Request):
    query = "select 班级名称,学科ID,姓名,成绩 from grade,students,classes where grade.学生ID = students.ID and grade.学科ID = 2 and classes.ID = students.班级ID"
    rows = await databases.fetch_all(query = query)
    return templates.TemplateResponse("grade.html",{
        "request":request,
        "scores":rows
    })
    # return {"message":"hello world"}