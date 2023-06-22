from goals.models import SaveGoal
from rest_framework import serializers


class SaveGoalSerializer(serializers.ModelSerializer):
    class Meta:
        model = SaveGoal
        fields = '__all__'

    def create(self, validated_data):
        return SaveGoal.objects.create(**validated_data)