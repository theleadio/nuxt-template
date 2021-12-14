from django.http import HttpResponse
from django.shortcuts import render

def homePage(request):
    data={
        'title':'Home Page Django',
        'pdata':'This is a test of data fetching through a views.py',
        'clist':['Java','Django','PHP'],
        'student_details':[
            {'name':'kayle','phone':'3048393040'},
            {'name':'alex','phone':'8040813084'}
        ]
    }
    return render(request,"index.html",data)


def aboutUs(request):
    return HttpResponse("Welcome to django views.py")

def course(request):
    return HttpResponse("<b>Welcome to dango views.py course function</b>")

def courseDetails(request,courseId):
    return HttpResponse(courseId)

