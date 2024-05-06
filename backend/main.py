import logging
from flask import Flask, g, request
from flask_cors import CORS
import pymysql
import datetime

app= Flask(__name__)
CORS(app)

@app.before_request
def before_request():
    g.db=pymysql.connect(host="localhost", user='root',password='2028', db="portifolio_kalyan", autocommit=True)
    g.cursor=g.db.cursor()


@app.teardown_request
def teardown_request(exception):
    g.cursor.close()
    g.db.close()


@app.route('/api/educations',methods=["GET"])
def get_educations():
    try:
        query= "select * from educations where onShowcase=True;"
        g.cursor.execute(query)
        educations= g.cursor.fetchall()
        results=[]
        for edu in educations:
            educations_obj={
                "id": edu[0],
                "qualification": edu[1],
                "institution": edu[2],
                "cgpa": edu[3],
                "year_of_passing": edu[4],
            }
        results.append(educations_obj)
        return {"isSuccessful": True, "results": results}
    except Exception as e:
        logging.error(e)
        return {"isSuccessful": False, "results": []}
@app.route('/api/skills',methods=["GET"])
def get_skills():
    try:
        query= "select * from skills;"
        g.cursor.execute(query)
        skills= g.cursor.fetchall()
        results=[]
        for sk in skills:
            skill_obj={
                "id": sk[0],
                "imageUrl": sk[1],
                "name": sk[2],
                "starsTotal": sk[3],
                "starsActive": sk[4],
            }
            results.append(skill_obj)
        return {"isSuccessful": True, "results": results}
    except Exception as e:
        logging.error(e)
        return {"isSuccessful": False, "results": []}


@app.route('/api/projects',methods=["GET"])
def get_projects():
    try:
        query= "select id, imageurl, title, disc from projects where isPublished=True order by lastModified;"
        g.cursor.execute(query)
        projects= g.cursor.fetchall()
        results=[]
        for pro in projects:
            project_obj={
                "id": pro[0],
                "imageUrl": pro[1],
                "title": pro[2],
                "disc": pro[3],
            }
            results.append(project_obj)
        return {"isSuccessful": True, "results": results}
    except Exception as e:
        logging.error(e)
        return {"isSuccessful": False, "results": []}


@app.route('/api/project',methods=["POST"])
def add_project():
    try:
        project= request.json
        query= "insert into projects values(%s,%s,%s,%s,%s,%s,%s);"
        g.cursor.execute(query,[
            project["id"],
            project["imageUrl"],
            project["title"],
            project["disc"],
            project["body"],
            True,
            datetime.datetime.now(),
        ],
    )    
        return {"isSuccessful": True}
    except Exception as e:
        logging.error(e)
        return {"isSuccessful": False}


@app.route('/api/education',methods=["POST"])
def add_recommendation():
    try:
        recommendation= request.json
        query= "insert into educations values(%s,%s,%s,%s,%s,%s);"
        g.cursor.execute(query,[
            recommendation["id"],
            recommendation["qualification"],
            recommendation["institution"],
            recommendation["cgpa"],
            recommendation["year_of_passing"],
            True,
        ],
    )    
        return {"isSuccessful": True}
    except Exception as e:
        logging.error(e)
        return {"isSuccessful": False}


@app.route('/api/contact',methods=["POST"])
def add_contact():
    try:
        contact= request.json
        query= "insert into contact values(%s,%s,%s,%s);"
        g.cursor.execute(query,[
            contact["name"],
            contact["email"],
            contact["descr"],
            datetime.datetime.now(),
        ],
    )    
        return {"isSuccessful": True}
    except Exception as e:
        logging.error(e)
        return {"isSuccessful": False}


@app.route('/api/project',methods=["GET"])
def get_project_by_id():
    try:
        id= request.args.get("id")
        query= "select imageurl, title, body from projects where id=%s;"
        g.cursor.execute(query,[id])
        project= g.cursor.fetchone()
        project_obj={
            "imageUrl": project[0],
            "title": project[1],
            "body": project[2],
        }
        return {"isSuccessful": True, "result": project_obj}
    except Exception as e:
        logging.error(e)
        return {"isSuccessful": False, "results": []}


