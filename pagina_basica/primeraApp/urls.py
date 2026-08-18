from django.urls import path
from primeraApp.views import display, displayDateTime

urlpatterns = [
    path('', display),
    path('ahora/', displayDateTime),
]
