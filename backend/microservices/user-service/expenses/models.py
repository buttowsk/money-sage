from django.db import models
from accounts.models import User


class Expense(models.Model):
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    currency = models.CharField(max_length=120)
    description = models.TextField()
    tag = models.CharField(max_length=120)
    payment_type = models.CharField(max_length=120)
    user = models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
