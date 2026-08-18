from django.contrib import admin
from django.urls import path
from segundaApp import views

urlpatterns = [
    path('', views.inicio),
    path('saludo/', views.saludo),
    path('maquina-numerica/', views.maquina_numerica),
]
