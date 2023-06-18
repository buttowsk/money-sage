from django.db import models
from accounts.models import User


class Transaction(models.Model):
    amount = models.DecimalField(max_digits=999, decimal_places=2)
    currency = models.CharField(max_length=120)
    description = models.TextField()
    tag = models.CharField(max_length=120)
    payment_type = models.CharField(max_length=120)
    exchange_rate = models.DecimalField(max_digits=999, decimal_places=2, blank=True, null=True)
    amountConverted = models.DecimalField(max_digits=999, decimal_places=2, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class Expense(Transaction):
    user = models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True)

    def __str__(self):
        return self.description


class Income(Transaction):
    user = models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True)

    def __str__(self):
        return self.description
