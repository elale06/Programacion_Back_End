from django.contrib import admin
from django.urls import path
from primeraApp import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.inicio),
    path('primera/', views.inicio),
]
