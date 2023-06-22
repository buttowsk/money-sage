from django.urls import path, include
from transactions.urls import urlpatterns as expenses_urls
from rest_framework_simplejwt.views import TokenBlacklistView
from goals.urls import urlpatterns as goals_urls

urlpatterns = [
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('auth/', include('djoser.social.urls')),
    path('auth/token/blacklist/', TokenBlacklistView.as_view(), name='token_blacklist'),
    path('transaction/', include(expenses_urls)),
    path('goal/', include(goals_urls)),
]
