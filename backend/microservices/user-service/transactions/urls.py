from django.urls import path
from transactions.views import ExpenseList, ExpenseDetail, IncomeList, IncomeDetail

urlpatterns = [
    path('expense/', ExpenseList.as_view()),
    path('expense/<int:pk>/', ExpenseDetail.as_view()),
    path('income/', IncomeList.as_view()),
    path('income/<int:pk>/', IncomeDetail.as_view()),
]
