from rest_framework import serializers
from transactions.models import Expense, Income


class ExpenseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expense
        fields = '__all__'

    def create(self, validated_data):
        return Expense.objects.create(**validated_data)


class IncomeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Income
        fields = '__all__'

    def create(self, validated_data):
        return Income.objects.create(**validated_data)
