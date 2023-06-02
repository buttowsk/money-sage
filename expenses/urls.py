from django.urls import path
from expenses.views import ExpenseList, ExpenseDetail

urlpatterns = [
    path('', ExpenseList.as_view()),
    path('<int:pk>/', ExpenseDetail.as_view()),
]
