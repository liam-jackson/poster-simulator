from django.urls import URLPattern, path
from . import views

urlpatterns: list[URLPattern] = [
    path('', views.home, name='start'),
    path('home', views.home, name='home'),
    path('about', views.about, name='about'),
    path('contact', views.contact, name='contact'),
]
