from django.db import models
from accounts.models import User


class SaveGoal(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True)
    month = models.CharField(max_length=120)
    year = models.CharField(max_length=120)
    amount = models.DecimalField(max_digits=999, decimal_places=2)
    currency = models.CharField(max_length=120)
    tag = models.CharField(max_length=120)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.month
