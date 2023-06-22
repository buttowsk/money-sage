from goals.views import SaveGoalList, SaveGoalDetail
from django.urls import path

urlpatterns = [
    path('', SaveGoalList.as_view()),
    path('<int:pk>/', SaveGoalDetail.as_view()),
]
