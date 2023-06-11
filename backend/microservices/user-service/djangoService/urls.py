from django.urls import path, include
from expenses.urls import urlpatterns as expenses_urls
from rest_framework_simplejwt.views import TokenBlacklistView

urlpatterns = [
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('auth/', include('djoser.social.urls')),
    path('auth/token/blacklist/', TokenBlacklistView.as_view(), name='token_blacklist'),
    path('expenses/', include(expenses_urls)),
]
