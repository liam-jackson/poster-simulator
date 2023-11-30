from django.http import HttpRequest
from django.shortcuts import HttpResponse, render

# Create your views here.


def home(request: HttpRequest) -> HttpResponse:
    return render(request, 'home.html')


def about(request: HttpRequest) -> HttpResponse:
    return render(request, 'about.html')


def contact(request: HttpRequest) -> HttpResponse:
    return render(request, 'contact.html')
