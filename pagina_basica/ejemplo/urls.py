from django.contrib import admin
from django.urls import path, include
from primeraApp import views # Importa la vista que creaste

urlpatterns = [
    path('', views.home),
    path('admin', admin.site.urls),
    path('primeraApp/', include('primeraApp.urls')),
    path('segundaApp/', include('segundaApp.urls')),
]
