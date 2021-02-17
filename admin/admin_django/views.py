from django.shortcuts import render, redirect
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView, FormView
from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin
from django.contrib import messages 
from django.contrib.auth.decorators import login_required
from django.http import HttpResponseRedirect

import requests
import time
# from rest_framework import status
# from rest_framework.response import Response

def home(request):
    return render(request, 'admin_django/base.html')

def products(request): 
   
    response = requests.get('http://localhost:3000/api/products')
    products = response.json()
    print(products)
    return render(request, 'admin_django/products.html', {
        'products': products
    })

def orders(request): 
   
    response = requests.get('http://localhost:3000/api/orders')
    orders = response.json()
    print(orders)
    return render(request, 'admin_django/orders.html', {
        'orders': orders
    })

def users(request): 
   
    response = requests.get('http://localhost:3000/api/users')
    users = response.json()
    print(users)
    return render(request, 'admin_django/users.html', {
        'users': users
    })

# def external_api_view(request):
#     MAX_RETRIES = 10
#     attempt_num = 0  # keep track of how many times we've retried
#     while attempt_num < MAX_RETRIES:
#         url = 'http://localhost:3000/api/products'
#         # payload = {'Token':'My_Secret_Token','product':request.POST.get("options"),'price':request.POST.get("price")}
#         response = requests.get(url)
#         if response.status_code == 200:
#             print(response)
#             return 
#         else:
#             attempt_num += 1
#             # You can probably use a logger to log the error here
#             time.sleep(5)  # Wait for 5 seconds before re-trying
#         return Response({"error": "Request failed"}, status=r.status_code)
#     else:
#         return Response({"error": "Method not allowed"}, status=status.HTTP_400_BAD_REQUEST)