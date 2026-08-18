from django.shortcuts import render
import datetime

def display(request):
    return render(request, "primeraApp/display.html")

def displayDateTime(request):
    dt = datetime.datetime.now()
    formatted_date = dt.strftime("%A, %d de %B de %Y")
    formatted_time = dt.strftime("%H:%M:%S") # Formato de 24 horas
    iso_initial = dt.isoformat()
    context = {
        "formatted_date": formatted_date,
        "formatted_time": formatted_time,
        "iso_initial": iso_initial,
    }
    return render(request, "primeraApp/datetime.html", context)

def home(request):
    return render(request, "primeraApp/home.html")