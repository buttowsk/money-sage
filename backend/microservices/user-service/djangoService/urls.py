from django.urls import path, include
from expenses.urls import urlpatterns as expenses_urls

urlpatterns = [
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('expenses/', include(expenses_urls)),
]