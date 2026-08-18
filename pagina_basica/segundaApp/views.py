from django.shortcuts import render

def inicio(request):
    return render(request, "segundaApp/inicio.html")

def saludo(request):
    return render(request, "segundaApp/saludo.html")

def maquina_numerica(request):
    return render(request, "segundaApp/dado.html")
